import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TicketUIProps } from "@/src/types";
import { destination } from "@/src/stataic";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const TicketUI: React.FC<TicketUIProps> = ({
  accommodation,
  activity,
  placeKode,
  status,
  id,
}) => {
  const totalPrice = [...(accommodation || []), ...(activity || [])].reduce(
    (sum, item) => sum + (item?.price || 0),
    0
  );

  const selected = destination.find((des) => des.placeKode == placeKode);

  return (
    <Link
      href={`/ticket/${placeKode}?id=${id}`}
      className="bg-white rounded-md  shadow-lg p-6 max-w-screen-sm w-fit flex flex-col sm:flex-row gap-4 h-fit sm:h-56 cursor-pointer"
    >
      <div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Ticket Details</h2>
        </div>

        <div className="mb-6">
          <div className="w-full sm:w-36 h-36 relative overflow-hidden rounded-sm">
            <Image
              src={selected?.src as StaticImport}
              alt={selected?.alt as string}
              fill
              objectFit="cover"
            />
          </div>
          {/* <div className="mt-4 text-sm text-gray-600">{contact}</div> */}
        </div>
      </div>

      <div>
        <div className="flex justify-center space-x-4 mb-6">
          {accommodation && accommodation.length > 0 && (
            <div className="bg-black text-white rounded-full px-4 py-2 text-sm text-ellipsis">
              Accommodation
            </div>
          )}
          {activity && activity.length > 0 && (
            <div className="bg-black text-white rounded-full px-4 py-2 text-sm text-ellipsis">
              Activity
            </div>
          )}
        </div>

        <div className="mb-6">
          <ul className="list-disc list-inside h-12 overflow-auto w-64">
            {accommodation?.map(
              (item, index) =>
                item && (
                  <li key={`acc-${index}`} className="text-gray-800">
                    {item.type}
                  </li>
                )
            )}
            {activity?.map(
              (item, index) =>
                item && (
                  <li key={`act-${index}`} className="text-gray-800">
                    {item.name}
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            {status && (
              <div className="text-white bg-green-600 rounded-full px-3 py-1 font-bold text-sm">
                lunas
              </div>
            )}
            {!status && (
              <div className="text-white bg-red-600 rounded-full px-3 py-1 font-bold text-sm">
                pending
              </div>
            )}
            <div className="text-xl font-bold text-gray-900">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(totalPrice)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TicketUI;
