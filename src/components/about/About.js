import "./about.css";
import {forwardRef} from "react";

const About = (props, ref) => {
  return (
    <div ref={ref} className={"container-left"}>
      <h1 className={"header"}> About me </h1>
      <h2 className={"header"}>
         Hello, I'm Adrian, third-year IT student and IT enthusiast.
      </h2>
    </div>
  );
};

export default forwardRef(About);
