import { Navbar, Footer } from "../../components";
import { About } from "../";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
