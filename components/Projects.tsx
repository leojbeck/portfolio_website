/**
 * Projects Section Component
 * 
 * This component displays a grid of project cards showcasing your data science work.
 * Each card includes a title, description, tech stack, and optional links.
 * 
 * Features:
 * - Responsive grid layout that adapts to screen size
 * - Project cards with images, descriptions, and tech stack tags
 * - Links to GitHub and demos
 * - Clean design
 * 
 * To customize:
 * - Update project data in data/projects.ts
 * - Add/remove projects by editing the projects array
 * - Modify the card styling in the className attributes
 * - Adjust the grid layout
 */

import React from 'react';
import { Project, projects } from '../data/projects';

const Projects: React.FC = () => {
  const currentProjects = projects.filter((project) => project.status === 'current');
  const pastProjects = projects.filter((project) => project.status === 'past');

  // Handle project click to navigate to project page
  const handleProjectClick = (projectId: string) => {
    window.location.href = `/projects/${projectId}`;
  };

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover cursor-pointer hover:shadow-md transition-shadow duration-300 relative group"
      onClick={() => handleProjectClick(project.id)}
    >
      {/* Project Image */}
      {project.images && (
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Hover Loading Bar */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 transition-all duration-300 group-hover:w-full"></div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-zinc-600 text-sm mb-5 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectGroup = (title: string, groupedProjects: Project[]) => {
    if (groupedProjects.length === 0) {
      return null;
    }

    return (
      <div className="mb-14 last:mb-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
          {title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedProjects.map(renderProjectCard)}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
        </div>

        {renderProjectGroup('Current Projects', currentProjects)}
        {renderProjectGroup('Past Projects', pastProjects)}
      </div>
    </section>
  );
};

export default Projects;
