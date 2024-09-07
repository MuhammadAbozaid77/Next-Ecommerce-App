"use client";
import FilterCompo from "@/components/features/filter/FilterCompo";
import ListTopPage from "@/components/features/list/ListTopPage";
import Wrapper from "@/components/ui/Wrapper";

export default function ListPage() {
  return (
    <>
      <Wrapper>
        <ListTopPage />
        <FilterCompo />
        <h1 className="mt-12 text-xl font-semibold"> Products For You!</h1>
      </Wrapper>
    </>
  );
}
