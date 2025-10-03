"use client";
import React from "react";
import { TextProps } from "@/utils/constant";
import { LuArrowUpRight } from "react-icons/lu";

interface TabProps extends TextProps {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const Tab: React.FC<TabProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-t-2 border-[#D9D9D9] py-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left font-semibold py-3 cursor-pointer"
      >
        <p>{title.toUpperCase()}</p>
        <LuArrowUpRight
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      {/* Animated Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden `}
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 text-gray-600 text-base leading-relaxed mb-3">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
