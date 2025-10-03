import React from "react";

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <div className="mb-5">
      <h2>{mainTitle}</h2>
      {subTitle && <p className="">{subTitle}</p>}
    </div>
  );
};

export default Title; 
