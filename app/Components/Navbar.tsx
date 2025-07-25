import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 bg-white/10 backdrop-blur-md border-b border-white/20 fixed z-10 w-full flex items-center justify-between text-white">
      <h1 className="font-semibold text-lg">Sahel Bridge</h1>

      <div className="flex gap-6 text-sm">
        <Link href="#">
          <span className="hover:underline">Menu</span>
        </Link>
        <Link href="/product">
          <span className="hover:underline">Products</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
