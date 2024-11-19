import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path ? "text-accent-blue" : "text-secondary-light hover:text-primary-300";
  };

  return (
    <nav className="fixed top-0 w-full bg-secondary-dark text-secondary-light p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-center space-x-20">
        <Link 
          to="/" 
          className={`px-6 py-2 text-lg font-heading font-medium transition-colors ${getActiveClass('/')}`}
        >
          Home
        </Link>
        <Link 
          to="/experience" 
          className={`px-6 py-2 text-lg font-heading font-medium transition-colors ${getActiveClass('/experience')}`}
        >
          Experience
        </Link>
        <Link 
          to="/projects" 
          className={`px-6 py-2 text-lg font-heading font-medium transition-colors ${getActiveClass('/projects')}`}
        >
          Projects
        </Link>
        <Link 
          to="/blog" 
          className={`px-6 py-2 text-lg font-heading font-medium transition-colors ${getActiveClass('/blog')}`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
