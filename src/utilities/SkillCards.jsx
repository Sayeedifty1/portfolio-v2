import React from "react";

const SkillCards = ({
  title,
  Icon,
  categories,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <div className=" bg-gray-200 p-6 rounded-xl shadow-lg max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl  text-gray-800 ">{title}</h2>
        <Icon className="text-gray-800 w-6 h-6" />
      </div>
      <div className="flex mb-4">
        <ul className="mr-4">
          {categories.left.map((item, index) => (
            <li key={index} className="text-gray-800 text-left ">
              • {item}
            </li>
          ))}
        </ul>
        <ul>
          {categories.right.map((item, index) => (
            <li key={index} className="text-gray-800 text-left ">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 mb-4 text-left ">{description}</p>
      <p href={linkUrl} className="text-gray-800  underline text-left ">
        {linkText}
      </p>
    </div>
  );
};

export default SkillCards;
