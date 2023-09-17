import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll scroll-smooth no-scrollbar text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[83vh] flex flex-col items-center justify-around p-4 hover:bg-pink-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[360deg] transition-all duration-1000">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            <div className="flex-1 flex flex-col items-center justify-center  text-center gap-6">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 ">{item.desc}</p>
              <span className="text-xl font-bold">PKR {item.price}</span>
              <button className="bg-pink-300 text-red-500 p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;