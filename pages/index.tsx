/**
 * Home Page — Projects
 *
 * The landing page. Leads with a compact identity header, then goes
 * straight into the project grid. Full bio lives on /about, contact
 * info lives on /contact.
 */

import React from 'react';
import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import Projects from '../components/Projects';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Leo Beck"
      description="Professional portfolio showcasing research projects, materials science expertise, and technical skills"
    >
      <HomeHeader />
      <Projects />
    </Layout>
  );
};

export default HomePage;
