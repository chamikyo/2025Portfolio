import React, { useState } from "react";
import "./Footer.css";

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
          <h2 className="footer-heading">
            Looking for someone to join an awesome venture
          </h2>
          <button className="connect-button" onClick={handleEmailClick}>
            Let's Connect
            <span className="arrow">↗</span>
          </button>
        </div>
        <div className="footer-bottom">
          {" "}
          {/* 양쪽 정렬을 위한 부모 div */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mikyo-cha-6b8a50228/"
              className="social-link"
            >
              LinkedIn ↗
            </a>
          </div>
          {/* 이메일과 복사 성공 메시지를 함께 묶는 컨테이너 */}
          <div className="email-wrapper">
            {copySuccess && <p className="copy-message">{copySuccess}</p>}
            <p className="email" onClick={handleEmailCopy}>
              💌 chamikyo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
