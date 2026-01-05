interface LivadeaLogoProps {
  variant?: 'full' | 'mark';
  colorScheme?: 'dark' | 'light';
  className?: string;
}

export const LivadeaLogo = ({ 
  variant = 'full', 
  colorScheme = 'dark',
  className = '' 
}: LivadeaLogoProps) => {
  const strokeColor = colorScheme === 'dark' ? 'hsl(var(--forest-dark))' : 'hsl(var(--cream))';
  const fillColor = colorScheme === 'dark' ? 'hsl(var(--forest-dark))' : 'hsl(var(--cream))';
  
  // Circular seal mark with L and botanical branch
  const LogoMark = ({ size = 40 }: { size?: number }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="46" 
        stroke={strokeColor} 
        strokeWidth="2.5" 
        fill="none"
      />
      
      {/* Serif L letterform */}
      <text 
        x="54" 
        y="62" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="42" 
        fontWeight="500"
        fill={fillColor}
        textAnchor="middle"
      >
        L
      </text>
      
      {/* Botanical branch - simplified olive/laurel */}
      <g stroke={strokeColor} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Main stem */}
        <path d="M 22 75 Q 28 60, 32 48" />
        
        {/* Leaves - alternating pattern */}
        <ellipse cx="24" cy="68" rx="5" ry="2.5" transform="rotate(-50, 24, 68)" fill={fillColor} stroke="none" />
        <ellipse cx="27" cy="62" rx="5" ry="2.5" transform="rotate(-40, 27, 62)" fill={fillColor} stroke="none" />
        <ellipse cx="29" cy="55" rx="4.5" ry="2.2" transform="rotate(-35, 29, 55)" fill={fillColor} stroke="none" />
        <ellipse cx="31" cy="49" rx="4" ry="2" transform="rotate(-25, 31, 49)" fill={fillColor} stroke="none" />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={className}>
        <LogoMark size={40} />
      </div>
    );
  }

  // Full horizontal lockup: mark + wordmark
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={36} />
      <span 
        className="font-serif text-xl md:text-2xl font-medium tracking-tight"
        style={{ color: fillColor }}
      >
        LIVADEA
      </span>
    </div>
  );
};
