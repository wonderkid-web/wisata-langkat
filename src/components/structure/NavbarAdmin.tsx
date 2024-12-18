import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/logo.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function NavbarAdmin() {
  const [open, setOpen] = useState(true);
  const [parent] = useAutoAnimate();

  if (!open)
    return (
      <nav
        ref={parent}
        className="flex justify-center h-fit bg-slate-800 items-center p-2 px-3"
      >
        <div className="w-32 h-8 relative sm:hidden mt-2 overflow-hidden rounded-sm ">
          <Image alt="Logo" objectFit="cover" fill src={logo} />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="inline-block sm:hidden mb-2 mt-2 ml-auto"
        >
          ⬇️
        </button>
      </nav>
    );

  return (
    <nav
      ref={parent}
      className="flex justify-between sm:px-4 sm:py-2 flex-col sm:flex-row items-center gap-2 sm:gap-0 min-h-[25vh] max-h-[25vh] sm:min-h-[5vh] text-lg"
    >
      <div className="w-32 h-12 relative sm:hidden mt-2 overflow-hidden rounded-sm">
        <Image alt="Logo" objectFit="cover" fill src={logo} />
      </div>
      <ul className="w-full sm:w-1/3 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 transition-opacity">
        <Link href="/admin" passHref>
          <div className="w-[140px] h-[35px] relative rounded-md overflow-hidden hover:cursor-pointer">
            <Image src={logo} alt="logo" fill style={{ objectFit: "cover" }} />
          </div>
        </Link>
        <li>
          <Link className="inline-block" href={"/admin/riwayat-reservasi"}>
            Riwayat Reservasi
          </Link>
        </li>
        <li>
          <Link className="inline-block" href={"/admin/verifikasi-ticket"}>
            Verifikasi Ticket
          </Link>
        </li>
        <li>
          <Link className="inline-block" href={"/admin/bot"}>
            Tanya Bot
          </Link>
        </li>
      </ul>

      <Link className="inline-block" href={"/api/auth/signout"}>
        Keluar
      </Link>
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="inline-block sm:hidden mb-2"
        >
          ⬆️
        </button>
      )}
    </nav>
  );
}

export default NavbarAdmin;
