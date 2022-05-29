import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a className="active" href="#home">Home</a>
      </div>
      <div className={'navbar-left'}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
