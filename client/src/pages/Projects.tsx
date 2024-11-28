import React, { useState } from 'react';
import { Project, projects } from '../components/Projects/ProjectData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div 
      onClick={() => setSelectedProject(project)}
      className="bg-secondary-light bg-opacity-10 rounded-lg p-4 cursor-pointer
                 hover:bg-opacity-20 transition-all duration-300 border-l-4 border-blue-500"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm opacity-80">{project.date}</p>
      <p className="mt-2">{project.description}</p>
    </div>
  );

  const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-secondary-dark p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-secondary-light hover:text-white"
          >
            ×
          </button>
        </div>
        <p className="text-sm opacity-80 mt-1">{project.date}</p>
        <div className="mt-4">
          <p>{project.details}</p>
          {project.technologies && (
            <div className="mt-4">
              <h3 className="font-semibold">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-500 bg-opacity-20 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.links && (
            <div className="mt-4 flex gap-4">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  GitHub Repository
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-300">
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light pt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Development Section */}
        <section className="m-12">
          <h2 className="text-2xl font-semibold mb-4">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.category === 'development')
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        {/* UX/UI Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">UX/UI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.category === 'uxui')
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        {/* Other Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Other</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.category === 'other')
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </div>
    </div>
  );
};

export default Projects;