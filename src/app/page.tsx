import React, { Suspense, useEffect } from "react";
import HomeSlider from "@/components/features/home/HomeSlider";
import CategoriesList from "@/components/features/products/CategoriesList";
import ProductList from "@/components/features/products/ProductList";
import Wrapper from "@/components/ui/Wrapper";
import wixClientServer from "@/lib/wixClientServer";

export default async function HomePage() {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products.queryProducts().find();
  // console.log("items", items);

  return (
    <>
      <main>
        <HomeSlider />
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">Featured Products</h1>
          <Suspense fallback={"Loading..."}>
            <ProductList
              categoryId={"3836e96d-8d24-4b50-7c04-41e4fc5b36c7"}
              limit={4}
            />
          </Suspense>
        </Wrapper>
        <div className="mt-24">
          <Wrapper classesName=" mb-12">
            <h1 className="text-2xl">Categories</h1>
          </Wrapper>
          <CategoriesList />
        </div>
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">New Products</h1>
          {/* <ProductList /> */}
        </Wrapper>
      </main>
    </>
  );
}
