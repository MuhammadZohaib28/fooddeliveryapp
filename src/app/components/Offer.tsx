import Image from "next/image";
import React from "react";
import Countdown from "./Countdown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[75vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6 text-center">
        <h1 className="text-white text-5xl font-bold md:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-sm md:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <Countdown />
        <button className="bg-pink-300 text-red-500 p-2 rounded-sm font-bold md:py-2 md:px-10 md:text-2xl">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
