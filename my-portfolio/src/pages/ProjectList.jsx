import React from "react";
// import { Link } from "react-router-dom";
import "./ProjectList.css";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard.jsx"; // Import ProjectCard component

const ProjectList = () => {
  return (
    <div className="project-paper">
      <div className="project-list-container">
        <div className="project-card-wrapper">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
