/**
 * Footer Component
 * 
 * This component provides a simple footer at the bottom of the portfolio.
 * It includes copyright information and can be extended with additional links.
 * 
 * Features:
 * - Clean, minimal design
 * - Copyright information
 * - Optional additional links
 * - Responsive layout
 * 
 * To customize:
 * - Update the copyright text
 * - Add/remove footer links
 * - Modify the styling and layout
 * - Add social media links if desired
 */

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Leo Beck. All rights reserved.
            </p>
          </div>

          {/* Footer Links - Optional */}
          <div className="flex space-x-6">
            <a
              href="#hero"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
            >
              Back to Top
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
            >
              Contact
            </a>
            {/* Add more footer links here if needed */}
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
