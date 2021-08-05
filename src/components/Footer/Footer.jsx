import React from "react";
import { title, navbarLinks } from "../../containers/Navbar";
import Hlinks from "../../Pages/Hlinks";

const Footer = () => {
  return (
    <div className="w-full h-full bg-blue-100 mt-6">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 h-72">
        <div className="w-52 m-2">
          <h1 className="font-bold mb-6 -ml-9" style={{ fontSize: "2rem" }}>
            {title}
          </h1>
          {navbarLinks.map((val, index) => (
            <Hlinks id={index} name={val.title} />
          ))}
        </div>
        <div className="w-52 m-2">
          <Hlinks id="1" name="Connect with us" />
        </div>
        <div className="w-52 m-2">div 3</div>
      </div>
      <div className="flex justify-center items-center pt-1">
        &copy; {new Date().getFullYear()} Copyright: <p> {title} </p>
      </div>
    </div>
  );
};
export default Footer;
