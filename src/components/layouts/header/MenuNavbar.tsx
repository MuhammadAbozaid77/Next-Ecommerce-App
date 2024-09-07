"use client";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function MenuNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu size={30} />
      </span>
      {isOpen && (
        <div className="text-xl z-10 absolute text-white bg-black top-20 left-0 w-full h-[calc(100vh-80px)] flex justify-center items-center flex-col gap-8">
          <Link href={""}> Home </Link>
          <Link href={""}> Shop </Link>
          <Link href={""}> Deals </Link>
          <Link href={""}> About </Link>
          <Link href={""}> Contact </Link>
          <Link href={""}> Logout </Link>
          <Link href={""}> Cart(1) </Link>
        </div>
      )}
    </div>
  );
}
