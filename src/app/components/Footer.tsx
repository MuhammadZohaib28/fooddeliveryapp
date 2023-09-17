import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4  bg-red-500 text-white flex items-center justify-between px-20">
      <div className="text-xl">
        <Link href="/" className="uppercase md:font-bold">
          Roti Shoti
        </Link>
      </div>
      <span>All Rights Reserved</span>
    </div>
  );
};

export default Footer;
