import "./projects.css";
import {forwardRef} from "react";

const Projects = (props, ref) => {
  return (
    <div ref={ref} className={"container-right"}>
      <h1>My projects</h1>
      <div className={'projects'}>
        <div>
          <h2>Collect-dog</h2>
          <a className={'img-container'} href={'https://github.com/cancadua/collect-dog'}>
            <img src={process.env.PUBLIC_URL + '/collectDog.png'} alt={''}/>
          </a>
        </div>
        <div>
          <h2>Movies</h2>
          <a className={'img-container'} href={'https://github.com/cancadua/movies'}>
            <img src={process.env.PUBLIC_URL + '/movies.png'} alt={''}/>
          </a>
        </div>
        <div>
          <h2>Todo-app</h2>
          <a className={'img-container'} href={'https://github.com/cancadua/todo-app'}>
            <img src={process.env.PUBLIC_URL + '/todo.png'} alt={''}/>
          </a>
        </div>
        <div>
          <h2>Shoutbox</h2>
          <a className={'img-container'} href={'https://github.com/cancadua/shoutbox-client'}>
            <img src={process.env.PUBLIC_URL + '/shoutbox.png'} alt={''}/>
          </a>
        </div>
        <div>
          <h2>Open-blog</h2>
          <a className={'img-container'} href={'https://github.com/cancadua/open-blog-mern-client'}>
            <img src={process.env.PUBLIC_URL + '/open-blog.png'} alt={''}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Projects);
