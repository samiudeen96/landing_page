import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export interface ButtonProps {
  label: string;
  path: string;
}

const Button: React.FC<ButtonProps> = ({ label, path }) => {
  return (
    <button
      className="flex items-center cursor-pointer border-2 h-fit py-4 px-6 group relative
    transition-all duration-500 ease-in-out text-center
    bg-transparent hover:bg-black hover:text-white hover:px-8 hover:border-2"
    >
      {label}
      <div
        className="hidden transition-all duration-500 ease-out
       group-hover:block"
      >
        <LuArrowUpRight size={24} />
      </div>
    </button>
  );
};

export default Button;
