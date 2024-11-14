import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-between min-h-screen">
    <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
      <span className="text-9xl">당근</span>
      <h1 className="text-4xl">당근 마켓</h1>
      <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
    </div>
    <div className="flex flex-col items-center gap-3 w-full">
      <Link 
        href="/create-account" 
        className="w-full bg-orange-500 text-white text-lg font-medium
        py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors
        ">시작하기</Link>
      <div>
        <span>이미 계정이 있나요?</span>
        <Link href="/login" className="hover:underline hover:underline-offset-4">로그인</Link>
      </div>
    </div>
  </div>     
  );
}
