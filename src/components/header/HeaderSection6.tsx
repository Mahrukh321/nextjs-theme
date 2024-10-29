"use client";
import NavSection from "../navigation/NavSection";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { toggleSearchModalOpen } from "../../redux/features/searchModalSlice";
import { Link } from "react-router-dom";

const HeaderSection6 = () => {
  const dispatch = useAppDispatch();
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

  const openSearchModal = () => {
    dispatch(toggleSearchModalOpen());
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
        className={`rv-34-header to-be-fixed ${isHeaderFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rv-31-menu rv-34-menu">
                <div className="rv-34-logo">
                  <Link to="/">
                    <img
                      src="assets/img/Software/logo/rv-34-logo.png"
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
                        src="assets/img/Software/logo/rv-34-logo.png"
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
                  <Link to="/contact" className="rv-34-btn show-for-devices">
                    Book Consultation
                  </Link>
                </div>
                <div className="rv-31-menu-right">
                  <button
                    className="rv-34-btn rv-34-btn-search"
                    id="search-34"
                    onClick={openSearchModal}
                  >
                    <i className="fa-solid fa-magnifying-glass me-2 "></i>
                    <span>Search...</span>
                  </button>
                  <Link to="/contact" className="rv-34-btn hide-for-devices">
                    Book Consultation
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
      </div>
    </header>
  );
};
export default HeaderSection6;
