import Image from "next/image";
import React from "react";
import { TextProps } from "@/utils/constant";

const AboutCard: React.FC<TextProps> = ({ title, content }) => {
  return (
    <div className="mt-2">
      <h3>{title}</h3>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default AboutCard;
