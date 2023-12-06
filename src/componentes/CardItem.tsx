import React from "react";

interface CardItemProps {
  image?: string;
  text: string;
}

const CardItem: React.FC<CardItemProps> = ({ image, text }) => {
  return (
    <div className="mr-7 mb-4 group relative block custom-rounded w-[15rem] h-[12rem] cursor-pointer">
      <img
        alt="Developer"
        src={image}
        className="custom-rounded absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-75"
      />

      <div className="relative p-4 flex justify-start items-start h-full">
        <p className="text-base font-bold text-white sm:text-base">{text}</p>
      </div>
    </div>
  );
};

export default CardItem;
