import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft, ExternalLink, Github, Play, FileText } from 'lucide-react';
import { projects } from '../../data/projects';
import Layout from '../../components/Layout';
import { profile } from '../../data/profile';
import { GetStaticPaths, GetStaticProps } from 'next';

// Import your project content components
import ProjectLinks from '../../components/projectContent/ProjectLinks';
import CrystalLatticeBackground from '../../components/CrystalLatticeBackground';
import ClemsonMemristorContent from '../../components/projectContent/ClemsonMemristorContent';
import HOIP_mlContent from '../../components/projectContent/HOIP_mlContent';
import MxeneDopamineContent from '../../components/projectContent/MxeneDopamineContent';
import MxeneRoadmapContent from '../../components/projectContent/MxeneRoadmapContent';
import HOIP_mdContent from '../../components/projectContent/HOIP_mdContent';
import PerovskiteMLContent from '../../components/projectContent/PerovskiteMLContent';
import PortfolioWebsiteContent from '../../components/projectContent/PortfolioWebsiteContent';
import BookRatingsContent from '../../components/projectContent/BookRatingsContent';
import FunNumericsContent from '../../components/projectContent/FunNumericsContent';
import OrganizationAppContent from '../../components/projectContent/OrganizationAppContent';

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by ID
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      /* Project not found*/
      <Layout title=" " description="The requested project could not be found">
        <div className="pt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
              <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

 // Function to render project-specific content component
 const renderProjectContent = () => {
  switch (project.id) {
    case 'hoip-md':
      return <HOIP_mdContent project={project} />;
    case 'clemson-memristor':
      return <ClemsonMemristorContent project={project} />;
    case 'hoip-ml':
      return <HOIP_mlContent project={project} />;
    case 'perovskite-ml':
      return <PerovskiteMLContent project={project} />;
    case 'mxene-dopamine':
      return <MxeneDopamineContent project={project} />;
    case 'mxene-roadmap':
      return <MxeneRoadmapContent project={project} />;
    case 'portfolio-website':
      return <PortfolioWebsiteContent project={project} />;
    case 'book-ratings':
      return <BookRatingsContent project={project} />;
    case 'fun-numerics':
      return <FunNumericsContent project={project} />;
    case 'organization-app':
      return <OrganizationAppContent project={project} />;
    default:
      // fallback: links + longDescription, for projects with no bespoke write-up
      return (
        <>
          <ProjectLinks project={project} />
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none">{project.longDescription}</div>
          </div>
        </>
      );
  }
};

return (
  <Layout
    title={`${project.title} - Project`}
    description={project.description}
    image={project.images?.[0]}
  >
    <div className="relative overflow-hidden min-h-screen">
      <CrystalLatticeBackground variant="perovskite" />
      <div className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-surface/90 backdrop-blur-sm rounded-2xl border border-accent-100 shadow-sm p-6 sm:p-10">
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              {profile.name} • {project.date}
            </p>
          </div>

          {/* Project Main Image */}
          {project.images && (
            <div className="mb-12">
              <img src={project.images[0]} alt={project.title} className="w-full rounded-lg shadow-lg" />
            </div>
          )}

          {/* Render project-specific content here */}
          {renderProjectContent()}

          {/* Back Button */}
          <div className="pt-8 border-gray-200">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
};

// ADD THESE FUNCTIONS FOR STATIC GENERATION:
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false, // Required for static export
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  
  return {
    props: {
      id,
    },
  };
};

export default ProjectPage;
