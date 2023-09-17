import React from "react";

const Notification = () => {
  return (
    <div className="h-12  bg-red-500 px-4 flex items-center justify-center text-center text-sm  md:text-base ">
      <span className="text-white cursor-pointer">
        Free delivery for all orders over PKR850. Order your food now!
      </span>
    </div>
  );
};

export default Notification;
