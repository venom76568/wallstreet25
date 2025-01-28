import React from "react";

import Navbar from "./Navbar";
import logo from "../public/assets/logo1.png";
import logo1 from "../public/assets/wallstreet.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 bg-[url('/assets/wallstreet-poster.jpeg')] bg-blend-difference bg-cover bg-origin-border bg-center">
      <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgb(0,0,0,0.95)] bg-opacity-[0.5]">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-white px-4 md:py-4 lg:p-10 lg:py-10 xl:px-20">
          <div className="grid grid-rows-4 gap-4 w-full h-screen items-center">
            {/* <div className="text-2xl md:text-3xl lg:text-5xl tracking-[6px] text-center py-2 self-center md:self-start mt-6 font-bold text-[#ff4e00] uppercase">
              Buy . sell . profit
            </div> */}
            {
              /* <div className="text-center w-full h-fit">
              <Image
                src={logo}
                alt="wallstreet"
                className="inline-flex justify-center md:justify-start contrast-100 scale-[1.08] lg:scale-100  lg:mt-5"
              />
              {/* <Image
                src={logo1}
                alt="wallstreet"
                className="inline-flex justify-center md:justify-start contrast-100 scale-[1.08] lg:scale-100 lg:mt-5"
              /> */
              // </div> */
            }
            <div className="z-10 h-full flex flex-col space-y-8 md:space-y-16 justify-center md:justify-end items-center">
              <a
                href="#reg"
                className="bg-gradient-to-b from-[#ff4e00] to-[#e43108] hover:from-[#fd4b55] hover:to-[#e43068] hover:scale-105 p-4 w-[55%] md:w-1/4 lg:w-[15%] text-xl text-center uppercase"
              >
                Register
              </a>
            </div>
            {/* <div className="text-center w-full h-fit">
              <Image
                src={logo1}
                alt="wallstreet"
                className="pt-12 -z-10 mt-24 inline-flex justify-center md:justify-start contrast-100 scale-[1.08] lg:scale-100  lg:mt-5"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
