import React from "react";
import { title, navbarLinks } from "../../containers/Navbar";
import {
  Connectwithus,
  ContactRegion,
  ContactNumber,
  ContactEmail,
  Copyright,
} from "../../containers/Footer";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Hlinks from "../../Pages/Hlinks";

export default function Body() {
  return (
    <div className="w-full h-full text-white bg-gray-900">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10">
        <div className="w-52 m-2">
          <h1 className="font-bold mb-6 -ml-9 text-4xl">{title}</h1>
          {navbarLinks.map((val, index) => {
            return (
              <div key={index}>
                <Hlinks id={index} name={val.title} />
              </div>
            );
          })}
        </div>
        <div className="w-52 mt-12">
          <Hlinks key="1" id="1" name={Connectwithus} />
          <div className="flex justify-center items-center flex-col mr-14">
            <FaInstagram className="text-3xl"></FaInstagram>
            <FaFacebook className="text-3xl mt-6"></FaFacebook>
            <FaTwitter className="text-3xl mt-6"></FaTwitter>
          </div>
        </div>
        <div className="w-52 m-2 justify-start">
          <div className="flex justify-start flex-col text-sm leading-5">
            <Hlinks key="1" id="1" name={ContactRegion} />
            <Hlinks key="2" id="1" name={ContactNumber} />
            <Hlinks key="3" id="1" name={ContactEmail} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-1">
        &copy; {new Date().getFullYear()} {Copyright} <p> {title} </p>
      </div>
    </div>
  );
}
