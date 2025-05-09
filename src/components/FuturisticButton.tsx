
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'outline' | 'minimal';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animated?: boolean;
  pulseEffect?: boolean;
  glowIntensity?: 'none' | 'low' | 'medium' | 'high' | 'ultra';
  disabled?: boolean;
  fullWidth?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'left',
  animated = true,
  pulseEffect = false,
  glowIntensity = 'medium',
  disabled = false,
  fullWidth = false
}) => {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-neon-purple hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]",
    secondary: "bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple/10 shadow-[0_4px_15px_rgba(139,92,246,0.15)]",
    ghost: "bg-transparent text-neon-purple hover:bg-white/5",
    gradient: "bg-gradient-to-r from-neon-purple to-future-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    minimal: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
  };
  
  const sizeClasses = {
    xs: "text-xs px-3 py-1.5 rounded-md",
    sm: "text-sm px-4 py-2 rounded-md",
    md: "px-6 py-3 rounded-md",
    lg: "text-lg px-8 py-4 rounded-md",
    xl: "text-xl px-10 py-5 rounded-lg"
  };
  
  const glowClasses = {
    none: "",
    low: "hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
    medium: "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    high: "hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]",
    ultra: "hover:shadow-[0_0_35px_rgba(139,92,246,0.9)]"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const widthClass = fullWidth ? "w-full" : "";
  
  // Enhanced hover animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: animated ? { scale: 1.03 } : {},
    tap: animated ? { scale: 0.98 } : {}
  };
  
  // Enhanced content animation variants
  const contentVariants = {
    initial: { y: 0 },
    hover: animated ? { y: -2 } : {},
    tap: animated ? { y: 1 } : {}
  };
  
  const ButtonContent = () => (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      {/* Glitch effect overlay */}
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity mix-blend-overlay"></span>
      
      {/* Animated border effect */}
      {variant !== 'ghost' && variant !== 'minimal' && (
        <>
          <span className="absolute top-0 left-0 w-6 h-[1px] bg-white/80 animate-[slideRight_3s_infinite_linear]"></span>
          <span className="absolute top-0 right-0 w-[1px] h-6 bg-white/80 animate-[slideDown_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-[1px] bg-white/80 animate-[slideLeft_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 left-0 w-[1px] h-6 bg-white/80 animate-[slideUp_3s_infinite_linear]"></span>
        </>
      )}
      
      {/* Pulse effect for special emphasis */}
      {pulseEffect && variant !== 'ghost' && (
        <span className="absolute inset-0 bg-neon-purple rounded-md animate-pulse opacity-30"></span>
      )}
      
      {/* Button text with motion and subtle text shadow */}
      <motion.span 
        className="relative z-10 shadow-glow flex items-center gap-2"
        variants={contentVariants}
      >
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </motion.span>
    </motion.div>
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
          glowClasses[glowIntensity],
          disabledClasses,
          widthClass,
          className
        )}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
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
          glowClasses[glowIntensity],
          disabledClasses,
          widthClass,
          className
        )}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        <ButtonContent />
      </a>
    );
  }
  
  // Regular button
  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowClasses[glowIntensity],
        disabledClasses,
        widthClass,
        className
      )}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      disabled={disabled}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default FuturisticButton;
