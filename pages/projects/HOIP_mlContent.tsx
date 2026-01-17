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
            This project focuses on enhancing the prediction of dimensionality in hybrid metal halides using machine learning techniques. 
            By leveraging the HybriD3 database, we aim to improve the accuracy and reliability of dimensionality predictions, which are crucial for the design and optimization of new materials.
            Specifically, we address challenges associated with small-scale and imbalanced datasets through Synthetic Minority Over-sampling Technique (SMOTE).
          </p>
        </div>
      </div>

      {/* Dataset */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Dataset</h2>
        <div className="prose prose-lg mb-12">
          <ul className="list-disc list-inside mb-6">
            <li>Training Set: 494 samples expanded to 1336 samples</li>
            <li>Features: 11 property attributes (both numerical and categorical)</li>
            <li>Target Variable: Dimensionality</li>
          </ul>
        </div>
      </div>

      {/* Images */}
      {project?.images?.[1] && (
        <div className="mb-12">
          <img
            src={project.images[1]}
            alt={project.title ?? 'Project image - Pie chart of dataset dimensionality distribution'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      
      {project?.images?.[2] && (
        <div className="mb-5">
          <img
            src={project.images[2]}
            alt={project.title ?? 'Project image - Sample feature distributions before and after SMOTE'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Methodology</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Data Preprocessing</h4>
          <p className="mb-6">
            All data came from the HybriD<sup>3</sup> database. Initial preprocessing involved handling missing values, encoding categorical variables, 
            and normalizing numerical features to ensure uniformity across the dataset.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Feature Engineering</h4>
          <p className="mb-6">
            We extracted relevant features from the dataset, including both intrinsic material properties and derived attributes that could influence dimensionality.
            In total, 11 features were utilized for model training. Categorical features were one-hot encoded, while numerical features were standardized.
            These features included properties such as organic and inorganic formula units, number of terminal nitrogens, alkyl chain number and length,
            and more.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Implementation</h4>
          <p className="mb-6">
            Gradient Boosted Trees (GBT) were used as a core predictive model due to their ability to capture 
            complex non-linear decision boundaries and interactions between features.
            We also used logistic regression, random forests, and support vector machines (SVM) as base learners in a stacking ensemble.
            The base learners generate first-level predictions, which are then used as input features for the meta-learner, GBT. This two-layer
            architecture makes use of diverse error structures and learns optimized decision rules that outperform an individual model.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Results</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Performance Comparison</h4>
          <p className="mb-6">
            Implementing SMOTE most significantly improved model performance on minority classes, as evidenced by balanced accuracy across all classes. 
            In particular, 0D had the most significant improvement, increasing from 54% to 95% accuracy.
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
            To improve model performance further, future work should focus on expanding the dataset size and diversity.
            Since the HybriD<sup>3</sup> database is relatively small and focused in scope, acquiring more samples, especially for underrepresented dimensionalities, would enhance the model's learning capability.
            This could involve training multi-fidelity models that leverage both experimental and computational data to enrich the dataset.
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
