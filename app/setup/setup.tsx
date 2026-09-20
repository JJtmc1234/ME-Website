"use client";
import { useSyncExternalStore } from "react";
function subscribe(listener:()=>void){window.addEventListener("hashchange",listener);return ()=>window.removeEventListener("hashchange",listener);}
const snapshot=()=>window.location.hash.slice(1);
const serverSnapshot=()=>"";
export function OwnerSetup(){
  const token=useSyncExternalStore(subscribe,snapshot,serverSnapshot);
  // The fragment keeps the setup secret out of request paths and server logs.
  const source=token?`https://me-portal.jjtmc.workers.dev/setup#${encodeURIComponent(token)}`:null;
  return source?<iframe data-me-account title="Create your ME owner account" src={source} referrerPolicy="no-referrer" className="min-h-[850px] w-full rounded-lg border border-line"/>:<p className="text-muted">Open the private owner setup link provided on your desktop.</p>;
}
