'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DestinationType } from '@/src/types'
import { destination } from '@/src/stataic'
import Link from 'next/link'


export default function MosaicGallery() {
  const [selectedImage, setSelectedImage] = useState<DestinationType | null>(null)

  return (
    <div className="h-screen sm:max-h-[95vh] overflow-hidden container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full h-full mb-8">
        {destination.map((item) => (
          <motion.div
            key={item.placeKode}
            className="relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
            >
              <h3 className="text-white text-center text-lg font-semibold px-2">{item.placeName}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-slate-800 bg-opacity-80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 placeholder-opacity-70 p-4 rounded-lg max-w-3xl w-full mx-4"
            >
              <div className="relative aspect-video mb-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              {/* <h2 className="text-2xl font-bold mb-2">{selectedImage.placeName}</h2> */}
              <Link 
                href={`/galery/${selectedImage.placeKode}`}
                className="bg-white text-slate-900 font-bold py-2 px-4 rounded ease-in-out w-full inline-block text-center"
              >
                Lihat Detail Wisata
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}