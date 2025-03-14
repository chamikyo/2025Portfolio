import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./project.css";
import projects from "../data/projects";
import ProjectCard from "../pages/ProjectCard.jsx"; // Import ProjectCard component

const anticancerProject = projects.find((p) => p.name === "anticancer"); // Korddiz만 가져오기

// ✅ 슬라이드 이미지 리스트
const slides = Array.from({ length: 14 }, (_, i) =>
  require(`../assets/slides/korddiz/slide${i + 1}.png`)
);

const Korddiz = () => {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ 화면 크기 변경 감지 (모바일 여부 확인)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ 스크롤 시 현재 보이는 슬라이드 감지 (정확한 중앙 찾기)
  useEffect(() => {
    const handleScroll = () => {
      const centerPosition = window.innerHeight / 2; // ✅ 화면 중앙 기준
      let closestIndex = 0;
      let minDistance = Infinity;

      slides.forEach((_, i) => {
        const slideElement = document.querySelector(`[data-slide="${i}"]`);
        if (slideElement) {
          const slideRect = slideElement.getBoundingClientRect();
          const distance = Math.abs(
            slideRect.top + slideRect.height / 2 - centerPosition
          );
          // 🔥 `slideRect.top + slideRect.height / 2` => 슬라이드의 정중앙 위치 계산!

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div ref={containerRef} className="anticancer-container">
      <motion.div className="slides-wrapper">
        {slides.map((src, index) => {
          const isActive = index === activeIndex;
          const isPrevNext = Math.abs(index - activeIndex) === 1;

          return (
            <motion.div
              key={index}
              data-slide={index} // ✅ 슬라이드마다 고유 데이터 속성 추가
              className={`slide ${isActive ? "active-slide" : ""} ${
                isPrevNext ? "inactive-slide" : ""
              }`}
              style={{ backgroundImage: `url(${src})` }}
              animate={{
                scale: isActive ? 1.15 : isPrevNext ? 0.9 : 0.85,
                opacity: isActive ? 1 : isPrevNext ? 0.7 : 0.5,
              }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
        <div className="wrapper">
          <hr className="projectSeparator" />
          <text className="next-project">Next Project</text>
          <ProjectCard project={anticancerProject} />
        </div>
      </motion.div>
    </div>
  );
};

export default Korddiz;
