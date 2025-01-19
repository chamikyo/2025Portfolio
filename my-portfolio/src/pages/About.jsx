import React from "react";
import "./About.css";

import HeroSection from "./Hero";
import ScrollProgressBar from "./ScrollProgressBar.jsx";
import Description from "./Description";
import Resume from "./Resume";
import GoTopButton from "./GoTopButton";

const About = () => {
  return (
    <div className="about">
      <ScrollProgressBar />
      <HeroSection />
      <Resume />
      <Description />
      <GoTopButton />
    </div>
  );
};

export default About;
