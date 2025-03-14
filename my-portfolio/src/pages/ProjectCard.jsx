import * as React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectTag = ({ children }) => {
  return <span className="tag">{children}</span>;
};

const ProjectTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null; // Prevents error if tags are missing
  return (
    <section className="tagGroup">
      {tags.map((tag, index) => (
        <ProjectTag key={index}>{tag}</ProjectTag>
      ))}
    </section>
  );
};

function ProjectCard({ project }) {
  if (!project) return null; // Prevent rendering if no project data exists
  console.log("Project Image Path:", project.image);
  console.log(project);
  return (
    <article className="projectCard">
      {/* Left Section: Project Info */}
      <div className="projectDetails">
        <p className="projectCategory">{project.location}</p>
        <h1 className="projectTitle">{project.title}</h1>

        <ProjectTags tags={project.tags} />

        <Link to={`/portfolio/${project.name}`} className="actionButton">
          View Project
        </Link>
      </div>

      {/* Right Section: Project Video */}
      {/* <div className="projectVideo">
        <video className="videoPreview" autoplay loop muted playsinline>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <Link to={`/portfolio/${project.name}`}>
        <div className="projectMedia">
          <img
            src={project.image}
            alt={project.title}
            className="fallbackImage"
          />
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
