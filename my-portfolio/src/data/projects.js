import koddiz from "/Users/endless/2025Portfolio/my-portfolio/src/assets/koddiz.jpg";
import egg from "/Users/endless/2025Portfolio/my-portfolio/src/assets/egg.jpg";
import anticancer from "/Users/endless/2025Portfolio/my-portfolio/src/assets/anticancer.png";
import agricola from "/Users/endless/2025Portfolio/my-portfolio/src/assets/agricola.png";
import portfolio from "/Users/endless/2025Portfolio/my-portfolio/src/assets/portfolio.png";


// src/data/projects.js
const projects = [
    {
      id: 1,
      title: "Koddiz",
      name : "koddiz",
      descriptionEn: "Struggling to make friends in Korea? Easily connect and hang out with people from all over the world",
      descriptionKo: "친구 사귀기 어려운 한국? 한국에서 다양한 국적 친구들과 쉽게 hang out!",
      imageUrl: koddiz,
    },
    {
        id: 2,
        title: "EGG",
        name : "egg",
        descriptionEn: "Empower Everyone to Go Green with Big Data-Driven Energy Consumption",
        descriptionKo: "빅데이터를 이용한 온국민 친환경 소비 프로젝트!",
        prize : "환경부 장관상",
        imageUrl: egg,
      },
      {
        id: 3,
        title: "Anticancer",
        name : "anticancer",
        descriptionEn: "Harness the power of big data to predict cancer recovery rates and optimize treatment duration, empowering better healthcare decisions.",
        descriptionKo : "빅데이터를 활용해 암 완치율과 치료 기간을 예측하는 의료 대시보드!",
        prize: "국립암센터 대상",
        imageUrl: anticancer,
      },
    {
      id: 4,
      title: "Agricola",
      name : "agricola",
      descriptionEn: "Experience the classic strategy of Agricola—now online!  Build, farm, and compete anytime, anywhere.",
      descriptionKo: "온라인으로 즐기는 아그리콜라 게임!",
      prize: "Software Engineeing lecture 소프트웨어공학 강의",
      imageUrl: agricola,
    },
    {
      id: 5,
      title: "Portfolio",
      name : "portfolio-project",
      descriptionEn: "Creating my complete portfolio website from start to finish—design, development, and maintenance all by me.",
      descriptionKo: "나혼자 웹 디자인부터 프론트엔드, 백엔드까지 나만의 💗웹 포트폴리오💗 제작",
      prize: "Side Project 사이드 프로젝트",
      imageUrl: portfolio,
    },
  ];
  
  export default projects;
  