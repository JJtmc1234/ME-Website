"use client";
import {createContext,useCallback,useContext,useEffect,useRef,useState} from "react";
const origin="https://me-portal.jjtmc.workers.dev";
export type Account={id:string;name:string;username:string;role:"owner"|"admin"|"member";state:string};
const Context=createContext<{account:Account|null;ready:boolean;signOut:()=>void;error:string}>({account:null,ready:false,signOut:()=>{},error:""});
export const useSession=()=>useContext(Context);
function valid(value:unknown):value is Account{
 if(!value||typeof value!=="object")return false;
 const a=value as Account;
 return [a.id,a.name,a.username,a.state].every(x=>typeof x==="string")&&["owner","admin","member"].includes(a.role);
}
export function SessionProvider({children}:{children:React.ReactNode}){
 const [account,setAccount]=useState<Account|null>(null),[ready,setReady]=useState(false),[error,setError]=useState("");
 const bridge=useRef<HTMLIFrameElement>(null),current=useRef<Account|null>(null);
 useEffect(()=>{
  function receive(event:MessageEvent){
   if(event.origin!==origin)return;
   const frames=Array.from(document.querySelectorAll<HTMLIFrameElement>("iframe[data-me-account]"));
   if(!frames.some(frame=>frame.contentWindow===event.source))return;
   if(event.data?.type==="me:error"){setError("Could not sign out. Please retry.");return;}
   if(event.data?.type!=="me:session"||(event.data.account!==null&&!valid(event.data.account)))return;
   const next=event.data.account as Account|null;
   const signedOut=current.current!==null&&next===null;
   current.current=next;setAccount(next);setReady(true);setError("");
   if(signedOut)frames.filter(frame=>frame!==bridge.current).forEach(frame=>frame.contentWindow?.postMessage({type:"me:signed-out"},origin));
  }
  function refresh(){bridge.current?.contentWindow?.postMessage({type:"me:refresh"},origin);}
  window.addEventListener("message",receive);window.addEventListener("focus",refresh);refresh();
  return ()=>{window.removeEventListener("message",receive);window.removeEventListener("focus",refresh);};
 },[]);
 const signOut=useCallback(()=>bridge.current?.contentWindow?.postMessage({type:"me:logout"},origin),[]);
 return <Context.Provider value={{account,ready,signOut,error}}>{children}<iframe ref={bridge} onLoad={()=>bridge.current?.contentWindow?.postMessage({type:"me:refresh"},origin)} data-me-account src={`${origin}/bridge`} title="Account session" className="hidden" aria-hidden="true" tabIndex={-1}/></Context.Provider>;
}
