"use client";

import Link from "next/link";
import Wrapper from "../ui/Wrapper";
import MenuNavbar from "./MenuNavbar";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";


export default function Header() {
  return (
    <div className="2xl:px-64  xl:px-32 lg:px-16 md:px-8 px-4  h-20 relative border-b">
      <div className="md:hidden flex justify-between items-center h-full">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide"> Ecommerce-App </div>
        </Link>
        <MenuNavbar />
      </div>
      <div className="md:flex hidden justify-between items-center w-full gap-8 h-full">
        <div className="w-1/3 ">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide"> Ecommerce-App </div>
          </Link>
        </div>
        <div className="w-2/3 flex justify-between items-center gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}
