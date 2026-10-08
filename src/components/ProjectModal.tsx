import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Instagram } from 'lucide-react';
import { ProjectData } from './ProjectsSection';
import SafeImage from './SafeImage';
import ContactButton from './ContactButton';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            className="w-full max-w-4xl rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] relative my-8"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-display-en font-black text-4xl sm:text-6xl text-[#D7E2EA] tabular-nums leading-none">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black uppercase tracking-wide text-[#D7E2EA]">
                    {project.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="סגור תצוגת פרויקט"
                className="w-11 h-11 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6">
              <div className="sm:col-span-5 flex flex-col gap-4">
                <div className="h-44 sm:h-52 rounded-[28px] overflow-hidden bg-[#141518]">
                  <SafeImage
                    src={project.col1Image1}
                    alt={`${project.name} תמונה 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-52 sm:h-64 rounded-[28px] overflow-hidden bg-[#141518]">
                  <SafeImage
                    src={project.col1Image2}
                    alt={`${project.name} תמונה 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="sm:col-span-7 h-72 sm:h-[480px] rounded-[28px] overflow-hidden bg-[#141518]">
                <SafeImage
                  src={project.col2Image}
                  alt={`${project.name} פריים ראשי`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D7E2EA]/15">
              <a
                href="https://www.instagram.com/matanelgot/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B600A8]" />
                <span>צפו בקטעים נוספים באינסטגרם @matanelgot</span>
              </a>
              <ContactButton
                label="רוצים הפקה ברמה הזאת? דברו איתי"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
