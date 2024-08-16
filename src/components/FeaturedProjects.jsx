import React from "react";
import Card from "../utilities/Card";

const FeaturedProjects = () => {
  return (
    <div className="text-white py-8 ">
      <h4 className="text-base mb-2">MY WORK</h4>
      <h2 className="text-5xl mb-[60px]">Featured Projects</h2>
      {/*  project cards  */}
      <div className="flex gap-8">
        <Card
          year={2023}
          company="BunnyCDN"
          description="BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network."
          from="Thailand"
          timeframe="2 Weeks"
          services="Website, Illustration"
          caseStudiesLink="#" // Replace with actual case studies link
          websiteLink="https://bunnycdn.com"
        />
        <Card
          year={2023}
          company="BunnyCDN"
          description="BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network."
          from="Thailand"
          timeframe="2 Weeks"
          services="Website, Illustration"
          caseStudiesLink="#" // Replace with actual case studies link
          websiteLink="https://bunnycdn.com"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
