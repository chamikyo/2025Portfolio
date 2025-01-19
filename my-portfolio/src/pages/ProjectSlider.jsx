// src/components/ProjectSlider.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDrag } from "@use-gesture/react";
import projects from "../data/projects"; // 프로젝트 데이터 가져오기
import "./ProjectSlider.css";
// import GoTopButton from "./GoTopButton";

const ProjectSlider = ({ onSlideChange }) => {
  const [index, setIndex] = useState(4); // Start with Project 5 (index 4)
  const controls = useAnimation();
  const [isSliding, setIsSliding] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const cardRefs = useRef([]);
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleProjectClick = (projectName) => {
    navigate(`/portfolio/${projectName.toLowerCase()}`); // 프로젝트 이름에 맞는 경로로 이동
  };

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      if (isScrolling || !isSliding) return;

      const deltaY = event.deltaY;
      const direction = deltaY > 0 ? 1 : -1;

      if (Math.abs(deltaY) < 30) return;

      const newIndex = Math.max(
        0,
        Math.min(index + direction, projects.length - 1)
      );

      if (newIndex !== index) {
        setIndex(newIndex);
        onSlideChange(newIndex); // 부모 컴포넌트에 인덱스 전달
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 500);
      }
    },
    [index, isScrolling, isSliding, onSlideChange]
  );

  const disableBodyScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const enableBodyScroll = useCallback(() => {
    document.body.style.overflow = "auto";
  }, []);

  const bind = useDrag(
    useCallback(
      ({ offset: [, y], memo = index }) => {
        if (!isSliding) return;
        const newIndex = Math.round(memo + y / 200);
        setIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
        return newIndex;
      },
      [index, isSliding]
    ),
    { enabled: isSliding }
  );

  useEffect(() => {
    const currentRefs = cardRefs.current;

    currentRefs.forEach((cardRef) => {
      if (cardRef) {
        cardRef.addEventListener("mouseenter", disableBodyScroll);
        cardRef.addEventListener("mouseleave", enableBodyScroll);
        cardRef.addEventListener("wheel", handleScroll, { passive: false });
      }
    });

    return () => {
      currentRefs.forEach((cardRef) => {
        if (cardRef) {
          cardRef.removeEventListener("mouseenter", disableBodyScroll);
          cardRef.removeEventListener("mouseleave", enableBodyScroll);
          cardRef.removeEventListener("wheel", handleScroll);
        }
      });
    };
  }, [disableBodyScroll, enableBodyScroll, handleScroll]);

  useEffect(() => {
    controls
      .start({ y: `${110}vh`, transition: { duration: 5, ease: "easeInOut" } })
      .then(() => {
        setIndex(0);
        controls.start({
          rotateY: 0,
          scale: 1.05,
          y: `${100}vh`,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      })
      .then(() => {
        controls.start({
          scale: 1.05,
          transition: { duration: 2, ease: "easeOut" },
        });
        setIsSliding(true);
      });
  }, [controls]);

  useEffect(() => {
    if (isSliding) {
      controls.start({
        y: `${120 - index * 65}vh`,
        x: -20,
        scale: 1.15,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [index, controls, isSliding]);

  const handleDotClick = useCallback(
    (dotIndex) => {
      setIndex(dotIndex);
      controls.start({
        y: `-${dotIndex * 60}vh`,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    },
    [controls]
  );

  return (
    <div className="project-slider-container" onWheel={handleScroll}>
      <div className="pagination-dots">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></div>
        ))}
      </div>

      <motion.div
        className="project-slider"
        {...bind()}
        initial={{ y: `-${(projects.length - 1) * 60}vh` }}
        animate={controls}
        style={{ cursor: isSliding ? "grab" : "default" }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            animate={controls}
            className="project-card-container"
          >
            <div className="project-card-discript">
              <text class="title">{project.title}</text>
              <text class="descriptionEn">{project.descriptionEn}</text>
              <text class="descriptionKo">{project.descriptionKo}</text>
            </div>
            <motion.div
              className="project-card"
              onClick={() => handleProjectClick(project.name)}
              animate={{ rotateY: 0, rotateX: 0 }} // 기본 상태
              whileHover={{
                scale: 1.1,
                rotateY: 20,
                rotateX: 15,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                rotateY: 10,
                rotateX: 8,
              }}
              transition={{ duration: 0.1, ease: "easeOut" }} // 모든 상태에 적용되는 전환
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </motion.div>
          </div>
        ))}
        {/* <GoTopButton /> */}
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
