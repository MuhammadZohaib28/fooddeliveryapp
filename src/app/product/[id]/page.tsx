import SingleProductPrice from "@/app/components/SingleProductPrice";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="p-4 lg:px-10 xl:px-20 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      
      {singleProduct.img && 
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      }
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <SingleProductPrice price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProduct;
