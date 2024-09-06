"use client";
import Wrapper from "../_components/ui/Wrapper";
import FilterCompo from "../_components/_features/filter/FilterCompo";
import ListTopPage from "../_components/_features/list/ListTopPage";
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
