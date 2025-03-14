import React from "react";
import "./Description.css"; // Import the CSS file
import mikyochaImage from "/Users/endless/2025Portfolio/my-portfolio/src/assets/mikyocha.JPG";

const Description = () => (
  <section className="description">
    <div className="description-content">
      <div className="info">
        <h2 className="description-title">
          Hi, I'm Mikyo Cha <span className="highlight">UX Designer</span> based
          in Seoul, Korea
        </h2>
        <p className="description-description">
          With a passion for human-centered design, I blend research, data, and
          technology to create seamless user experiences. With a background in
          Human Systems Engineering (HSE), UX/UI, and AI-driven visualization, I
          build intuitive digital solutions that enhance user interaction and
          decision-making. 💡✨
        </p>
        <p className="description-description">
          I believe in embracing failure as part of growth and taking bold first
          steps—because great design comes from iteration and continuous
          development. 🔄💡 I pour my heart ❤️ and energy 🔥 into everything I
          create, loving the process of refining and evolving ideas. When I
          start something, I finish it—whether it takes one night 🌙 or a
          hundred revisions.
        </p>
      </div>
      <div className="photo">
        <div className="photo-wrapper">
          <div className="photo-inner">
            <img src={mikyochaImage} alt="Mikyo Cha" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Description;
