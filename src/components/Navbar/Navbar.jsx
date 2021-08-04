import React from "react";
import { title, contactUs, navbarLinks } from "../../containers/Navbar";

function Navbar() {
  return (
    <div>
      <div className="w-screen bg-gray-100 h-20 flex justify-around items-center">
        <p className="text-3xl">{title}</p>
        <div className="gap-10 hidden md:flex">
          {navbarLinks.map((val, id) => {
            return <p className="cursor-pointer">{val.title}</p>;
          })}
        </div>
        <button className="border-4 border-yellow-600 border-opacity-100 p-1 text-yellow-600 w-36 h-12 hover:bg-yellow-600 hover:text-white transition delay-150 duration-300 ease-in-out">
          {contactUs}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
