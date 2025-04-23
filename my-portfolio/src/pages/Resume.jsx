import React from "react";
import "./Resume.css"; // Import the CSS file

// Import the logo images
import NaverCloudLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/NaverCloud.png";
import NaverCloudHoverLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/NaverCloudHover.png"; // New hover image
import NGLLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/NGL.png";
import NGLHoverLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/NGLHover.png"; // New hover image
import HangyangLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/HYU.png";
import HangyangHoverLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/HYUHoverLogo.JPG";
import ASULogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/ASULogo.png";
import ASUHoverLogo from "/Users/endless/2025Portfolio/my-portfolio/src/assets/ASUHoverLogo.jpg";

const experiences = [
  {
    company: "NGL Transportation ",
    role: "IT Intern",
    date: "Arizona, USA | Jan 2023 - Jan 2024",
    logo: NGLLogo,
    hoverLogo: NGLHoverLogo, // New hover logo
    description: [
      "Install network and computer systems.",
      "Maintain, repair, and upgrade the operating system including hardware and software.",
      "Frontend developer of logistics program with React.",
      "Develop standard operating procedures and best practices.",
      "Provide troubleshooting support for escalated software and hardware problems.",
      "Supervise and provide end-user services, including help desk and technical support services.",
    ],
  },
  {
    company: "Naver Cloud Platform",
    role: "Cloud Platform Planning Intern",
    date: "Seoul, Korea | Jul 2022 - Oct 2022",
    logo: NaverCloudLogo,
    hoverLogo: NaverCloudHoverLogo, // New hover logo
    description: [
      "Analyzed the application of competitive cloud APIs.",
      "Conducted UX/UI analysis and updates for the Naver Cloud Platform website's navigation bar.",
      "Drafted key announcements for the official website.",
    ],
  },
];

const education = [
  {
    university: "Arizona State University",
    course: "M.S. in Human Systems Engineering",
    date: "AZ, USA | Aug 2025 - Now",
    logo: ASULogo,
    hoverLogo: ASUHoverLogo, // New hover logo
    description: [
      "Human Systems Engineering program at Arizona State University Polytechnic School",
    ],
  },
  {
    university: "Hanyang University",
    course: "Bachelor of science engineering",
    date: "Ansan, Korea | Mar 2020 - Aug 2024",
    logo: HangyangLogo,
    hoverLogo: HangyangHoverLogo, // New hover logo
    description: ["Media Technology", "Computer Science"],
  },
];

const skills = [
  "UI/UX : Interaction Design, Wireframing, User Research, Wireframe",
  "Front-End : HTML, CSS, Javascript with React",
  "Data Analysis : Python, Scikit learn, Matplotlib, SQL",
];
const tools = ["Figma", "Illustrator", "VScode", "Git", "Jira", "Notion"];
const contact = { email: "chamikyo@gmail.com" };

const Resume = () => (
  <section className="resume" id="resume">
    {/* <div className="resume-header">
      <h2 className="resume-title">Resume</h2>
      <a href="#" className="cta-button">
        PDF ↗
      </a>
    </div> */}
    <div className="resume-content">
      {/* Additional Sections for Education, Skills, etc. */}
      <div className="resume-section">
        <h3 className="section-title">Education</h3>
        {education.map((education, index) => (
          <div key={index} className="education-item">
            <div className="logo-container">
              <img
                src={education.logo}
                alt={`${education.university} Logo`}
                className="university-logo default-logo"
              />
              <img
                src={education.hoverLogo}
                alt={`${education.company} Hover Logo`}
                className="university-logo hover-logo"
              />
            </div>
            <div className="education-header">
              <div className="education-info">
                {/* Render the university logo and hover logo */}
                <h4 className="university">{education.university}</h4>
                <p className="course">{education.course}</p>
                <p className="date">{education.date}</p>
              </div>
            </div>
            <ul className="descriptions">
              {education.description.map((item, descIndex) => (
                <li key={descIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3 className="section-title">Experience</h3>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="logo-container">
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="company-logo default-logo"
              />
              <img
                src={experience.hoverLogo}
                alt={`${experience.company} Hover Logo`}
                className="company-logo hover-logo"
              />
            </div>
            <div className="experience-header">
              <div className="experience-info">
                {/* Render the company logo and hover logo */}
                <h4 className="company">{experience.company}</h4>
                <p className="position">{experience.role}</p>
                <p className="date">{experience.date}</p>
              </div>
            </div>
            <ul className="descriptions">
              {experience.description.map((item, descIndex) => (
                <li key={descIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3 className="section-title">Awards</h3>
        <div className="award-item">
          <div className="award-meta">
            <h4 className="award-title">Campus Patent Universiade </h4>
            <p className="award-subtitle">KIPO Director's Prize | $7,700 </p>
          </div>
          <div className="award-info">
            <p className="award-date">May 2022 – Nov 2022</p>
            <p className="award-description">
              Business model utilizing cloud-based laptops for education.
            </p>
          </div>
        </div>
        <div className="award-item">
          <div className="award-meta">
            <h4 className="award-title">ETRI Open API Contest</h4>
            <p className="award-subtitle">Excellence Award | $400 </p>
          </div>
          <div className="award-info">
            <p className="award-date">Sep 2022 – Dec 2022</p>
            <p className="award-description">
              Developed a program that detects objects and generates tailored
              indoor tasks using ETRI’s API and YOLO v3 model.
            </p>
          </div>
        </div>
        <div className="award-item">
          <div className="award-meta">
            <h4 className="award-title">
              Environment Big Data AI Idea Competition{" "}
            </h4>
            <p className="award-subtitle">
              Minister of Environment Award | $2,300
            </p>
          </div>
          <div className="award-info">
            <p className="award-date">May 2022 – Dec 2022</p>
            <p className="award-description">
              EGG: a big data-based eco-friendly integration platform.
            </p>
          </div>
        </div>
        <div className="award-item">
          <div className="award-meta">
            <h4 className="award-title">
              Cancer Big Data AI Idea Competition{" "}
            </h4>
            <p className="award-subtitle">
              Grand Prize (National Cancer Center) | $1,500
            </p>
          </div>
          <div className="award-info">
            <p className="award-date">Jun 2021 – Dec 2021</p>
            <p className="award-description">
              AntiCancer: AI-powered dashboard for cancer cure and treatment
              period prediction.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="resume-section">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Tools Section */}
      <div className="resume-section">
        <h3 className="section-title">Tools</h3>
        <ul className="tools-list">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="resume-section">
        <h3 className="section-title">Contact</h3>
        <p className="contact-info">{contact.phone}</p>
        <p className="contact-info">{contact.email}</p>
      </div>
    </div>
  </section>
);

export default Resume;
