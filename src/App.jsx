import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Container from "./utilities/container";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";

function App() {
  return (
    <Container>
      <Header />
      <FeaturedProjects />
      <Skills />
    </Container>
  );
}

export default App;
