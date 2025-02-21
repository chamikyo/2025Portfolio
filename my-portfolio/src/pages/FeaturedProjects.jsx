import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.css";
import projects from "../data/projects";

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-container">
      <h2>Featured Projects</h2>
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -((projects.length - 1) * 300) }} // 슬라이드 이동 범위
      >
        {projects.slice(0, 3).map((project) => (
          <motion.div className="slider-item" key={project.id}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="slider-image"
            />
            <div className="slider-info">
              <h3>{project.title}</h3>
              <p className="desc-en">{project.descriptionEn}</p>
              {project.prize && <span className="prize">{project.prize}</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
