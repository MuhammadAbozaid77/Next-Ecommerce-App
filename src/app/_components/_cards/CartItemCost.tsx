"use client";
export default function CartItemCost() {
  return (
    <>
      <div className="flex justify-between items-center font-semibold">
        <span>SubTotal</span>
        <span>$49</span>
      </div>
      <p className="text-gray-500 text-sm mb-4 mt-2">
        Lorem ipsum dolor sit amet .
      </p>
      <div className="flex justify-between text-sm">
        <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
          View Cart
        </button>
        <button className="rounded-md py-3 px-4  bg-black  text-white ">
          Checkout
        </button>
      </div>
    </>
  );
}
