import CardAdmin from "@/src/components/structure/CardAdmin";
import ContainerAdmin from "@/src/components/structure/ContainerAdmin";

type Props = {};

function page({}: Props) {
  return (
    <ContainerAdmin>
      <section className="h-screen flex flex-col sm:flex-row text-black gap-4 pt-4 px-4">
        {[21,23,11,56,2].map(d=> <CardAdmin key={d} data={d} />)}
      </section>
    </ContainerAdmin>
  );
}

export default page;
