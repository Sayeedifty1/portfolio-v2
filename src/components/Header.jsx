// src/components/Header.jsx
import React from "react";
import { FaArrowRight, FaSun } from "react-icons/fa";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Navbar } from "./ui/navbar";
const Header = () => {
  const handleDownload = () => {
    window.open("/Resume phero.pdf", "_blank");
  };
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Sayeedifty1",
    },
  ];
  return (
    <header id="#home" className="bg-[#202020] text-white p-8">
      <div className="text-center">
        <h1 className="small-heading">SAYEED IFTY</h1>
        <h2 className="main-heading">
          Crafting Digital Solutions with <br />
          <span className="gradient">MERN Precision</span>
        </h2>
        <p className="desc">
          Dive into a collection of innovative projects and solutions crafted
          with the MERN stack. <br /> Developing impactful and user-centric
          solutions .
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#_"
            onClick={handleDownload}
            className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden  rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Download Resume
            </span>
            <FaArrowRight />
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>

          {/* <a
            href="#contact"
            className="border border-white text-white hover:text-gray-900 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-white transition"
          >
            <span>Contact</span> <FaArrowRight />
          </a> */}
        </div>
        {/* <div className="flex justify-center mt-[50px]">
          <div className="w-[60%]">
            <div className="mt-8 flex justify-evenly border border-white rounded-full py-2 px-4 mx-auto">
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#projects" className="text-white hover:text-gray-300">
                Projects
              </a>
              <a href="#skills" className="text-white hover:text-gray-300">
                Skills
              </a>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full border border-gray-600 ml-4">
                <FaSun className="text-white" />
              </div>
            </div>
          </div>
        </div> */}
        {/* navbar */}
        <div className="flex items-center justify-center h-[12rem] w-full">
          <Navbar
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
