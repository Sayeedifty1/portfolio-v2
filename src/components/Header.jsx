// src/components/Header.jsx
import React from "react";
import { FaArrowRight, FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#202020] text-white p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-[80px]">SAYEED IFTY</h1>
        <h2 className="mt-4 text-4xl font-bold mb-[32px]">
          Crafting Digital Solutions with <br /> MERN Precision
        </h2>
        <p className="mt-4 text-lg">
          Dive into a collection of innovative projects and solutions crafted
          with the MERN stack. <br /> Developing impactful and user-centric
          solutions .
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#notion-templates"
            className="border border-white text-white hover:text-gray-900 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-white transition"
          >
            <span>Download Resume</span> <FaArrowRight />
          </a>
          <a
            href="#learn-notion"
            className="border border-white text-white hover:text-gray-900 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-white transition"
          >
            <span>Contact</span> <FaArrowRight />
          </a>
        </div>
        <div className="flex justify-center mt-[50px]">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
