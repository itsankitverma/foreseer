import React from "react";
import ITextBox from "../../Pages/ITextBox";
import ILable from "../../Pages/ILable";
import ITextArea from "../../Pages/ITextArea";
import {
  contactUs,
  contactUsDes,
  Name,
  Email,
  Message,
  Send,
  NameLower,
  EmailLower,
  MessageLower,
} from "../../containers/Footer";

export default function ContactUs() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          {contactUs}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {contactUsDes}
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <ILable name={NameLower} NAME={Name} />
              <ITextBox type="text" id={NameLower} name={NameLower} />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <ILable name={EmailLower} NAME={Email} />
              <ITextBox type="email" id={EmailLower} name={EmailLower} />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <ILable name={MessageLower} NAME={Message} />
              <ITextArea id={MessageLower} name={MessageLower} />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {Send}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
