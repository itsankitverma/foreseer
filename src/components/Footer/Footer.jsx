import React from "react";
import FooterBody from "./Body";
import FContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <FContactUs />
        <FooterBody />
      </section>
    </div>
  );
};
export default Footer;
