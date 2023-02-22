import "./navbar.css";
const Navbar = ({about, projects, contact}) => {
    return (
        <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><button className='nav-button' onClick={about}>About</button></li>
                <li><button className='nav-button' onClick={projects}>Projects</button></li>
                <li><button className='nav-button' onClick={contact}>Contact</button></li>
            </ul>

        </header>
    );
};

export default Navbar;
