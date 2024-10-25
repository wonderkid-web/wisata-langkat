import React from "react";

type Props = {
  data: number;
};

function CardAdmin({ data }: Props) {
  return (
    <div className=" rounded-md w-full sm:w-1/4 h-32 sm:h-40 bg-red-200 flex flex-col gap-2 justify-center items-center p-2 ">
      <div className="w-1/2 h-28 rounded-sm text-center text-[3rem] sm:text-[4rem] font-bold flex justify-center items-center">
        {data}
      </div>
      <p className="text-center">Jumlah Pengunjung</p>
    </div>
  );
}

export default CardAdmin;
