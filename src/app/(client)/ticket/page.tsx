"use client";

import { ticketCollection } from "@/src/firebase";
import { DocumentData, onSnapshot, query, where } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import TicketUI from "@/src/components/structure/CardTicket";
import { PlaceKodeType, TicketUIProps } from "@/src/types";
import { useSession } from "next-auth/react";

function Page() {
  const [tickets, setTickets] = useState<DocumentData[] | null>([]);
  const session = useSession();

  useEffect(() => {
    if (session.status == "loading") return;

    const q = query(
      ticketCollection,
      where("email", "==", session.data?.user?.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tickets = snapshot.docs.map((snap) => ({
        ...snap.data(),
        id: snap.id,
      })) as TicketUIProps[];

      setTickets(tickets);
    });

    console.log("jalan");

    return () => unsubscribe();
  }, [session.status]);

  return (
    <div className="relative min-h-[91.6vh] max-h-[91.vh] overflow-auto mt-8 flex flex-wrap gap-8 justify-start px-6 py-4">
      <pre>
        {JSON.stringify(tickets, null, 2)}
      </pre>
      {tickets?.length ? (
        tickets?.map((ticket) => (
          <TicketUI
            key={ticket.id}
            accommodation={ticket.accommodation}
            activity={ticket.activity}
            placeKode={ticket.placeKode as PlaceKodeType}
            status={ticket.status}
            id={ticket.id}
            person={ticket.person}
          />
        ))
      ) : (
        <h1 className="px-4 py-2 rounded-sm bg-gray-500 h-fit mx-auto text-center text-xl sm:text-4xl">
          Kamu belum ada memesan ticket. 🎫
        </h1>
      )}
    </div>
  );
}

export default Page;
