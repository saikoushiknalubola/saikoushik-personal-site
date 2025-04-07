import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import TypedText from '@/components/TypedText';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import QuoteCard from '@/components/QuoteCard';
import SkillBar from '@/components/SkillBar';
import FuturisticButton from '@/components/FuturisticButton';
import LiteraryQuote from '@/components/LiteraryQuote';
import PhilosophicalParadox from '@/components/PhilosophicalParadox';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const typingRoles = [
    "Entrepreneur",
    "Philosopher",
    "Tech Rebel",
    "Whistleblower",
    "Visionary",
    "Social Impact Leader",
  ];

  const manifestoQuotes = [
    "Power without ethics is noise.",
    "I build what should exist — not what's expected.",
    "If you're not uncomfortable, you're not doing anything real.",
    "Revolutions don't ask for permission.",
    "Dream like an optimist, plan like a realist, execute like a rebel.",
  ];

  const projects = [
    {
      title: "Quantum Garuda OS",
      description: "An Android-based privacy-focused operating system with quantum encryption designed to give users complete control over their data.",
      emoji: "🦅",
      tags: ["Quantum Privacy", "Android", "OS Development"]
    },
    {
      title: "Newton's Gravity Purification Drone",
      description: "Autonomous drone technology inspired by gravitational principles that purifies water in remote areas using solar energy.",
      emoji: "🌞",
      tags: ["Renewable Energy", "Autonomous Systems", "Water Purification"]
    },
    {
      title: "E = mc² Electric Conversion",
      description: "Revolutionary project to convert traditional vehicles to electric, applying Einstein's energy principles to efficient power systems.",
      emoji: "⚡",
      tags: ["Electric Vehicles", "Sustainable Transport", "Energy Conversion"]
    },
    {
      title: "Spacetime Revitalize Innovations",
      description: "Founder of a startup focused on building impactful solutions that bend the fabric of business reality as we know it.",
      emoji: "🚀",
      tags: ["Reality Distortion", "Innovation", "Social Impact"]
    }
  ];

  const thoughts = [
    {
      title: "Why I Don't Believe in Average",
      excerpt: "Average is a statistical construct, not a human destiny. The world tries to normalize mediocrity, but extraordinary results come from rejecting the very concept of 'average' thinking..."
    },
    {
      title: "The Art of Becoming a Disruptor",
      excerpt: "Disruption isn't about breaking things - it's about seeing the invisible patterns that others miss. True disruptors don't just challenge norms; they reimagine what's possible..."
    },
    {
      title: "Millionaire Mindset at 25",
      excerpt: "Wealth isn't just financial. The path to becoming a millionaire by 25 is paved with intellectual wealth, experiential capital, and the courage to fail spectacularly on the way to success..."
    }
  ];

  const skills = [
    { name: "Quantum Computing & AI", percentage: 95, emoji: "🧠", style: "futuristic" as const },
    { name: "Spacetime Communication", percentage: 93, emoji: "🌌", style: "split" as const },
    { name: "Gravitational Analysis", percentage: 88, emoji: "🍎", style: "default" as const },
    { name: "Future Entrepreneurship", percentage: 90, emoji: "💼", style: "neon" as const },
    { name: "Temporal Truth Telling", percentage: 100, emoji: "⏱️", style: "futuristic" as const },
    { name: "Relativity Problem Solving", percentage: 96, emoji: "🧩", style: "split" as const }
  ];

  const paradox = {
    thesis: {
      title: "Time is Malleable",
      description: "According to Einstein's relativity, time is not constant but bends and stretches depending on gravity and velocity."
    },
    antithesis: {
      title: "Causality is Preserved",
      description: "Newton's laws suggest a world of perfect causality, where every action has an equal and opposite reaction."
    },
    synthesis: "The future is both deterministic and uncertain - we must create technology that respects the causal flow of time while embracing quantum possibilities."
  };

  const galleryImages = [
    "/lovable-uploads/d00b1c86-928d-4dfb-9985-e352dcc01e95.png",
    "/lovable-uploads/333c6b72-4298-49dc-acb9-f578b4b06784.png",
    "/lovable-uploads/ca3e6d73-40c3-4c1d-b6b9-d23896c17c29.png",
    "/lovable-uploads/da853ef4-3ec6-4609-a838-faa972d455e7.png"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none retro-future-grid"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              className="text-future-primary font-space text-sm tracking-wider mb-2 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              SAIKOUSHIK NALUBOLA • 2050
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              If <span className="text-neon-purple animate-pulse-glow">Einstein</span> Were a Developer,<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Time Would Be Relative to Your Vision
              </span>
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl font-medium mb-8 h-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <TypedText texts={typingRoles} />
            </motion.div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <FuturisticButton href="#about" size="lg">
                Bend spacetime, scroll down
                <ArrowDown className="ml-2 animate-bounce-light" size={18} />
              </FuturisticButton>
              
              <FuturisticButton href="/manifesto" variant="secondary">
                Read The Quantum Manifesto
              </FuturisticButton>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors transform hover:scale-110">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/saikoushiknalubola/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={22} />
          </a>
          <a href="https://x.com/saikoushik_42" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors transform hover:scale-110">
            <Twitter size={22} />
          </a>
          <a href="mailto:saikoushik42@gmail.com" className="text-white/70 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={22} />
          </a>
        </motion.div>
        
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <motion.div 
            className="text-5xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            >
              🍎
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section 
        id="about" 
        className="py-20 px-4 md:px-8 bg-black/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 mix-blend-overlay"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeader 
            title="Breaking the Time Barrier" 
            subtitle="My journey from curious student to quantum innovator"
            style="rebel"
            theoryReference="einstein"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-4">
              <p>
                I'm Saikoushik Nalubola, a B.Tech student in Computer Science and Engineering with specialization in AI & Robotics — but that's just the formal part of my story.
              </p>
              <p>
                What drives me is a relentless need to challenge the status quo. From a young age, I've been the person who asks "Why?" and then follows with "Why not differently?"
              </p>
              <p>
                This questioning led me to found <span className="text-neon-purple font-medium">Revitalize Innovations</span>, where we focus on building impactful, unexpected solutions that address real-world problems through technology and innovative thinking.
              </p>
              <p>
                Through hackathons, startup competitions, and passionate late-night coding sessions, I've discovered my purpose: to create systems, products, and ideas that empower people and fundamentally change how we approach challenges.
              </p>
              <p>
                I'm equal parts dreamer and doer, rebel and builder, philosopher and engineer. I believe technology should serve humanity — not the other way around.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">The Quick Files</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>B.Tech student in CSE (AI & Robotics)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Founder of Revitalize Innovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Hackathon enthusiast & pitch competition veteran</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Whistleblower & social reformer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Youth leader working for real-world change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Writer of blogs, philosophies & motivational content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-2">⚡</span>
                  <span>Passionate about AI, ML, EVs, philosophy & political systems</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <LiteraryQuote 
                  text="Like Gregor Samsa, I awoke one day transformed - no longer a mere student but a creator questioning everything."
                  author="Personal Journal"
                  style="kafka"
                />
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/journey">
                  <FuturisticButton variant="ghost" size="sm">
                    <Clock className="mr-2" size={16} />
                    View Experience Timeline
                  </FuturisticButton>
                </Link>
                <Link to="/future">
                  <FuturisticButton variant="ghost" size="sm">
                    Future Vision
                    <ArrowRight className="ml-2" size={16} />
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="manifesto" 
        className="py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="What I Believe (and Why It Matters)" 
            subtitle="The principles that guide my work and vision"
            style="kafka"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">My Manifesto</h3>
              <div className="space-y-4">
                <p>
                  I believe in the power of unconventional thinking to solve conventional problems. The greatest innovations often come from those willing to see beyond established wisdom.
                </p>
                <p>
                  I believe that technology should empower the many, not enrich the few. Every line of code, every circuit designed, and every system built should expand human potential.
                </p>
                <p>
                  I believe in speaking truth to power. The most important conversations are often the most uncomfortable ones.
                </p>
                <p>
                  I believe in building bridges between technology, philosophy, and social impact. The most powerful solutions are interdisciplinary.
                </p>
                <p>
                  Most of all, I believe in action. Ideas without implementation are just dreams. I'm here to build what should exist.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/manifesto" className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center font-medium">
                  Read the full Quantum Manifesto
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4 animate-on-scroll">
              {manifestoQuotes.map((quote, index) => (
                <QuoteCard 
                  key={index}
                  quote={quote}
                  author="Saikoushik Nalubola"
                  color={index % 2 === 0 ? "border-neon-purple" : "border-neon-cyan"}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 animate-on-scroll">
            <PhilosophicalParadox 
              thesis={paradox.thesis}
              antithesis={paradox.antithesis}
              synthesis={paradox.synthesis}
            />
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        className="py-20 px-4 md:px-8 bg-secondary/30 relative"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Quantum Projects & Experiments" 
            subtitle="Bold ideas that bend reality through code, hardware, and relentless iteration"
            style="futuristic"
            theoryReference="newton"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                emoji={project.emoji}
                tags={project.tags}
                className="animate-on-scroll"
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <FuturisticButton href="/projects" variant="secondary">
              Enter The Quantum Laboratory
              <ArrowRight className="ml-2" size={18} />
            </FuturisticButton>
          </div>
        </div>
      </section>

      <section 
        id="thoughts" 
        className="py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Writing & Thoughts" 
            subtitle="Exploring ideas at the intersection of technology, philosophy, and social change"
            highlightText="In the tradition of Dostoevsky and Kafka"
            style="dostoevsky"
            className="animate-on-scroll"
          />
          
          <div className="space-y-12">
            {thoughts.map((thought, index) => (
              <div 
                key={index}
                className="animate-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-2">{thought.title}</h3>
                <p className="text-muted-foreground mb-4">{thought.excerpt}</p>
                <Link 
                  to="/soul"
                  className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <FuturisticButton href="/soul" variant="ghost">
              Explore The Soul of Creation
              <ArrowRight className="ml-2" size={18} />
            </FuturisticButton>
          </div>
        </div>
      </section>

      <section 
        id="gallery" 
        className="py-20 px-4 md:px-8 bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Chaos Wall" 
            subtitle="Visual snapshots from my journey as a creator, rebel, and builder"
            style="rebel"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="aspect-square bg-muted rounded-md overflow-hidden relative group hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-center px-2">
                    {index === 0 && "Innovators at University"}
                    {index === 1 && "AIDEATHON 2025"}
                    {index === 2 && "EV Market Presentation"}
                    {index === 3 && "Future Leadership Summit"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <FuturisticButton href="/projects" variant="outline" size="sm">
              More achievements in the Quantum Lab
              <ArrowRight className="ml-2" size={16} />
            </FuturisticButton>
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        className="py-20 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeader 
            title="Relativistic Skills & Expertise" 
            subtitle="Capabilities that transcend conventional space and time"
            style="apple"
            theoryReference="einstein"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
            <div>
              {skills.slice(0, 3).map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  emoji={skill.emoji}
                  style={skill.style}
                />
              ))}
            </div>
            <div>
              {skills.slice(3).map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  emoji={skill.emoji}
                  style={skill.style}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        className="py-20 px-4 md:px-8 bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Contact & Collaboration" 
            subtitle="Let's connect and create something extraordinary together"
            className="animate-on-scroll"
          />
          
          <div className="max-w-2xl mx-auto glass-card p-8 animate-on-scroll">
            <p className="text-xl mb-8 text-center">
              If you have a crazy idea, a world-changing dream, or a rebellion to start — let's talk.
            </p>
            
            <div className="flex flex-col space-y-4">
              <FuturisticButton 
                href="mailto:saikoushiknalubola@yahoo.com"
                size="lg"
                className="w-full justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email Me
              </FuturisticButton>
              
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-8 border-t border-white/10 relative overflow-hidden bg-black/50">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="font-space text-xl font-bold">
                <span className="text-white">Saikoushik</span>
                <span className="text-neon-purple">Nalubola</span>
              </Link>
              <p className="text-white/60 mt-2">Quantum Visionary • 2050</p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                <Github size={20} className="text-white/80" />
              </a>
              <a href="https://www.linkedin.com/in/saikoushiknalubola/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                <Linkedin size={20} className="text-white/80" />
              </a>
              <a href="https://x.com/saikoushik_42" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                <Twitter size={20} className="text-white/80" />
              </a>
              <a href="https://medium.com/@saikoushiknalubola" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                <span className="text-white/80 font-bold">M</span>
              </a>
              <a href="mailto:saikoushik42@gmail.com" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                <Mail size={20} className="text-white/80" />
              </a>
            </div>
          </div>
          
          <p className="text-center text-lg font-medium mb-4 text-gradient from-blue-400 to-purple-400">
            "The distinction between past, present, and future is only a stubbornly persistent illusion."
          </p>
          <p className="text-center text-white/60 text-sm">
            — Albert Einstein
          </p>
          <p className="text-center text-white/60 mt-6">
            © {new Date().getFullYear()} Saikoushik Nalubola. All rights reserved in this timeline.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
