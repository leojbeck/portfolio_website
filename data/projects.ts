/**
 * Projects Data Configuration
 * 
 * This file contains all the project information displayed in the projects section.
 * Each project has a title, description, tech stack, and optional links/images.
 * 
 * To add/remove projects:
 * 1. Add new project objects to the projects array below
 * 2. Remove projects by deleting their objects
 * 3. Reorder projects by changing their position in the array
 * 4. Save the file - changes appear automatically
 * 
 * To add images:
 * 1. Place your project images in public/images/projects/
 * 2. Reference them as "/images/projects/your-image.jpg"
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Optional: extended description for project detail pages
  techStack: string[];
  images?: string[]; // Optional: path to project image
  github?: string; // Optional: GitHub repository URL
  demo?: string; // Optional: Live demo URL to Loom
  notebook?: string; // Optional: Jupyter notebook or analysis link
  date: string; // Date when the project was completed
  paper?: string; // Optional: URL to publication
}

export const projects: Project[] = [
  {
    id: "hoip-md",
    title: "Predicting Stability and Structure of Hybrid Organic Inorganic Perovskites",
    description: "Using Molecular Dynamics to calculate formation energies and structural features.",
    longDescription: "I am using LAMMPS to calculate formation energies and structural features of HOIPs / HMHs, with the goal to give predictions to experimental collaborators.",
    techStack: ["LAMMPS","Python", "HPC", "bash", "Machine Learning"],
    images: ["/images/projects/FMBA_esm.png"],
    github: "https://github.com/leojbeck/lammps_pre_post_processing",
    //notebook: "/notebooks/vail_causal",
    date: "2026"
  },
  {
    id: "clemson-memristor",
    title: "Fabrication of Polypyrrole Electrochemical Memristors",
    description: "Fabricated 3-terminal thin-film organic memristors, then performed electrical characterization.",
    longDescription: "This project involved fabricating 3-terminal organic memristors with various chemistries, then using an oscilloscope to characterize their memristive properties. The work was part of a larger research project, which has been published in ACS Applied Electronic Materials.",
    techStack: ["Photolithography", "Chemical Etching", "Device Fabrication"],
    images: ["/images/projects/memristor_fig2.jpeg", "/images/projects/memristor_fig5.jpeg"],
    //github: "<>",
    paper: "https://par.nsf.gov/servlets/purl/10474242",
    //notebook: "/notebooks/letusski.html",
    date: "2021"
  },
  {
    id: "hoip-ml",
    title: "Enhancing Dimensionality Prediction in Hybrid Metal Halides",
    description: "Used the HybriD3 database to build machine learning models to predict hybrid metal halide dimensionality.",
    longDescription: "This project involved programmatically grabbing entries from HybriD3, filtering, and applying machine learning methods to the small-scale, imbalanced database.",
    techStack: ["Python", "Feature Extraction","XGBoost", "Machine Learning"],
    images: ["/images/projects/hoip-mariia-ml-hybrid3.png"],
    //github: "<>",
    //demo: "<>"
    //notebook: "<>",
    paper: "https://arxiv.org/abs/2512.05367",
    date: "2025"
  },
  {
    id: "mxene-dopamine",
    title: "Quantifying MXene Interfacial Properties",
    description: "Used NAMD to simulate dopamine binding on the surface of Ti3C2 MXenes under various surface conditions.",
    longDescription: "As part of a larger project, I used NAMD to run single dopamine and multiple dopamine accumulation simulations under pH 5 and 6, with varying amounts of -OH and -F surface terminations.",
    techStack: ["Python", "MXenes", "NAMD", "bash", "LAMMPS"],
    images: ["/images/projects/40_f23_ruler_yes_depth.png","/images/projects/landing_page_1.png","/images/projects/second_page_2.png","/images/projects/third_page_3.png"],
    //demo: "<>",
    github: "https://github.com/leojbeck/namd_pre_post_processing",
    paper: "https://chemrxiv.org/engage/chemrxiv/article-details/6921f2b8a10c9f5ca13a9ea6",
    //notebook: "<>"
    date: "2025"
  },
  {
    id: "mxene-roadmap",
    title: "Roadmap: Computational Studies of MXenes",
    description: "Contributed to computational section of roadmaps paper.",
    longDescription: "Wrote part of the computational studies section of the roadmaps paper.",
    techStack: ["Molecular Dynamics", "DFT", "MXenes"],
    images: ["/images/projects/F_MXene_render.png"],
    //github: "<>",
    //demo: "<>",
    //notebook: "<>"
    paper: "",
    date: "2025"
  }
];
