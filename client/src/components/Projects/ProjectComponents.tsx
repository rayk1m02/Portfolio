import React from 'react';
import { Project } from './ProjectData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
  <div 
    onClick={() => onSelect(project)}
    className="bg-secondary-light bg-opacity-10 rounded-lg p-3 cursor-pointer
               hover:bg-opacity-20 transition-all duration-300 border-l-4 border-blue-500
               max-w-sm" // Added max-width
  >
    {project.image && (
      <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
    )}
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-sm opacity-80">{project.date}</p>
    <p className="mt-2">{project.description}</p>
  </div>
);

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto"
    onClick={(e) => {
      // Close if clicking the overlay
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}
  >
    <div className="bg-secondary-dark p-8 rounded-lg max-w-4xl w-full mt-20 mb-8 relative">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-secondary-light hover:text-white text-2xl"
      >
        ×
      </button>

      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <p className="text-lg opacity-80">{project.description}</p>
      </div>

      {/* Main Image */}
      {project.image && (
        <div className="mb-8 rounded-lg overflow-hidden flex justify-center items-center">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-50px h-50px object-cover"
          />
        </div>
      )}

      {/* Project Overview Section */}
      <div className="mb-8 bg-secondary-light bg-opacity-5 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm opacity-70">Brief</p>
            <p className="mb-2">{project.overview.brief}</p>
          </div>
          {project.overview.role && (
            <div>
              <p className="text-sm opacity-70">Role</p>
              <p className="mb-2">{project.overview.role}</p>
            </div>
          )}
          <div>
            <p className="text-sm opacity-70">Duration</p>
            <p className="mb-2">{project.overview.duration}</p>
          </div>
          {project.overview.team && (
            <div>
              <p className="text-sm opacity-70">Team</p>
              <p>{project.overview.team}</p>
            </div>
          )}
        </div>
      </div>

      {/* Technologies Used Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.technologies.frontend && (
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-2 text-blue-400">Frontend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.frontend.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-500 bg-opacity-20 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.technologies.backend && (
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-2 text-green-400">Backend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.backend.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-green-500 bg-opacity-20 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.technologies.database && (
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-2 text-purple-400">Database</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.database.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-purple-500 bg-opacity-20 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.technologies.tools && (
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-2 text-yellow-400">Tools</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.tools.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-yellow-500 bg-opacity-20 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Detailed Sections */}
      <div className="space-y-8">
        {project.sections.map((section, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="prose prose-invert max-w-none">
              {section.content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-white opacity-70 mb-4 whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
            {section.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {section.images.map((image, i) => (
                  <div key={i} className="rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${section.title} - ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Links Section */}
      {project.links && (
        <div className="mt-8 pt-8 border-t border-secondary-light border-opacity-20">
          <div className="flex gap-4">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-md transition-all"
              >
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 bg-opacity-20 hover:bg-opacity-30 rounded-md transition-all"
              >
                View Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);