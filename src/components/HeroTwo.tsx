"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonWhite from "./ButtonWhite";

const HeroTwo = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden mb-32">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero2.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <section className="flex flex-col md:flex-row px-4 md:px-10 sm:items-center justify-between w-full relative z-10">
        <div className="text-white gap-4 md:gap-10 py-6 md:py-8">
          <p className="text-xs sm:text-sm md:text-base">
            SEAMLESS INTEGERATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mt-4 md:mt-6 leading-tight">
            BESPOKE SYSTEMS, <br /> CUSTOM MADE FOR YOUR SPACE
          </h2>
        </div>

        <div className="mt-6 md:mt-0">
          <ButtonWhite label="DROP AN INQUIRY" path="" />
        </div>
      </section>
    </section>
  );
};

export default HeroTwo;
