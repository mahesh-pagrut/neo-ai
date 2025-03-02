import React from "react";
import { FaInstagram, FaLinkedin, FaRobot } from "react-icons/fa";
import "../App.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
      <a href="https://portfolio-wg4w.vercel.app/" target="_blank" rel="noopener noreferrer">
        <FaRobot className="icon" />
        </a>
        <a href="https://www.instagram.com/imaxvibe/?igsh=bHJkcG8yM2ZnNmEx#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/mahesh-pagrut-%F0%9F%8E%AE-887535274/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      <p className="footer-text">Built by Mahesh | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
