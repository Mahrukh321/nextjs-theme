"use client";
import { Link } from "react-router-dom";
import NavSection from "../navigation/NavSection";
import { useEffect, useRef, useState } from "react";

const HeaderSection3 = () => {
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
      <div
        className={`rv-31-header to-be-fixed ${isHeaderFixed ? "fixed" : ""}`}
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="rv-31-menu">
              <div className="rv-31-logo">
                <Link to="/">
                  <img
                    src="assets/img/Software/logo/rv-31-logo.png"
                    alt="logo"
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
                      src="assets/img/Software/logo/rv-31-logo.png"
                      alt="logo"
                    />
                  </Link>
                  <button
                    className=" rv-1-header-mobile-menu-btn sidebar-close-btn rv-3-def-btn"
                    onClick={closeSidebar}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>
                <NavSection style="rv-31-menu-list rv-1-header__nav" />

                <a
                  href="https://play.google.com/store/apps?hl=en&gl=US&pli=1"
                  className="rv-31-get-app show-for-devices"
                >
                  Get the App
                </a>
              </div>

              <div className="rv-31-menu-right">
                <Link to="/login" className="rv-31-user-login">
                  <i className="fa-regular fa-user me-2 "></i>
                  <span>Login</span>
                </Link>
                <a
                  href="https://play.google.com/store/apps?hl=en&gl=US&pli=1"
                  className="rv-31-get-app hide-for-devices"
                >
                  Get the App
                </a>
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
export default HeaderSection3;
