import "./contact.css";
import {forwardRef} from "react";
import {SiLinkedin, SiGithub} from 'react-icons/si';
import {HiOutlineMail} from 'react-icons/hi';

const Contact = (props, ref) => {
  return (
    <div ref={ref} className="container-contact">
      <h1>Contact</h1>
      <div className='contact'>
        <a className='link' style={{cursor: 'text'}}>
          <HiOutlineMail/>
          <div>
            adr.galus@gmail.com
          </div>
        </a>
        <a className='link' href={'https://github.com/cancadua'}>
          <SiGithub/>
          <div>
            github.com/cancadua
          </div>
        </a>
        <a className='link' href={'https://linkedin.com/in/adriangalus'}>
          <SiLinkedin/>
          <div>
            linkedin.com/in/a-galus
          </div>
        </a>
      </div>
    </div>
  );
};

export default forwardRef(Contact);
