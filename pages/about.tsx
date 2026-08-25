/**
 * About Page
 *
 * Full bio (Hero) plus the Technical Toolkit breakdown.
 */

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TechnicalToolkit from '../components/TechnicalToolkit';

const AboutPage: React.FC = () => {
  return (
    <Layout
      title="About - Leo Beck"
      description="About Leo Beck: Materials Science PhD student, research background, and technical toolkit"
    >
      <Hero />
      <TechnicalToolkit />
    </Layout>
  );
};

export default AboutPage;
