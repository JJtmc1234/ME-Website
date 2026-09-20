import { pageMeta } from "@/lib/metadata";
import { OwnerSetup } from "./setup";
import { Container, PageHeader, Section } from "@/components/primitives";
export const metadata = pageMeta({title:"Create your owner account",description:"Private ME owner registration.",path:"/setup",unlisted:true});
export default function Page(){return <><PageHeader eyebrow="ME owner setup" title="Your account. Your site." lead="Create your account with full site administration. This setup can only be used once."/><Section><Container><OwnerSetup/></Container></Section></>;}
