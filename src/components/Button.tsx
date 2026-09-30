import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'darkOutline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsRouterLink extends BaseProps {
  to: string;
  href?: undefined;
  onClick?: () => void;
}

interface ButtonAsExternalLink extends BaseProps {
  href: string;
  to?: undefined;
  onClick?: () => void;
}

export type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsExternalLink;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
  } = props;

  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap shrink-0 rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A4E] focus-visible:ring-offset-2 cursor-pointer';

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[#0B162C] text-white hover:bg-[#16284C] active:translate-y-px shadow-xs',
    secondary:
      'bg-[#B48A4E] text-white hover:bg-[#9F763D] active:translate-y-px shadow-xs',
    outline:
      'border border-slate-300 bg-white text-[#0B162C] hover:border-[#0B162C] hover:bg-slate-50',
    darkOutline:
      'border border-white/25 bg-white/5 text-white hover:bg-white/15 hover:border-white/40',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-sm',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to !== undefined) {
    return (
      <Link to={props.to} onClick={props.onClick} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    return (
      <a href={props.href} onClick={props.onClick} className={combinedClasses}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonRest}>
      {children}
    </button>
  );
};
