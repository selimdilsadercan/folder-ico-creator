import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";

function ImageDropzone() {
  const [value, setValue] = useState<File | string | null>(null);

  const imageUrl = useMemo(() => {
    if (typeof value === "string") {
      return value;
    } else if (value) {
      return URL.createObjectURL(value);
    }
    return null;
  }, [value]);

  const { getRootProps, getInputProps, acceptedFiles, fileRejections, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) setValue(file);
    }
  });

  return (
    <div {...getRootProps()} className="absolute mt-4 cursor-pointer">
      <input {...getInputProps()} />
      {imageUrl && (
        <div>
          <Image height={72} width={72} src={imageUrl} alt={acceptedFiles[0]?.name} />
        </div>
      )}
      {!imageUrl && (
        <div className="w-[72px] h-[72px] flex flex-col items-center justify-center text-xs text-gray-400 rounded-sm border border-dashed border-kirmizi-500">
          <p className="w-fit h-fit overflow-visible font-normal text-kirmizi-500 text-base text-center">
            Upload <br />
            Image
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageDropzone;
