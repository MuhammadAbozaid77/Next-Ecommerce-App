import wixClientServer from "@/lib/wixClientServer";
import ProductCard from "../../cards/ProductCard";

type propsType = {
  categoryId: string;
  limit?: number;
};

const productPerPage = 20;
export default async function ProductList({ categoryId, limit }: propsType) {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || productPerPage)
    .find();
  console.log("items", res.items[0]);

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
