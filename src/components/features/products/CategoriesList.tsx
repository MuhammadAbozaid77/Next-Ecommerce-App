import wixClientServer from "@/lib/wixClientServer";
import CategoriesCard from "../../cards/CategoriesCard";

export default async function CategoriesList() {
  const wixClient = await wixClientServer();
  const { items } = await wixClient?.collections.queryCollections().find();

  return (
    <>
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex md:gap-8 gap-4 justify-center">
          {
            items?.map((item)=>(
              <CategoriesCard key={item._id} item={item}   />
            ))
          }
        </div>
      </div>
    </>
  );
}
