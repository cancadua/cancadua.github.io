import "./about.css";
import {forwardRef} from "react";

const About = (props, ref) => {
  return (
    <div ref={ref} className="container-about">
      <h1>About</h1>
      <div className="about-text">
        Hello, my name is Adrian. I'm ambitious final semester student specialised in software engineering. Interested in fullstack, but for now focused on frontend (JS & React). I'm open-minded, flexible, eager to learn new skills and accept challenges.
      </div>
    </div>
  );
};

export default forwardRef(About);
