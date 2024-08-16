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
    <div className=" hover:bg-gray-200 hover:text-gray-800  border hover:border-black p-6 rounded-xl shadow-lg max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-left">{title}</h2>
        <Icon className=" w-6 h-6" />
      </div>
      <div className="flex mb-4">
        <ul className="mr-4">
          {categories.left.map((item, index) => (
            <li key={index} className="text-left ">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="mb-4 text-left ">{description}</p>
    </div>
  );
};

export default SkillCards;
