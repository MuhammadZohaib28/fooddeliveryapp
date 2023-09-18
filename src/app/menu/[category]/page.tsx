import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Category = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="group e w-full flex flex-col justify-between p-4 h-[60vh] border-r-2 border-b-2 border-yellow-300 even:bg-red-100 sm:w-1/2 lg:w-1/3"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain hover:rotate-[360deg] transition-all duration-[2000ms]"
              />
            </div>
          )}

          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-lg uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden">PKR{item.price}</h2>
            <button className=" hidden group-hover:block p-1 font-bold uppercase bg-pink-300 text-red-500 rounded-sm text-base">Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
