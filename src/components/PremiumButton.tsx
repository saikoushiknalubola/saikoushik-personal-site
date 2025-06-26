
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'apple' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className,
  disabled = false
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-sf font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white hover:border-white/30",
    apple: "bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/10 hover:from-white/20 hover:to-white/10 text-white shadow-apple hover:shadow-apple-glow",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white hover:border-white/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const ButtonContent = () => (
    <>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: '200%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {Icon && (
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
          </motion.span>
        )}
        <span>{children}</span>
      </span>
    </>
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <MotionWrapper>
      <ButtonContent />
    </MotionWrapper>
  );
};

export default PremiumButton;
