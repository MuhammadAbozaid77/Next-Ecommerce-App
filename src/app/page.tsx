import React from "react";
import HomeSlider from "./_components/_features/home/HomeSlider";
import ProductList from "./_components/_features/products/ProductList";
import Wrapper from "./_components/ui/Wrapper";

export default function page() {
  return (
    <>
      <main>
        <HomeSlider />
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">Featured Products </h1>
          <ProductList />
        </Wrapper>
      </main>
    </>
  );
}
