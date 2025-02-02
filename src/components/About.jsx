import { motion } from "framer-motion";
import img from "/hero.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about__wrapper">
        <div className="about__heading">
          <h4>WER BIN ICH ?</h4>
          <h2>ÜBER MICH</h2>
          <hr />
        </div>
        <div className="about__content">
          <div className="flex items-center justify-center mt-10">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                {/* Removed priority prop */}
                <img
                  src={img}
                  alt="Ricardo portrait"
                  width="192"
                  height="192"
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>

              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
          </div>
          <motion.h3
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hallo! Ich bin <br />
            <span className="gradient font-bold">Md. Abu Sayeed Ifty.</span>
          </motion.h3>
          <motion.p
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Ich bin ein Frontend-Entwickler mit über einem Jahr beruflicher
            Erfahrung. Mein Ziel ist es, <br /> einzigartige, hochmoderne
            Websites zu erstellen und beeindruckende Nutzererlebnisse zu <br />
            gestalten. Ich bin selbstbewusst, von Natur aus neugierig und stets
            bestrebt, meine Fähigkeiten <br /> mit jedem neuen Designproblem
            weiterzuentwickeln.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
