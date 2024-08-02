import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
