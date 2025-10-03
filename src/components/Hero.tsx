"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 text-white px-4 md:px-10 py-8">
        <span className="text-md font-semibold">SERVICES / ALUMINIUM SYSTEMS</span>
        <h1 className="text-[50px] text-white font-semibold">Aluminum Systems</h1>
        <span className="text-[18px] font-semibold">
          CONTEMPORARY SYSTEMS, SEAMLESS INTEGERATION
        </span>
      </div>

      {/* Overlay + Text */}
      {/* <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Luxury Interior Fit-Outs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Crafting premium spaces in Dubai & worldwide
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg"
        >
          Get in Touch
        </motion.button>
      </div> */}
    </section>
  );
};

export default Hero;
