/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { contactUs, navbarLinks, title } from "../../containers/Navbar";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <div className="text-gray-400 bg-gray-900 w-screen h-20 flex justify-around items-center">
        <div className="text-3xl">{title}</div>
        <div>
          <div className="flex gap-10">
            {navbarLinks.map((val, id) => {
              return (
                <a
                  href={val.rlink}
                  className="text-lg hover:text-white hidden lg:block"
                  key={id}
                >
                  {val.title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="p-2 bg-red-500 text-white rounded-3xl text-lg hidden lg:block hover:shadow-2xl">
          <a href="#">{contactUs}</a>
        </div>
        <buttpn className="block lg:hidden">
          <GiHamburgerMenu onClick={() => setvisible(!visible)} />
        </buttpn>
      </div>
      {visible === true ? (
        <>
          {navbarLinks.map((val, id) => {
            return (
              <div
                key={id}
                className="flex flex-col bg-gray-100 justify-center items-center gap-10 lg:hidden py-4"
              >
                <a href={val.rlink} className="text-lg md:block p-1">
                  {val.title}
                </a>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
