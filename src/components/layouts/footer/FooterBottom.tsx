"use client";
export default function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
      <div className="">© 2024 Online Shop</div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="">
          <span className="text-gray-500 mr-4">Language</span>
          <span className="font-medium">United States | English</span>
        </div>
        <div className="">
          <span className="text-gray-500 mr-4">Currency</span>
          <span className="font-medium">$ USD</span>
        </div>
      </div>
    </div>
  );
}
