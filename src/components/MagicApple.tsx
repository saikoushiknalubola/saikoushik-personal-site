
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const MagicApple: React.FC = () => {
  const [isExploding, setIsExploding] = useState(false);
  const controls = useAnimation();
  const appleRef = useRef<HTMLDivElement>(null);
  const [isGravityActive, setIsGravityActive] = useState(false);
  
  // Generate random particles for explosion effect
  const particleCount = 30;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    color: [
      '#8B5CF6', // purple
      '#EC4899', // pink
      '#EF4444', // red
      '#F97316', // orange
      '#FBBF24', // yellow
      '#10B981', // green
      '#0EA5E9', // blue
    ][Math.floor(Math.random() * 7)],
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 400,
    rotation: Math.random() * 360,
    scale: Math.random() * 1 + 0.5,
  }));

  const handleClick = () => {
    if (!isExploding) {
      setIsExploding(true);
      controls.start({
        scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
        rotate: [0, -10, 10, -5, 5, 0],
        transition: { duration: 0.5 }
      }).then(() => {
        // After the initial animation, start the gravity effect
        setIsGravityActive(true);
        
        // Reset everything after 8 seconds
        setTimeout(() => {
          setIsExploding(false);
          setIsGravityActive(false);
        }, 8000);
      });
    }
  };

  useEffect(() => {
    // Creates the "Newton's apple" ripple effect in the document
    if (isGravityActive) {
      const rippleEffect = () => {
        const ripple = document.createElement('div');
        ripple.className = 'fixed inset-0 pointer-events-none z-50';
        ripple.style.background = 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)';
        ripple.style.animation = 'ripple 2s ease-out forwards';
        document.body.appendChild(ripple);
        
        // Add the CSS animation if it doesn't exist
        if (!document.querySelector('#ripple-animation')) {
          const style = document.createElement('style');
          style.id = 'ripple-animation';
          style.textContent = `
            @keyframes ripple {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              50% {
                opacity: 0.5;
              }
              100% {
                transform: scale(2);
                opacity: 0;
              }
            }
          `;
          document.head.appendChild(style);
        }
        
        // Remove the ripple after animation completes
        setTimeout(() => {
          document.body.removeChild(ripple);
        }, 2000);
      };
      
      rippleEffect();
      
      // Add gravitational effect to page elements
      const elements = document.querySelectorAll('h1, h2, h3, p, img, button, a');
      elements.forEach(element => {
        const originalTransform = element.getAttribute('style') || '';
        const originalTransition = window.getComputedStyle(element).transition;
        
        element.setAttribute('data-original-style', originalTransform);
        element.setAttribute('data-original-transition', originalTransition);
        
        const randomY = Math.random() * 20 - 10;
        const randomRotate = Math.random() * 5 - 2.5;
        
        element.style.transition = 'transform 3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        element.style.transform = `translateY(${randomY}px) rotate(${randomRotate}deg)`;
      });
      
      // Reset elements after gravity effect ends
      return () => {
        elements.forEach(element => {
          const originalStyle = element.getAttribute('data-original-style') || '';
          const originalTransition = element.getAttribute('data-original-transition') || '';
          
          element.style.transition = originalTransition;
          element.style.transform = '';
          
          if (originalStyle) {
            element.setAttribute('style', originalStyle);
          } else {
            element.removeAttribute('style');
          }
        });
      };
    }
  }, [isGravityActive]);

  return (
    <div className="relative">
      <motion.div
        ref={appleRef}
        className="text-5xl cursor-pointer select-none"
        animate={controls}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ 
            y: isGravityActive ? [0, -15, 300] : [0, -15, 0],
            rotate: isGravityActive ? [0, 0, 360] : [0, 0, 0]
          }}
          transition={{ 
            duration: isGravityActive ? 2 : 2, 
            repeat: isGravityActive ? 0 : Infinity, 
            repeatType: "reverse",
            ease: isGravityActive ? "circOut" : "easeInOut"
          }}
        >
          🍎
        </motion.div>
      </motion.div>
      
      {/* Explosion particles */}
      <AnimatePresence>
        {isExploding && isGravityActive && (
          <>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full z-20 pointer-events-none"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  rotate: 0,
                  scale: 0
                }}
                animate={{ 
                  x: particle.x, 
                  y: particle.y, 
                  opacity: [0, 1, 0], 
                  rotate: particle.rotation,
                  scale: particle.scale
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  ease: "easeOut"
                }}
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}`
                }}
              />
            ))}
            
            {/* Newton's formula */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap"
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -100
              }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <span className="bg-black/80 text-white px-4 py-2 rounded-full font-mono text-lg backdrop-blur-sm">
                F = G(m₁m₂/r²)
              </span>
            </motion.div>
            
            {/* Theory of Relativity */}
            <motion.div
              className="absolute text-center w-48 left-1/2 transform -translate-x-1/2 translate-y-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0.8],
                y: [16, 80, 160]
              }}
              transition={{ 
                duration: 4, 
                ease: "easeOut",
                delay: 1
              }}
            >
              <span className="bg-purple-900/80 text-white px-4 py-2 rounded-full font-mono text-xs backdrop-blur-sm">
                E = mc²
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagicApple;
