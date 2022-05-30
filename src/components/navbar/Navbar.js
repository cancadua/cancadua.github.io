import "./navbar.css";

const Navbar = ({projects}) => {


  return (
    <div className="navbar">
      <div>
        <a className="active" href="#home">Home</a>
      </div>
      <div className={'navbar-left'}>
        <button>About</button>
        <button onClick={projects}>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
