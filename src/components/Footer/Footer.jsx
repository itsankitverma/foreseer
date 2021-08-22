import React from "react";
import { title, navbarLinks, contactUs } from "../../containers/Navbar";
import Hlinks from "../../Pages/Hlinks";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
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
              <Hlinks key="1" id="1" name="Connect with us" />
              <div className="flex justify-center items-center flex-col mr-14">
                <FaInstagram className="text-3xl"></FaInstagram>
                <FaFacebook className="text-3xl mt-6"></FaFacebook>
                <FaTwitter className="text-3xl mt-6"></FaTwitter>
              </div>
            </div>
            <div className="w-52 m-2 justify-start">
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
      </section>
    </div>
  );
};
export default Footer;
