import * as motion from "framer-motion/client"
import Link from "next/link";
import React from "react";
import logo from "/public/logo.png"
import Image from "next/image";
import TransitionLink from "./TransitionLink";

function Navbar() {
  return (
    <motion.section
      className="relative max-h-20 place-items-center gap-4 flex w-full items-center px-6 backdrop-blur-0 text-lg justify-between flex-row"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/" passHref>
        <div className="w-[140px] h-[35px] relative rounded-md overflow-hidden hover:cursor-pointer">
          <Image src={logo} alt="logo" fill style={{ objectFit: "cover" }} />
        </div>
      </Link>

      <ul className="mx-auto hidden sm:flex gap-6">
        {["Galery", "Ticket"].map((link) => (
          <li key={link}>
            <TransitionLink href={`/${link.toLowerCase()}`} passHref>
              <span className="hover:cursor-pointer hover:text-xl transition-all">
                {link}
              </span>
            </TransitionLink>
          </li>
        ))}
      </ul>
      <p className="font-semibold hover:cursor-default">Hallo, Bagas!</p>
    </motion.section>
  );
}

export default Navbar;
