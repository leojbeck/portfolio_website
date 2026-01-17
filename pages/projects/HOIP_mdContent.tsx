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
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Note: This projected is ongoing.</h1>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            Because of this, some sections may be incomplete or missing data. Please check back later for updates.
            Additionally, some details may be withheld for confidentiality until publication.
          </p>
          </div>
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            Perovskites are both a mineral and a class of materials with the same crystal structure as the mineral calcium titanium oxide (CaTiO<sub>3</sub>).
            Hybrid organic-inorganic perovskites (HOIPs) have shown great promise in photovoltaic applications due to their high power conversion efficiencies and low fabrication costs.
            However, their long-term stability remains a significant challenge, hindering their commercial viability. 
            
          </p>
          <p className="mb-6">
            Because of this, research into lower dimensional perovskites (2D, quasi-2D, and 1D) has increased, where dimensionality is the number of dimensions
            that the inorganic octahedral network extends in space.
            as these materials have demonstrated enhanced stability (at the cost of slightly lower efficiency) compared to their 3D counterparts.
          </p>
          <p className="mb-6">
            This project aims to investigate the stability and structure of various HOIPs using molecular dynamics.
          </p>
        </div>
      </div>


      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Molecular Dynamics Setup</h2>
        <div className="prose prose-lg max-w-none">
          <p className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            For this project, we utilize LAMMPS, a classical molecular dynamics simulator developed by Sandia National Laboratories. 
            We used the Interface Force Field (IFF) to model the interactions between atoms in our HOIP systems. As part of the work,
            we adapted and validated IFF parameters for several organic cations commonly used in HOIPs.
          </p>
          <div className="mb-6">
            <p className="text-gray-800 leading-relaxed mb-6">
              For most systems, we used NPT ensembles at room temperature (298K) and 1 atm pressure to simulate realistic conditions.
              To ensure equilibration, each simulation was run for at least 5 ns, with time steps of 1 fs. However, specific conditions
               varied based on the system being studied. Energies, volumes, etc. were checked over time to ensure proper equilibration.
            </p>
          </div>
          <p className="mb-6">
            
          </p>
        </div>
      </div>


      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Properties of Interest</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Using a simplified formulation of formation energy, we can estimate the stability of various HOIP structures.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Formation Energy</h3>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4">
            E<sub>form</sub> = E<sub>pvk</sub> - m E<sub>org</sub> - n E<sub>inorg</sub>
          </div>
          <p className="mb-6">
            where E<sub>form</sub> is the formation energy, E<sub>pvk</sub> is the total energy of the perovskite structure, E<sub>org</sub> is the energy of the organic component,
            E<sub>inorg</sub> is the energy of the inorganic component, and m and n are the stoichiometric coefficients of the organic and inorganic components, respectively.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Structural Features</h3>
          <p className="mb-6">
            We are also looking at a variety of typical HOIP structural features over time:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Layer heights</li>
            <li>Octahedral distortions</li>
            <li>Lattice parameters</li>
            <li>Molecular orientations</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6"></h2>
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
            As a computational study, it has limitations:
          </p>
          <ul className="mb-6">
            <li><strong>Model validation:</strong> </li>
          </ul>
          <p className="mb-6">
            Being able to trust results from this work relies on properly parameterizing and validating our model.
            For the systems we are looking at, this means ensuring we don't overfit to a single composition / structure.
            These systems are highly sensitive, as experiment has shown that slight changes in halogen placement on a benzyl ring
            can determine if the resultant structure is 0D, 1D, quasi 2D, or 2D.
          </p>
          <ul className="mb-6">
            <li><strong>Limitations of formation energy calculation:</strong> </li>
          </ul>
          <p className="mb-6">
            In our formation energy calculations, we are purposefully excluding solvents due to their complexity.
            There are relatively few experimental studies that determine what is actually happening when the precursors are in solution,
            so we felt there was not enough to validate on. However, this means that we a missing some realism in our calculation. 
            The true calculation would be close to:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4">
            E<sub>form</sub> = c<sub>1</sub> E<sub>pvk</sub> + c<sub>2</sub> E<sub>solv1</sub> + c<sub>3</sub> E<sub>solv2</sub>- c<sub>4</sub> E<sub>org,solv1</sub> - c<sub>5</sub> E<sub>inorg,solv2</sub>
          </div>
          <p>
            where c<sub>n</sub> are stoichiometric coefficients.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6"></h2>
        <div className="prose prose-lg max-w-none">
          
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Since this project is ongoing, there are no conclusions - yet!
            Please stay tuned for updates.
          </p>
        </div>
      </div>
    </>
  );
};

// ------------- Page wrapper + SSG data -------------
type PageProps = { project: Project | null };

// If `Project` doesn’t include `id`, widen it locally
type MaybeId = Project & { id?: string };

const TARGET_ID = 'hoip-md';

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
