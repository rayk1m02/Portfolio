import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import PdfViewer from './components/Home/PdfViewer';
function App() {
  return (
    <Router>
      <div className="text-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cv" element={<PdfViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;