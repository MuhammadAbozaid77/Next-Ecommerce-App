"use client";
import Image from "next/image";
import pic from "../../../../public/pinterest.png";
export default function CartItemCard() {
  return (
    <>
      <div className="flex gap-4">
        <Image
          alt=""
          src={pic}
          width={72}
          height={96}
          className="object-cover rounded-md"
        />
        <div className="flex flex-col justify-between w-full">
          {/* Top Part Of Title*/}
          {/* Descrpition*/}
          <div className="flex justify-between items-center gap-8">
            <h3 className="font-semibold"> Produc Name </h3>
            <div className="p-1 rounded-md bg-gray-300"> $98 </div>
          </div>
          <div className="text-sm text-gray-500">Avaiable</div>

          {/* Bottom Part Of Title*/}
          <div className="flex justify-between items-center">
            <span className="tetx-gray-500">Qty.</span>
            <span className="p-1 px-2 text-red-600  capitalize rounded-md text-[12px]  border ">
              remove
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
