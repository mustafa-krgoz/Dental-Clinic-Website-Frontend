import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import BlogPage from './pages/BlogPage';
import FaqSectionPage from './pages/FaqSectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doktorlar" element={<DoctorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sss" element={<FaqSectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
