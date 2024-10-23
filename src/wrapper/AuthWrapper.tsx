"use client";

import { ReactNode } from "react";
import Navbar from "@/src/components/structure/Navbar";
import Image from "next/image";
import bg from "/public/bg.jpg";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import {Toaster} from "sonner"


const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <SessionProvider>
      <Toaster />
      <main className="font-[family-name:var(--font-geist-sans)] text-white p-2 flex flex-col max-h-screen bg-slate-800">
        { pathname == "/" && <Image src={bg} style={{ objectFit: "cover" }} alt="background" fill />}

        <Navbar />

        {children}
      </main>
    </SessionProvider>
  );
};

export default AuthWrapper;
