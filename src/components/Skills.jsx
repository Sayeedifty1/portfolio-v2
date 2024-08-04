import React from "react";
import { FaDatabase } from "react-icons/fa6";

const cardData = {
  title: "BRANDING",
  icon: FaDatabase, // Replace with actual URL or SVG
  categories: {
    left: ["Brand Strategy", "Research & Insights"],
    right: ["Visual Identity", "Guidelines"],
  },
  description:
    "Let's start right where you are, where you have an idea or that need improvement. We'll work with you to shape your idea into a solid plan.",
  linkText: "See Details",
  linkUrl: "#",
};

const Icon = cardData.icon;
const Skills = () => {
  return (
    <div className=" bg-gray-200 p-6 rounded-xl shadow-lg max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl  text-gray-800 ">{cardData.title}</h2>
        <Icon className="text-gray-800 w-6 h-6" />
      </div>
      <div className="flex mb-4">
        <ul className="mr-4">
          {cardData.categories.left.map((item, index) => (
            <li key={index} className="text-gray-800 text-left ">
              • {item}
            </li>
          ))}
        </ul>
        <ul>
          {cardData.categories.right.map((item, index) => (
            <li key={index} className="text-gray-800 text-left ">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 mb-4 text-left ">{cardData.description}</p>
      <p
        href={cardData.linkUrl}
        className="text-gray-800  underline text-left "
      >
        {cardData.linkText}
      </p>
    </div>
  );
};

export default Skills;
