import { Navbar, Footer, About, Projects, Contact } from "../../components";
import {forwardRef, useRef} from "react";

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
        projects={executeScrollToProjects}
      />
      <button onClick={executeScrollToAbout}>About</button>
      <button onClick={executeScrollToProjects}>Projects</button>
      <button onClick={executeScrollToContact}>Contact</button>
      <div>
        <About ref={scrollToAbout}/>
        <Projects ref={scrollToProjects}/>
        <Contact ref={scrollToContact}/>
      </div>
      <div ref={scrollToProjects}/>
      <div ref={scrollToContact}/>
      <Footer />
    </div>
  );
};

export default Home;
