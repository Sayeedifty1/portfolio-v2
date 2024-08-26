import React from "react";
import { FaCode, FaServer, FaLaptopCode, FaTools } from "react-icons/fa";

import SkillCards from "../utilities/SkillCards";

const cardData = [
  {
    title: "Front End",
    icon: FaCode,
    categories: {
      left: ["HTML & CSS", "JavaScript", "React", "UI/UX Design"],
    },
    description:
      "Specializing in building beautiful, responsive, and user-friendly interfaces with the latest web technologies.",
  },
  {
    title: "Back End",
    icon: FaServer,
    categories: {
      left: ["Node.js", "Express", "Databases", "APIs"],
    },
    description:
      "Develop robust backend systems that support scalable and secure applications, with efficient database management.",
  },
  {
    title: "Software Development",
    icon: FaLaptopCode,
    categories: {
      left: [
        "Application Development",
        "Testing & QA",
        "Deployment",
        "Maintenance",
      ],
    },
    description:
      "End-to-end software development services, from planning and design to implementation, testing, and maintenance.",
  },
  {
    title: "Server Maintenance",
    icon: FaTools,
    categories: {
      left: ["Server Setup", "Security", "Monitoring", "Performance Tuning"],
    },
    description:
      "Comprehensive server maintenance services to ensure optimal performance, security, and reliability of your systems.",
  },
];

const Skills = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-left mb-[50px]">
        <h1 className="main-heading">Skills & Expertise</h1>
        <p className="desc">
          We build website that drives traffic, engagement and conversion.
          <br />
          Building the frictionless customer journey.
        </p>
      </div>
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
    </div>
  );
};

export default Skills;
