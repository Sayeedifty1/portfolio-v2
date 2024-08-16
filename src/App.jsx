import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Container from "./utilities/container";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience ";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <About />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
