/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  console.log(visible);
  return (
    <div>
      <div className="text-gray-400 bg-gray-900 w-screen h-20 flex justify-around items-center">
        <div className="text-3xl">Foreseer</div>
        <div>
          <div className="flex gap-10">
            <a href="#" className="text-lg hover:text-white hidden lg:block">
              Industries
            </a>
            <a href="#" className="text-lg hover:text-white hidden lg:block">
              Services
            </a>
            <a href="#" className="text-lg hover:text-white hidden lg:block">
              Product Platform
            </a>
            <a href="#" className="text-lg hover:text-white hidden lg:block">
              Career
            </a>
            <a href="#" className="text-lg hover:text-white hidden lg:block">
              Insights
            </a>
          </div>
        </div>
        <div className="p-4 bg-red-500 text-white rounded-3xl text-lg hidden lg:block hover:shadow-2xl">
          <a href="#">Contact Us</a>
        </div>
        <buttpn className="block lg:hidden">
          <GiHamburgerMenu onClick={() => setvisible(!visible)} />
        </buttpn>
      </div>
      {visible === true ? (
        <div className="flex flex-col bg-gray-100 justify-center items-center gap-10 lg:hidden py-4">
          <a href="#" className="text-lg md:block p-1">
            Industries
          </a>
          <a href="#" className="text-lg md:block p-1">
            Services
          </a>
          <a href="#" className="text-lg md:block p-1">
            Product Platform
          </a>
          <a href="#" className="text-lg md:block p-1">
            Career
          </a>
          <a href="#" className="text-lg md:block p-1">
            Insights
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
