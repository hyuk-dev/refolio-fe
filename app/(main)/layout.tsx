import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return <>{children}</>;
}