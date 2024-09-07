"use client";
import Image from "next/image";
import image1 from "../../../../public/product1.png";
import image2 from "../../../../public/product2.png";
import image3 from "../../../../public/paypal.png";
import { useState } from "react";
export default function ProductImages() {
  const images = [
    {
      id: 1,
      pic: image1,
    },
    {
      id: 2,
      pic: image2,
    },
    {
      id: 3,
      pic: image3,
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <div>
        <div className="relative h-[500px]">
          <Image
            alt=""
            src={images[imageIndex].pic}
            fill
            sizes="50vw"
            className="object-cover rounded-md border"
          />
        </div>
        <div className="flex justify-between mt-8 gap-4">
          {images.map((img, index) => (
            <div
              className="relative w-1/4 h-32 mt-8 gap-4 cursor-pointer"
              key={img.id}
              onClick={() => setImageIndex(index)}
            >
              <Image
                alt=""
                src={img.pic}
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
