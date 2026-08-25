/**
 * Contact Page
 */

import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import CrystalLatticeBackground from '../components/CrystalLatticeBackground';

const ContactPage: React.FC = () => {
  return (
    <Layout
      title="Contact - Leo Beck"
      description="Get in touch with Leo Beck"
    >
      <div className="relative overflow-hidden min-h-screen">
        <CrystalLatticeBackground variant="hexagonal" />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
