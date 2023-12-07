import React from "react";
import { IoTimerOutline } from "react-icons/io5";
import heartImg from './../assets/icons/heart.svg'
import playlistAdd from './../assets/icons/playlistAdd.svg'
const ListIemContent = () => {
  return (
    <div className="container flex mx-auto w-full items-center justify-center pl-30">
      <ul className="flex flex-col pb-1 w-full">
        <div className="flex mb-1 bg-[#081A6C] select-none cursor-pointer rounded-md  flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div className="w-1/4 flex items-center justify-around  h-12">
            <img src={heartImg} alt="" />
            <div className="flex items-center">
              <img
                alt="song"
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                className="w-10 h-10 object-cover  rounded-md"
              />
              <p className="ml-2 text-slate-50">Rewrite the stars</p>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center text-slate-50 h-12">
            James Arthur
          </div>
          <div className="w-1/4 flex items-center justify-center  h-12">
            <div className="flex-1 flex items-center justify-center">
              <div className="font-normal flex items-center text-slate-50">
                <IoTimerOutline
                  color="#FFF"
                  className="mr-2 h-[1.5rem] w-[1.5rem]"
                />
                <p>03:45</p>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center  h-12">
            <div className="text-slate-50 text-xs">
              <img src={playlistAdd} alt="" />
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ListIemContent;
