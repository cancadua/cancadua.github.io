import "./contact.css";
import {forwardRef} from "react";
import {SiLinkedin, SiGithub, SiGmail} from 'react-icons/si';

const Contact = (props, ref) => {
  return (
    <div ref={ref} className={"container-contact"}>
      <h1>Contact</h1>\
      <div className={'contact'}>
        <a>
          <h2>
            <SiGmail style={{paddingRight: '1rem'}}/>adrian.p.galus@gmail.com
          </h2>
        </a>
        <a className={'link'} href={'https://github.com/cancadua'}>
          <h2>
            <SiGithub style={{paddingRight: '1rem'}}/>github.com/cancadua
          </h2>
        </a>
        <a className={'link'} href={'https://linkedin.com/in/adriangalus'}>
          <h2>
            <SiLinkedin style={{paddingRight: '1rem'}}/>linkedin.com/in/adriangalus
          </h2>
        </a>
      </div>

    </div>
  );
};

export default forwardRef(Contact);
