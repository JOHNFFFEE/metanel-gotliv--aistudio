import React, { useState } from 'react';
import { Box } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  transparentFallback?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  style,
  fallbackLabel,
  transparentFallback = false,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (transparentFallback) {
      return (
        <div
          className={`flex items-center justify-center ${className}`}
          style={style}
          role="img"
          aria-label={alt || fallbackLabel || '3D artwork'}
        >
          <div className="w-full aspect-square rounded-full bg-gradient-to-br from-[#646973]/30 via-[#7621B0]/25 to-[#BBCCD7]/20 border border-[#D7E2EA]/20 flex items-center justify-center backdrop-blur-sm">
            <Box className="w-1/3 h-1/3 text-[#D7E2EA]/60 stroke-[1.25]" />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#16181D] via-[#1E1429] to-[#0C0C0C] border border-[#D7E2EA]/15 text-[#D7E2EA]/70 p-4 ${className}`}
        style={style}
        role="img"
        aria-label={alt || fallbackLabel || '3D visual'}
      >
        <Box className="w-8 h-8 mb-2 text-[#BBCCD7]/60 stroke-[1.25]" />
        {fallbackLabel && (
          <span className="text-xs uppercase tracking-widest text-center text-[#D7E2EA]/60">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || fallbackLabel || '3D Creator Asset'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default SafeImage;
