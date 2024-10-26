import FormOrder from "./FormOrder";
import { PlaceKodeType } from "@/src/types";
import { destination } from "@/src/stataic";
import { auth } from "@/auth";

export default async function page({
  params: { placeKode },
}: {
  params: { placeKode: PlaceKodeType };
}) {

  const session = await auth()

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-screen overflow-hidden sm:mt-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        {destination.find((des) => des.placeKode == placeKode)?.placeName}
      </h1>
      <FormOrder placeKode={placeKode} email={session?.user?.email as string} />
    </section>
  );
}
