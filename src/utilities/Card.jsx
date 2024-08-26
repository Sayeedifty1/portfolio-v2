import React from "react";
import { useEffect, useRef } from "react";

const Card = ({
  year,
  company,
  description,
  from,
  timeframe,
  services,
  caseStudiesLink,
  websiteLink,
}) => {
  return (
    <div className="">
      <div className="text-white p-6 rounded-lg text-left w-3/4">
        <h2 className="text-lg ">{year}</h2>
        <h3 className="text-2xl font-medium mb-[10px]">{company}</h3>
        {/* <p className="text-gray-300 mb-[30px]">{description}</p> */}

        {/* <div className="flex justify-between gap-9 mt-4">
          <div>
            <p className="text-gray-500">From</p>
            <p>{from}</p>
          </div>
          <div>
            <p className="text-gray-500">Timeframe</p>
            <p>{timeframe}</p>
          </div>
          <div>
            <p className="text-gray-500">Services</p>
            <p>{services}</p>
          </div>
        </div> */}

        <div className="flex justify-between mt-4">
          <button className="flex items-center hover:bg-black text-white text-lg px-4 py-2 rounded-full underline">
            <svg
              className="w-4 h-4 mr-2"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
            </svg>
            Learn More
          </button>
          <button className="flex items-center hover:bg-black text-white text-lg  px-4 py-2 rounded-full underline">
            <svg
              className="w-4 h-4 mr-2"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
            </svg>
            View Website
          </button>
        </div>
        <div>
          <img
            className="rounded-xl  mt-8"
            src="https://i.pinimg.com/550x/20/e3/48/20e3484fc1e73425ce02adaaee505449.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
