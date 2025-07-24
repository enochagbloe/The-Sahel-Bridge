import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 bg-white items-center justify-between flex shadow-2xl fixed z-10 w-full">
      <h1 className="items-center font-bold">Pure Africa harvest</h1>
      <div className="flex gap-5">
        <h3>menu</h3>
        <Link href="/product">
          <h3>Products</h3>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
