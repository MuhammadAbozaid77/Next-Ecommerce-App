"use client";
import Link from "next/link";
import MenuNavbar from "./MenuNavbar";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import Image from "next/image";
import logo from "../../../../../public/logo2.png";

export default function Header() {
  return (
    <div className="2xl:px-64  xl:px-32 lg:px-16 md:px-8 px-4  h-20 relative border-b">
      {/* Start In Responsive Mode */}
      <div className="md:hidden flex justify-between items-center h-full">
        <Link href={"/"}>
          <Image
            src={logo}
            alt=""
            className="text-2xl tracking-wide"
            width={100}
            height={100}
          />
        </Link>
        <MenuNavbar />
      </div>
      {/* End In Responsive Mode */}

      {/* Start In Screen Mode */}
      <div className="md:flex hidden justify-between items-center w-full gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"}>
            <Image src={logo} alt="" className="" width={100} height={100} />
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={""}> Home </Link>
            <Link href={""}> Shop </Link>
            <Link href={""}> Deals </Link>
            <Link href={""}> About </Link>
            <Link href={""}> Contact </Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
      {/* End In Responsive Mode */}
    </div>
  );
}
