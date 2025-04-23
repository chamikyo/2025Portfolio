import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop"; // Import ScrollToTop component

import Navbar from "./components/common/Navbar";
import ProjectList from "./pages/ProjectList";
import Home from "./components/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/common/Footer";

import Korddiz from "./projects/Korddiz";
import Unius from "./projects/Unius";
import Anticancer from "./projects/Anticancer";
// import Agricola from "./projects/Agricola";
// import PortfolioProject from "./projects/PortfolioProject";

import "./styles/index.css";

const App = () => {
  return (
    <Router>
                <ScrollToTop /> 
      <div>
        <Navbar />
        <Routes>
          {/* 기본 라우트: LandingPage */}
          <Route path="/" element={<Home />} />

          {/* 다른 페이지들 */}
          <Route path="/portfolio" element={<ProjectList />} />
          <Route path="/portfolio/unius" element={<Unius />} />
          <Route path="/portfolio/korddiz" element={<Korddiz />} />
          <Route path="/portfolio/anticancer" element={<Anticancer />} />
          {/* <Route path="/portfolio/agricola" element={<Agricola />} />
          <Route path="/portfolio/portfolio-project" element={<PortfolioProject />} /> */}
          <Route path="/about" element={<About />} />

          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;