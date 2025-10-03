
import React from "react";
import { menu } from "@/utils/constant";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 md:px-10 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-900">RayFitout</div>
      <ul className="hidden md:flex gap-8 text-gray-700">
        {menu.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:text-gray-900">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
