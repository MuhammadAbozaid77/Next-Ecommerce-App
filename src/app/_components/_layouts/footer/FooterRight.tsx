"use client";
import Image from "next/image";
import pic1 from "../../../../../public/discover.png";
import pic2 from "../../../../../public/mastercard.png";
import pic3 from "../../../../../public/paypal.png";
import pic4 from "../../../../../public/skrill.png";
import pic5 from "../../../../../public/visa.png";

export default function FooterRight() {
  return (
    <>
      <h1 className="uppercase font-medium text-lg">subscribe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis.
      </p>
      <div className="flex">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          className="p-4 w-3/4"
        />
        <button className="w-1/4 bg-red-500 text-white uppercase">
          Join
        </button>
      </div>
      <span className="font-semibold"> Sequre Payments </span>
      <div className="flex gap-6">
        <Image alt="" src={pic1} width={40} height={20} />
        <Image alt="" src={pic2} width={40} height={20} />
        <Image alt="" src={pic3} width={40} height={20} />
        <Image alt="" src={pic4} width={40} height={20} />
        <Image alt="" src={pic5} width={40} height={20} />
      </div>
    </>
  );
}
