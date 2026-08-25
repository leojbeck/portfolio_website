/**
 * Layout Component
 * 
 * This component provides the main layout structure for all pages.
 * It includes the navigation bar and footer, and wraps the main content.
 * 
 * Usage:
 * <Layout>
 *   <YourPageContent />
 * </Layout>
 * 
 * To customize:
 * - Edit the navigation links in the Navbar component
 * - Modify the footer content in the Footer component
 * - Update the overall layout structure here if needed
 */

import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-surface">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
