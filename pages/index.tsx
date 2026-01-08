/**
 * Main Portfolio Page
 * 
 * This is the main page that brings together all portfolio sections.
 * It imports and displays the Hero, Projects, and Contact components
 * in a logical order to create a complete portfolio website.
 * 
 * Structure:
 * 1. Hero Section - Introduction and personal info
 * 2. Projects Section - Showcase of projects
 * 3. Contact Section - Contact information and social links
 * 
 * To customize:
 * - Reorder sections by changing the component order below
 * - Add/remove sections by importing and including/excluding components
 * - Modify the overall page layout and spacing
 * - Add custom meta tags or page-specific styling
 */

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Leo Beck"
      description="Professional portfolio showcasing research projects, materials science expertise, and technical skills"
    >
      {/* Hero Section - Introduction and personal info */}
      <Hero />
      
      {/* Projects Section - Showcase of data science projects */}
      <Projects />
      
      {/* Contact Section - Contact information and social links */}
      <Contact />
    </Layout>
  );
};

export default HomePage;
