"use client";
import React, { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const SingleProductPrice = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">PKR {total.toFixed(2)}</h2>
      <div className="flex gap-4 ">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[5rem] p-2 ring-1 ring-red-500 rounded-sm font-semibold"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(248 113 113)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div className="flex justify-between  items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"-"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {"+"}
            </button>
          </div>
        </div>
        <button className="uppercase w-64 bg-red-500 font-semibold p-3 rounded-sm ring-1 ring-red-500 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProductPrice;
