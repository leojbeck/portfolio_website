import React from 'react';
import { Project } from '../../data/projects';
import ProjectLinks from './ProjectLinks';

const OrganizationAppContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">{project?.longDescription}</p>
        </div>
      </div>

      {/* Installing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Installing</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            Download the installer above and run it on Windows (x64). Since the installer
            isn't code-signed, Windows SmartScreen may show a "Windows protected your PC"
            warning — click <strong>More info</strong>, then <strong>Run anyway</strong> to
            continue.
          </p>
        </div>
      </div>

      {/* Additional images beyond the header image, if any */}
      {project?.images?.slice(1).map((src, idx) => (
        <div className="mb-12" key={idx}>
          <img
            src={src}
            alt={project?.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      ))}
    </>
  );
};

export default OrganizationAppContent;
