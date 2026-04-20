import React from 'react';
import { Atom, BrainCircuit, Cpu, Microscope } from 'lucide-react';

const toolkitGroups = [
  {
    title: 'Simulation',
    description: 'Building, running, and analyzing atomistic models for materials systems.',
    icon: Atom,
    tools: ['LAMMPS', 'NAMD', 'Interface Force Field', 'HPC', 'bash', 'Slurm','molecular dynamics'],
  },
  {
    title: 'Machine Learning',
    description: 'Turning small, structured materials datasets into validated predictive models.',
    icon: BrainCircuit,
    tools: ['Python', 'XGBoost', 'feature extraction', 'SMOTE', 'scikit-learn', 'Pandas'],
  },
  {
    title: 'Scientific Computing',
    description: 'Writing numerical workflows for simulation, optimization, and high-performance analysis.',
    icon: Cpu,
    tools: ['scientific computing', 'numerical PDEs', 'convex optimization', 'numerical optimization', 'parallel C++', 'MATLAB'],
  },
  {
    title: 'Experimental Context',
    description: 'Connecting computational work to fabrication, characterization, and collaborator needs.',
    icon: Microscope,
    tools: ['photolithography', 'device fabrication', 'electrical characterization', 'organic memristors'],
  },
];

const TechnicalToolkit: React.FC = () => {
  return (
    <section id="technical-toolkit" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Technical Toolkit
          </h2>
          <p className="text-zinc-700 max-w-3xl">
            Methods I use to build computational materials workflows, from crystal structures and molecular simulations to machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolkitGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {group.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalToolkit;
