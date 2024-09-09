"use client";

import { useState } from "react";

type propsType = {
  productId: string | undefined;
  varients: [] | any;
  productOptions: [] | any;
};
export default function CustomizrProducts({
  productId,
  varients,
  productOptions,
}: propsType) {
  // console.log("productOptions", productOptions);
  const [selectOptions, setSelectOptions] = useState<{ [key: string]: string }>(
    {}
  );

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    console.log("hhhh");
    return varients.some((varient) => {
      const varientChoices = varient.choices;
      if (!varientChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => varientChoices[key] === value
        ) && varient.stock?.inStock
      );
    });
  };

  console.log("selectOptions", selectOptions);

  return (
    <>
      <div className="flex flex-col gap-6">
        {productOptions?.map((option: any) => (
          <div key={option?.name} className="flex flex-col gap-4">
            <h4 className="font-medium"> Choose a {option?.name} </h4>
            {option.choices?.map((choice: any) => (
              <div
                className=""
                key={choice.value}
                onClick={() =>
                  handleOptionSelect(option.name!, choice.description!)
                }
              >
                {choice?.description}
              </div>
            ))}
          </div>
        ))}
        {/* <h4 className="font-medium"> Choose a Color </h4>
        <ul className="flex items-center gap-5">
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
            <div className="absolute w-10 h-10  rounded-full ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
            <div className="absolute w-10 h-10  rounded-full ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
            <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 rounded-full   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </li>
        </ul>
        <h4 className="font-medium"> Choose a Size </h4>
        <ul className="flex items-center gap-3">
          <li className="py-1 px-4 rounded-md ring-pink-300 ring-1 text-pink-400 cursor-pointer capitalize">
            small
          </li>
          <li className="py-1 px-4 rounded-md ring-pink-300 ring-1 text-white bg-pink-500 cursor-pointer capitalize">
            medium
          </li>
          <li className="py-1 px-4 rounded-md ring-pink-300 ring-1 bg-pink-300 text-white cursor-not-allowed  capitalize">
            large
          </li>
        </ul> */}
      </div>
    </>
  );
}
