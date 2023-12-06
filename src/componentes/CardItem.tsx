import React from "react";

const CardItem = () => {
  return (
    <div className="mr-7 mb-4 group relative block custom-rounded w-[200px] h-[220px] cursor-pointer">
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="custom-rounded absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-60"
      />

      <div className="relative p-4 flex justify-center items-center h-full">
        <p className="text-base font-bold text-white sm:text-base">
          Tony Wayne
        </p>
      </div>
    </div>
  );
};

export default CardItem;
