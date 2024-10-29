import Chat from "@/src/components/structure/Chat";
import ContainerAdmin from "@/src/components/structure/ContainerAdmin";

function page() {
  return (
    <ContainerAdmin>
      <main className="flex flex-col items-center justify-between p-2 sm:p-24 bg-slate-900">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
          <h1 className="text-xl sm:text-4xl font-bold mb-8 text-center">
            Tanya Apapun Mengenai Wisata Langkat!
          </h1>
          <Chat />
        </div>
      </main>
    </ContainerAdmin>
  );
}

export default page;
