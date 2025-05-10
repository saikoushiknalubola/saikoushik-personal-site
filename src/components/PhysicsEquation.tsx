
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhysicsEquationProps {
  className?: string;
  equation?: string;
  description?: string;
}

const PhysicsEquation: React.FC<PhysicsEquationProps> = ({
  className,
  equation = "E = mc²",
  description = "Energy equals mass times the speed of light squared. A small amount of mass can release an enormous amount of energy."
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: { 
      x: number; 
      y: number; 
      size: number; 
      speedX: number; 
      speedY: number; 
      color: string;
      opacity: number;
      decay: number;
    }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const createParticle = (x: number, y: number) => {
      const colors = ['#3b82f6', '#a855f7', '#60a5fa', '#f43f5e'];
      
      particles.push({
        x,
        y,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.7,
        decay: 0.003 + Math.random() * 0.01
      });
    };
    
    // Initial particles
    for (let i = 0; i < 50; i++) {
      createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.decay;
        
        if (p.opacity <= 0) {
          particles.splice(i, 1);
          i--;
          createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
          continue;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className={cn("relative my-16 overflow-hidden rounded-xl", className)}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-60 absolute inset-0 z-0" 
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-sf font-light mb-4 text-blue-300">
            {equation.split('').map((char, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  char === '=' ? "text-white mx-3" : "",
                  char === 'c' ? "text-yellow-300" : "",
                  char === '²' ? "text-yellow-300 text-3xl md:text-5xl align-super" : "",
                  char === 'E' ? "text-blue-400" : "",
                  char === 'm' ? "text-green-400" : ""
                )}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="max-w-xl mx-auto text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PhysicsEquation;
