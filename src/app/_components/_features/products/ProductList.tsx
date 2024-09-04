"use client";
import ProductCard from "../../_cards/ProductCard";

export default function ProductList() {
  return (
    <>
      <div className="flex gap-x-8 gap-y-12 md:justify-between justify-center flex-wrap mt-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
