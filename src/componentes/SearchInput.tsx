import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center relative">
      <input
        className=" w-full placeholder-white text-white p-4 rounded-md bg-slate-100 bg-opacity-20 focus:border-[#E327F0] border border-[#e327f09f]"
        type="text"
        placeholder={placeholder}
      />
      <button className="absolute top-2 right-2 bg-gradient-to-r from-[#3F51A7] to-[#E327F0] p-2 rounded-md">
        <IoSearch color="#FFF" size={23} />
      </button>
    </div>
  );
};

export default SearchInput;
