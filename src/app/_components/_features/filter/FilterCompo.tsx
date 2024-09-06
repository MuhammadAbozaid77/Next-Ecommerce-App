"use client";
export default function FilterCompo() {
  return (
    <>
      <div className="mt-12 flex justify-between bg-gray-50 p-4 rounded border md:flex-row flex-col gap-8">
        <div className="flex gap-2 flex-wrap">
          <select
            name="type"
            id=""
            className="py-2 px-4 rounded text-xs font-medium bg-gray-100 border"
          >
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>

          <input
            type="text"
            name="min"
            placeholder="min price"
            className="text-xs rounded pl-2 w-24 ring-1 ring-gray-400"
          />

          <input
            type="text"
            name="max"
            placeholder="max price"
            className="text-xs rounded pl-2 w-24 ring-1 ring-gray-400"
          />

          <select
            name="cat"
            className="py-2 px-4 rounded text-xs font-medium bg-gray-100 border"
          >
            <option>Category</option>
            <option value="">New Arrival</option>
            <option value="">Popular</option>
          </select>

          <select
            name=""
            id=""
            className="py-2 px-4 rounded text-xs font-medium bg-gray-100 border"
          >
            <option>All Filters</option>
          </select>
        </div>
        <div className="flex gap-2">
          <select
            name="sort"
            id=""
            className="py-2 px-4 rounded text-xs font-medium bg-gray-100 border"
          >
            <option>Sort By</option>
            <option value="asc price">Price (low to high)</option>
            <option value="desc price">Price (high to low)</option>
            <option value="asc lastUpdated">Newest</option>
            <option value="desc lastUpdated">Oldest</option>
          </select>
        </div>
      </div>
    </>
  );
}
