"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductImages({ images }: any) {
  // console.log(images);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <div>
        <div className="relative h-[500px]">
          <Image
            alt=""
            src={images[imageIndex]?.image?.url}
            fill
            sizes="50vw"
            className="object-cover rounded-md border"
          />
        </div>
        <div className="flex justify-start gap-4 ">
          {images.map((img: any, index: number) => (
            <div
              className="relative w-1/4 h-32 mt-8 gap-4 cursor-pointer"
              key={img._id}
              onClick={() => setImageIndex(index)}
            >
              <Image
                alt=""
                src={img?.image?.url}
                fill
                sizes="30vw"
                className="object-cover rounded-md border"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
