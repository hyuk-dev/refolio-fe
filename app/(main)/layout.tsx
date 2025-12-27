import Header from '@/components/header';
import UserMenu from '@/components/userMenu';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[1580px] mx-auto">
      <div className="flex justify-between w-full px-20 py-5 border-b border-b-gray-200">
        <Header />
        <UserMenu />
      </div>
      {children}
    </div>
  );
}
