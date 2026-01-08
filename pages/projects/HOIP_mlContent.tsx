// pages/projects/HOIP_mlContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';

// ---------- Reusable links (null-safe) ----------
const ProjectLinks: React.FC<{ project?: Project | null }> = ({ project }) => (
  <div className="space-y-4 mb-12">
    <h2 className="text-3xl font-semibold tracking-tight mb-6">Project Links</h2>
    <div className="flex flex-wrap gap-4">
      {project?.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <Github size={20} className="mr-2" />
          View Code
        </a>
      )}
      {project?.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Play size={20} className="mr-2" />
          Live Demo
        </a>
      )}
      {project?.notebook && (
        <a
          href={project.notebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          <FileText size={20} className="mr-2" />
          View Notebook
        </a>
      )}
      {project?.paper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <FileText size={20} className="mr-2" />
                View Publication
              </a>
            )}
    </div>
  </div>
);

// ---------- Main content (null-safe) ----------
const HOIP_mlContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      {/* Dataset */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Dataset</h2>
        <div className="prose prose-lg mb-12">
          <ul className="list-disc list-inside mb-6">
            <li>Training Set: 453 samples</li>
            <li>Testing Set:  samples</li>
            <li>Features: 11 property attributes (both numerical and categorical)</li>
            <li>Target Variable: Dimensionality</li>
          </ul>
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Methodology</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Data Preprocessing</h4>
          <p className="mb-6">
            
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Feature Engineering</h4>
          <p className="mb-6">
            
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Implementation</h4>
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Results</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Performance Comparison</h4>
          

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Key Insights</h4>
          <p className="mb-6">
            
          </p>
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      {/* Final Thoughts / Future Work */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Final Thoughts / Future Work</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            
          </p>
          <br />
          <p className="mb-6">
            <em>This project was completed in collaboration with Mariia Karabin et al. and is currently submitted for review.</em>
          </p>
        </div>
      </div>
    </>
  );
};

// ---------- Page wrapper + SSG data ----------
type PageProps = { project: Project | null };

// If `Project` doesn’t include `id`, widen it locally
type MaybeId = Project & { id?: string };

// ⚠️ Set to your actual id from data/projects.ts
const TARGET_ID = 'hoip-ml';

export default function HOIP_mlPage({ project }: PageProps) {
  return <HOIP_mlContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find((p) => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
