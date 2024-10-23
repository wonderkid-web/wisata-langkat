import Image from "next/image";
import * as motion from "framer-motion/client";
import { PlaceKodeType } from "@/src/types";
import { destination } from "@/src/stataic";
import { notFound } from "next/navigation";

export default function LightboxGallery({
  params: { placeKode },
}: {
  params: { placeKode: PlaceKodeType };
}) {
  const { alt, placeName, src } = destination.find((des) => des.placeKode == placeKode)!;

  if (!placeName) return notFound();

  return (
    <motion.section
      transition={{ delay: 0.8, duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 grid grid-cols-9 grid-rows-5 gap-4 relative min-h-[93vh] max-h-[93vh] overflow-hidden pt-12"
    >
      <div className="relative col-start-2 col-end-4 row-start-1 row-end-4 cursor-pointer rounded-md overflow-hidden text-slate-800!">
        <Image fill alt={alt} src={src} className="object-cover" />
      </div>

      <div className="relative col-start-4 col-end-9 row-start-1 -row-end-1 rounded-md overflow-hidden  shadow-lg p-6 pt-0">
        <h2 className="text-2xl font-bold mb-4">{placeName}</h2>
        <p className="mb-4">
          Nikmati relaksasi tertinggi di Resort Surga Tropis kami. Terletak di
          tepi pantai Crystal Bay yang masih alami, destinasi mewah ini
          menawarkan perpaduan sempurna antara keindahan alam dan kenyamanan
          modern.
        </p>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Akomodasi</h3>
          <p>Pilih dari berbagai kamar dan vila mewah kami:</p>
          <ul className="list-disc list-inside">
            <li>Kamar Standar: Rp 2.000.000 per malam</li>
            <li>Kamar Deluxe Pemandangan Laut: Rp 3.500.000 per malam</li>
            <li>Vila Tepi Pantai: Rp 7.000.000 per malam</li>
          </ul>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold">Aktivitas dan Fasilitas</h3>
          <ul className="list-disc list-inside">
            <li>Tur snorkeling dan menyelam</li>
            <li>Pusat spa dan kesehatan</li>
            <li>Kelas yoga tepi pantai</li>
            <li>Restoran kelas atas</li>
          </ul>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold">Harga Tiket</h3>
          <p>
            Masuk ke area resort sudah termasuk dalam biaya menginap. Harga
            aktivitas:
          </p>
          <ul className="list-disc list-inside">
            <li>Tur snorkeling: Rp 700.000 per orang</li>
            <li>Perjalanan menyelam: Rp 1.400.000 per orang</li>
            <li>Perawatan spa: Mulai dari Rp 1.100.000</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Informasi Pemesanan</h3>
          <p>Untuk memesan liburan tropis Anda:</p>
          <ul className="list-disc list-inside">
            <li>Hubungi kami di: +62 (555) 123-4567</li>
            <li>Email: pemesanan@surgatropis.com</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
