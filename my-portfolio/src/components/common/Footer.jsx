import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/logowhite.png";

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleEmailCopy = () => {
    const email = "chamikyo@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess("Email copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000); // 2초 후에 메시지 사라지게 설정
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:chamikyo@gmail.com?subject=Hello&body=Hi, This is. \n I would like to contact you.";
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <Link to="/">
            <img src={logo} alt="Mikyo Cha Logo" className="logo-img" />
          </Link>
          <h2 className="footer-heading">MIKYO KAIA CHA</h2>
          {/* <button className="connect-button" onClick={handleEmailClick}>
            Let's Connect
            <span className="arrow">↗</span>
          </button> */}
        </div>
        <div className="footer-bottom">
          {" "}
          <div className="social-links">
            <text className="social-link-header"> PORTFOLIO </text>
            <Link className="social-link" to="/portfolio/unius">
              Unius ↗
            </Link>
            <Link className="social-link" to="/portfolio/korddiz">
              Korddiz ↗
            </Link>
            <Link className="social-link" to="/portfolio/anticancer">
              Anticancer ↗
            </Link>
          </div>
          {/* 양쪽 정렬을 위한 부모 div */}
          <div className="social-links">
            <text className="social-link-header"> CONTACT </text>
            <text className="social-link" onClick={handleEmailClick}>
              Mail ↗
            </text>
            <a
              href="https://drive.google.com/file/d/1I8hH1eZ2Ov7HhrcrHzEqPWq3wJCZLWOb/view?usp=sharing"
              className="social-link"
            >
              CV ↗
            </a>
            <a
              href="https://www.linkedin.com/in/mikyo-cha-6b8a50228/"
              className="social-link"
            >
              LinkedIn ↗
            </a>
            {/* 이메일과 복사 성공 메시지를 함께 묶는 컨테이너 */}
            <div className="email-wrapper">
              {copySuccess && <p className="copy-message">{copySuccess}</p>}
              <p className="email" onClick={handleEmailCopy}>
                chamikyo@gmail.com ♥
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
