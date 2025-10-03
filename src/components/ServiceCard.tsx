import Image from "next/image";
import React from "react";
import { ProductProps } from "@/utils/constant";

const ServiceCard: React.FC<ProductProps> = ({ img, label }) => {
  return (
    <div className="overflow-hidden mt-2 group cursor-pointer">
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src={img}
          alt={label}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h4 className="text-white text-xl font-semibold">{label}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
