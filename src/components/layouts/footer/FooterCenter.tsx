"use cilent";

import Link from "next/link";

export default function FooterCenter() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="font-medium text-lg">COMPANY</h1>
        <div className="flex flex-col gap-6">
          <Link href="">About Us</Link>
          <Link href="">Careers</Link>
          <Link href="">Affiliates</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact Us</Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-medium text-lg">SHOP</h1>
        <div className="flex flex-col gap-6">
          <Link href="">New Arrivals</Link>
          <Link href="">Accessories</Link>
          <Link href="">Men</Link>
          <Link href="">Women</Link>
          <Link href="">All Products</Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-medium text-lg">HELP</h1>
        <div className="flex flex-col gap-6">
          <Link href="">Customer Service</Link>
          <Link href="">My Account</Link>
          <Link href="">Find a Store</Link>
          <Link href="">Legal & Privacy</Link>
          <Link href="">Gift Card</Link>
        </div>
      </div>
    </>
  );
}
