
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type ImmersiveImageCardProps = {
  src: string;
  alt: string;
  description?: string; // Make description optional
  className?: string;
  onClick?: () => void;
};

const ImmersiveImageCard: React.FC<ImmersiveImageCardProps> = ({
  src,
  alt,
  description,
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]); // Slightly reduced rotation for better visibility
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  
  // Get absolute values for calculations
  const xAbs = useTransform(x, Math.abs);
  const yAbs = useTransform(y, Math.abs);
  
  // Create a combined motion value for z calculation
  const combinedValue = useMotionValue(0);
  
  // Update the combined value whenever x or y changes
  useEffect(() => {
    const updateCombined = () => {
      combinedValue.set(xAbs.get() + yAbs.get());
    };
    
    // Update to use .on("change") instead of .onChange() as per warning
    const unsubscribeX = x.on("change", updateCombined);
    const unsubscribeY = y.on("change", updateCombined);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y, xAbs, yAbs, combinedValue]);
  
  // Now transform the combined value to create z
  const z = useTransform(combinedValue, [0, 200], [0, 25]); // Optimized z-offset for better visibility

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      onClick={handleClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
        perspective: 1200,
        cursor: onClick ? "pointer" : "default"
      }}
    >
      <motion.div 
        className="group relative w-full h-full flex items-center justify-center"
        animate={{ scale: isHovered ? 1.02 : 1, z: isHovered ? 8 : 0 }} // Optimized scale for better fit
        transition={{ duration: 0.4 }}
      >
        {isLoaded ? (
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 rounded-xl"
          />
        ) : (
          <div className="w-full h-full aspect-video bg-gray-800 animate-pulse flex items-center justify-center rounded-xl">
            <div className="w-10 h-10 border-t-2 border-neon-purple rounded-full animate-spin"></div>
          </div>
        )}
        
        {description && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }} // More visible by default for better context
          >
            <motion.h3 
              className="text-xl font-raleway font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {alt}
            </motion.h3>
            <motion.p 
              className="text-white/90 line-clamp-3 font-outfit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
      
      {/* Enhanced holographic effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{ z: -5 }}
      >
        <motion.div 
          className="absolute -inset-[1px] bg-gradient-to-r from-neon-purple/40 to-cyan-400/40 opacity-0 transition-opacity duration-300 rounded-xl"
          animate={{ opacity: isHovered ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Enhanced holographic glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-purple-500/20 pointer-events-none rounded-xl"
        animate={{ 
          opacity: isHovered ? 0.8 : 0,
          filter: isHovered ? "blur(8px)" : "blur(4px)"
        }}
        transition={{ duration: 0.3 }}
        style={{
          transform: "translateZ(-10px)"
        }}
      />
      
      {/* Enhanced reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 rounded-xl pointer-events-none"
        style={{
          transform: "translateZ(2px) rotateX(var(--rx)) rotateY(var(--ry))",
        }}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          "--rx": `${rotateX.get() * 0.5}deg`,
          "--ry": `${rotateY.get() * 0.5}deg`,
        } as any}
        transition={{ duration: 0.2 }}
      />
      
      {/* Subtle vignette effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, black 150%)",
          opacity: 0.3,
          mixBlendMode: "multiply"
        }}
      />
    </motion.div>
  );
};

export default ImmersiveImageCard;
