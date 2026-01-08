// pages/projects/ClemsonMemristorContent.tsx
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
const ClemsonMemristorContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            Memristors, the 4th passive circuit element, are a nonlinear two or three terminal circuit element that relate electric charge
            with magnetic flux linkage. As the dual to resistors, memristors have some interesting properties. 
            They have the ability to act as logic gates,
            as well as addition and subtraction. Organic memristors, like those made with polypyrrole, can be electrochromic. 
             
          </p>
          <p className="mb-6">
            This project was for the first research I did while an undergrad at Clemson University. I worked for 10 weeks in the Foulger Group 
            fabricating 3-terminal organic memristive devices.
            To fabricate the devices, I utilized spin-coating, etching, and photolithography.
            To characterize the devices, we used an oscilloscope with in-house code to pulse voltage to the top presynaptic terminal while 
            applying constant voltage to the postsynaptic terminals.
          </p>
          <p className="mb-6">
            This worked was published in ACS Applied Electronic Materials (https://pubs.acs.org/doi/pdf/10.1021/acsaelm.3c00708).
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
    </>
  );
};

// ---------- Page wrapper + SSG data ----------
type PageProps = { project: Project | null };

// widen locally in case `id` isn’t in your Project type yet
type MaybeId = Project & { id?: string };

const TARGET_ID = 'clemson-memristor';

export default function ClemsonMemristorPage({ project }: PageProps) {
  return <ClemsonMemristorContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find((p) => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
