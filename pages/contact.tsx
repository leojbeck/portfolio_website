/**
 * Contact Page
 */

import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <Layout
      title="Contact - Leo Beck"
      description="Get in touch with Leo Beck"
    >
      <Contact />
    </Layout>
  );
};

export default ContactPage;
