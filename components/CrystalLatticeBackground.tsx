/**
 * Crystal Lattice Background
 *
 * Decorative, non-interactive backdrop: a tiled square lattice with
 * corner + body-center nodes (a simple-cubic/BCC-style unit cell,
 * echoing the perovskite/MXene structures in the research above it).
 * Purely a watermark — kept low-opacity and behind z-10 content so it
 * never competes with text. Drifts by exactly one tile period so the
 * animation loop has no visible seam.
 */

import React from 'react';

const CrystalLatticeBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none text-accent-300"
    >
      <svg
        className="absolute -top-12 -left-12 opacity-40 animate-lattice-drift"
        style={{ width: 'calc(100% + 6rem)', height: 'calc(100% + 6rem)' }}
      >
        <defs>
          <pattern
            id="crystal-lattice"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="48" y2="0" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="48" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="0" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="48" y1="0" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="48" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="48" y1="48" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.4" fill="currentColor" />
            <circle cx="48" cy="0" r="2.4" fill="currentColor" />
            <circle cx="0" cy="48" r="2.4" fill="currentColor" />
            <circle cx="48" cy="48" r="2.4" fill="currentColor" />
            <circle cx="24" cy="24" r="1.8" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crystal-lattice)" />
      </svg>
    </div>
  );
};

export default CrystalLatticeBackground;
