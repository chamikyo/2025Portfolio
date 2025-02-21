import React from "react";
import { Link } from "react-router-dom"; // ✅ Link 추가
import "./ProjectList.css";
import projects from "../data/projects"; // 기존 프로젝트 데이터

const Portfolio = () => {
  return (
    <div className="project-paper">
      <div className="project-list-container">
        {/* 🔥 2. 카드형 리스트 */}
        <div className="grid-container">
          {projects.map((project) => (
            <Link
              to={`/portfolio/${project.name}`}
              key={project.id}
              className="project-card-link"
            >
              <div className="project-card">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="desc-en">{project.descriptionEn}</p>
                  <p className="desc-ko">{project.descriptionKo}</p>
                  {project.prize && (
                    <span className="prize">{project.prize}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
