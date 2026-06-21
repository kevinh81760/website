import type { ReactNode } from "react";
import { NavBar } from "@/components/layout/NavBar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
