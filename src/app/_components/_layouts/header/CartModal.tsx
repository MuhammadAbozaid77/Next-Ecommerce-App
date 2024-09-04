"use client";

import CartItemCard from "../../_cards/CartItemCard";
import CartItemCost from "../../_cards/CartItemCost";

export default function CartModal() {
  const cartItems = true;

  return (
    <>
      <div className="w-max absolute p-4 rounded shadow-lg bg-white top-12 right-0 border flex flex-col gap-6 z-20">
        {!cartItems ? (
          <div>No Items</div>
        ) : (
          <>
            <div className="flex flex-col gap-8">
              <CartItemCard />
            </div>
            <div>
              <CartItemCost />
            </div>
          </>
        )}
      </div>
    </>
  );
}
