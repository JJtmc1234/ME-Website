from __future__ import annotations

import hashlib
import html
import json
import pathlib
import re
import urllib.parse
import zipfile
from typing import Any

import requests

OUT = pathlib.Path("result")
DOWNLOADS = OUT / "downloads"
NOTE_KEY = "nff719a8e0603"
ARTICLE_URL = f"https://note.com/lazy_kojocho/n/{NOTE_KEY}"
API_URL = f"https://note.com/api/v3/notes/{NOTE_KEY}"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131 Safari/537.36",
    "Accept": "application/json,text/html,application/xhtml+xml,*/*",
    "Referer": ARTICLE_URL,
}


def flatten(value: Any) -> list[str]:
    strings: list[str] = []
    if isinstance(value, str):
        strings.append(value)
    elif isinstance(value, dict):
        for key, item in value.items():
            strings.append(str(key))
            strings.extend(flatten(item))
    elif isinstance(value, list):
        for item in value:
            strings.extend(flatten(item))
    return strings


def safe_name(value: str, fallback: str) -> str:
    value = pathlib.PurePosixPath(value).name
    value = re.sub(r"[^A-Za-z0-9._()\- ]+", "_", value)[:160]
    return value or fallback


def filename_for(response: requests.Response, index: int) -> str:
    disposition = response.headers.get("content-disposition", "")
    match = re.search(r"filename\*=UTF-8''([^;]+)", disposition, re.I)
    if match:
        return safe_name(urllib.parse.unquote(match.group(1)), f"candidate-{index}.bin")
    match = re.search(r'''filename=["']?([^"';]+)''', disposition, re.I)
    if match:
        return safe_name(match.group(1).strip(), f"candidate-{index}.bin")
    name = pathlib.PurePosixPath(urllib.parse.urlparse(response.url).path).name
    return safe_name(name, f"candidate-{index}.bin")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    session = requests.Session()
    fetches: list[dict[str, Any]] = []
    texts: list[str] = []
    api_data: Any = None

    for label, url in (("api", API_URL), ("article", ARTICLE_URL)):
        response = session.get(url, headers=HEADERS, timeout=90, allow_redirects=True)
        fetches.append({
            "kind": label,
            "url": url,
            "status": response.status_code,
            "final_url": response.url,
            "content_type": response.headers.get("content-type"),
            "bytes": len(response.content),
        })
        response.raise_for_status()
        (OUT / f"note-{label}.{'json' if label == 'api' else 'html'}").write_bytes(response.content)
        texts.append(response.text)
        if label == "api":
            api_data = response.json()
            (OUT / "note-api.pretty.json").write_text(
                json.dumps(api_data, ensure_ascii=False, indent=2), encoding="utf-8"
            )
            texts.extend(flatten(api_data))

    combined = html.unescape("\n".join(texts))
    combined += "\n" + urllib.parse.unquote(combined)
    (OUT / "combined-decoded.txt").write_text(combined, encoding="utf-8")

    urls: set[str] = set()
    keys: set[str] = set()

    for match in re.finditer(r'''https?://[^\s"'<>\\]+''', combined):
        urls.add(match.group(0).rstrip("),.;]"))

    key_patterns = (
        r"/api/v2/attachments/download/([A-Za-z0-9_-]{8,128})",
        r"attachments?/download/([A-Za-z0-9_-]{8,128})",
        r'''(?:attachment|file)(?:Key|_key|Id|_id|Hash|_hash)["'=:\s]+([A-Za-z0-9_-]{8,128})''',
        r'''data-(?:attachment|file)-(?:key|id|hash)=["']([^"']+)''',
        r"(?is)(?:attachment|download|file|zip).{0,320}?\b([0-9a-f]{32})\b",
        r"(?is)\b([0-9a-f]{32})\b.{0,320}?(?:attachment|download|file|zip)",
    )
    for pattern in key_patterns:
        for match in re.finditer(pattern, combined, re.I):
            keys.add(match.group(1))

    raw_json = json.dumps(api_data, ensure_ascii=False)
    for match in re.finditer(
        r'''(?i)"(?:key|hash|attachment_key|file_key)"\s*:\s*"([0-9a-f]{32})"''',
        raw_json,
    ):
        keys.add(match.group(1))

    for key in keys:
        urls.add(f"https://note.com/api/v2/attachments/download/{key}")

    likely_urls = [
        url
        for url in sorted(urls)
        if any(
            token in url.lower()
            for token in (
                "attachment",
                "download",
                ".zip",
                "drive.google",
                "dropbox",
                "onedrive",
                "storage.googleapis",
                "amazonaws",
                "assets.st-note",
            )
        )
    ]
    (OUT / "candidate-keys.txt").write_text(
        "\n".join(sorted(keys)) + ("\n" if keys else ""), encoding="utf-8"
    )
    (OUT / "candidate-urls.txt").write_text(
        "\n".join(likely_urls) + ("\n" if likely_urls else ""), encoding="utf-8"
    )

    attempts: list[dict[str, Any]] = []
    valid_saves: list[str] = []
    seen_hashes: set[str] = set()

    for index, url in enumerate(likely_urls[:160], start=1):
        record: dict[str, Any] = {"url": url}
        try:
            response = session.get(url, headers=HEADERS, timeout=180, allow_redirects=True)
            digest = hashlib.sha256(response.content).hexdigest()
            record.update({
                "status": response.status_code,
                "final_url": response.url,
                "content_type": response.headers.get("content-type", ""),
                "content_disposition": response.headers.get("content-disposition", ""),
                "bytes": len(response.content),
                "sha256": digest,
            })
            response.raise_for_status()
            if digest in seen_hashes:
                record["duplicate"] = True
                attempts.append(record)
                continue
            seen_hashes.add(digest)
            path = DOWNLOADS / f"{index:03d}-{filename_for(response, index)}"
            path.write_bytes(response.content)
            record["saved_as"] = str(path)
            try:
                with zipfile.ZipFile(path) as archive:
                    names = archive.namelist()
                    record["zip_entries"] = len(names)
                    record["has_level_init"] = any(name.endswith("/level-init.dat") for name in names)
                    record["has_script_dat"] = any(name.endswith("/script.dat") for name in names)
                    record["has_level_chunks"] = any("/level.dat" in name for name in names)
                    record["valid_factorio_save"] = bool(
                        record["has_level_init"]
                        and record["has_script_dat"]
                        and record["has_level_chunks"]
                    )
                    if record["valid_factorio_save"]:
                        valid_saves.append(str(path))
            except Exception as exc:
                record["zip_error"] = repr(exc)
        except Exception as exc:
            record["error"] = repr(exc)
        attempts.append(record)

    summary = {
        "note_key": NOTE_KEY,
        "article_url": ARTICLE_URL,
        "api_url": API_URL,
        "fetches": fetches,
        "candidate_key_count": len(keys),
        "candidate_url_count": len(likely_urls),
        "valid_factorio_saves": valid_saves,
        "attempts": attempts,
    }
    (OUT / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    if not valid_saves:
        raise SystemExit("No valid Factorio save attachment found")


if __name__ == "__main__":
    main()
