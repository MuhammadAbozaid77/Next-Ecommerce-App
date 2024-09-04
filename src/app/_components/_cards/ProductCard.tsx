"use client";
import Image from "next/image";
import Link from "next/link";
import pic from "../../../../public/product.png";
import pic2 from "../../../../public/pinterest.png";

export default function ProductCard() {
  return (
    <>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 xl:w-[22%] lg:w-[30%] md:w-[45%] sm:w-[90%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={pic}
            alt=""
            fill
            className="absolute object-cover bg-red-100 rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            sizes="25vw"
          />
          <Image
            src={pic2}
            alt=""
            fill
            className="absolute object-cover  rounded-md"
            sizes="25vw"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem, veniam.
        </div>
        <button className="rounded-md ring-1 ring-gray-600 py-2 px-4 hover:bg-black hover:text-white duration-500 ">
          Add To Cart
        </button>
      </Link>
    </>
  );
}
