"use client";
import Link from "next/link";
import pic from "../../../public/product1.png";
import Image from "next/image";

export default function CategoriesCard() {
  return (
    <>
      <Link
        href={""}
        className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
      >
        <div className="relative bg-gray-100 w-full h-96">
          <Image alt="" src={pic} fill sizes="20vw" className="object-cover" />
        </div>
        <h1 className="mt-8 font-light  tracking-wide">Category Name</h1>
      </Link>
    </>
  );
}
