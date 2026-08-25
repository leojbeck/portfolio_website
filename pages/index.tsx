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
import CrystalLatticeBackground from '../components/CrystalLatticeBackground';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Leo Beck"
      description="Professional portfolio showcasing research projects, materials science expertise, and technical skills"
    >
      <div className="relative overflow-hidden">
        <CrystalLatticeBackground variant="orthorhombic" />
        <div className="relative z-10">
          <HomeHeader />
          <Projects />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
