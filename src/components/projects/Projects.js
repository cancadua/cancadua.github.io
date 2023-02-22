import "./projects.css";
import {forwardRef} from "react";
import {OpenBlog} from "./OpenBlog";
import {CollectDog} from "./CollectDog";
import {Todo} from "./Todo";

const Projects = (props, ref) => {


  return (
    <div ref={ref} className="container-projects">
      <h1>Projects</h1>
      <div className='projects'>
          <CollectDog/>
          <Todo/>
          <OpenBlog/>
      </div>
    </div>
  );
};

export default forwardRef(Projects);
