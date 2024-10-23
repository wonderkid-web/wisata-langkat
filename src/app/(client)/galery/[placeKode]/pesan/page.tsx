import FormOrder from "./FormOrder";
import { PlaceKodeType } from "@/src/types";
import { destination } from "@/src/stataic";

export default function page({
  params: { placeKode },
}: {
  params: { placeKode: PlaceKodeType };
}) {

  return (
    <section className="container mx-auto p-4 min-h-[95vh] max-h-[95vh] overflow-hidden mt-8 sm:mt-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        {destination.find((des) => des.placeKode == placeKode)?.placeName}
      </h1>
      <FormOrder placeKode={placeKode} />
    </section>
  );
}
