import { Navbar, Footer, About, Projects, Contact } from "../../components";
import { useRef } from "react";
import "./home.css";

const Home = () => {
  const scrollToAbout = useRef(null);
  const scrollToProjects = useRef(null);
  const scrollToContact = useRef(null);

  const executeScrollToAbout = () => scrollToAbout.current.scrollIntoView()
  const executeScrollToProjects = () => scrollToProjects.current.scrollIntoView()
  const executeScrollToContact = () => scrollToContact.current.scrollIntoView()

  return (
    <div>
      <Navbar
        about={executeScrollToAbout}
        projects={executeScrollToProjects}
        contact={executeScrollToContact}
      />
      <div>
        <About ref={scrollToAbout}/>
        <Projects ref={scrollToProjects}/>
        <Contact ref={scrollToContact}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
