"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import bg from "/public/bg.jpg";
import card1 from "/public/card1.jpg";
import card2 from "/public/card2.jpg";
import Link from "next/link";

type ImageType = {
  src: StaticImageData;
  alt: string;
  place: "KAL" | "NSS" | "PC"
};

export default function LightboxGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    { src: bg, alt: "Background", place: "KAL" },
    { src: card2, alt: "Card 2", place: "NSS" },
    { src: card1, alt: "Card 1", place: "PC" },
  ];

  const openLightbox = (image: ImageType) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <motion.section
        transition={{ delay: 0.8, duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 grid grid-cols-9 grid-rows-4 gap-4 min-h-[93vh] relative"
      >
        <div
          className="relative col-start-2 -col-end-2 row-start-1 row-end-3 cursor-pointer rounded-t-md overflow-hidden"
          onClick={() => openLightbox(images[0])}
        >
          <Image
            fill
            alt={images[0].alt}
            src={images[0].src}
            className="object-cover"
          />
        </div>
        <div
          className="relative col-start-2 col-end-7 row-start-3 row-end-5 cursor-pointer rounded-bl-md overflow-hidden"
          onClick={() => openLightbox(images[1])}
        >
          <Image
            fill
            alt={images[1].alt}
            src={images[1].src}
            className="object-cover"
          />
        </div>
        <div
          className="relative col-span-2 row-span-2 cursor-pointer rounded-br-md overflow-hidden"
          onClick={() => openLightbox(images[2])}
        >
          <Image
            fill
            alt={images[2].alt}
            src={images[2].src}
            className="object-contain"
          />
        </div>
      </motion.section>

      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={closeLightbox}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                layout="fill"
                objectFit="contain"
              />
              <Link className="py-2 rounded-md bg-emerald-600 text-white font-bold text-center w-full absolute bottom-32" href={`/galery/${currentImage.place}`}>Detail Wisata?</Link>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl"
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
