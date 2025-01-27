import { useState } from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShow] = useState(false);
  const handleClick = () => {
    setShow(!showMenu);
  };
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className=  {showMenu? "clicked": ""} >
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
