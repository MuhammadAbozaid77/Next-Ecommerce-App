"use client";
import Link from "next/link";
import pic from "../../../public/product1.png";
import Image from "next/image";

type propstype = {
  item: any;
};
export default function CategoriesCard({ item }: propstype) {
  return (
    <>
      <Link
        href={`/list?cat=${item.slug}`}
        className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
      >
        <div className="relative bg-gray-100 w-full h-96">
          <Image
            alt=""
            src={item?.media?.mainMedia?.image?.url || pic}
            fill
            sizes="100%"
            className="object-cover rounded-md"
          />
        </div>
        <h1 className="mt-4 font-light  tracking-wide text-[20px]">
          {item?.name}
        </h1>
      </Link>
    </>
  );
}
