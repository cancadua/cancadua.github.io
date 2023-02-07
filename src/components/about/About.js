import "./about.css";
import {forwardRef} from "react";

const About = (props, ref) => {
  return (
    <div ref={ref} className={"container-about"}>
      <h1> About me </h1>
      <h2 className={"content"}>
        Hello, my name is Adrian. I'm graduate year IT student. Interested in full stack.
        Currently focused on front-end JavaScript & React.
      </h2>
    </div>
  );
};

export default forwardRef(About);
