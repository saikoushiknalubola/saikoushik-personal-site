
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  color?: string;
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  interactive?: boolean;
  className?: string;
  variant?: 'dots' | 'grid' | 'waves' | 'quantum';
}

const ParticleBackground: React.FC<ParticleProps> = ({
  color = 'rgba(139, 92, 246, 0.7)',
  density = 'medium',
  speed = 'medium',
  interactive = true,
  className = '',
  variant = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Array<{x: number; y: number; radius: number; vx: number; vy: number; originalX?: number; originalY?: number; hue?: number}>>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Determine number of particles based on density
  const getParticleCount = () => {
    const counts = {
      low: 30,
      medium: 70,
      high: 150
    };
    return counts[density];
  };

  // Determine animation speed based on speed prop
  const getAnimationSpeed = () => {
    const speeds = {
      slow: 0.5,
      medium: 1,
      fast: 2
    };
    return speeds[speed];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      // Regenerate particles when canvas size changes
      initializeParticles();
    };

    // Handle mouse movement for interactive effects
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas || !interactive) return;
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    // Initialize particles based on variant
    const initializeParticles = () => {
      if (!canvas) return;
      
      particlesRef.current = [];
      const particleCount = getParticleCount();
      
      if (variant === 'dots' || variant === 'quantum') {
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * getAnimationSpeed(),
            vy: (Math.random() - 0.5) * getAnimationSpeed(),
            hue: Math.floor(Math.random() * 60) + 250 // Blue to purple hues for quantum
          });
        }
      } 
      else if (variant === 'grid') {
        const gridSize = Math.floor(Math.sqrt(particleCount));
        const cellWidth = canvas.width / gridSize;
        const cellHeight = canvas.height / gridSize;
        
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const x = i * cellWidth + cellWidth / 2;
            const y = j * cellHeight + cellHeight / 2;
            particlesRef.current.push({
              x,
              y,
              originalX: x,
              originalY: y,
              radius: 1.5,
              vx: 0,
              vy: 0
            });
          }
        }
      }
      else if (variant === 'waves') {
        const waveCount = particleCount / 2;
        const waveHeight = canvas.height / 8;
        
        for (let i = 0; i < waveCount; i++) {
          const x = (canvas.width / waveCount) * i;
          const y = canvas.height / 2;
          particlesRef.current.push({
            x,
            y,
            originalX: x,
            originalY: y,
            radius: 1.5,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        
        // Different behavior based on variant
        if (variant === 'dots') {
          // Simple moving dots
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
        else if (variant === 'grid') {
          // Grid with subtle movement
          if (particle.originalX !== undefined && particle.originalY !== undefined) {
            // Calculate distance from mouse if interactive
            let dx = 0;
            let dy = 0;
            
            if (interactive) {
              dx = mousePositionRef.current.x - particle.x;
              dy = mousePositionRef.current.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 80) {
                // Push particles away from mouse
                const force = (80 - distance) / 80;
                particle.vx = -dx * force * 0.05;
                particle.vy = -dy * force * 0.05;
              } else {
                // Return to original position
                particle.vx = (particle.originalX - particle.x) * 0.05;
                particle.vy = (particle.originalY - particle.y) * 0.05;
              }
            } else {
              // Subtle movement even when not interactive
              particle.vx = (particle.originalX - particle.x + (Math.random() - 0.5) * 2) * 0.05;
              particle.vy = (particle.originalY - particle.y + (Math.random() - 0.5) * 2) * 0.05;
            }
            
            particle.x += particle.vx;
            particle.y += particle.vy;
          }
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
        else if (variant === 'waves') {
          // Wave-like movement
          if (particle.originalX !== undefined && particle.originalY !== undefined) {
            // Create a wave effect
            const time = Date.now() / 1000;
            const offset = i / particlesRef.current.length;
            
            particle.y = particle.originalY + Math.sin(time * getAnimationSpeed() + offset * Math.PI * 4) * 20;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            
            // Draw connections to nearby particles
            if (i < particlesRef.current.length - 1) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particlesRef.current[i + 1].x, particlesRef.current[i + 1].y);
              ctx.strokeStyle = color;
              ctx.globalAlpha = 0.2;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
        else if (variant === 'quantum') {
          // Quantum-inspired effect with particle interactions
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // Connect particles that are close to each other
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const otherParticle = particlesRef.current[j];
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              // Draw connections with opacity based on distance
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Use hue values for quantum effect if available
              if (particle.hue !== undefined && otherParticle.hue !== undefined) {
                const gradientColor = ctx.createLinearGradient(
                  particle.x, particle.y, otherParticle.x, otherParticle.y
                );
                gradientColor.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${1 - distance / 100})`);
                gradientColor.addColorStop(1, `hsla(${otherParticle.hue}, 70%, 60%, ${1 - distance / 100})`);
                ctx.strokeStyle = gradientColor;
              } else {
                ctx.strokeStyle = `${color.replace(')', `, ${1 - distance / 100})`)}`;
              }
              
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
          
          // Interactive behavior - particles follow mouse
          if (interactive) {
            const mouseX = mousePositionRef.current.x;
            const mouseY = mousePositionRef.current.y;
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              particle.vx += dx * 0.001;
              particle.vy += dy * 0.001;
            }
            
            // Limit velocity
            const maxVel = 1.5 * getAnimationSpeed();
            const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (vel > maxVel) {
              particle.vx = (particle.vx / vel) * maxVel;
              particle.vy = (particle.vy / vel) * maxVel;
            }
          }
          
          // Draw particle with glow effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          
          // Use hue for quantum effect if available
          if (particle.hue !== undefined) {
            ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
            ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
          } else {
            ctx.fillStyle = color;
            ctx.shadowColor = color;
          }
          
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      
      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Set up event listeners
    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [color, density, interactive, speed, variant]);

  return (
    <div ref={containerRef} className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ParticleBackground;
