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
          MXenes are a relatively new class of 2D materials that have shown great promise for applications in aerospace, 
          composites, electromagnetic shielding, and biosensing. However, it is difficult to experimentally measure
          the properties of MXenes due to their size. Because of this, computational methods have become useful in 
          providing insight into their properties. Specifically, using molecular dynamics, we can determine shear strength, 
          thermal conductivity, small molecule binding, nanoindentation, and more.
          </p>
          <p className="mb-6">
          For this project, we were interested in the binding properties of dopamine onto the surface of the MXenes. We wanted to 
          determine the binding energy of a single protonated dopamine (DAH+), the average residence time, multiple DAH+ accumulation,
          equilibrium binding concentrations, and binding configurations. 
          </p>
        </div>
      </div>


      {/* Technical Implementation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-2">
            While most of this project utilized LAMMPS, the dopamine binding portion was simulated using NAMD. We adapted the MXene 
            parameters in the Interface Force Field (IFF) to be used with CHARMM and NAMD. Simulation systems were created in
            Materials Studio with use of Packmol to create the water solution and dopamine layers. Each system is roughly 18,500 atoms.
          </p>
          <p className="mb-3">
            Since we were simulating MXenes in solution, we used NVT at room temperature (298K) with pH 6 (point of zero charge) and pH 5 
            (HCl prereacted with -OH terminations). 
           
          </p>
          {project?.images?.[2] && (
        <div className="mb-4">
          <img
            src={project.images[2]}
            alt={project.title ?? 'Project image - dopamine binding configurations'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
          <p className="mb-4">
             For the single dopamine systems, I ran 12 duplicates, where 6 started bound and 6 started
            floating in H<sub>2</sub>O. Each of the 12 were run for 10ns, or 10,000,000 time steps.
          </p>
          <p className="mb-5">
             For the multiple dopamine systems, I ran systems of 20, 40, and 80 DAH+ Cl- pairs, each with one all bound, and one all detached.
             Each were run for a total of 90ns, requiring 64 cpus and 2-3 restarts.
          </p>
        </div>
      </div>

      {/* Images */}
      {project?.images?.[1] && (
        <div className="mb-12">
          <img
            src={project.images[1]}
            alt={project.title ?? 'Project image - accumulation of dopamine on MXene surface'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      
      {project?.images?.[3] && (
        <div className="mb-5">
          <img
            src={project.images[3]}
            alt={project.title ?? 'Project image - dopamine binding energy graph'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Key Takeaways */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Key Takeaways</h2>
        <div className="prose prose-lg mb-12">
          
          <p className="mb-6">
            The work from this project is under review for publication. 
            This project sharpened both technical skills and the ability to work with both government and academic research groups.
          </p>
        </div>
      </div>

      {/* Future Plans */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Future Plans</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            Future work will include exploring additional surface terminations
             and their interactions with dopamine. Additional work will also include studying the effect of dopamine binding
             on the shear properties of MXenes.
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
