import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">
      {/* 
        ...
        FOOTER COPYRIGHT
        _display the copyright infringement
        ...
      */}
      <div className="copyright">&copy; {date.getFullYear()} Animazing Entertainment</div>

      {/* 
        FOOTER MENU
        _includes footer menu links (e.g. bout, contact, etc.)
      */}
      <ul className="menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Animazing</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/privacy">Terms</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
