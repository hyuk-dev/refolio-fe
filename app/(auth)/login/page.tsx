'use client';

import LinkButton from '@/components/linkButton';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-15 px-25 rounded-lg shadow-md">
      <Link href="/" className="text-3xl text-gray-600 mb-10 font-semibold">
        리폴리오
      </Link>

      <div className="flex flex-col gap-4 w-65">
        <input
          className="bg-white p-2 rounded border border-gray-300 text-gray-400"
          type="text"
          placeholder="이메일"
        />
        <input
          className="bg-white p-2 rounded border border-gray-300 text-gray-400"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <button className="mt-10 w-55 h-12.5 hover:border-gray-300 cursor-pointer border-2 bg-green-600 text-white p-2 rounded">
        로그인
      </button>
      <div className="flex gap-4 justify-center items-center text-sm mt-4 text-gray-400">
        계정이 없으신가요?
        <LinkButton label="회원가입" url="signup" />
      </div>
    </div>
  );
}
