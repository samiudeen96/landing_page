import Image from "next/image";
import React from "react";
import { ProductProps } from "@/utils/constant";

const ProductCard: React.FC<ProductProps> = ({ img, label }) => {
  return (
    <div className="overflow-hidden mt-2 group cursor-pointer">
      <div className="relative w-full h-80">
        <Image src={img} alt={label} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-colors duration-500 ease-in-out z-0"></div>
      </div>
      <h3 className="mt-4">{label}</h3>
    </div>
  );
};

export default ProductCard;
