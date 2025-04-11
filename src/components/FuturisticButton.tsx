
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  href,
  to
}) => {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-neon-purple hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]",
    secondary: "bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple/10 shadow-[0_4px_15px_rgba(139,92,246,0.15)]",
    ghost: "bg-transparent text-neon-purple hover:bg-white/5"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2 rounded-md",
    md: "px-6 py-3 rounded-md",
    lg: "text-lg px-8 py-4 rounded-md"
  };
  
  const ButtonContent = () => (
    <>
      {/* Glitch effect overlay */}
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity mix-blend-overlay"></span>
      
      {/* Animated border effect */}
      {variant !== 'ghost' && (
        <>
          <span className="absolute top-0 left-0 w-2 h-[1px] bg-white/70 animate-[slideRight_3s_infinite_linear]"></span>
          <span className="absolute top-0 right-0 w-[1px] h-2 bg-white/70 animate-[slideDown_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/70 animate-[slideLeft_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 left-0 w-[1px] h-2 bg-white/70 animate-[slideUp_3s_infinite_linear]"></span>
        </>
      )}
      
      {/* Button text with subtle text shadow */}
      <span className="relative z-10 shadow-glow">{children}</span>
    </>
  );
  
  // Internal router navigation
  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        <ButtonContent />
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        <ButtonContent />
      </a>
    );
  }
  
  // Regular button
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <ButtonContent />
    </button>
  );
};

export default FuturisticButton;
