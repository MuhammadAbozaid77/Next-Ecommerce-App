
import HomeSlider from "@/components/features/home/HomeSlider";
import CategoriesList from "@/components/features/products/CategoriesList";
import ProductList from "@/components/features/products/ProductList";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";

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
