import React from "react";
import { SideBar } from "../../componentes/SideBar";
import SearchInput from "../../componentes/SearchInput";
import ListCard from "../../componentes/ListCard";
import ListIem from "../../componentes/ListIem";
import PlayList from "../../componentes/PlayList";

const UserPage = () => {
  return (
    <div className=" h-screen overscroll-y-none">
      <div className="flex mb-4">
        <div className="w-[18rem] bg-gray-400 h-12 z-10">
          <SideBar />
        </div>
        <div className="w-[calc(100%-3rem)]  h-[calc(100vh-3rem)] mt-4 ml-8 mr-20 p-4">
          {/* header  */}
          <div className="flex items-center mb-8">
            <h1 className="font-karaocub text-5xl text-slate-50">Hey,</h1>
            <h1 className="ml-1 text-3xl text-slate-50 font-bold mt-3">
              Hervé!
            </h1>
          </div>
          {/* search-input */}
          <div className="w-[60%]">
            <SearchInput placeholder="Rechercher une vidéo ..." />
          </div>
          <div className="separator mt-8"></div>
          {/* <hr className=" absolute top-15 left-0 !p-0  !-ml-0 !mt-20 mb-4  w-[100%]  !border-[#6c697059]" /> */}

          <div className="mt-6">
            <ListCard
              type="category"
              text="Catégories"
              info="Voir toutes les catégories"
            />
          </div>
          <div className="separator mt-8"></div>
          <div className="mt-6">
            <div className="flex mb-4 justify-between">
              <div className="w-full pr-4">
                <ListIem
                  type="suggest"
                  text="Nos suggestions"
                  info=""
                  icon="suggest"
                />
              </div>
              <div className="w-1/2 pl-4">
                <PlayList text="Vos playlists" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
