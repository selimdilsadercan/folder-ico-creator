"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import ImageDropzone from "@/components/ImageDropzone";
import html2canvas from "html2canvas";
// import CloudConvert from "cloudconvert";

function Page() {
  const editorRef = useRef(null);
  // const cloudConvert = new CloudConvert(process.env.CLOUD_CONVERT_KEY!);

  const exportPng = async () => {
    const element = editorRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

      // let job = await cloudConvert.jobs.create({
      //   tasks: {
      //     "convert-my-file": {
      //       operation: "convert",
      //       input: image,
      //       input_format: "png",
      //       output_format: "ico"
      //     },
      //     "export-my-file": {
      //       operation: "export/url",
      //       input: "convert-my-file"
      //     }
      //   }
      // });

      const link = document.createElement("a");
      link.download = "folder.png";
      link.href = image;
      link.click();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-start items-center overflow-y-scroll z-1">
      <div className="w-full h-full max-w-[600px] flex flex-col justify-start items-center gap-2.5 pt-[100px] bg-transparent">
        <div ref={editorRef} className="w-[200px] h-[200px] flex flex-row justify-center items-center">
          <Image src="/folder.png" alt="folder" width={200} height={200} />
          <ImageDropzone />
        </div>
        <Button onClick={() => exportPng()} className="gap-2.5 bg-kirmizi-500 hover:bg-kirmizi-600 border border-kirmizi-300 px-3 py-2">
          <Download size={24} className="text-kirmizi-300" />
          <p className="w-fit h-fit overflow-visible font-normal text-kirmizi-300 text-base text-start">Download</p>
        </Button>
      </div>
    </div>
  );
}
export default Page;
