/**
 * Navigation Bar Component
 *
 * Sticky top nav that links between the site's pages (Home, About, Contact).
 *
 * To customize:
 * - Add/remove pages by editing the navItems array
 * - Update the styling in the className attributes
 * - Modify the mobile menu behavior if needed
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

// Navigation items - edit these to add/remove pages
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (href: string) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      router.pathname === href
        ? 'text-accent-800 font-semibold'
        : 'text-gray-600 hover:text-gray-900'
    }`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-accent-50 border-b border-accent-300 ${
      scrolled
        ? 'bg-accent-50/95 backdrop-blur-sm shadow-sm'
        : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200"
            >
              {profile.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClasses(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-accent-50 border-t border-accent-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  router.pathname === item.href
                    ? 'text-accent-800 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
