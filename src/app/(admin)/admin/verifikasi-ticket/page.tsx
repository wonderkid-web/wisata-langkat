import ContainerAdmin from "@/src/components/structure/ContainerAdmin";
import VerifikationBar from "@/src/components/structure/VerifikationBar";
import { ticketCollection } from "@/src/firebase";
import { showFormattedDate } from "@/src/helper";
import { firebaseDate, TicketUIProps } from "@/src/types";
import { getDocs } from "firebase/firestore";


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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div
          className={`bg-white shadow-sm rounded p-4 border-l-4 text-black border border-l-green-400  border-green-400`}
        >
          {tickets.map((ticket) => (
            <div className="flex flex-col gap-2" key={ticket.id}>
              <div className="flex justify-between">
                <h2 className="font-semibold">Reservasi ID: </h2>
                <p className="italic">{ticket.id}</p>
              </div>
              <p>Status: {ticket.status ? "lunas" : "pending"}</p>
              <p>
                Tanggal:{" "}
                {showFormattedDate(
                  +(ticket.date as firebaseDate).seconds * 1000
                )}
              </p>
              <VerifikationBar id={ticket.id as string} status={ticket.status as boolean} />
            </div>
          ))}
        </div>
      </div>
    </ContainerAdmin>
  );
}

export default page;
