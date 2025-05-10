
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface MagicAppleProps {
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'low' | 'medium' | 'high';
}

const MagicApple: React.FC<MagicAppleProps> = ({ 
  size = 'md',
  glowIntensity = 'medium'
}) => {
  const [isExploding, setIsExploding] = useState(false);
  const controls = useAnimation();
  const appleRef = useRef<HTMLDivElement>(null);
  const [isGravityActive, setIsGravityActive] = useState(false);
  const [multiverse, setMultiverse] = useState(false);
  
  const appleSizes = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-7xl'
  };
  
  const glowSizes = {
    low: 'opacity-30',
    medium: 'opacity-50',
    high: 'opacity-70'
  };
  
  // Generate enhanced particles for explosion effect with more colors and variations
  const particleCount = 60; // Increased particles
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 5, // Larger size range
    color: [
      '#8B5CF6', // purple
      '#EC4899', // pink
      '#EF4444', // red
      '#F97316', // orange
      '#FBBF24', // yellow
      '#10B981', // green
      '#0EA5E9', // blue
      '#06B6D4', // cyan
      '#8B5CF6', // purple
      '#D946EF', // magenta
      '#14F5D6', // teal
      '#FFD600', // gold
    ][Math.floor(Math.random() * 12)],
    x: (Math.random() - 0.5) * 600, // Wider spread
    y: (Math.random() - 0.5) * 600,
    rotation: Math.random() * 720 - 360, // More rotation
    scale: Math.random() * 1.5 + 0.5,
    duration: 2 + Math.random() * 2, // Variable duration
  }));

  // Quantum equations to display
  const equations = [
    "F = G(m₁m₂/r²)",
    "E = mc²",
    "ΔxΔp ≥ ℏ/2",
    "ψ(x,t) = Ae^i(kx-ωt)",
    "S = k log W",
    "ds² = -c²dt² + dx²",
    "G_μν = 8πT_μν",
    "H|ψ⟩ = E|ψ⟩",
    "∇ × B = μ₀J + μ₀ε₀∂E/∂t"
  ];

  const handleClick = () => {
    if (!isExploding) {
      setIsExploding(true);
      controls.start({
        scale: [1, 1.3, 0.8, 1.1, 0.9, 1],
        rotate: [0, -15, 15, -8, 8, 0],
        transition: { duration: 0.7, type: "spring" }
      }).then(() => {
        // After the initial animation, start the gravity effect
        setIsGravityActive(true);
        
        // Multiverse effect with delay
        setTimeout(() => {
          setMultiverse(true);
          
          // Reset everything after 10 seconds
          setTimeout(() => {
            setIsExploding(false);
            setIsGravityActive(false);
            setMultiverse(false);
          }, 10000);
        }, 2000);
      });
    }
  };

  useEffect(() => {
    // Creates the "Newton's apple" ripple effect in the document
    if (isGravityActive) {
      const rippleEffect = () => {
        const ripple = document.createElement('div');
        ripple.className = 'fixed inset-0 pointer-events-none z-50';
        ripple.style.background = 'radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)';
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
                opacity: 0.7;
              }
              100% {
                transform: scale(2);
                opacity: 0;
              }
            }
            
            @keyframes quantum-glow {
              0%, 100% {
                box-shadow: 0 0 5px 2px rgba(139, 92, 246, 0.5),
                           0 0 10px 4px rgba(6, 182, 212, 0.3);
              }
              50% {
                box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.7),
                           0 0 25px 10px rgba(6, 182, 212, 0.5);
              }
            }

            @keyframes universe-spin {
              0% {
                transform: rotate(0deg) scale(1);
                filter: hue-rotate(0deg);
              }
              50% {
                transform: rotate(180deg) scale(1.2);
                filter: hue-rotate(180deg);
              }
              100% {
                transform: rotate(360deg) scale(1);
                filter: hue-rotate(360deg);
              }
            }

            @keyframes space-warp {
              0% {
                transform: scale(1);
                opacity: 0.7;
              }
              50% {
                transform: scale(1.5);
                opacity: 0.3;
              }
              100% {
                transform: scale(1);
                opacity: 0.7;
              }
            }
          `;
          document.head.appendChild(style);
        }
        
        // Remove the ripple after animation completes
        setTimeout(() => {
          if (document.body.contains(ripple)) {
            document.body.removeChild(ripple);
          }
        }, 2000);
      };
      
      rippleEffect();
      
      // Add gravitational effect to page elements
      const elements = document.querySelectorAll('h1, h2, h3, p, img, button, a');
      const affectedElements: HTMLElement[] = [];
      
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        
        // Store original values
        const originalTransform = htmlElement.style.transform || '';
        const originalTransition = window.getComputedStyle(htmlElement).transition;
        
        htmlElement.setAttribute('data-original-transform', originalTransform);
        htmlElement.setAttribute('data-original-transition', originalTransition);
        
        const randomY = Math.random() * 20 - 10;
        const randomRotate = Math.random() * 5 - 2.5;
        
        htmlElement.style.transition = 'transform 3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        htmlElement.style.transform = `translateY(${randomY}px) rotate(${randomRotate}deg)`;
        
        affectedElements.push(htmlElement);
      });
      
      // Reset elements after gravity effect ends
      return () => {
        affectedElements.forEach(element => {
          const originalTransform = element.getAttribute('data-original-transform') || '';
          const originalTransition = element.getAttribute('data-original-transition') || '';
          
          element.style.transition = originalTransition;
          element.style.transform = originalTransform;
          
          element.removeAttribute('data-original-transform');
          element.removeAttribute('data-original-transition');
        });
      };
    }
  }, [isGravityActive]);

  return (
    <div className="relative">
      {/* Glow effect behind the apple */}
      <motion.div 
        className={`absolute -inset-2 rounded-full blur-xl ${glowSizes[glowIntensity]} bg-purple-500/30`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        ref={appleRef}
        className={`${appleSizes[size]} cursor-pointer select-none relative z-10`}
        animate={controls}
        onClick={handleClick}
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, 5, -5, 0], 
          transition: { duration: 0.5 } 
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ 
            y: isGravityActive ? [0, -20, 300] : [0, -15, 0],
            rotate: isGravityActive ? [0, 0, 720] : [0, 0, 0]
          }}
          transition={{ 
            duration: isGravityActive ? 2.5 : 2, 
            repeat: isGravityActive ? 0 : Infinity, 
            repeatType: "reverse",
            ease: isGravityActive ? "circOut" : "easeInOut"
          }}
          className={multiverse ? "animate-universe-spin" : ""}
        >
          🍎
        </motion.div>
      </motion.div>
      
      {/* Explosion particles with enhanced effects */}
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
                  duration: particle.duration,
                  ease: "easeOut"
                }}
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 15px ${particle.color}`,
                  filter: "blur(1px)"
                }}
              />
            ))}
            
            {/* Quantum field effect - orbiting elements */}
            <motion.div
              className="absolute top-0 left-1/2 w-40 h-40 -ml-20 -mt-20 z-10 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute inset-0 rounded-full border border-purple-500/30"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1 + i * 0.8,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Quantum equations with enhanced animations */}
            <AnimatePresence>
              {equations.map((eq, idx) => (
                <motion.div
                  key={`equation-${idx}`}
                  className="absolute whitespace-nowrap z-30"
                  initial={{ 
                    opacity: 0, 
                    x: 0, 
                    y: 0,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: (idx % 2 === 0 ? 1 : -1) * Math.random() * 150,
                    y: -100 - idx * 20,
                    scale: 1
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 3, 
                    delay: idx * 0.3,
                    ease: "easeOut" 
                  }}
                >
                  <span className="bg-black/80 text-white px-4 py-2 rounded-full font-mono text-lg backdrop-blur-sm border border-white/10">
                    {eq}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Multiverse portal effect */}
            {multiverse && (
              <>
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 5, 10, 15],
                    opacity: [0, 0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeOut"
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 blur-xl" />
                </motion.div>
                
                {/* Space-time ripple effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`space-${i}`}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 z-0"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0.3, 0.7]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                ))}
                
                {/* Floating quantum particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-white/80 z-30 pointer-events-none"
                    initial={{
                      x: (Math.random() - 0.5) * 200,
                      y: (Math.random() - 0.5) * 200,
                      opacity: 0
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400,
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagicApple;
