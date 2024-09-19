import React from "react";
import { motion } from "framer-motion";

const SkillCards = ({
  title,
  Icon,
  categories,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <motion.div
      className="hover:bg-gray-200 hover:text-gray-800  border hover:border-black p-6 rounded-xl shadow-lg max-w-md mx-auto"
      whileHover={{ scale: 1.05 }}
    >
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
    </motion.div>
  );
};

export default SkillCards;
