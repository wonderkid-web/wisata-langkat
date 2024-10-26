import { showCurrency, showFormattedDate } from "@/src/helper";
import { firebaseDate, TicketUIProps } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import wa from "/public/wa.svg";

export const ReservationCard = (reservation: TicketUIProps) => {
  return (
    <div className="border border-black text-black shadow-sm rounded-lg p-6 mb-4 mx-3 relative">
      <h2 className="text-xl font-bold mb-2">
        Reservation ID: {reservation.id}
      </h2>
      <p>
        <strong>Email:</strong> {reservation.email}
      </p>
      <p>
        <strong>Contact:</strong> {reservation.contact || "N/A"}
      </p>
      <p>
        <strong>Place Code:</strong> {reservation.placeKode}
      </p>
      <p>
        <strong>Number of Guests:</strong> {reservation.person}
      </p>
      <p>
        <strong>Date:</strong>{" "}
        {showFormattedDate(+(reservation.date as firebaseDate).seconds * 1000)}
      </p>

      <h3 className="font-semibold mt-4">Accommodation:</h3>
      {reservation?.accommodation?.map((acc, index) => (
        <div key={index} className="mb-2">
          <p>
            <strong>Type:</strong> {acc.type}
          </p>
          <p>
            <strong>Price:</strong> {showCurrency(acc.price)} IDR
          </p>
        </div>
      ))}

      <h3 className="font-semibold mt-4">Activities:</h3>
      {reservation?.activity?.map((act, index) => (
        <div key={index} className="mb-2">
          <p>
            <strong>Name:</strong> {act.name}
          </p>
          <p>
            <strong>Price:</strong> {showCurrency(act.price)} IDR
          </p>
        </div>
      ))}

      <p
        className={`mt-4 text-white px-2 py-1 w-fit rounded-md font-bold ${
          reservation.status ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Status: {reservation.status ? "Done" : "Pending"}
      </p>

      <Link
        className="inline-block absolute bottom-7 right-4 h-6 w-6"
        href={`https://wa.me/${reservation.contact}?text=Halo,%20kami%20dari%20Langkat%20Adventure%20ingin%20menanyakan%20reservasi%20${reservation.id}.`}
      >
        <Image src={wa} objectFit="cover" alt="whatsapp" fill />
      </Link>
    </div>
  );
};
