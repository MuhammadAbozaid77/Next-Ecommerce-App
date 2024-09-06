"use client";
import Image from "next/image";
import Button from "../../ui/Button";
import womanPic from "./../../../../../public/woman.png";

export default function ListTopPage() {
  return (
    <>
      <div className="bg-pink-50 hidden  md:flex justify-between h-64  px-4">
        <div className="w-2/3 flex flex-col justify-center  items-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <Button classesName="bg-red-400 hover:bg-red-500 duration-150">
            Shop now
          </Button>
        </div>
        <div className="relative w-1/3">
          <Image alt="womanPic" src={womanPic} fill className="object-cover" />
        </div>
      </div>
    </>
  );
}
