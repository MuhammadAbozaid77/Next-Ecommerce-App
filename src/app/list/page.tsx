import FilterCompo from "@/components/features/filter/FilterCompo";
import ListTopPage from "@/components/features/list/ListTopPage";
import ProductList from "@/components/features/products/ProductList";
import SpinnerLoading from "@/components/ui/SpinnerLoading";
import Wrapper from "@/components/ui/Wrapper";
import wixClientServer from "@/lib/wixClientServer";
import { Suspense } from "react";

type propsType = {
  searchParams: any;
};
export default async function ListPage({ searchParams }: propsType) {
  const wixClient = await wixClientServer();
  const items = await wixClient?.collections?.getCollectionBySlug(
    searchParams?.cat || "all-products"
  );

  return (
    <>
      <Wrapper>
        <ListTopPage />
        <FilterCompo />
        <h1 className="mt-12 text-xl font-semibold"> Products For You!</h1>
        <Suspense fallback={<SpinnerLoading />}>
          <ProductList
            categoryId={
              items?.collection?._id || "00000000-000000-000000-000000000001"
            }
            searchParams={searchParams}
          />
        </Suspense>
      </Wrapper>
    </>
  );
}
