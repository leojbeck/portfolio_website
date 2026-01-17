// pages/projects/MxeneRoadmapContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';

// Adjust the path if your data file lives elsewhere.
import { projects, Project } from '../../data/projects';

/** Render the link buttons safely even if `project` is missing */
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

/** Main content component (null-safe) */
const MxeneRoadmapContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      <ProjectLinks project={project} />
      <div className="prose prose-lg mb-12">
          <p className="mb-6">
          This publication is currently under review (and not on ArXiv). A link to the paper will be added once available.
          </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Overview</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
          Hendrik Heinz, Isaac Armstrong, and myself wrote section <strong>5.1: Computational Studies of MXenes</strong> as a part of <strong>MXenes 2025 Roadmap</strong> (submitted, in review).
          This section is a review of the recent computational progress made in the field of MXenes.
          In particular, this review focused on the progress made using molecular dynamics (MD) and density functional theory (DFT).
          </p>
          <p className="mb-6">
          A figure in the section showcases some of the work Isaac and myself have worked on, including images of the dopamine accumulation
          simulations I ran in NAMD.
          </p>
        </div>
      </section>

      {/* Images */}
      {project?.images?.length ? (
        <>
          {project.images.slice(1, 3).map((src, idx) => (
            <section key={idx} className="mb-12">
              <img
                src={src}
                alt={project.title ?? 'Project image'}
                className="w-full rounded-lg shadow-lg"
              />
            </section>
          ))}
        </>
      ) : null}
    </>
  );
};

// ---------------------- Page wrapper + SSG data ----------------------

type PageProps = { project: Project | null };

/** Page component that receives the project prop from getStaticProps */
export default function MxeneRoadmapPage({ project }: PageProps) {
  return <MxeneRoadmapContent project={project} />;
}

/** Build-time data fetch: pick the project by its `id` */
// If your Project type doesn't declare `id`, we widen it locally to avoid TS errors.
type MaybeId = Project & { id?: string };

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find((p) => p.id === 'drowsiness-detecter') ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
