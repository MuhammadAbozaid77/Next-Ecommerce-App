"use client";
import Wrapper from "../../ui/Wrapper";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterCenter from "./FooterCenter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 text-sm mt-24 py-24">
        <Wrapper>
          <div className="flex justify-between gap-24 md:flex-row flex-col">
            <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8">
              <FooterLeft />
            </div>
            <div className="hidden lg:flex justify-between w-1/2">
              <FooterCenter />
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8">
              <FooterRight />
            </div>
          </div>
          <FooterBottom />
        </Wrapper>
      </div>
    </>
  );
}
