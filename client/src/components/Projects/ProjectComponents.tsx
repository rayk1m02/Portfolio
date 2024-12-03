import React from 'react';
import { Project } from './ProjectData';

// Props interfaces
interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

interface ImageModalProps {
  imageUrl: string; 
  alt: string;
  onClose: () => void;
}

// Image Modal Component - Displays enlarged image view
const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, alt, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}
  >
    <div className="max-w-[90%] max-h-[90vh] relative">
      <img
        src={imageUrl}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl bg-black bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center"
      >
        ×
      </button>
    </div>
  </div>
);

// Project Card Component - Displays project preview in grid
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
  <div 
    onClick={() => onSelect(project)}
    className="bg-secondary-light bg-opacity-10 rounded-lg p-3 cursor-pointer
               hover:bg-opacity-20 transition-all duration-300 border-l-4 border-blue-500
               max-w-sm"
  >
    {project.image && (
      <div className="w-full h-40 mb-2 overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
    )}
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-sm opacity-80 mb-5">{project.date}</p>
    <p className="mt-2">{project.description}</p>
  </div>
);

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

// Project Detail Component - Full project view modal
export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto"
      onClick={(e) => {
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

        {/* Main Project Image */}
        {project.image && (
          <div className="mb-8 rounded-lg overflow-hidden flex justify-center items-center">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-5px h-5px object-contained"
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

        {/* Technologies Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Frontend Technologies */}
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
            {/* Backend Technologies */}
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
            {/* Database Technologies */}
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
            {/* Development Tools */}
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
       
        {/* Project Details Sections */}
        <div className="space-y-12">
          {project.sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-secondary-light bg-opacity-5 rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold tracking-tight">{section.title}</h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {section.content.split('\n').map((paragraph, i) => (
                  <p 
                    key={i} 
                    className="text-secondary-light text-lg leading-relaxed mb-4 whitespace-pre-line text-left"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Section Images Gallery */}
              {section.images && (
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.images.map((image, i) => (
                      <div 
                        key={i} 
                        className="overflow-hidden rounded-lg cursor-zoom-in"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`${section.title} - ${i + 1}`}
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Links Section */}
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

        {/* Image Modal for enlarged view */}
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            alt="Enlarged view"
            onClose={() => setSelectedImage(null)}
          />
        )}
        
      </div>
    </div>
  );
};