import Image from "next/image";
import * as motion from "framer-motion/client";
import { PlaceKodeType } from "@/src/types";
import { destination, destinationInformation } from "@/src/stataic";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function LightboxGallery({
  params: { placeKode },
}: {
  params: { placeKode: PlaceKodeType };
}) {
  const {
    placeName,
    accommodations,
    activities,
    contact,
    description,
    ticketPrice,
  } = destinationInformation.find((des) => des.placeKode == placeKode)!;

  const { alt, src } = destination.find((des) => des.placeKode == placeKode)!;

  if (!placeName) return notFound();

  return (
    <motion.section
      transition={{ delay: 0.8, duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 flex flex-col sm:grid grid-cols-9 grid-rows-5 relative min-h-[93vh] h-full sm:max-h-[93vh] pt-12"
    >

      {/* Image Section */}
      <div className="relative w-5/6 sm:h-full h-56 mx-auto col-start-2 col-end-4 row-start-1 row-end-4 cursor-pointer rounded-md overflow-hidden text-slate-800! mb-5">
        <Image fill alt={alt} src={src} className="object-cover" />
      </div>

      {/* Information Section */}
      <div className="relative h-fit col-start-4 col-end-9 row-start-1 row-end-1 rounded-md overflow-auto sm:overflow-hidden shadow-lg p-6 pt-0 mb-5">
        <h2 className="text-2xl font-bold mb-4">{placeName}</h2>
        <p className="mb-4">{description}</p>

        {/* Accommodation */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Akomodasi</h3>
          <p>Pilih dari berbagai kamar dan vila mewah kami:</p>
          <ul className="list-disc list-inside">
            {accommodations.map((acc, index) => (
              <li key={index}>{`${
                acc.type
              }: Rp ${acc.price.toLocaleString()} per malam`}</li>
            ))}
            tet
          </ul>
        </div>

        {/* Activities */}
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold">Aktivitas dan Fasilitas</h3>
          <ul className="list-disc list-inside">
            {activities.map((activity, index) => (
              <li key={index}>{`${
                activity.name
              }: Rp ${activity.price.toLocaleString()} per orang`}</li>
            ))}
          </ul>
        </div>

        {/* Ticket Price */}
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold">Harga Tiket</h3>
          <p>{ticketPrice}</p>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Informasi Pemesanan</h3>
          <ul className="list-disc list-inside">
            <li>Hubungi kami di: {contact.phone}</li>
            <li>Email: {contact.email}</li>
          </ul>
        </div>

        {/* Booking Link */}
        <Link
          href={`/galery/${placeKode}/pesan`}
          className="relative left-1/2 -translate-x-1/2 top-4 text-center w-full px-2 py-2 inline-block rounded-md text-slate-900 bg-white"
        >
          Pesan Tiket?
        </Link>
      </div>
    </motion.section>
  );
}
