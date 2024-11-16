import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Link from "next/link";

export default function SocialLogin() {
  return <>
    <div className="w-full h-px bg-neutral-500"/>
    <div className="flex flex-col gap-3">
      <Link href="/github/start" className="primary-btn flex h-10 items-center justify-center gap-3">
      <span>
        <GithubIcon className="size-6"/>
      </span>
      <span>Continue with Github</span>
      </Link>
      <Link href="/sms" className="primary-btn flex h-10 items-center justify-center gap-3">
      <span>
        <ChatBubbleOvalLeftEllipsisIcon className="size-6"/>
      </span>
      <span>Continue up with SMS</span>
      </Link>
    </div>
  </>
}
