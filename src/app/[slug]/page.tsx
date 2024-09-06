import ProductImages from "../_components/_features/products/ProductImages";
import Wrapper from "../_components/ui/Wrapper";

export default function SingelPage() {
  return (
    <Wrapper classesName="relative flex lg:flex-row flex-col gap-16">
      <div className="lg:w-1/2 w-full lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-6">gggg</div>
    </Wrapper>
  );
}
