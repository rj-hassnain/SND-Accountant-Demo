import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'SND Accountants · Bolton & Manchester',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B162C] via-[#132342] to-[#1E345E] text-white/80 p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-10 h-10 text-[#C89F65] mb-3 opacity-80" />
        <span className="font-display text-sm tracking-wide text-white/90">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
