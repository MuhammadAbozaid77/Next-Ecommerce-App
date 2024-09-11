import AddToCart from "@/components/features/products/AddToCart";
import CustomizrProducts from "@/components/features/products/CustomizrProducts";
import ProductImages from "@/components/features/products/ProductImages";
import Wrapper from "@/components/ui/Wrapper";
import wixClientServer from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

type propsType = {
  params: {
    slug: any;
  };
};
export default async function SingelPage({ params }: propsType) { 
  const wixClient = await wixClientServer();
  const products = await wixClient?.products
    .queryProducts()
    .eq("slug", [params.slug])
    .find();

  if (!products?.items[0]) {
    return notFound();
  }

  const productDetails = products?.items[0];
  console.log(productDetails);

  return (
    <Wrapper classesName="relative flex lg:flex-row flex-col gap-16 mt-4">
      <div className="lg:w-1/2 w-full lg:sticky top-20 h-max">
        <ProductImages images={productDetails?.media?.items} />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h1 className="text-4xl font-medium"> {productDetails.name} </h1>
        <p className="text-gray-500">{productDetails.description}</p>

        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          {productDetails?.price?.price ===
          productDetails?.price?.discountedPrice ? (
            <>
              <h3 className="text-xl text-gray-500 line-through">
                $ {productDetails?.price?.price}
              </h3>
            </>
          ) : (
            <>
              <h3 className="text-xl text-gray-500 line-through">
                $ {productDetails?.price?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                $ {productDetails?.price?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        {productDetails?.variants && productDetails?.productOptions && (
          <>
            <CustomizrProducts
              productId={productDetails._id}
              varients={productDetails.variants}
              productOptions={productDetails.productOptions}
            />
          </>
        )}
        {/* <AddToCart productDetails={productDetails} /> */}

        <div className="h-[2px] bg-gray-100" />
        <div>
          {productDetails?.additionalInfoSections?.map((section: any) => (
            <div className="mt-4" key={section?.title}>
              <h4 className="font-medium mb-4"> {section?.title} </h4>
              <p>{section?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
