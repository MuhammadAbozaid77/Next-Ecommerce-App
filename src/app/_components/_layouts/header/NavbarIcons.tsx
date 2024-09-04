"use client";
import { CiShoppingCart, CiUser, CiBellOn } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

export default function NavbarIcons() {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLogged = false;
  const handleProfile = () => {
    if (!isLogged) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4 relative">
        <div onClick={handleProfile} className=" cursor-pointer">
          <CiUser size={30} />
        </div>
        {isProfileOpen && (
          <div className="absolute p-4 top-12  left-0 rounded-md border shadow-lg z-20 bg-white">
            <Link href={""}> Profile </Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )}
        <div>
          <CiBellOn size={30} />
        </div>
        <div
          className="relative"
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <CiShoppingCart size={30} />
          <span className="absolute -top-3 -right-3 rounded-full w-6 h-6 bg-red-500 flex justify-center items-center text-sm text-white">
            1
          </span>
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </>
  );
}
