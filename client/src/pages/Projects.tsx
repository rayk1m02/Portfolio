import React, { useState } from 'react';
import { projects } from '../components/Projects/ProjectData';
import { ProjectCard, ProjectDetail } from '../components/Projects/ProjectComponents';
import '../components/Projects/Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="absolute inset-0 min-h-full">
      <div className="bg-gradient-to-b from-secondary-dark to-primary-800 text-secondary-light pt-20 min-h-full pb-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Development Section */}
          <section className="m-12">
            <h2 className="text-2xl font-semibold mb-4">Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects
                .filter(project => project.category === 'development')
                .map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onSelect={setSelectedProject}
                  />
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
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onSelect={setSelectedProject}
                  />
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
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onSelect={setSelectedProject}
                  />
                ))}
            </div>
          </section>

          {/* Project Detail Modal */}
          {selectedProject && (
            <ProjectDetail 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;