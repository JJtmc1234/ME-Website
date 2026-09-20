import { AccountPortal } from "@/components/account-portal";
import { pageMeta } from "@/lib/metadata";
export const metadata = pageMeta({ title: "Sign up", description: "Your ME account for Claude chat, saved projects and community conversations.", path: "/signup", unlisted: true });
export default function Page() { return <AccountPortal signup />; }
