import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Portfolio from './pages/Portfolio';
import LandingPage from './components/LandingPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from "./components/common/Footer";

import Koddiz from './projects/Koddiz'; // 프로젝트 페이지 추가
import Egg from './projects/Egg';
import Anticancer from './projects/Anticancer';
import Agricola from './projects/Agricola';
import PortfolioProject from './projects/PortfolioProject';

import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* 개별 프로젝트 라우트 */}
          <Route path="/portfolio/koddiz" element={<Koddiz />} />
          <Route path="/portfolio/egg" element={<Egg />} />
          <Route path="/portfolio/anticancer" element={<Anticancer />} />
          <Route path="/portfolio/agricola" element={<Agricola />} />
          <Route path="/portfolio/portfolio-project" element={<PortfolioProject />} />


          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
