import React from "react";
import "./Description.css"; // Import the CSS file
import mikyochaImage from "/Users/endless/2025Portfolio/my-portfolio/src/assets/mikyocha.JPG";

const Description = () => (
  <section className="description" id="about">
    <div className="info">
      <h2 className="description-title">
        Hi, I'm Mikyo Cha <span className="highlight">UX Designer</span> based
        in Seoul, Korea
      </h2>
      <p className="description-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit varius
        massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor integer
        pellentesque nunc ut at penatibus
      </p>
      <p className="description-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit varius
        massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor integer
        pellentesque nunc ut at penatibus viverra risus nisl. Sapien nibh
        interdum tellus sapien et tortor, commodo. Dolor urna pharetra, nulla et
        morbi sed ornare. Sed condimentum urna pharetra id in enim nunc. Mi ut
        etiam vel.
      </p>
    </div>
    <div className="photo">
      <div className="photo-wrapper">
        <div className="photo-inner">
          <img src={mikyochaImage} alt="Mikyo Cha" className="profile-img" />
        </div>
      </div>
    </div>
  </section>
);

export default Description;
