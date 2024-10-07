import Image from "next/image";
import bg from "/public/bg.jpg";
import card1 from "/public/card1.jpg";
import card2 from "/public/card2.jpg";
import Link from "next/link";
import logo from "/public/logo.png";
import * as motion from "framer-motion/client"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative max-h-screen min-h-screen text-white p-2 flex flex-col">
      <Image src={bg} style={{objectFit: "cover"}} alt="background" layout="fill" />
      {/* <section className="absolute max-h-20 place-items-center gap-4 flex w-full items-center px-6 backdrop-blur-0 text-lg">
        <Link
          href={"/"}
          className="w-[140px] h-[35px] relative rounded-md overflow-hidden hover:cursor-pointer"
        >
          <Image src={logo} alt="logo" fill style={{objectFit: "cover"}} />
        </Link>
        <ul className="mx-auto flex gap-6">
          {["Ticket", "Galery", "Contact"].map((link) => (
            <li key={link}>
              <Link
                href={`/${link.toLowerCase()}`}
                className="hover:cursor-pointer hover:text-xl transition-all"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-semibold hover:cursor-default">Hallo, Bagas!</p>
      </section> */}
      
      <motion.section className="absolute max-h-20 place-items-center gap-4 flex w-full items-center px-6 backdrop-blur-0 text-lg"  
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0,  }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" passHref>
          <div className="w-[140px] h-[35px] relative rounded-md overflow-hidden hover:cursor-pointer">
            <Image src={logo} alt="logo" fill style={{objectFit: "cover"}} />
          </div>
        </Link>
        <ul className="mx-auto flex gap-6">
          {["Ticket", "Galery", "Contact"].map((link) => (
            <li key={link}>
              <Link href={`/${link.toLowerCase()}`} passHref>
                <span className="hover:cursor-pointer hover:text-xl transition-all">
                  {link}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-semibold hover:cursor-default">Hallo, Bagas!</p>
      </motion.section>

      <section className="relative mt-72 flex items-center justify-between pl-16 pr-4">
        <motion.div className="flex flex-col max-w-2xl"
         transition={{delay: 0.8, duration: 0.8}}
         initial={{opacity:0, x: -100}}
         animate={{opacity: 1, x: 0}}
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

        <motion.div className="flex-1 ml-24 overflow-x-auto scrollbar-hide"
         transition={{delay: 0.8, duration: 0.8}}
         initial={{opacity:0, x: 100}}
         animate={{opacity: 1, x: 0}}
        >
          <div className="flex items-center space-x-8 py-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={`${
                  index == 1 ? "h-[400px] w-[275px]" : "h-[325px] w-[225px]"
                } flex-shrink-0  relative rounded-lg overflow-hidden`}
              >
                <div className="drop-shadow-lg bg-opacity-40 bg-slate-800 w-10/12 p-2 rounded-md z-10 absolute bottom-4 left-4 flex flex-col gap-2">
                  <p
                    className={`${
                      index == 1 ? "text-xl" : "text-md"
                    }  text-slate-50 font-semibold text-right`}
                  >
                    Pantai Cermin Langkat
                  </p>

                  <Link
                    className="text-slate-800 px-2 py-[0.125rem] rounded-sm bg-white w-fit self-end hover:bg-opacity-90 transition-all"
                    href={`/galery`}
                  >
                    pesan tiket
                  </Link>
                </div>

                {index % 2 != 0 ? (
                  <Image
                    className="hover:scale-110 hover:cursor-pointer transition-all"
                    src={card1}
                    alt={`Langkat ${index}`}
                    layout="fill"
                    style={{objectFit: "cover"}}
                  />
                ) : (
                  <Image
                    className="hover:scale-110 hover:cursor-pointer transition-all"
                    src={card2}
                    alt={`Langkat ${index}`}
                    layout="fill"
                    style={{objectFit: "cover"}}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
