import React, { memo } from "react";
import mikyochaImage from "/Users/endless/2025Portfolio/my-portfolio/src/assets/mikyocha2.PNG";
import "./Hero.css";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <div className="hero-text">
        <h1>
          Hi, I'm Mikyo Kaia Cha. <br />
          <span className="ux-designer">UX Designer</span> based in Seoul, Korea
        </h1>
        <p className="hero-internship">
          Service Platform Planning intern at <strong>Naver Cloud</strong>
        </p>
        <button className="hero-cta-button" aria-label="View My Resume">
          My Resume ↗
        </button>
      </div>
      <div>
        <img
          src={mikyochaImage}
          alt="Portrait of Mikyo Kaia Cha"
          className="heroimage"
        />
      </div>
    </div>
    <div className="down-button-container">
      <button className="down-button" aria-label="Scroll Down">
        ↓
      </button>
    </div>
  </section>
);

// React.memo를 사용하여 불필요한 리렌더링 방지
export default memo(HeroSection);
