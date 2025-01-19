import React from "react";
import "./GoTopButton.css"; // Import the CSS file

const GoTopButton = () => {
  // Function to handle smooth scroll to the top
  const scrollToTop = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <a href="#top" className="go-top-btn" onClick={scrollToTop}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7087681229dd5ff6c4539a45019ea009c1da25991a679b4e50bc8a3ab0606c7?placeholderIfAbsent=true&apiKey=15a51cd550f94c3eac03be5809de5660"
        alt="Go to top"
        className="arrow-icon1"
      />
      <span className="button-text1">Go to top</span>
    </a>
  );
};

export default GoTopButton;
