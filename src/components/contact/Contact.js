import "./contact.css";
import {forwardRef} from "react";

const Contact = (props, ref) => {
  return (
    <div
      ref={ref}
      className={"container-left"}
      style={{
        animationDelay: "4s",
        animationFillMode: "forwards",
        opacity: "0"
      }}
    >
      <h1>Contact</h1>
      <h2>@ adrian.p.galus@gmail.com</h2>
      <h2>g github.com/cancadua</h2>
      <h2>l linkedin.com/in/adriangalus</h2>
    </div>
  );
};

export default forwardRef(Contact);
