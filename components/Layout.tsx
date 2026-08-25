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
import { BASE_PATH } from '../lib/basePath';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  image?: string; // Optional: defaults to the profile photo for link previews
}

const DEFAULT_OG_IMAGE = `${BASE_PATH}/images/Beck-Leo_8x10_20240718.jpg`;

const Layout: React.FC<LayoutProps> = ({ children, title, description, image }) => {
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${BASE_PATH}/images/favicon.ico`} />

        {/* Per-page Open Graph / Twitter Card tags — site-wide defaults live in _document.tsx */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
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
