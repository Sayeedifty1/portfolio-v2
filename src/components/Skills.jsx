import React from "react";
import {
  FaDatabase,
  FaChartLine,
  FaPalette,
  FaLightbulb,
} from "react-icons/fa6";
import SkillCards from "../utilities/SkillCards";

const cardData = [
  {
    title: "BRANDING",
    icon: FaDatabase,
    categories: {
      left: ["Brand Strategy", "Research & Insights"],
      right: ["Visual Identity", "Guidelines"],
    },
    description:
      "Let's start right where you are, where you have an idea or that need improvement. We'll work with you to shape your idea into a solid plan.",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    title: "ANALYTICS",
    icon: FaChartLine,
    categories: {
      left: ["Data Analysis", "Market Research"],
      right: ["Performance Metrics", "Optimization"],
    },
    description:
      "Gain insights into your data to make informed decisions and improve your business processes.",
    linkText: "Learn More",
    linkUrl: "#",
  },
  {
    title: "DESIGN",
    icon: FaPalette,
    categories: {
      left: ["UI/UX Design", "Graphic Design"],
      right: ["Branding", "Illustrations"],
    },
    description:
      "We create visually appealing and user-friendly designs that enhance user experience.",
    linkText: "Discover Designs",
    linkUrl: "#",
  },
  {
    title: "INNOVATION",
    icon: FaLightbulb,
    categories: {
      left: ["Idea Generation", "Prototyping"],
      right: ["Innovation Strategy", "Product Development"],
    },
    description:
      "Bring new ideas to life with our innovative strategies and cutting-edge technologies.",
    linkText: "Explore Innovation",
    linkUrl: "#",
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {cardData.map((data, index) => (
        <SkillCards
          key={index}
          title={data.title}
          Icon={data.icon}
          categories={data.categories}
          description={data.description}
          linkText={data.linkText}
          linkUrl={data.linkUrl}
        />
      ))}
    </div>
  );
};

export default Skills;
