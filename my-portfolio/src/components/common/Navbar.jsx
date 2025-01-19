import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  // 드롭다운 상태 및 타이머 관리
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownTimer = useRef(null); // 타이머를 저장할 ref

  // 스크롤 상태 관리
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMouseAtTop, setIsMouseAtTop] = useState(false);
  const lastScrollY = useRef(0); // 마지막 스크롤 위치 저장

  // 마우스가 포트폴리오에 올라갔을 때 드롭다운 표시
  const handleMouseEnter = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current); // 타이머 취소
    }
    setIsDropdownVisible(true); // 드롭다운 표시
  };

  // 마우스가 포트폴리오에서 벗어났을 때 2초 후 드롭다운 숨기기
  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setIsDropdownVisible(false); // 드롭다운 숨김
    }, 200); // 0.2초 대기
  };

  // 스크롤 이벤트 핸들러를 useCallback으로 메모이제이션
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // 스크롤이 아래로 내려가면 숨기고, 위로 올라가면 보이게 설정
    if (currentScrollY > lastScrollY.current && !isMouseAtTop) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    // 마지막 스크롤 위치 업데이트
    lastScrollY.current = currentScrollY;
  }, [isMouseAtTop]);

  // 마우스가 화면 위쪽에 있을 때 네비게이션 바를 보이게 설정
  const handleMouseMove = useCallback((event) => {
    // 커서가 화면 위쪽 100px 안에 있으면 네비게이션 바 보이기
    if (event.clientY < 100) {
      setIsMouseAtTop(true);
      setIsNavbarVisible(true); // 네비게이션 바 보이기
    } else {
      setIsMouseAtTop(false);
    }
  }, []);

  // 스크롤 및 마우스 이동 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]); // 종속성 배열에 함수들 추가

  return (
    <>
      <nav
        className={`navbar ${isAboutPage ? "navbar-white" : "navbar-black"} ${
          isNavbarVisible ? "visible" : "hidden"
        }`} // 네비게이션 바 보이기/숨기기
      >
        <div className="navbar-logo">
          <Link to="/">MIKYO CHA</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li
            className="portfolio-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/portfolio">Portfolio</Link>
            {/* 세로형 드롭다운 메뉴 */}
            {isDropdownVisible && (
              <ul
                className={`dropdown-menu ${
                  isAboutPage ? "navbar-white" : "navbar-black"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link to="/portfolio/koddiz">Koddiz</Link>
                </li>
                <li>
                  <Link to="/portfolio/egg">Egg</Link>
                </li>
                <li>
                  <Link to="/portfolio/anticancer">Anticancer</Link>
                </li>
                <li>
                  <Link to="/portfolio/agricola">Agricola</Link>
                </li>
                <li>
                  <Link to="/portfolio/portfolio-project">My Portfolio</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
