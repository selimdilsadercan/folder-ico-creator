import Image from "next/image";

function Page() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0flex flex-col justify-start items-center overflow-y-scroll z-1">
      <div className="w-full h-full max-w-[600px] flex flex-col justify-start items-center gap-2.5 pt-[100px]">
        <Image src="folder.png" alt="folder" width={200} height={200} />
      </div>
    </div>
  );
}
export default Page;
