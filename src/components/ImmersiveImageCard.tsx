
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type ImmersiveImageCardProps = {
  src: string;
  alt: string;
  description: string;
  className?: string;
};

const ImmersiveImageCard: React.FC<ImmersiveImageCardProps> = ({
  src,
  alt,
  description,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
        perspective: 1000
      }}
    >
      <motion.div 
        className="group relative w-full h-full flex items-center justify-center"
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {isLoaded ? (
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full aspect-square bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-t-2 border-neon-purple rounded-full animate-spin"></div>
          </div>
        )}
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          <motion.h3 
            className="text-xl font-bold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {alt}
          </motion.h3>
          <motion.p 
            className="text-white/90 line-clamp-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Interactive 3D effect elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-neon-purple/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>

      {/* Holographic glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-r from-purple-500/10 via-cyan-400/10 to-purple-500/10 pointer-events-none rounded-xl"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          filter: "blur(8px)",
          transform: "translateZ(-10px)"
        }}
      />
    </motion.div>
  );
};

export default ImmersiveImageCard;
