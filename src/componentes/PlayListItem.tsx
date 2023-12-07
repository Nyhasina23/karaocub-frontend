import React from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";
const PlayListItem = () => {
  return (
    <div className="w-full">
      <div className="container flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col  p-4 pl-0 pr-0 w-full">
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer  custom-bg rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <BiSolidPlaylist
                color="#8F00FF"
                className="h-[1.5rem] w-[1.5rem] mr-2"
              />
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium text-slate-50">Cup of water</div>
                <div className="text-gray-400 text-sm">15 chansons</div>
              </div>
              <div className="text-gray-600 text-xs">
                <FaRegCirclePlay
                  color="#8F00FF"
                  className="h-[1.5rem] w-[1.5rem] mr-2"
                />
              </div>
            </div>
          </li>
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer  custom-bg rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <BiSolidPlaylist
                color="#8F00FF"
                className="h-[1.5rem] w-[1.5rem] mr-2"
              />
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium text-slate-50">Training</div>
                <div className="text-gray-400 text-sm">3 chansons</div>
              </div>
              <div className="text-gray-600 text-xs">
                <div className="text-gray-600 text-xs">
                  <FaRegCirclePlay
                    color="#8F00FF"
                    className="h-[1.5rem] w-[1.5rem] mr-2"
                  />
                </div>
              </div>
            </div>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default PlayListItem;
