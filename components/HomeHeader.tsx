/**
 * Home Header Component
 *
 * A compact identity strip for the homepage (now the Projects grid).
 * Just enough to tell a cold visitor whose site this is — full bio,
 * role badge, and CV/Resume links live on the About page instead.
 */

import React from 'react';
import { profile } from '../data/profile';

const HomeHeader: React.FC = () => {
  return (
    <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
          )}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg text-zinc-700">
              {profile.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
