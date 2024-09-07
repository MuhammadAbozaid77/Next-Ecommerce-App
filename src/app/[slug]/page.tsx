import AddToCart from "@/components/features/products/AddToCart";
import CustomizrProducts from "@/components/features/products/CustomizrProducts";
import ProductImages from "@/components/features/products/ProductImages";
import Wrapper from "@/components/ui/Wrapper";

export default function SingelPage() {
  return (
    <Wrapper classesName="relative flex lg:flex-row flex-col gap-16">
      <div className="lg:w-1/2 w-full lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          hic!
        </p>

        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$ 45</h3>
          <h2 className="font-medium text-2xl">$ 45</h2>
        </div>
        <CustomizrProducts />
        <AddToCart />

        <div className="h-[2px] bg-gray-100" />
        <div>
          <div className="mt-4">
            <h4 className="font-medium mb-4"> Title </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              deserunt.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-4"> Title </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              deserunt.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
