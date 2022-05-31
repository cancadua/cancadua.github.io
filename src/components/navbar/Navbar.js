import "./navbar.css";

const Navbar = ({about, projects, contact}) => {


  return (
    <div className="navbar">
      <a className="active">Home</a>
      <div className={'navbar-left'}>
        <button onClick={about}>About</button>
        <button onClick={projects}>Projects</button>
        <button onClick={contact}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
