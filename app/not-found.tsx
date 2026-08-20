import Link from "next/link";
import { Container } from "@/components/primitives";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="label">Error 404</p>
      <h1 className="mt-4 text-4xl font-medium">This route does not exist.</h1>
      <p className="mt-4 max-w-xl text-muted">
        The page you asked for is not part of the public site. It may have been renamed, or
        it may never have been built.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-text"
      >
        Back to the homepage
      </Link>
    </Container>
  );
}
