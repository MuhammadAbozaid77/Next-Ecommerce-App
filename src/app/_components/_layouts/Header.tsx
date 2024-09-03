"use client";

import Link from "next/link";
import Wrapper from "../ui/Wrapper";
import MenuNavbar from "./MenuNavbar";

export default function Header() {
  return (
    <Wrapper>
      <Link href={"/"}>Logo</Link>
      <MenuNavbar />
    </Wrapper>
  );
}
