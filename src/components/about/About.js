import "./about.css";
import {forwardRef} from "react";

const About = (props, ref) => {
  return (
    <div ref={ref} className="container-about">
      <h1>About me</h1>
      <div className="about-text">
        Hello, my name is Adrian. I'm graduate year IT student. Interested in full stack. Currently focused on front-end JavaScript & React.
      </div>
    </div>
  );
};

export default forwardRef(About);
