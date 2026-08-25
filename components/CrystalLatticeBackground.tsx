/**
 * Crystal Lattice Background
 *
 * Decorative, non-interactive backdrop tying each page to a real
 * crystal system rather than being generic decoration:
 *  - "cubic"        — square lattice, corner + body-center nodes
 *                      (simple-cubic/BCC, About page)
 *  - "hexagonal"     — triangular point lattice, dense 3-bond mesh
 *                      (echoes 2D materials like MXenes, Home page)
 *  - "orthorhombic"  — sparse rectangular lattice, corners only
 *                      (quietest motif, Contact page)
 *  - "perovskite"    — corner-sharing diamond/octahedra network
 *                      (the ABX3 perovskite motif itself, Project pages)
 *
 * Always low-opacity and behind z-10 content so it never competes
 * with text. Each variant's drift animation (defined in globals.css)
 * moves by exactly one tile period so the loop has no visible seam.
 */

import React from 'react';

export type LatticeVariant = 'cubic' | 'hexagonal' | 'orthorhombic' | 'perovskite';

interface LatticeConfig {
  patternId: string;
  tileWidth: number;
  tileHeight: number;
  opacityClass: string;
  animationClass: string;
  pattern: React.ReactNode;
}

const configs: Record<LatticeVariant, LatticeConfig> = {
  cubic: {
    patternId: 'lattice-cubic',
    tileWidth: 48,
    tileHeight: 48,
    opacityClass: 'opacity-40',
    animationClass: 'animate-lattice-drift-cubic',
    pattern: (
      <>
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
      </>
    ),
  },
  hexagonal: {
    patternId: 'lattice-hexagonal',
    tileWidth: 40,
    tileHeight: 69.3,
    opacityClass: 'opacity-30',
    animationClass: 'animate-lattice-drift-hexagonal',
    pattern: (
      <>
        {/* top row (corner-shared with tiles above/left) */}
        <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" />
        {/* diagonals down to the offset mid-row */}
        <line x1="0" y1="0" x2="20" y2="34.6" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="0" x2="20" y2="34.6" stroke="currentColor" strokeWidth="1" />
        {/* diagonals from mid-row down to the next tile's top row */}
        <line x1="20" y1="34.6" x2="0" y2="69.3" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="34.6" x2="40" y2="69.3" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="0" r="2.2" fill="currentColor" />
        <circle cx="40" cy="0" r="2.2" fill="currentColor" />
        <circle cx="20" cy="34.6" r="2.2" fill="currentColor" />
      </>
    ),
  },
  orthorhombic: {
    patternId: 'lattice-orthorhombic',
    tileWidth: 56,
    tileHeight: 38,
    opacityClass: 'opacity-40',
    animationClass: 'animate-lattice-drift-orthorhombic',
    pattern: (
      <>
        <line x1="0" y1="0" x2="56" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="38" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="0" r="2.2" fill="currentColor" />
        <circle cx="56" cy="0" r="2.2" fill="currentColor" />
        <circle cx="0" cy="38" r="2.2" fill="currentColor" />
        <circle cx="56" cy="38" r="2.2" fill="currentColor" />
      </>
    ),
  },
  perovskite: {
    patternId: 'lattice-perovskite',
    tileWidth: 60,
    tileHeight: 60,
    opacityClass: 'opacity-30',
    animationClass: 'animate-lattice-drift-perovskite',
    pattern: (
      <>
        {/* diamond = 2D projection of a corner-sharing BX6 octahedron;
            vertices sit exactly at tile-edge midpoints so adjacent tiles'
            diamonds touch tip-to-tip, like a real perovskite framework */}
        <polygon
          points="30,0 60,30 30,60 0,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="30" cy="0" r="2" fill="currentColor" />
        <circle cx="60" cy="30" r="2" fill="currentColor" />
        <circle cx="30" cy="60" r="2" fill="currentColor" />
        <circle cx="0" cy="30" r="2" fill="currentColor" />
        <circle cx="30" cy="30" r="1.6" fill="currentColor" />
      </>
    ),
  },
};

const CrystalLatticeBackground: React.FC<{ variant?: LatticeVariant }> = ({
  variant = 'cubic',
}) => {
  const config = configs[variant];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none text-accent-300"
    >
      <svg
        className={`absolute -top-20 -left-20 ${config.opacityClass} ${config.animationClass}`}
        style={{ width: 'calc(100% + 10rem)', height: 'calc(100% + 10rem)' }}
      >
        <defs>
          <pattern
            id={config.patternId}
            width={config.tileWidth}
            height={config.tileHeight}
            patternUnits="userSpaceOnUse"
          >
            {config.pattern}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${config.patternId})`} />
      </svg>
    </div>
  );
};

export default CrystalLatticeBackground;
