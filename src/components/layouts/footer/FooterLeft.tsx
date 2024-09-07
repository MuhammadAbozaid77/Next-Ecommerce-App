"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo2.png";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { PiPinterestLogo } from "react-icons/pi";
export default function FooterLeft() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={logo}
          alt=""
          className="text-2xl tracking-wide rounded-md shadow-md"
          width={100}
          height={100}
        />
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        voluptatibus.
      </p>
      <div>
        <span className="font-semibold">muhammadabozaid77@gmail.com</span>
        <span className="font-semibold"> 01055998877 </span>
      </div>
      <div className="flex gap-6">
        <CiFacebook size={30} />
        <CiInstagram size={30} />
        <CiTwitter size={30} />
        <CiYoutube size={30} />
        <PiPinterestLogo size={30} />
      </div>
    </>
  );
}
