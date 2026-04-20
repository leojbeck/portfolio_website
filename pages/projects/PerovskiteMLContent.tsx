// pages/projects/PerovskiteMLContent.tsx
import React from 'react';
import { Github, Play, FileText } from 'lucide-react';
import { Project } from '../../data/projects';

const ProjectLinks: React.FC<{ project?: Project | null }> = ({ project }) => {
  const hasLinks = project?.github || project?.demo || project?.notebook || project?.paper;

  if (!hasLinks) {
    return null;
  }

  return (
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
};

const PerovskiteMLContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      <ProjectLinks project={project} />

      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Note: This project is ongoing.</h1>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            Because this project is still active, some sections may be incomplete or change as the models, GUI, and analysis workflow are refined.
          </p>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight mb-6">Overview</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This project extends my previous hybrid metal halide machine learning work into a larger workflow for extracting crystal features and predicting structural classes.
            The dataset is built from CIFs collected from HybriD3 and the Cambridge Structural Database.
          </p>
          <p className="mb-6">
            The goal is to make structural prediction more usable for researchers who may have candidate organic and inorganic components, but not a resolved crystal structure.
            A GUI allows the user to enter SMILES strings, then the workflow creates CIFs behind the scenes and extracts the same feature set used for model prediction.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Data Sources</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The initial dataset combines crystal structures from two sources:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>HybriD3 entries for hybrid metal halide structures</li>
            <li>Cambridge Structural Database entries for additional experimentally reported CIFs</li>
          </ul>
          <p className="mb-6">
            These CIFs are filtered and processed into consistent input and output features so that the same code path can support both curated database entries and user-provided structures.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Feature Extraction Pipeline</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            A series of scripts parse each CIF and extract model inputs from the organic and inorganic components.
            The pipeline also extracts target labels from the known crystal structures, allowing the same dataset to train and evaluate multiple prediction tasks.
          </p>
          <p className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            The feature extraction workflow is designed to run on database CIFs, generated CIFs from SMILES inputs, and folders of user-supplied CIFs.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">GUI Workflow</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The GUI provides two main workflows. In the first, a user inputs SMILES strings for candidate components.
            Behind the scenes, the app generates CIFs, extracts the relevant input features, and sends those features to the trained models.
          </p>
          <p className="mb-6">
            In the second workflow, the user can select a local folder of CIFs and run the analysis pipeline directly on their own structures.
            This makes the tool useful both for screening hypothetical inputs and for analyzing existing crystallographic data.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Prediction Tasks</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The GUI runs three models concurrently to predict complementary structural descriptors:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Dimensionality</li>
            <li>Bravais class family</li>
            <li>Centrosymmetry</li>
          </ul>
          <p className="mb-6">
            Running these models together gives the user a broader structural summary than dimensionality alone.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">User-Trained Models</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Users can also analyze their own folder of CIFs and train custom models using their own data.
            This is intended to make the workflow adaptable to new material families, new labeling strategies, or datasets that are not covered by the default trained models.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Challenges and Limitations</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The reliability of this workflow depends on the quality and consistency of the source CIFs, the generated CIFs, and the extracted labels.
            Model predictions are also constrained by the distribution of structures represented in the training data.
          </p>
          <p className="mb-6">
            Because the project is ongoing, model performance, supported input types, and GUI behavior may change as additional validation is completed.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Future Work</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Future work includes expanding the training dataset, improving generated CIF handling, validating the three prediction models, and refining the GUI for easier use by experimental collaborators.
          </p>
        </div>
      </div>
    </>
  );
};

export default PerovskiteMLContent;
