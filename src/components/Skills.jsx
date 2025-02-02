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
      "Spezialisiert auf die Erstellung schöner, responsiver und benutzerfreundlicher Oberflächen mit den neuesten Web-Technologien.",
  },
  {
    title: "Back End",
    icon: FaServer,
    categories: {
      left: ["Node.js", "Express", "Datenbanken", "APIs"],
    },
    description:
      "Entwicklung robuster Backend-Systeme für skalierbare und sichere Anwendungen mit effizientem Datenbankmanagement.",
  },
  {
    title: "Software entwicklung",
    icon: FaLaptopCode,
    categories: {
      left: [
        "Anwendungsentwicklung",
        "Testing & Qualitätssicherung",
        "Deployment",
        "Wartung",
      ],
    },
    description:
      "End-to-End-Softwareentwicklung – von Planung und Design bis hin zur Implementierung, Prüfung und Wartung.",
  },
  {
    title: "Serverwartung",
    icon: FaTools,
    categories: {
      left: [
        "Servereinrichtung",
        "Sicherheit",
        "Überwachung",
        "Performance-Optimierung",
      ],
    },
    description:
      "Umfassende Serverwartung für optimale Leistung, Sicherheit und Zuverlässigkeit Ihrer Systeme.",
  },
];

const Skills = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-left mb-[50px]">
        <h1 className="main-heading">Fähigkeiten & Expertise</h1>
        <p className="desc">
          Wir entwickeln Websites, die Traffic, Engagement und Conversions
          steigern.
          <br />
          Für eine nahtlose Customer Journey.
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
