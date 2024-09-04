import React from "react";
import HomeSlider from "./_components/_features/home/HomeSlider";
import ProductList from "./_components/_features/products/ProductList";
import Wrapper from "./_components/ui/Wrapper";
import CategoriesList from "./_components/_features/products/CategoriesList";

export default function page() {
  return (
    <>
      <main>
        <HomeSlider />
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">Featured Products </h1>
          <ProductList />
        </Wrapper>
        <div className="mt-24">
          <Wrapper classesName=" mb-12">
            <h1 className="text-2xl ">Categories </h1>
          </Wrapper>
          <CategoriesList />
        </div>
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">New Products </h1>
          <ProductList />
        </Wrapper>
      </main>
    </>
  );
}
