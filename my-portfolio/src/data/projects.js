import mainanticancer from "/Users/endless/2025Portfolio/my-portfolio/src/assets/main_anticancer.png";
import mainkorddiz from "/Users/endless/2025Portfolio/my-portfolio/src/assets/main_korddiz.png";

import mainunius from "/Users/endless/2025Portfolio/my-portfolio/src/assets/main_unius.png";
const projects = [
    {
      id: 1,
      title: "Unius",
      name:"unius",
      location: "ARIZONA STATE UNIVERSITY",
      tags: ["Housing", "Class Management", "Student Life", "Community", "Education"],
      image:mainunius,
      video: "/images/korddiz.mp4",
    },
    {
      id: 2,
      title: "Korddiz",
      name:"korddiz",
      location: "SIDE PROJECT",
      tags: ["Social Networking", "Friends", "Korea", "Community", "Language Exchange"],
      image:mainkorddiz,
      video: "/images/korddiz.mp4",
    },
    {
      id: 3,
      title: "Anticancer",
      name:"anticancer",
      location: "KOREA NATIONAL CANCER CENTER",
      tags: ["Healthcare", "AI", "Big Data", "Prediction", "Medical"],
      image:mainanticancer,
      video: "/images/korddiz.mp4",
    },
];

export default projects;