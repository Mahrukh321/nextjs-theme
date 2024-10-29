"use client";
import { Link } from "react-router-dom";
import NavSection from "../navigation/NavSection";
import { useEffect, useRef, useState } from "react";

const HeaderSection2 = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsHeaderFixed(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <header>
      <div className="rv-37-header ">
        {/* <div className="rv-32-header-top">
          <img
            src="assets/img/Software/logo/rv-37-header-img.png"
            alt="gift"
            className="me-1"
          />
          Get 50% off on Vault theme. Limited time offer!
        </div> */}
        <div
          className={`rv-37-menubar to-be-fixed ${
            isHeaderFixed ? "fixed" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className="rv-37-logo">
                <Link to="/">
                  <img
                    src="assets/img/Software/logo/code-finity-logo.png"
                    alt="logo"
                    height={60}
                  />
                </Link>
              </div>

              <div
                className={`rv-1-header-nav__sidebar ${
                  isSidebarOpen ? "active" : ""
                }`}
                ref={sidebarRef}
              >
                <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                  <Link to="/" className="logo-container ">
                    <img
                     src="assets/img/Software/logo/code-finity-logo.png"
                     alt="logo"
                     height={60}
                    />
                  </Link>
                  <button
                    className=" rv-1-header-mobile-menu-btn sidebar-close-btn rv-3-def-btn"
                    onClick={closeSidebar}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>

                <NavSection
                  style="rv-37-menu-list header_arrow rv-1-header__nav"
                  arrow
                />
                <Link
                  to="/contact"
                  className="rv-33-btn rv-37-btn show-for-devices"
                >
                  Get Started
                  <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
              </div>

              <div className="rv-31-menu-right">
                <Link
                  to="/contact"
                  className="rv-33-btn rv-37-btn hide-for-devices text-white me-2"
                >
                  Get Started
                  <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
                <button
                  className=" rv-3-def-btn rv-1-header-mobile-menu-btn d-lg-none d-inline-block"
                  id="rv-1-header-mobile-menu-btn"
                  onClick={openSidebar}
                >
                  <i className="fa-bars fa-regular"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderSection2;
