import React from "react";
import Button from "./Button";
import { footerData } from "@/utils/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <section className="px-4 md:px-10 py-14 border-b-2 border-[#D9D9D9]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              IDEAS COME TO LIFE
              <br />
              WITH CONVERSATION.
            </h1>
            <h2 className="mt-2 text-base sm:text-lg md:text-xl">
              INFO@RAYFITOUT.COM
            </h2>
          </div>

          <Button label="DROP AN ENQUIRY" path="" />
        </div>
      </section>

      {footerData.map((item) => (
        <section
          key={item.heading}
          className="px-4 md:px-10 py-14 border-b-2 border-[#D9D9D9]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <h4 className="text-lg font-semibold mb-4">{item.heading}</h4>
            {item.children.map((child, index) => (
              <div key={index} className="text-sm sm:text-base space-y-1">
                <span className="block font-medium">{child.title}</span>
                {child.address && <p>{child.address}</p>}
                {child.email && <p>{child.email}</p>}
                {child.contact && <p>{child.contact}</p>}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-15 gap-5">
        {" "}
        <div className="flex flex-wrap sm:justify-between justify-center gap-5">
           <span>PRIVACY POLICY</span>
           <span>YOUTUBE</span>
          {" "}
        </div>
        {" "}
        <div className="flex flex-wrap sm:justify-between justify-center gap-5">
           <span>PINTREST</span>
           <span> © {new Date().getFullYear()} RayFitout</span>
          {" "}
        </div>
        {" "}
      </section>
    </footer>
  );
};

export default Footer;
