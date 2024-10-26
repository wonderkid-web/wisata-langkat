"use client";

import { ticketCollection } from "@/src/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  id: string;
  status: boolean;
};

function VerifikationBar({ id, status }: Props) {
  const router = useRouter();

  const handleVerification = async (status: boolean) => {
    const toastId = toast.loading("Memproses Transaksi", { duration: 800 });
    const docRef = doc(ticketCollection, id);
    try {
      await updateDoc(docRef, { status });

      toast.dismiss(toastId)

      if (status) toast.success("Ticket ter verifikasi lunas");
      if (!status) toast.success("Ticket Berhasil di cancel");

      router.refresh();
    } catch (error:any) {
      if (status) toast.warning("Ticket gagal diverifikasi", error);
      if (!status) toast.warning("Ticket gagal cancel", error);

      router.refresh();
    }
  };

  return (
    <div className="flex gap-3 mt-2 self-end">
      <button
        disabled={status}
        onClick={() => handleVerification(true)}
        className={`rounded-md text-white font-bold px-3 ${
          !status ? "bg-green-500" : "bg-green-200"
        }`}
      >
        lunas
      </button>

      <button
        disabled={!status}
        onClick={() => handleVerification(false)}
        className={`rounded-md text-white font-bold px-3 ${
          status ? "bg-red-500" : "bg-red-200"
        }`}
        type="submit"
      >
        batal
      </button>
    </div>
  );
}

export default VerifikationBar;
