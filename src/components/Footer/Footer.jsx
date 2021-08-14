import React from "react";
import { title, navbarLinks, contactUs } from "../../containers/Navbar";
import Hlinks from "../../Pages/Hlinks";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-blue-100 mt-6">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10">
        <div className="w-52 m-2">
          <h1 className="font-bold mb-6 -ml-9 text-4xl">{title}</h1>
          {navbarLinks.map((val, index) => {
            return (
              <div key={index}>
                {" "}
                <Hlinks id={index} name={val.title} />
              </div>
            );
          })}
        </div>
        <div className="w-52 mt-12">
          <Hlinks key="1" id="1" name="Connect with us" />
          <div className="flex justify-center items-center flex-col mr-14">
            <FaInstagram className="text-3xl"></FaInstagram>
            <FaFacebook className="text-3xl mt-6"></FaFacebook>
            <FaTwitter className="text-3xl mt-6"></FaTwitter>
          </div>
        </div>
        <div className="w-52 m-2 justify-start">
          <button
            data-testid="contactId"
            className="mb-10 border-4 border-yellow-600 border-opacity-100 p-1 text-yellow-600 w-36 h-12 hover:bg-yellow-600 hover:text-white transition delay-150 duration-300 ease-in-out rounded-lg"
          >
            {contactUs}
          </button>
          <div className="flex justify-start flex-col text-sm leading-5">
            <Hlinks key="1" id="1" name="INDIA" />
            <Hlinks key="2" id="1" name="+91-9999999999" />
            <Hlinks key="3" id="1" name="contact@foreseer.in" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-1">
        &copy; {new Date().getFullYear()} Copyright: <p> {title} </p>
      </div>
    </div>
  );
};
export default Footer;
