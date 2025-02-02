import AnimationHook from "../hooks/AnimationHook";
import Card from "../utilities/Card";
import projects from "../../project";
import { useState } from "react";
import clsx from "clsx";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <AnimationHook>
      <div className="text-white py-8 ">
        <h4 className="small-heading">MEINE ARBEIT</h4>
        <h2 className="main-heading mb-[60px]">Ausgewählte Projekte</h2>

        {/*  project cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              year={project.year}
              name={project.name}
              img={project.img}
              description={project.info}
              from={project.from}
              timeframe={project.timeframe}
              services={project.services}
              caseStudiesLink={project.caseStudiesLink}
              websiteLink={project.link}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className={clsx(
              `dark:text-white  dark:hover:text-gray-200 text-black hover:text-gray-800 px-4 h-12 font-semibold bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 border-2 border-primary/70 flex items-center`,
              showAll && "translate-y-4",
              (!showAll || showAll) && "pointer-events-auto"
            )}
            onClick={handleSeeMoreClick}
          >
            {showAll ? "Collapse" : "Mehr anzeigen"}
          </button>
        </div>
      </div>
    </AnimationHook>
  );
};

export default FeaturedProjects;
