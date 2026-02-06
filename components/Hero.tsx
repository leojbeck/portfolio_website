/**
 * Hero Section Component
 * 
 * This component displays the main introduction section at the top of the portfolio.
 * It includes your name, title, current role, and a brief description.
 * 
 * Features:
 * - Clean, minimal design
 * - Responsive layout that works on all devices
 * - Optional avatar image support
 * 
 * To customize:
 * - Update the profile data in data/profile.ts
 * - Add/remove the avatar by uncommenting the avatar line in profile.ts
 * - Modify the styling in the className attributes
 */

import React from 'react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          
          {/* Name + Avatar */}
          <div className="flex items-center gap-4 mb-4">
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt={`${profile.name} avatar`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
              />
            )}

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {profile.name}
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl text-zinc-700 mb-4">
            {profile.title}
          </h2>

          {/* Current Role Badge */}
          <a 
            href="https://bionanostructures.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm mb-8 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 cursor-pointer"
          >
            {profile.currentRole.badge && (
              <div className="w-3 h-3 bg-accent-500 rounded-sm mr-2 flex-shrink-0" />
            )}
            <span className="text-sm text-gray-600">
              {profile.currentRole.position} @ {profile.currentRole.company}
              {profile.currentRole.badge && ` • ${profile.currentRole.badge}`}
            </span>
          </a>
          
          {/* CV/Resume Buttons and About Me Section Title */}
          <div className="flex items-center gap-6 mb-5 flex-wrap">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center">
              About me
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {profile.cv && (
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-900 text-white rounded-lg shadow-sm hover:bg-zinc-800 transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View CV
                </a>
              )}
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-900 text-white rounded-lg shadow-sm hover:bg-zinc-800 transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Resume
                </a>
              )}
            </div>
          </div>

          {/* Description paragraphs */}
          <div className="space-y-2 text-zinc-700 max-w-2xl">
            <li className="flex items-start"> 
            I am a Materials Science & Engineering PhD student at CU Boulder. My research is focused on using molecular dynamics and machine learning to predict structural features of hybrid organic inorganic semiconducting materials.
            </li>
            <li className="flex items-start">
            I worked at the Air Force Research Lab (AFRL) as a High Performance Computing researcher Summer of 2024, focused on calculating shear properties of MXenes using molecular dynamics.
            </li>
            <li className="flex items-start">
            I enjoy music, hiking, climbing, and geography games in my free time.
            </li>
            {/* {profile.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-md text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
