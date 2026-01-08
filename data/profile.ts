/**
 * Profile Data Configuration
 * 
 * This file contains all the personal information displayed in the hero section.
 * Edit the values below to customize your portfolio without touching component code.
 * 
 * To update:
 * 1. Change the values in the profile object below
 * 2. Save the file
 * 3. The changes will automatically appear on your website
 */

export interface Profile {
  name: string;
  title: string;
  currentRole: {
    company: string;
    position: string;
    badge?: string;
  };
  description: string[];
  avatar?: string; // Optional: path to avatar image in public/images/
}

export const profile: Profile = {
  name: "Leo Beck",
  title: "Computational Materials Scientist",
  currentRole: {
    company: "Heinz Interfaces Lab",
    position: "Graduate Researcher",
    badge: undefined // Optional: remove if not applicable
  },
  description: [
    "I am a Materials Science & Engineering PhD student at CU Boulder. My research is focused on using molecular dynamics to predict stability and structures of hybrid organic inorganic perovskites (HOIPs)",
    "I worked at the Air Force Research Lab (AFRL) as a High Performance Computing researcher Summer of 2024, focused on calculating shear properties of MXenes using molecular dynamics.",
    "I enjoy music, hiking, climbing, and geography games."
  ],
  avatar: "/images/Beck-Leo_8x10_20240718.jpg" // Uncomment and add your avatar image
};

