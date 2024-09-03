"use client";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function MenuNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <span onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu />
      </span>
      {isOpen && (
        <div>
          <ul>
            <li>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
              <Link href={""}> Tab </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
