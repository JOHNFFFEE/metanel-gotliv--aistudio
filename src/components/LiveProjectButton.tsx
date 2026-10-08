import React from 'react';
import { Play } from 'lucide-react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  label = 'צפה בפרויקט',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-wider px-6 py-2.5 sm:px-9 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
    >
      <Play className="w-3.5 h-3.5 fill-current" />
      <span>{label}</span>
    </button>
  );
};

export default LiveProjectButton;
