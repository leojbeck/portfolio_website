// pages/projects/HOIP_mdContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';

// ------------- Reusable links (null-safe) -------------
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

// ------------- Main content (null-safe) -------------
const HOIP_md: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            
          </p>
          <p className="mb-6">
            
          </p>
          <p className="mb-6">
            
          </p>
        </div>
      </div>


      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">The Difference-in-Differences Strategy</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <p className="text-blue-900 mb-0">
              
            </p>
          </div>
          <p className="mb-6">
            
          </p>
        </div>
      </div>


      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Data and Methodology</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">The Model</h3>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4">
            E<sub>form</sub> = E<sub>pvk</sub> - m E<sub>org</sub> - n E<sub>inorg</sub>
          </div>
          <p className="mb-6">
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Results</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            
          </p>
          <p className="mb-6">
            <em>Note: Specific numerical results are being finalized and will be updated in the full analysis.</em>
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Challenges and Limitations</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This is an empirical study, so it has limitations:
          </p>
          <ul className="mb-6">
            <li><strong>Sample size:</strong> </li>
          </ul>
          <p className="mb-6">
            
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Implications and Next Steps</h2>
        <div className="prose prose-lg max-w-none">
          
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none">
          
        </div>
      </div>
    </>
  );
};

// ------------- Page wrapper + SSG data -------------
type PageProps = { project: Project | null };

// If `Project` doesn’t include `id`, widen it locally
type MaybeId = Project & { id?: string };

const TARGET_ID = 'vail-causal';

export default function VailPage({ project }: PageProps) {
  return <HOIP_md project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find(p => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
