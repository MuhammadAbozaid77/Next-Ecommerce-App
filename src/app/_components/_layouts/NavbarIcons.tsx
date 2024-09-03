"use client";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications, IoCartOutline } from "react-icons/io5";

export default function NavbarIcons() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <FaUserCircle size={25} />
        <IoNotifications size={25} />
        <IoCartOutline size={25} />
      </div>
    </>
  );
}
