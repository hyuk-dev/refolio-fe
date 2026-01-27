import Counter from '@/components/counter';
import Header from '@/components/header';
import UserMenu from '@/components/userMenu';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5 border-b border-b-gray-200">
        <Header />
        <UserMenu />
      </div>
      <Counter />
      <div className="w-full max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-0">
        {children}
      </div>
    </div>
  );
}
