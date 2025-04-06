
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import { ArrowLeft, Clock, Brain, Cpu, Globe, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FutureVision = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`
        });
      }
    };
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Update particle position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      requestAnimationFrame(animateParticles);
    };
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0; // Clear particles
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    createParticles();
    animateParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const visionCards = [
    {
      icon: <Clock size={28} />,
      title: "Temporal Intelligence",
      description: "By 2055, I envision creating systems that can anticipate events before they occur using temporal analytics and quantum probability mapping. This will revolutionize disaster prevention and opportunity identification."
    },
    {
      icon: <Brain size={28} />,
      title: "Neural Integration",
      description: "I'm working toward seamless brain-computer interfaces that enhance human cognition while preserving autonomy and ethical boundaries. The future belongs to augmented intelligence, not artificial replacements."
    },
    {
      icon: <Cpu size={28} />,
      title: "Quantum Processing",
      description: "My vision includes developing quantum computing architectures that operate beyond current theoretical limits, solving previously impossible computational problems related to climate modeling, disease cures, and space exploration."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Access",
      description: "Technology should equalize, not divide. I'm committed to creating systems that ensure every human being has equal access to technological advancements regardless of geographic or economic circumstance."
    },
    {
      icon: <Zap size={28} />,
      title: "Renewable Revolution",
      description: "By 2060, I aim to help establish a completely renewable energy grid that produces zero waste and generates surplus power, making energy abundance the new normal for humanity."
    },
    {
      icon: <Shield size={28} />,
      title: "Digital Ethics",
      description: "As technology advances, ethical frameworks must evolve in parallel. I'm developing new paradigms for digital rights, privacy, and equity that can adapt to technologies we haven't yet imagined."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>
      
      <Navigation />
      
      <motion.div 
        className="container mx-auto pt-32 pb-20 px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link to="/">
            <FuturisticButton variant="ghost" size="sm">
              <ArrowLeft className="mr-2" size={16} />
              Back to Present
            </FuturisticButton>
          </Link>
        </div>
        
        <SectionHeader 
          title="2050 Future Vision" 
          subtitle="The intersection of imagination, ambition, and technological possibility"
          style="futuristic"
          highlightText="What Will Be Possible Is Limited Only By What We Dare To Dream"
        />
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionCards.map((card, index) => (
              <motion.div
                key={index}
                className="glass-card backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-neon-purple/50 transition-all duration-300 group relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-all duration-500"></div>
                
                <div className="text-neon-purple mb-4 bg-white/5 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors duration-300">{card.title}</h3>
                
                <p className="text-white/70 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 glass-card backdrop-blur-xl p-8 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-neon-cyan">Personal Quantum Manifesto</h2>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              "I believe the future isn't something we predict—it's something we build. By 2060, the boundary between technology and humanity will blur not because machines become more like humans, but because humans will transcend our current limitations through ethical technological integration."
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              "My life's work is dedicated to ensuring that as we advance technologically, we advance ethically and equitably. The fourth industrial revolution must lift all of humanity together, or it will ultimately fail."
            </p>
            
            <p className="text-right text-neon-purple font-bold">
              — Saikoushik Nalubola, 2050
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FutureVision;
