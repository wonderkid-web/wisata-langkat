import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { destination } from "../stataic";

export default async function Home() {
  return (
    <section className="relative mt-72 flex items-center justify-between pl-16 pr-4">
      <motion.div
        className="flex flex-col max-w-2xl"
        transition={{ delay: 0.8, duration: 0.8 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-white text-[8rem] leading-none">LANGKAT</h1>
        <p className="text-xl mt-4">
          Pesona Tanah Langkat Sumatera Utara, Ciptakan Kenangan yang tak
          terlupakan.
        </p>
        <Link
          href="/galery"
          className="flex items-center justify-center px-4 py-2 bg-slate-50 bg-opacity-20 rounded-md w-36 font-semibold hover:scale-105 mt-6 transition-transform"
        >
          explore
        </Link>
      </motion.div>

      <motion.div
        className="flex-1 ml-24 overflow-x-auto scrollbar-hide"
        transition={{ delay: 0.8, duration: 0.8 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="flex items-center space-x-8 py-4">
          {destination.map((img, index) => (
            <div
              key={index}
              className={`${
                index == 0 ? "h-[400px] w-[275px]" : "h-[325px] w-[225px]"
              } flex-shrink-0  relative rounded-lg overflow-hidden`}
            >
              <div className="drop-shadow-lg bg-opacity-40 bg-slate-800 w-10/12 p-2 rounded-md z-10 absolute bottom-4 left-4 flex flex-col gap-2">
                <p
                  className={`${
                    index == 1 ? "text-xl" : "text-md"
                  }  text-slate-50 font-semibold text-right`}
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

              {index % 2 != 0 ? (
                <Image
                  className="hover:scale-110 hover:cursor-pointer transition-all"
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Image
                  className="hover:scale-110 hover:cursor-pointer transition-all"
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
