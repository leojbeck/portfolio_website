/**
 * Contact Section Component
 * 
 * This component displays your contact information and social media links.
 * It includes email, phone, location, and various social platforms.
 * 
 * Features:
 * - Contact information display
 * - Social media links with icons
 * - Responsive design for all devices
 * - Clean, professional styling
 * 
 * To customize:
 * - Update contact data in data/contact.ts
 * - Add/remove social media platforms
 * - Modify the layout and styling
 * - Adjust the icons
 */

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Database, Globe } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Contact Information
            </h3>
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phone - Optional */}
            {contactInfo.phone && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-900 hover:text-green-600 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location - Optional */}
            {contactInfo.location && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-900">{contactInfo.location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Connect With Me
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Linkedin size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Github size={16} className="text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">GitHub</span>
              </a>

              {/* ORCiD - Optional */}
              {contactInfo.orcid && (
                <a
                  href={contactInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Database size={16} className="text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">ORCiD</span>
                </a>
              )}

              {/* ResearchGate - Optional */}
              {contactInfo.researchgate && (
                <a
                  href={contactInfo.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Database size={16} className="text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">ResearchGate</span>
                </a>
              )}

              {/* Portfolio - Optional */}
              {contactInfo.portfolio && (
                <a
                  href={contactInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe size={16} className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Portfolio</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-left">
          <p className="text-gray-600 mb-4">
            Looking for a materials scientist to join or collaborate with your team?
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Materials Science Collaboration Opportunity`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Mail size={20} className="mr-2" />
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
