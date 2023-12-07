import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center relative">
      <input
        className="ring-1 ring-[#9c2fea] w-full placeholder-white text-white p-4 rounded-md bg-[#F5EEFF25] bg-opacity-20 border border-[#e327f09f] focus:outline-none focus:ring-2 focus:ring-[#9c2fea]"
        type="text"
        placeholder={placeholder}
      />
      <button className="absolute top-2 right-2 searchButton p-2 rounded-md">
        <IoSearch color="#FFF" size={23} />
      </button>
    </div>
  );
};

export default SearchInput;
