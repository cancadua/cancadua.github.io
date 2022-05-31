import "./projects.css";
import {forwardRef} from "react";

const Projects = (props, ref) => {
  return (
    <div ref={ref} className={"container-right"}>
      <h1>My projects</h1>
      <h2>Notepad</h2>
      <h2>Login</h2>
      <h2>Movies</h2>
      <h2>Shoutbox</h2>
    </div>
  );
};

export default forwardRef(Projects);
