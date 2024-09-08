import React, { Suspense } from "react";
import HomeSlider from "@/components/features/home/HomeSlider";
import CategoriesList from "@/components/features/products/CategoriesList";
import ProductList from "@/components/features/products/ProductList";
import Wrapper from "@/components/ui/Wrapper";
import wixClientServer from "@/lib/wixClientServer";
import SpinnerLoading from "@/components/ui/SpinnerLoading";

export default async function HomePage() {
  // const wixClient = await wixClientServer();
  // const { items } = await wixClient.products.queryProducts().find();
  // console.log("items", items);

  return (
    <>
      <main>
        <HomeSlider />
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">Featured Products</h1>
          <Suspense fallback={<SpinnerLoading />}>
            {/* <ProductList
              categoryId={process.env.NEXT_WIX_CATEGORIES_ID!}
              limit={4}
            /> */}
          </Suspense>
        </Wrapper>
        <div className="mt-24">
          <Wrapper classesName=" mb-12">
            <h1 className="text-2xl">Categories</h1>
          </Wrapper>
          <Suspense fallback={<SpinnerLoading />}>
            <CategoriesList />
          </Suspense>
        </div>
        <Wrapper classesName="mt-24">
          <h1 className="text-2xl">New Products</h1>
          {/* <ProductList /> */}
        </Wrapper>
      </main>
    </>
  );
}
