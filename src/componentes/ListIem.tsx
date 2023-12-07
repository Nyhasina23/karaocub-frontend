import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { TbPlaylist } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import ListIemContent from "./ListIemContent";
interface ListItemProps {
  type: string;
  text: string;
  info: string;
  icon: string;
}

export const IconHeader: React.FC<any> = ({ type }): any => {
  switch (type) {
    case "suggest":
      return (
        <MdOutlineSlowMotionVideo
          color="white"
          className="h-[1.5rem] w-[1.5rem] mr-1"
        />
      );
    case "event":
      return (
        <BsCalendarEvent color="white" className="h-[1.5rem] w-[1.5rem] mr-1" />
      );
    case "playlist":
      return (
        <TbPlaylist color="white" className="h-[1.5rem] w-[1.5rem] mr-1" />
      );
  }
};
const ListIem: React.FC<ListItemProps> = ({ type, text, info, icon }) => {
  return (
    <div className="mr-20">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex">
          <IconHeader type={type} />
          <h1 className="ml-2 text-lg font-semibold text-slate-100">{text}</h1>
        </div>
        <h1 className="flex items-center ml-2 text-lg font-semibold text-[#9C2FEA]">
          {info}
          {icon === "suggest" && (
            <button className="flex items-center rounded-md justify-center p-2 bg-[#9C2FEA]">
              <LuRefreshCcw color="#FFF" className="h-[1.5rem] w-[1.5rem]" />
              <p className="text-xs text-[#9C2FEA] font-semibold">{info}</p>
            </button>
          )}
          {icon === "add-playlist" && (
            <button className="flex items-center rounded-md justify-center p-2 bg-[#9C2FEA]">
              <FaPlus color="#FFF" className="h-[1.5rem] w-[1.5rem]" />
              <p className="text-xs text-[#9C2FEA] font-semibold">{info}</p>
            </button>
          )}
        </h1>
      </div>
      {/* card */}
      <div className="mt-2 flex flex-wrap overflow-y-scroll h-[17rem] scrollbar-hide mb-2">
        <ListIemContent />
        <ListIemContent />
        <ListIemContent />
        <ListIemContent />
        <ListIemContent />
      </div>
    </div>
  );
};

export default ListIem;
