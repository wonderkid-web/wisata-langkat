import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { destination } from "../../stataic";
import { auth } from "@/auth";


export default async function Home() {
const session = await auth()
  return (
    <section className="relative mt-12 sm:mt-72 flex flex-col sm:flex-row  items-center justify-between sm:pl-16 pr-4">
      {
        JSON.stringify(session, null, 2)
      }
      <motion.div
        className="flex flex-col max-w-2xl"
        transition={{ delay: 0.8, duration: 0.8 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-white text-4xl sm:text-[8rem] leading-none">
          LANGKAT
        </h1>
        <p className="text-xl mt-4">
          Pesona Tanah Langkat Sumatera Utara, Ciptakan Kenangan yang tak
          terlupakan.
        </p>
        <div className="flex gap-4">
          <Link
            href="/galery"
            className="flex items-center justify-center px-4 py-2 bg-slate-50 bg-opacity-20 rounded-md w-36 font-semibold hover:scale-105 mt-6 transition-transform"
          >
            galery
          </Link>
          <Link
            href="/ticket"
            className="sm:hidden flex items-center justify-center px-4 py-2 bg-slate-50 bg-opacity-20 rounded-md w-36 font-semibold hover:scale-105 mt-6 transition-transform"
          >
            ticket
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 mt-12 sm:mt-0 ml-12 sm:ml-24 overflow-auto scrollbar-hide w-screen"
        transition={{ delay: 0.8, duration: 0.8 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center space-x-4 sm:space-x-8 py-4 overflow-x-auto">
          {destination.map((img, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "h-[250px] sm:h-[400px] w-[175px] sm:w-[275px]"
                  : "h-[200px] sm:h-[325px] w-[150px] sm:w-[225px]"
              } flex-shrink-0 relative rounded-lg overflow-hidden`}
            >
              <div className="drop-shadow-lg bg-opacity-40 bg-slate-800 w-10/12 p-2 rounded-md z-10 absolute bottom-4 left-4 flex flex-col gap-2">
                <p
                  className={`${
                    index === 1 ? "text-sm sm:text-xl" : "text-xs sm:text-md"
                  } text-slate-50 font-semibold text-right`}
                >
                  {img.placeName}
                </p>

                <Link
                  className="text-slate-800 px-2 py-[0.125rem] rounded-sm bg-white w-fit self-end hover:bg-opacity-90 transition-all"
                  href={`/galery/${img.placeKode}`}
                >
                  pesan tiket
                </Link>
              </div>

              <Image
                className="hover:scale-110 hover:cursor-pointer transition-all"
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
