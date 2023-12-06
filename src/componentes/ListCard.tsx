import React from "react";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiMicrophoneFill } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import CardItem from "./CardItem";
interface ListCardProps {
  type: string;
  text: string;
  info: string;
}

export const IconHeader: React.FC<any> = ({ type }): any => {
  switch (type) {
    case "category":
      return (
        <BiCategory color="white" className="h-[1.5rem] w-[1.5rem] mr-1" />
      );
    case "video":
      return (
        <MdOutlineSlowMotionVideo
          color="white"
          className="h-[1.5rem] w-[1.5rem] mr-1"
        />
      );
    case "guest":
      return (
        <PiMicrophoneFill
          color="white"
          className="h-[1.5rem] w-[1.5rem] mr-1"
        />
      );
  }
};

const ListCard: React.FC<ListCardProps> = ({ type, text, info }) => {
  return (
    <div>
      {/* header */}
      <div className="flex justify-between">
        <div className="flex">
          <IconHeader type={type} />
          <h1 className="ml-2 text-lg font-semibold text-slate-100">{text}</h1>
        </div>
        <h1 className="flex items-center ml-2 text-lg font-semibold text-[#9C2FEA]">
          {info}
          {info && (
            <FaRegStar color="#9C2FEA" className="ml-2 h-[1.5rem] w-[1.5rem]" />
          )}
        </h1>
      </div>
      {/* card */}
      <div className="mt-8 flex flex-wrap">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default ListCard;
