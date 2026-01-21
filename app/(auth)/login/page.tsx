'use client';

import { useState } from 'react';
import LinkButton from '@/components/linkButton';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center max-w-[550px] mx-auto w-full">
      <div className="mb-8 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          로그인
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          계정에 로그인하세요
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {/* 이메일 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            비밀번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors mt-8"
        >
          로그인
        </button>
      </form>

      <div className="flex gap-2 justify-center items-center text-sm mt-6 text-gray-600">
        계정이 없으신가요?
        <LinkButton label="회원가입" url="signup" />
      </div>
    </div>
  );
}
