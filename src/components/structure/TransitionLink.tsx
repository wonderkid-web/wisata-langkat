"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface TransitionProps extends LinkProps {
  children: ReactNode;
  href: string;
}

const sleep = async (time: number) =>{
    return new Promise((resolve=> setTimeout(resolve, time)))
}

function TransitionLink({ children, href, ...props }: TransitionProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("transition-property");

    await sleep(500)
    
    router.push(href)
    
    await sleep(500)
    
    body?.classList.remove("transition-property");
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}

export default TransitionLink;
