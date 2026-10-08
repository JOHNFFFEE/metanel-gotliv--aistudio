/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection, {
  ProjectData,
  PROJECTS_DATA,
} from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <div
      id="top"
      dir="rtl"
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA]"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenShowreel={() => setSelectedProject(PROJECTS_DATA[0])}
      />
      <MarqueeSection
        onSelectReel={() => setSelectedProject(PROJECTS_DATA[0])}
      />
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />
      <ContactSection />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => setIsContactOpen(true)}
      />
    </div>
  );
}
