import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl';

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.14em] uppercase mb-3 ${
            light ? 'text-[#C89F65]' : 'text-[#1E5663]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-normal tracking-tight leading-[1.15] ${
          light ? 'text-white' : 'text-[#0B162C]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
