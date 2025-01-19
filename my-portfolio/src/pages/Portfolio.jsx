import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import ProjectSlider from "./ProjectSlider";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 페이지 로드 시 시작 위치를 조금만 아래로 조정
  useEffect(() => {
    window.scrollTo({
      top: 100, // 원하는 시작 위치
      behavior: "smooth",
    });
  }, []); // 빈 배열로 컴포넌트 마운트 시 한 번만 실행

  //그라데이션 배경, 슬라이드 할 때마다 바뀜
  const backgroundGradients = [
    "linear-gradient(135deg, #DC2424, #4A569D)",
    "linear-gradient(135deg, #116600, #f4ff5a)",
    "linear-gradient(135deg, #4b6cb7, #182848)",
    "linear-gradient(135deg, #134E5E, #71B280)",
    "linear-gradient(135deg, #4521a7, #0e0421)",
  ];

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="portfolio"
      style={{
        background: backgroundGradients[currentIndex], // 그라데이션 배경 적용
        transition: "background 0.5s ease", // 부드러운 전환 효과
      }}
    >
      <ProjectSlider onSlideChange={handleSlideChange} />
    </div>
  );
};

export default Portfolio;
