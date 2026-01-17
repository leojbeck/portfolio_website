/**
 * Contact Data Configuration
 * 
 * This file contains all the contact information and social media links.
 * Update the values below to customize your contact section.
 * 
 * To update:
 * 1. Change the email, phone, and location values
 * 2. Add/remove social media platforms
 * 3. Update the URLs to point to your actual profiles
 * 4. Save the file - changes appear automatically
 */

export interface ContactInfo {
  email: string;
  phone?: string; // Optional: remove if you don't want to display phone
  location?: string; // Optional: remove if you don't want to display location
  linkedin: string;
  github: string;
  kaggle?: string; // Optional: remove if you don't have Kaggle
  portfolio?: string; // Optional: remove if you don't have a separate portfolio
  orcid?: string;
  researchgate?: string;
}

export const contactInfo: ContactInfo = {
  email: "leojbeck@gmail.com",
  phone: "704-654-8644",
  location: "Boulder, CO",
  linkedin: "https://www.linkedin.com/in/leo-beck",
  github: "https://github.com/leojbeck",
  orcid: "https://orcid.org/0009-0000-9568-9733", // Uncomment if you have Kaggle
  // portfolio: "https://leojbeck.github.io" // Uncomment if you have a separate portfolio
  researchgate: "https://www.researchgate.net/profile/Leo-Beck-3"
};

// Social media icons mapping (these will be used to display appropriate icons)
export const socialIcons = {
  linkedin: "Linkedin",
  github: "Github",
  kaggle: "Database", // Using Database icon for Kaggle
  portfolio: "Globe",
  orcid: "ORCiD",
  researchgate: "ResearchGate"
};
