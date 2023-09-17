import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-yellow-300 md:h-16 lg:px-10 xl:px-20">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl flex-1 md:text-center">
        <Link href="/" className="uppercase md:font-bold">
          Roti Shoti
        </Link>
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-1 right-2 lg:static flex items-center gap-2 cursor-pointer bg-pink-300 p-2 rounded-md">
            <Image src="/phone.png" alt=""  width={20} height={20}/>
            <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
