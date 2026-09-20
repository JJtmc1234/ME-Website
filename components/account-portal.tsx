"use client";
import Link from "next/link";
import {useSyncExternalStore} from "react";
import {Container,PageHeader,Section} from "@/components/primitives";
import {useSession} from "./session-provider";
function subscribe(listener:()=>void){window.addEventListener("hashchange",listener);return ()=>window.removeEventListener("hashchange",listener);}
const snapshot=()=>window.location.hash;
const serverSnapshot=()=>"";
export function AccountPortal({signup=false}:{signup?:boolean}){
 const {account,ready}=useSession();const hash=useSyncExternalStore(subscribe,snapshot,serverSnapshot);
 const destination=["#ai","#profile","#projects","#portal","#admin"].includes(hash)?hash:signup&&!account?"#signup":"";
 const portal=`https://me-portal.jjtmc.workers.dev/${destination}`;
 return <><PageHeader eyebrow={account?"Your workspace":"ME account"} title={account?`Welcome, ${account.name}.`:signup?"Join ME.":"Welcome back."} lead={account?"Your conversations, projects and account, all in one place.":"One account for Claude conversations, public documents and saved projects."}/>
 <Section><Container>
  {ready&&!account&&<div className="mb-8 grid gap-4 sm:grid-cols-3">{[["Ask ME","Explore ME’s work with a Claude assistant."],["Save your projects","Keep the projects you care about together."],["Collaborate","Request access to the ME collaboration portal."]].map(([title,body])=><div key={title} className="panel rounded-xl p-5"><h2>{title}</h2><p className="mt-2 text-sm text-muted">{body}</p></div>)}</div>}
  <iframe data-me-account src={portal} title="ME account workspace" className="h-[78dvh] min-h-[650px] w-full rounded-xl border border-line bg-surface" referrerPolicy="no-referrer"/>
  {ready&&!account&&<p className="mt-4 text-sm text-muted">{signup?"Already a member? ":"New to ME? "}<Link className="text-accent underline underline-offset-4" href={signup?"/signin":"/signup"}>{signup?"Sign in":"Create an account"}</Link></p>}
  <p className="mt-4 text-xs leading-relaxed text-faint">Claude conversations use Anthropic and are saved to your account. AI can make mistakes. Collaboration access requires approval.</p>
 </Container></Section></>;
}
