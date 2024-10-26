"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import logo from "/public/logo.png";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { ticketCollection } from "@/src/firebase";
import { firebaseDate, TicketUIProps } from "@/src/types";
import { useRouter, useSearchParams } from "next/navigation";
import { showCurrency, showFormattedDate } from "@/src/helper";
import { toast } from "sonner";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function InvoiceUI() {
  const [ticket, setTicket] = useState<TicketUIProps | null>(null);
  const id = useSearchParams().get("id");
  const router = useRouter();

  useEffect(() => {
    const getDocById = async (id: string) => {
      const docRef = doc(ticketCollection, id);
      const docSnap = await getDoc(docRef);

      return { ...docSnap.data(), id: docSnap.id };
    };

    getDocById(id as string).then((data) => {
      if (data) {
        setTicket(data as SetStateAction<TicketUIProps | null>);
      }
    });
  }, []);

  const handleCancleReservation = async () => {
    const docRef = doc(ticketCollection, id as string);
    toast.info("Membatalkan Reservasi", { duration: 700 });
    try {
      await deleteDoc(docRef);
      toast.success("Berhasil membatalkan Reservasi");
      router.push("/ticket");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

    const totalAccommodation =
      ticket?.accommodation?.reduce((sum, item) => sum + item.price, 0) || 0;
    const totalActivity =
      ticket?.activity?.reduce((sum, item) => sum + item.price, 0) || 0;
    const grandTotal = (totalAccommodation + totalActivity) * (ticket?.person ? +ticket?.person : 1);

  return (
    <section className="min-h-[95vh] sm:max-h-[95vh] overflow-hidden p-4 sm:p-8">
      {ticket?.accommodation || ticket?.activity ? (
        <Card className="sm:w-1/3 mx-auto h-fit overflow-auto">
          <CardHeader className="text-center">
            <Image
              src={logo}
              alt="Company Logo"
              className="mx-auto mb-4"
              width={200}
              height={20}
            />
            <CardTitle className="text-2xl font-bold">Invoice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between text-sm">
              <span>Invoice ID:</span>
              <span className="font-medium">{id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Place Code:</span>
              <span className="font-medium">{ticket?.placeKode}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Status:</span>
              <span
                className={`font-medium text-white px-2 py-1 rounded-full ${
                  ticket?.status ? "bg-green-600" : "bg-red-500"
                }`}
              >
                {ticket?.status ? "Lunas" : "Pending"}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Time:</span>
              <span className="font-medium">{showFormattedDate((ticket?.date as firebaseDate))}</span>
            </div>

            {ticket?.accommodation && ticket?.accommodation.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Accommodation</h3>
                <ul className="space-y-2">
                  {ticket?.accommodation.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span>{item.type}</span>
                      <span>{showCurrency(item.price)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between text-sm font-medium">
                  <span>Subtotal Accommodation:</span>
                  <span>{showCurrency(totalAccommodation)}</span>
                </div>
              </div>
            )}

            {ticket?.activity && ticket?.activity.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Activities</h3>
                <ul className="space-y-2">
                  {ticket?.activity.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>{showCurrency(item.price)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between text-sm font-medium">
                  <span>Subtotal Activities:</span>
                  <span>{showCurrency(totalActivity)}</span>
                </div>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-2">Jumlah Orang</h3>
              <div className="mt-2 flex justify-between text-sm font-medium">
                <span>Banyak ticket reservasi:</span>
                <span>{ticket.person}</span>
              </div>
            </div>

            <div className="pt-4 border-t flex justify-between font-semibold">
              <span>Grand Total:</span>
              <span>{showCurrency(grandTotal)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              className="w-full"
              onClick={async () => await handleCancleReservation()}
            >
              {/* <XCircle className="mr-2 h-4 w-4" /> Cancel Payment */}{" "}
              Batalkan Reservasi?
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex flex-col space-y-3 mx-auto items-center">
          <Skeleton className="sm:w-1/3 mx-auto h-[70vh] rounded-xl" />
        </div>
      )}
    </section>
  );
}
