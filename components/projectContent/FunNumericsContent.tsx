import React from 'react';
import { Project } from '../../data/projects';
import ProjectLinks from './ProjectLinks';

const FunNumericsContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">{project?.longDescription}</p>
          <p className="mb-6">
            This may not be an exhaustive list, but this contains:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>The classic calculation of Pi using Monte Carlo</li>
            <li>Calculating the optimal ratio for fitting an Imax image onto a normal movie screen (for The Odyssey)</li>
            <li>A prime number generator</li>
          </ul>
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

      {/* Conclusion */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Since this is a repo for miscellaneous things, there are no conclusions!
            Please stay tuned for updates.
          </p>
        </div>
      </div>
    </>
  );
};

export default FunNumericsContent;
