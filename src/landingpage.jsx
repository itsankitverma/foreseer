/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Helmet } from "react-helmet";

const Landingpage = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
      </Helmet>
      {/* navigation bar */}
      <div className="background text-white relative">
        <div className="flex justify-between items-center px-20 py-6 sticky top-0 gap-10">
          <div className="text-4xl">Foreseer</div>
          <div className="hidden justify-around gap-10 cursor-pointer xl:flex">
            <a href="#get-started whitespace-nowrap">Get Started</a>
            <a href="#services">Popular Professional Services</a>
            <a href="#what-we-offer">What We Offer</a>
            <a href="#community-speaks">Community Speaks</a>
            <a href="#contact-us">Contact Us</a>
          </div>
          <div>
            <GiHamburgerMenu
              className="text-base flex xl:hidden"
              onClick={() => setvisible(!visible)}
            />
          </div>
        </div>
        {visible ===true? <div className="flex xl:hidden flex-col items-center justify-center  text-white border-b-2 border-white">
          <a className="p-4" href="#get-started whitespace-nowrap">Get Started</a>
          <a className="p-4" href="#services">Popular Professional Services</a>
          <a className="p-4" href="#what-we-offer">What We Offer</a>
          <a className="p-4" href="#community-speaks">Community Speaks</a>
          <a className="p-4" href="#contact-us">Contact Us</a>
        </div>
        :
        ""}
       
        <div className="xl:absolute xl:bottom-60 xl:pl-60 h-96 flex items-center justify-center flex-col">
          <h1 className="text-base xl:text-3xl">
            Get started with the perfect freelance <br /> services for your
            business
          </h1>
          <div className="p-4 mt-4 bg-gray-800 w-max rounded-xl cursor-pointer hover:border-2 hover:border-white">
            <a href="#contact-us">Get in touch</a>
          </div>
        </div>
      </div>
      {/* popular services */}
      <div id="services">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-yellow-900"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-yellow-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Popular professional services
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  When talented engineers meet the right opportunity, the right
                  product / service is delivered
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://cdn.pixabay.com/photo/2017/06/10/07/30/web-2389250_960_720.jpg"
                    width="1203"
                    height="503"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Frontend Developement
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Assistance provided in - ReactJS, Vue JS, Next JS
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?cs=srgb&dl=pexels-christina-morillo-1181244.jpg&fm=jpghttps://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?cs=srgb&dl=pexels-christina-morillo-1181244.jpg&fm=jpg"
                    width="1204"
                    height="504"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Backend Development
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Assistance provided in - C#, Java.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://cdn.pixabay.com/photo/2018/02/12/14/01/devops-3148408_960_720.jpg"
                    width="1205"
                    height="505"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Devops
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Devops, AWS Support
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* hero card */}
      <div
        className="backgroundhero flex flex-col items-center justify-center"
        id="what-we-offer"
      >
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg"
                width="460"
                height="500"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-7">
                    A whole world of freelance talent at your fingertips
                  </h2>
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    The best for every budget
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3 ">
                    Quality work done quickly
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    Find the right freelancer to begin working on your project
                    within minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Protected payments, every time
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    24/7 support
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* testimonials */}
      <section className="body-font" id="community-speaks">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 items-center justify-center">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/300x300"
                />
                <p className="leading-relaxed">
                  "You won't regret it. Web developer has got everything I need.
                  I would also like to say thank you to all your staff."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">
                  "Very easy to use, nicely built. Thank you."
                </p>
                <span className="inline-  block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact us */}
      <section
        className="body-font relative border-black border-t-2"
        id="contact-us"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
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
                  <label for="name" className="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-opacity-40 border-gray-700 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-indigo-400">contact-foreseer@gmail.com</a>
                <p className="leading-normal my-5">Bangalore</p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="body-font border-t-2 border-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <span className="ml-3 text-xl">Foreseer</span>
          </a>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
            © 2021 Foreseer
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
