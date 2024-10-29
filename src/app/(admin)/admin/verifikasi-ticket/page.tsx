import ContainerAdmin from "@/src/components/structure/ContainerAdmin";
import VerifikationBar from "@/src/components/structure/VerifikationBar";
import { ticketCollection } from "@/src/firebase";
import { showFormattedDate } from "@/src/helper";
import { firebaseDate, TicketUIProps } from "@/src/types";
import { getDocs } from "firebase/firestore";

export const revalidate = 0;

const getTickets = async () => {
  return (await getDocs(ticketCollection)).docs.map((ticket) => ({
    ...ticket.data(),
    id: ticket.id,
  })) as TicketUIProps[];
};

async function page() {
  const tickets = await getTickets();

  return (
    <ContainerAdmin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4">
        {tickets.map((ticket) => (
          <div
            className={`flex flex-col p-4 gap-2 border-l-4  border rounded-sm  text-black
              ${ticket.status ? 'border-l-green-400 border-green-400' : 'border-l-red-400 border-red-400'}
              `}
            key={ticket.id}
          >
            <div className="flex justify-between">
              <h2 className="font-semibold">Reservasi ID: </h2>
              <p className="italic">{ticket.id}</p>
            </div>
            <p>Status: {ticket.status ? "lunas" : "pending"}</p>
            <p>
              Tanggal:{" "}
              {showFormattedDate(+(ticket.date as firebaseDate).seconds * 1000)}
            </p>
            <VerifikationBar
              id={ticket.id as string}
              status={ticket.status as boolean}
            />
          </div>
        ))}
      </div>
    </ContainerAdmin>
  );
}

export default page;
