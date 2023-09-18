import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] flex flex-col items-center md:flex-row md:h-[calc(100vh-7rem)] lg:px-10 xl:px-20 ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="w-full text-xs md:text-sm my-4">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} font-bold text-2xl py-2 px-5 rounded-sm`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
