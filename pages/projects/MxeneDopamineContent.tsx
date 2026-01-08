// pages/projects/MxeneDopamineContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';

// ---------------- Reusable links (null-safe) ----------------
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

// ---------------- Main content (null-safe) ----------------
const MxeneDopamineContent: React.FC<{ project?: Project | null }> = ({ project }) => {
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
          <p className="mb-6">
            
          </p>
        </div>
      </div>


      {/* Technical Implementation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            
          </p>
          <p className="mb-6">
            
          </p>
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      {/* Images */}
      {project?.images?.[1] && (
        <div className="mb-12">
          <img
            src={project.images[1]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {project?.images?.[2] && (
        <div className="mb-12">
          <img
            src={project.images[2]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {project?.images?.[3] && (
        <div className="mb-12">
          <img
            src={project.images[3]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Key Takeaways */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Key Takeaways</h2>
        <div className="prose prose-lg mb-12">
          
          <p className="mb-6">
            This project sharpened both technical skills and the ability to work with both government and academic research groups.
          </p>
        </div>
      </div>

      {/* Future Plans */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Future Plans</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            
          </p>
        </div>
      </div>
    </>
  );
};

// ---------------- Page wrapper + SSG data ----------------
type PageProps = { project: Project | null };

// If `Project` doesn’t declare `id`, widen it locally
type MaybeId = Project & { id?: string };
const TARGET_ID = 'spotify-wrapped-clone';

export default function MxeneDopaminePage({ project }: PageProps) {
  return <MxeneDopamineContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find(p => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
