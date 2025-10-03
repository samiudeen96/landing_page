import Image from "next/image";
import React from "react";
import { ProductProps } from "@/utils/constant";

const OtherServiceCard: React.FC<ProductProps> = ({ img, label }) => {
  return (
    <div className="overflow-hidden mt-2 cursor-pointer">
  <div className="relative w-full h-[450px] shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:translate-x-1">
    <Image
      src={img}
      alt={label}
      fill
      priority
      className="object-cover "
    />

    <div className="absolute inset-0 flex justify-center items-center">
      <h4 className="text-white text-2xl font-semibold">{label}</h4>
    </div>
  </div>
</div>

  );
};

export default OtherServiceCard;
