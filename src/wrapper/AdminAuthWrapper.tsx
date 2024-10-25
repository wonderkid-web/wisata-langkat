"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import NavbarAdmin from "../components/structure/NavbarAdmin";


const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <main className="font-[family-name:var(--font-geist-sans)] text-white min-h-screen max-h-screen bg-slate-800">
        <NavbarAdmin />

        {children}
      </main>
    </SessionProvider>
  );
};

export default AuthWrapper;
