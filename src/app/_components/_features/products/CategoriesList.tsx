"use client";
import Image from "next/image";
import Link from "next/link";
import CategoriesCard from "../../_cards/CategoriesCard";

export default function CategoriesList() {
  return (
    <>
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex md:gap-8 gap-4">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    </>
  );
}
