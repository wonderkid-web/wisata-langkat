"use client";

import ContainerAdmin from "@/src/components/structure/ContainerAdmin";
import { Skeleton } from "@/src/components/ui/skeleton";
import { showCurrency, showFormattedDate } from "@/src/helper";
import { useGetTickets } from "@/src/hooks";
import { AccommodationType, ActivityType } from "@/src/types";

function Page() {
  const { tickets } = useGetTickets();

  const data = tickets;

  // Calculations
  const totalReservations = data?.length;
  const totalGuests = data?.reduce(
    (acc, reservation) => acc + Number(reservation.person),
    0
  );
  const totalAccommodationRevenue = data?.reduce((acc, reservation) => {
    const accommodationPrice = reservation.accommodation.reduce(
      (sum: number, acc: AccommodationType) => sum + acc?.price,
      0
    );
    return acc + accommodationPrice;
  }, 0);
  const totalActivityRevenue = data?.reduce((acc, reservation) => {
    const activityPrice = reservation.activity.reduce(
      (sum: number, act: ActivityType) => sum + act.price,
      0
    );
    return acc + activityPrice;
  }, 0);
  const reservationsByStatus = {
    confirmed: data?.filter((reservation) => reservation.status).length,
    unconfirmed: data?.filter((reservation) => !reservation.status).length,
  };

  // Get earliest and latest reservation date
  const dates = data?.map((res) => res.date.seconds);

  let earliestDate, latestDate;
  if (dates?.length) {
    earliestDate = Math.min(...dates);
    latestDate = Math.max(...dates);
  }

  if (!tickets?.length)
    return (
      <ContainerAdmin>
        <section className="p-6 text-black">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 7, 8].map((_) => (
              <Skeleton key={_} className="shadow-md rounded p-4 h-16 bg-slate-600/10">
                {/* <h2 className="font-semibold">Total Reservations</h2> */}
                {/* <p>{totalReservations}</p> */}
              </Skeleton>
            ))}
          </div>
        </section>
      </ContainerAdmin>
    );
  return (
    <ContainerAdmin>
      <section className="p-6 text-black">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Total Reservations</h2>
            <p>{totalReservations}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Total Guests</h2>
            <p>{totalGuests}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Total Revenue from Accommodation</h2>
            <p>{showCurrency(totalAccommodationRevenue!)}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Total Revenue from Activities</h2>
            <p>{showCurrency(totalActivityRevenue!)}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Confirmed Reservations</h2>
            <p>{reservationsByStatus.confirmed}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Unconfirmed Reservations</h2>
            <p>{reservationsByStatus.unconfirmed}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Earliest Reservation Date</h2>
            <p>{earliestDate ? showFormattedDate(earliestDate * 1000) : "-"}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 border-l-2 border border-black">
            <h2 className="font-semibold">Latest Reservation Date</h2>
            <p>{latestDate ? showFormattedDate(latestDate * 1000) : "-"}</p>
          </div>
        </div>
      </section>
    </ContainerAdmin>
  );
}

export default Page;
