import { Navbar, Footer, About, Projects, Contact } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
