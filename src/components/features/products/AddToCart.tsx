"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";

export default function AddToCart() {
  const stock = 5;
  const [quantity, setQuantity] = useState(1);
  const handelQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="font-medium"> Choose a Quantity </h4>
        <div className="flex justify-between md:items-center sm:flex-row flex-col gap-4">
          <div className="flex items-center gap-4 sm:flex-row flex-col">
            <div className="py-2 px-4 bg-gray-100 rounded-md flex justify-between items-center border sm:w-32 w-full">
              <button
                onClick={() => handelQuantity("d")}
                className="cursor-pointer text-xl"
              >
                -
              </button>
              {quantity}
              <button
                onClick={() => handelQuantity("i")}
                className="cursor-pointer text-xl"
              >
                +
              </button>
            </div>
            <div className="text-sm">
              only
              <span className="text-orange-500 mx-1">4 Items</span>
              <br />
              left ! {"Dont"} {""} mis it
            </div>
          </div>
          <Button classesName="bg-pink-600 hover:bg-pink-500 duration-150 disabled:cursor-not-allowed disabled:ring-none disabled:bg-red-300 disabled:text-white">
            Add To Cart
          </Button>
        </div>
        {/* <ul className="flex items-center gap-3">
          <li className="py-1 px-4 rounded-md ring-red-300 ring-1 text-red-400 cursor-pointer capitalize">
            small
          </li>
          <li className="py-1 px-4 rounded-md ring-red-300 ring-1 text-white bg-red-500 cursor-pointer capitalize">
            medium
          </li>
          <li className="py-1 px-4 rounded-md ring-red-300 ring-1 bg-red-300 text-white cursor-not-allowed  capitalize">
            large
          </li>
        </ul> */}
      </div>
    </>
  );
}
