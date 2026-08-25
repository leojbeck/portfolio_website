import React from 'react';
import { Project } from '../../data/projects';
import ProjectLinks from './ProjectLinks';

const BookRatingsContent: React.FC<{ project?: Project | null }> = ({ project }) => {
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

export default BookRatingsContent;
