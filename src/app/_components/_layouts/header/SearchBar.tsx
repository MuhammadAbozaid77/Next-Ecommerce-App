"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const router = useRouter();
  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <>
      <form
        onSubmit={handelSearch}
        className="flex items-center border justify-between gap-4 rounded-md p-2 bg-gray-100 flex-1"
      >
        <input
          type="search"
          name="name"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer" type="submit">
          <CiSearch size={30} />
        </button>
      </form>
    </>
  );
}
