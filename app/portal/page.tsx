import { AccountPortal } from "@/components/account-portal";
import { pageMeta } from "@/lib/metadata";
export const metadata = pageMeta({ title: "ME Portal", description: "Your ME member area.", path: "/portal", unlisted: true });
export default function Page() { return <AccountPortal />; }
