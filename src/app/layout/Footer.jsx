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
      <div className="copyright">&copy; {date.getFullYear()} Anistream Entertainment</div>

      {/* 
        FOOTER MENU
        _includes footer menu links (e.g. bout, contact, etc.)
      */}
      <ul className="menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Anistream</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
