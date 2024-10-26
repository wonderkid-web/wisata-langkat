import { DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ticketCollection } from "../firebase";
import { TicketUIProps } from "../types";

export function useGetTickets() {
  const [tickets, setTickets] = useState<TicketUIProps[]|DocumentData[]>([]);
  

  useEffect(() => {
    const unsubscribe = onSnapshot(ticketCollection, (snapshot) => {
      const tickets = snapshot.docs.map((ticket) => ({
        ...ticket.data(),
        id: ticket.id,
      }));
      setTickets(tickets);
    });

    return () => unsubscribe();
  }, []);

  return { tickets };
}
