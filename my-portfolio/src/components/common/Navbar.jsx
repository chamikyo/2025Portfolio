import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // 햄버거 아이콘 추가
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const whiteNavPages = [
    "/about",
    "/portfolio",
    "/portfolio/korddiz",
    "/portfolio/anticancer",
    "/portfolio/unius",
  ];

  const isWhiteNav = whiteNavPages.includes(location.pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownTimer = useRef(null);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMouseAtTop, setIsMouseAtTop] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 400);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && !isMouseAtTop) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, [isMouseAtTop]);

  const handleMouseMove = useCallback((event) => {
    if (event.clientY < 100) {
      setIsMouseAtTop(true);
      setIsNavbarVisible(true);
    } else {
      setIsMouseAtTop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <>
      <nav
        className={`navbar ${isWhiteNav ? "navbar-white" : "navbar-black"} ${
          isNavbarVisible ? "visible" : "hidden"
        }`}
      >
        <div className="navbar-container">
          {/* 로고 */}
          <div className="navbar-logo">
            <Link to="/">MIKYO CHA</Link>
          </div>

          {/* 햄버거 버튼 (네비 색상에 따라 아이콘 색 변경) */}
          <div
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            style={{ color: isWhiteNav ? "#000" : "#fff" }}
          >
            {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>

          {/* 네비게이션 메뉴 */}
          <ul
            className={`navbar-links ${isMobileMenuOpen ? "active" : ""} ${
              isWhiteNav ? "navbar-white" : "navbar-black"
            }`}
          >
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li
              className="portfolio-link"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/portfolio" onClick={toggleMobileMenu}>
                Portfolio
              </Link>

              {/* 드롭다운 메뉴 */}
              {isDropdownVisible && (
                <ul
                  className={`dropdown-menu ${
                    isWhiteNav ? "navbar-white" : "navbar-black"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link to="/portfolio/unius" onClick={toggleMobileMenu}>
                      Unius
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/korddiz" onClick={toggleMobileMenu}>
                      Korddiz
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/anticancer" onClick={toggleMobileMenu}>
                      Anticancer
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/portfolio/agricola" onClick={toggleMobileMenu}>
                      Agricola
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio/portfolio-project"
                      onClick={toggleMobileMenu}
                    >
                      My Portfolio
                    </Link>
                  </li> */}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
