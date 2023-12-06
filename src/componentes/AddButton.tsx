import React from "react";
import { RiAddBoxFill } from "react-icons/ri";

interface AddButtonProps {
  text: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text }) => {
  return (
    <button className="flex items-center justify-center p-3">
      <RiAddBoxFill color="#D141B2" className="h-[1.5rem] w-[1.5rem] mr-2" />
      <p className="text-xs text-[#D141B2] font-semibold">{text}</p>
    </button>
  );
};

export default AddButton;
