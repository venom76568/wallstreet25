"use client";
import Image from "next/image";
import React from "react";
import Home from "../public/assets/logo.png";

const About = () => {
  return (
    <div className="w-full bg-white py-6 px-4" id="about">
      <div className="mx-auto grid md:grid-cols-2 lg:space-x-4">
        <Image src={Home} alt="Home" width={600} />
        <div className="flex flex-col justify-center space-y-11 p-6">
          <p className="text-[#ff4e00] text-3xl md:text-4xl xl:text-5xl font-bold uppercase tracking-tight">
            About Wall$treet
          </p>
          <p className="text-xl md:text-2xl tracking-normal text-justify lg:pr-10">
            Wallstreet is a stock trading competition arranged for investment
            enthusiasts. This event aims to test the managerial skills of the
            participants and will help them to discover the businessman/stock
            trader in them. Participants buy shares, sell stocks and interact
            with brokers looking to provide an exchange. The winners of
            Wallstreet are bestowed with hefty cash prizes.
          </p>
          <button className="text-[#ffffff] w-full md:w-1/2 xl:w-1/3 text-xl font-medium my-20 mx-auto md:mx-0 py-4 px-3 bg-[#000300] hover:scale-105 hover:text-white duration-200">
            <a
              href="https://drive.google.com/file/d/15U7R2UBw-CTT32KLVMdQZ6sq37N4lxS5/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Brochure
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
