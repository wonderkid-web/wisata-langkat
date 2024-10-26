import { ReservationCard } from "@/src/components/structure/CardReservation";
import ContainerAdmin from "@/src/components/structure/ContainerAdmin";
import { ticketCollection } from "@/src/firebase";
import { TicketUIProps } from "@/src/types";
import { getDocs } from "firebase/firestore";

const getData = async () => {
  return (await getDocs(ticketCollection)).docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as TicketUIProps[];
};

async function page() {
  const reservations = await getData();

  return (
    <ContainerAdmin>
      <h1 className="text-black font-bold mx-4 my-4 mb-2 text-2xl">Riwayat Reservasi</h1>

      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} {...reservation} />
      ))}
    </ContainerAdmin>
  );
}

export default page;
