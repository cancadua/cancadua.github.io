import "./footer.css";

const Footer = () => {
  return (
    <div className={"footer"}>
      <span className={"sign"}> Adrian Galus | {new Date().getFullYear()} </span>
    </div>
  );
};

export default Footer;
