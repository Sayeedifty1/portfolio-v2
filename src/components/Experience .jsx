import React from "react";
import { FaCircle } from "react-icons/fa6";
import "tailwindcss/tailwind.css";

const experiences = [
  {
    year: "2020",
    description: "Started Learning Frontend Development",
  },
  {
    year: "2021",
    description: "Got An Internship at TCM Tech for 1 Year",
  },
  {
    year: "2022",
    description: "Got Into Freelancing and Worked On Different Platforms",
  },
  {
    year: "2023",
    description: "More To Come",
  },
];

const Experience = () => {
  return (
    <div className="  flex gap-10 align-middle my-[100px]">
      <div className="text-center text-6xl font-bold text-outline text-site-bg">
        EXPERIENCE
      </div>
      <div className="flex justify-between">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-bold">{experience.year}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="5"
                viewBox="0 0 57 5"
                fill="none"
              >
                <line
                  x1="3"
                  y1="2.5"
                  x2="56.0377"
                  y2="2.5"
                  stroke="url(#paint0_linear_3_175)"
                />
                <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_175"
                    x1="2"
                    y1="2.49999"
                    x2="56"
                    y2="2.50001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* <div className="border-t-2 border-dashed border-white w-16"></div> */}
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
