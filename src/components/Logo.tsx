import React from 'react';

interface LogoProps {
  variant?: 'flat' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

/**
 * HealthMate Logo Component
 * 
 * Design Concept: Negative space creates a heart shape within a document fold,
 * with a subtle shield outline for privacy/security.
 * 
 * Export variants:
 * - flat: Single color navy
 * - gradient: Navy to mint gradient
 * - outline: Monoline outline for favicon
 */
export function Logo({ variant = 'flat', size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-xl' },
    lg: { icon: 40, text: 'text-2xl' },
    xl: { icon: 56, text: 'text-4xl' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon variant={variant} size={currentSize.icon} />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`${currentSize.text} font-bold tracking-tight`}>
            HealthMate
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-muted-foreground -mt-1">
              Sehat ka Smart Dost
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function LogoIcon({ variant, size }: { variant: string; size: number }) {
  const getColors = () => {
    switch (variant) {
      case 'gradient':
        return {
          primary: 'url(#logo-gradient)',
          secondary: 'url(#logo-gradient)'
        };
      case 'outline':
        return {
          primary: 'none',
          secondary: 'none',
          stroke: '#0f2d5f',
          strokeWidth: 2
        };
      default:
        return {
          primary: '#0f2d5f',
          secondary: '#2dd4bf'
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon"
    >
      {variant === 'gradient' && (
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f2d5f" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      )}
      
      {/* Shield outline (subtle, for security/privacy hint) */}
      <path
        d="M32 4L12 12V28C12 42 20 52 32 60C44 52 52 42 52 28V12L32 4Z"
        fill={variant === 'outline' ? 'none' : 'rgba(45, 212, 191, 0.1)'}
        stroke={variant === 'outline' ? colors.stroke : 'none'}
        strokeWidth={colors.strokeWidth || 0}
        opacity={variant === 'outline' ? 1 : 0.3}
      />
      
      {/* Document with fold (creating negative space) */}
      <g>
        {/* Main document body */}
        <path
          d="M20 14H44C45.1 14 46 14.9 46 16V50C46 51.1 45.1 52 44 52H20C18.9 52 18 51.1 18 50V16C18 14.9 18.9 14 20 14Z"
          fill={variant === 'outline' ? 'none' : colors.primary}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
        />
        
        {/* Document fold (top-right corner) */}
        <path
          d="M38 14L46 22L38 22V14Z"
          fill={variant === 'outline' ? 'none' : colors.secondary}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
          opacity={variant === 'outline' ? 1 : 0.7}
        />
        
        {/* Negative space heart (cut from document center) */}
        <path
          d="M32 42C32 42 24 36 24 30C24 26 26 24 28 24C30 24 31 25 32 27C33 25 34 24 36 24C38 24 40 26 40 30C40 36 32 42 32 42Z"
          fill={variant === 'outline' ? 'none' : '#eef2ff'}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
        />
      </g>
      
      {/* Chat bubble dots (AI assistance indicator) */}
      <g opacity={variant === 'outline' ? 1 : 0.8}>
        <circle
          cx="26"
          cy="30"
          r="1.5"
          fill={variant === 'outline' ? 'none' : colors.secondary}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
        />
        <circle
          cx="32"
          cy="30"
          r="1.5"
          fill={variant === 'outline' ? 'none' : colors.secondary}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
        />
        <circle
          cx="38"
          cy="30"
          r="1.5"
          fill={variant === 'outline' ? 'none' : colors.secondary}
          stroke={variant === 'outline' ? colors.stroke : 'none'}
          strokeWidth={colors.strokeWidth || 0}
        />
      </g>
    </svg>
  );
}

// Compact Badge Version (for small spaces)
export function LogoBadge({ variant = 'flat' }: { variant?: 'flat' | 'gradient' | 'outline' }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-primary/5 rounded-full border border-primary/10">
      <LogoIcon variant={variant} size={16} />
      <span className="text-xs font-semibold text-primary">HealthMate</span>
    </div>
  );
}

// Favicon Version (16x16 optimized)
export function LogoFavicon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="favicon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f2d5f" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      
      <rect width="64" height="64" rx="12" fill="url(#favicon-gradient)" />
      
      <path
        d="M20 18H44C45.1 18 46 18.9 46 20V46C46 47.1 45.1 48 44 48H20C18.9 48 18 47.1 18 46V20C18 18.9 18.9 18 20 18Z"
        fill="white"
        opacity="0.95"
      />
      
      <path
        d="M38 18L46 26L38 26V18Z"
        fill="#2dd4bf"
        opacity="0.8"
      />
      
      <path
        d="M32 40C32 40 24 34 24 28C24 24 26 22 28 22C30 22 31 23 32 25C33 23 34 22 36 22C38 22 40 24 40 28C40 34 32 40 32 40Z"
        fill="#0f2d5f"
      />
    </svg>
  );
}
