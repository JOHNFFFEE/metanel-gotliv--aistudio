import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  label = 'בואו נרים הפקה',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full text-white font-bold uppercase tracking-wider px-7 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap shrink-0 cursor-pointer transition-transform duration-150 hover:scale-[1.04] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 18px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
};

export default ContactButton;
