import wixClientServer from "@/lib/wixClientServer";
import ProductCard from "../../cards/ProductCard";
import { products } from "@wix/stores";

type propsType = {
  categoryId: string;
  limit?: number;
  searchParams?: any;
};

const productPerPage = 20;
export default async function ProductList({ categoryId, limit }: propsType) {
  const wixClient = await wixClientServer();
  const { items } = await wixClient?.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || productPerPage)
    .find();

  return (
    <>
      <div className="flex gap-x-8 gap-y-12  justify-start flex-wrap mt-12">
        {items?.map((product: products.Product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
