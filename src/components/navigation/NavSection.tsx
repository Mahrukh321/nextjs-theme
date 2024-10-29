"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  style: string;
  arrow?: boolean;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  blog: boolean;
};
const NavSection = ({ style, arrow }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        {/* <li className={dropdown.home ? "rv-dropdown-active" : ""}>
          <a
            className={arrow ? "rv-arrow-icon" : "dropdown-btn"}
            role="button"
            onClick={() => handleToggleDropdown("home")}
          >
            Home
          </a>

          <ul className="sub-menu">
            <li>
              <Link to="/">Software</Link>
            </li>
            <li>
              <Link to="/app-landing">App landing</Link>
            </li>
            <li>
              <Link to="/seo">Seo</Link>
            </li>
            <li>
              <Link to="/security">IT Security</Link>
            </li>
            <li>
              <Link to="/it-service">IT Service</Link>
            </li>
          </ul>
        </li> */}
         <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a
            className={arrow ? "rv-arrow-icon" : "dropdown-btn"}
            role="button"
            onClick={() => handleToggleDropdown("pages")}
          >
            Pages
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/shop-sidebar">Shop Sidebar</Link>
            </li>
            <li>
              <Link to="/shop/wireless-earbuds">Product Details</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/projects/smart-city-development">Project Details</Link>
            </li>
            <li>
              <Link to="/team">Team Members</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={dropdown.service ? "rv-dropdown-active" : ""}>
          <a
            className={arrow ? "rv-arrow-icon" : "dropdown-btn"}
            role="button"
            onClick={() => handleToggleDropdown("service")}
          >
            Service
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/services/tech-consulting">Service Details</Link>
            </li>
          </ul>
        </li>

        {/* <li className={dropdown.blog ? "rv-dropdown-active" : ""}>
          <a
            className={arrow ? "rv-arrow-icon" : "dropdown-btn"}
            role="button"
            onClick={() => handleToggleDropdown("blog")}
          >
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog/entrepreneur-productivity">Blog Details</Link>
            </li>
          </ul>
        </li> */}

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
