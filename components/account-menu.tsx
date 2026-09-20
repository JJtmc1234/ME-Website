"use client";
import Link from "next/link";
import {useEffect,useRef} from "react";
import {useSession} from "./session-provider";
export function AccountMenu(){
 const {account,ready,signOut,error}=useSession();const menu=useRef<HTMLDetailsElement>(null);
 useEffect(()=>{
  function outside(event:PointerEvent){if(menu.current&&!menu.current.contains(event.target as Node))menu.current.open=false;}
  function escape(event:KeyboardEvent){if(event.key==="Escape"&&menu.current?.open){menu.current.open=false;menu.current.querySelector("summary")?.focus();}}
  document.addEventListener("pointerdown",outside);document.addEventListener("keydown",escape);
  return ()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);};
 },[]);
 if(!ready)return <Link href="/portal" className="px-3 py-2 text-sm text-muted">Account</Link>;
 if(!account)return <><Link href="/signin" className="px-2 py-2 text-sm text-muted hover:text-text">Sign in</Link><Link href="/signup" className="rounded-md border border-accent/50 bg-accent/10 px-3 py-2 text-sm font-medium text-accent hover:bg-accent/20">Sign up</Link></>;
 function close(){if(menu.current)menu.current.open=false;}
 return <div><details ref={menu} className="relative"><summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-line bg-surface px-2 py-1.5 text-sm marker:content-none"><span className="grid h-7 w-7 place-items-center rounded-full bg-accent/15 text-xs font-medium text-accent">{(account.name||account.username).slice(0,2).toUpperCase()}</span><span className="max-w-28 truncate">{account.name||account.username}</span><span aria-hidden className="px-1 text-faint">▾</span></summary>
 <div className="absolute right-0 z-50 mt-3 w-60 rounded-xl border border-line bg-surface p-2 shadow-xl shadow-black/40">
  <div className="border-b border-line px-3 py-3"><p className="truncate text-sm font-medium">{account.name}</p><p className="text-xs text-muted">{account.role==="owner"?"Site owner":account.role==="admin"?"Administrator":"ME account"}</p></div>
  <Link href="/portal" onClick={close} className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-2">My account</Link>
  <Link href="/portal#ai" onClick={close} className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-2">Ask ME</Link>
  <Link href="/portal#profile" onClick={close} className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-2">Account settings</Link>
  <button type="button" onClick={()=>{signOut();close();}} className="mt-1 w-full border-t border-line px-3 py-2 text-left text-sm text-muted hover:text-text">Sign out</button>
 </div></details>{error&&<p role="status" className="text-xs text-red-400">{error}</p>}</div>;
}
