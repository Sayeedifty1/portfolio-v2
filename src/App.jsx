import Header from "./components/Header";
import Container from "./utilities/container";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience ";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Repos } from "./components/Repos";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <About />
        <FeaturedProjects />
        <Skills />
        <Repos />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
