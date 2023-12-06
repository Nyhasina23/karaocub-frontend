import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { FaPlus, FaRegStar } from "react-icons/fa6";
import PlayListItem from "./PlayListItem";
interface PlayListItemProps {
  text: string;
}
const PlayList: React.FC<PlayListItemProps> = ({ text }) => {
  return (
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="flex">
          <TbPlaylist color="white" className="h-[1.5rem] w-[1.5rem] mr-1" />
          <h1 className="ml-2 text-lg font-semibold text-slate-100">{text}</h1>
        </div>
        <button className="flex items-center rounded-md justify-center p-2 bg-[#9C2FEA]">
          <FaPlus color="#FFF" className="h-[1.5rem] w-[1.5rem]" />
        </button>
      </div>
      {/* card */}
      <div className="mt-2 flex flex-col w-full overflow-y-scroll h-72 scrollbar-hide">
        <PlayListItem />
        <h1 className="flex items-center justify-center cursor-pointer ml-2 text-lg font-semibold text-[#9C2FEA]">
          VOIR TOUTES LES PLAYLISTS
          <FaRegStar color="#9C2FEA" className="ml-2 h-[1.5rem] w-[1.5rem]" />
        </h1>
      </div>
    </div>
  );
};

export default PlayList;
