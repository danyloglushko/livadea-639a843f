interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo = ({ className = "w-10 h-10", color = "currentColor" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle outline */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      
      {/* Letter L */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="42"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="500"
      >
        L
      </text>
      
      {/* Olive/Laurel branch */}
      <g transform="translate(22, 38)">
        {/* Main stem */}
        <path
          d="M12 32 Q8 20 10 8"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Top leaf */}
        <path
          d="M10 8 Q6 4 8 0 Q12 2 10 8"
          fill={color}
        />
        
        {/* Upper leaves */}
        <path
          d="M9 12 Q4 10 2 6 Q6 6 9 12"
          fill={color}
        />
        <path
          d="M10 16 Q5 15 3 11 Q7 11 10 16"
          fill={color}
        />
        
        {/* Middle leaves */}
        <path
          d="M10 22 Q5 22 2 18 Q6 17 10 22"
          fill={color}
        />
        <path
          d="M11 28 Q6 29 3 25 Q7 24 11 28"
          fill={color}
        />
      </g>
    </svg>
  );
};
