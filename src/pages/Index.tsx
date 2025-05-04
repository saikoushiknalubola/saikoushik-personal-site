
import React, { useEffect, useState } from 'react';
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
import MagicApple from '@/components/MagicApple';
import ThinkDifferentQuote from '@/components/ThinkDifferentQuote';
import InnovationTimeline from '@/components/InnovationTimeline';
import OneMoreThing from '@/components/OneMoreThing';
import SlideToUnlock from '@/components/SlideToUnlock';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter, Clock, ZapIcon, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ImmersiveImageCard from '@/components/ImmersiveImageCard';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('home');
  const [unlocked, setUnlocked] = useState(false);
  
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
          
          // Update active section for nav highlight
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          }
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
    "Physicist",
    "Tech Rebel",
    "Thinker",
    "Visionary",
    "Social Impact Leader",
  ];

  const manifestoQuotes = [
    "Power without ethics is noise.",
    "I build what should exist — not what's expected.",
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
  
  // Reduced Jobs-inspired quotes (just 3 most impactful)
  const jobsQuotes = [
    "Innovation distinguishes between a leader and a follower.",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "The people who are crazy enough to think they can change the world are the ones who do."
  ];

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />

      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none enhanced-grid"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2">
              <motion.span 
                className="text-future-primary font-sf text-sm tracking-wider mb-2 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                SAIKOUSHIK NALUBOLA • 2050
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-sf font-bold mb-6 tracking-tight"
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
                className="text-xl md:text-2xl font-sf font-medium mb-8 h-12"
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
                <FuturisticButton href="#about" size="lg" className="font-sf btn-glow">
                  Bend spacetime, scroll down
                  <ArrowDown className="ml-2 animate-bounce-light" size={18} />
                </FuturisticButton>
                
                <FuturisticButton href="/manifesto" variant="secondary" className="font-sf btn-glow">
                  Read The Quantum Manifesto
                </FuturisticButton>
              </motion.div>
            </div>
            
            <div className="hidden md:block">
              {/* Removed MagicApple from here */}
            </div>
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
            <div className="animate-on-scroll space-y-4 order-2 md:order-1">
              <p className="text-lg font-sf">
                I'm Saikoushik Nalubola, a B.Tech student in Computer Science and Engineering with specialization in AI & Robotics — but that's just the formal part of my story.
              </p>
              <p className="font-sf">
                What drives me is a relentless need to challenge the status quo. From a young age, I've been the person who asks "Why?" and then follows with "Why not differently?"
              </p>
              <p className="font-sf">
                This questioning led me to found <span className="text-neon-purple font-medium">Revitalize Innovations</span>, where we focus on building impactful, unexpected solutions that address real-world problems through technology and innovative thinking.
              </p>
              <p className="font-sf">
                Through hackathons, startup competitions, and passionate late-night coding sessions, I've discovered my purpose: to create systems, products, and ideas that empower people and fundamentally change how we approach challenges.
              </p>
              <p className="font-sf">
                I'm equal parts dreamer and doer, rebel and builder, philosopher and engineer. I believe technology should serve humanity — not the other way around.
              </p>
            </div>
            
            {/* Added user image */}
            <div className="glass-card-glow p-4 animate-on-scroll order-1 md:order-2 flex justify-center">
              <motion.div
                className="relative overflow-hidden rounded-2xl w-full max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="/lovable-uploads/43580418-0baf-4983-b05b-1337d21b60cd.png" 
                  alt="Saikoushik Nalubola" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-sf font-medium text-xl">Saikoushik Nalubola</h3>
                    <p className="font-sf text-white/80 text-sm">Founder, Revitalize Innovations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-8 glass-card-glow p-6 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 font-sf">The Quick Files</h3>
            <ul className="space-y-3 font-sf">
              <li className="flex items-start">
                <span className="text-neon-purple mr-3 pt-0.5"><ZapIcon size={18} className="min-w-[18px]" /></span>
                <span>B.Tech student in CSE (AI & Robotics)</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-3 pt-0.5"><ZapIcon size={18} className="min-w-[18px]" /></span>
                <span>Founder of Revitalize Innovations</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-3 pt-0.5"><ZapIcon size={18} className="min-w-[18px]" /></span>
                <span>Hackathon enthusiast & pitch competition veteran</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-3 pt-0.5"><ZapIcon size={18} className="min-w-[18px]" /></span>
                <span>Youth leader working for real-world change</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-3 pt-0.5"><ZapIcon size={18} className="min-w-[18px]" /></span>
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
                <FuturisticButton variant="secondary" size="sm" className="btn-glow font-sf">
                  <Clock className="mr-2" size={16} />
                  View Experience Timeline
                </FuturisticButton>
              </Link>
              <Link to="/future">
                <FuturisticButton variant="secondary" size="sm" className="btn-glow font-sf">
                  Future Vision
                  <ArrowRight className="ml-2" size={16} />
                </FuturisticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steve Jobs inspired "Innovation Timeline" section */}
      <section id="innovation" className="enhanced-section">
        <div className="container mx-auto">
          <SectionHeader 
            title="The Innovation Timeline" 
            subtitle="Revolutionary moments that define my journey"
            style="apple"
            className="animate-on-scroll"
          />
          
          <div className="animate-on-scroll">
            <InnovationTimeline />
          </div>
        </div>
      </section>
      
      {/* Removed "Beautifully Designed" product showcase section */}

      {/* Reduced "Think Different" Quote section */}
      <section id="think-different" className="py-16 px-4 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="animate-on-scroll">
            <ThinkDifferentQuote />
          </div>
        </div>
      </section>

      <section 
        id="manifesto" 
        className="enhanced-section"
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
              <h3 className="text-2xl font-bold mb-4 font-sf">My Manifesto</h3>
              <div className="space-y-4 font-sf">
                <p className="text-lg">
                  I believe in the power of unconventional thinking to solve conventional problems. The greatest innovations often come from those willing to see beyond established wisdom.
                </p>
                <p>
                  I believe that technology should empower the many, not enrich the few. Every line of code, every circuit designed, and every system built should expand human potential.
                </p>
                <p>
                  I believe in speaking truth to power. The most important conversations are often the most uncomfortable ones.
                </p>
                <p>
                  Most of all, I believe in action. Ideas without implementation are just dreams. I'm here to build what should exist.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/manifesto" className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center font-medium font-sf">
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
                  className="enhanced-quote-card"
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
        className="enhanced-section bg-secondary/30 relative"
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
                className="animate-on-scroll glass-card-glow"
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <FuturisticButton href="/projects" variant="secondary" className="btn-glow font-sf">
              Enter The Quantum Laboratory
              <ArrowRight className="ml-2" size={18} />
            </FuturisticButton>
          </div>
        </div>
      </section>

      {/* Reduced Jobs Quotes Section */}
      <section id="inspiration" className="py-16 px-4 bg-gradient-to-b from-black/80 to-black/90 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 animate-on-scroll">
            <h2 className="font-sf font-light text-3xl md:text-4xl tracking-tight mb-4">Words to Live By</h2>
            <div className="h-0.5 w-20 bg-white/20 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {jobsQuotes.map((quote, idx) => (
              <motion.div
                key={idx}
                className={`glass-card p-6 mb-6 ${idx % 2 === 0 ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="font-sf font-light text-xl md:text-2xl text-white/90 italic mb-4">"{quote}"</p>
                <p className="text-right font-sf text-sm text-white/70">- Steve Jobs</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One More Thing section */}
      <section id="one-more-thing" className="py-24 px-4">
        <div className="container mx-auto">
          <OneMoreThing title="And One More Thing...">
            <div className="text-center py-8">
              <h3 className="text-3xl font-sf font-light mb-6">The Quantum OS Project</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto font-sf">
                An experimental operating system that brings relativity theory to user interfaces. Time literally slows down when you're focused, and speeds up when you're not.
              </p>
              
              <div className="flex justify-center">
                <SlideToUnlock onUnlock={() => setUnlocked(true)} text="slide to join waitlist" />
              </div>
              
              {unlocked && (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-neon-purple font-sf">
                    Early access granted. Look for an email soon.
                  </p>
                </motion.div>
              )}
            </div>
          </OneMoreThing>
        </div>
      </section>
      
      <section 
        id="thoughts" 
        className="enhanced-section"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Writing & Thoughts" 
            subtitle="Exploring ideas at the intersection of technology, philosophy, and social change"
            highlightText="In the tradition of Dostoevsky and Kafka"
            style="dostoevsky"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {thoughts.map((thought, index) => (
              <motion.div 
                key={index}
                className="glass-card-glow p-6 animate-on-scroll"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-2xl font-bold mb-2">{thought.title}</h3>
                <p className="text-muted-foreground mb-4">{thought.excerpt}</p>
                <Link 
                  to="/soul"
                  className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center mt-auto"
                >
                  Read more
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <FuturisticButton href="/soul" variant="secondary" className="btn-glow">
              Explore The Soul of Creation
              <ArrowRight className="ml-2" size={18} />
            </FuturisticButton>
          </div>
        </div>
      </section>

      <section 
        id="gallery" 
        className="enhanced-section bg-secondary/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20 mix-blend-overlay"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeader 
            title="Quantum Dimensional Gallery" 
            subtitle="Visual fragments from my journey across space and time"
            style="rebel"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-on-scroll">
            <ImmersiveImageCard 
              src="/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png"
              alt="Quantum Computing Initiative"
              className="aspect-square glass-card-glow"
            />
            <ImmersiveImageCard 
              src="/lovable-uploads/14b4370d-d103-473a-a273-98168020f91b.png"
              alt="Innovation Workshop"
              className="aspect-square glass-card-glow"
            />
            <ImmersiveImageCard 
              src="/lovable-uploads/6bea4682-b2ac-4a5d-ab80-dc7f3da6449e.png"
              alt="Google Cloud Platform"
              className="aspect-square glass-card-glow"
            />
            <ImmersiveImageCard 
              src="/lovable-uploads/0a34d2bf-6f36-42f9-8f1f-99d687f9fe35.png"
              alt="Quantum Visualization"
              className="aspect-square glass-card-glow"
            />
            <ImmersiveImageCard 
              src="/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png"
              alt="Future Tech Concepts"
              className="aspect-square glass-card-glow"
            />
            <ImmersiveImageCard 
              src="/lovable-uploads/49cc4f99-9030-4bef-8ac0-00597408b6d2.png"
              alt="Spacetime Dynamics"
              className="aspect-square glass-card-glow"
            />
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link to="/gallery">
              <FuturisticButton variant="primary" size="lg" className="btn-glow">
                <Sparkles className="mr-2" size={18} />
                Enter The Quantum Gallery
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        className="enhanced-section relative overflow-hidden"
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
        className="enhanced-section bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Contact & Collaboration" 
            subtitle="Let's connect and create something extraordinary together"
            className="animate-on-scroll"
          />
          
          <div className="max-w-2xl mx-auto glass-card-glow p-8 animate-on-scroll">
            <p className="text-xl mb-8 text-center">
              "In the vastness of the digital cosmos, like ships passing in the night, we seek connections that transcend the ordinary." If you have a vision that defies convention, let's manifest it together.
            </p>
            
            <div className="flex justify-center space-x-8 mt-6">
              <a 
                href="https://github.com/saikoushiknalubola" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <div className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors transform group-hover:scale-110 duration-300">
                  <Github size={24} className="text-white/80 group-hover:text-white" />
                </div>
                <span className="mt-2 text-white/70 group-hover:text-white text-sm transition-colors">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/saikoushiknalubola/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <div className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors transform group-hover:scale-110 duration-300">
                  <Linkedin size={24} className="text-white/80 group-hover:text-white" />
                </div>
                <span className="mt-2 text-white/70 group-hover:text-white text-sm transition-colors">LinkedIn</span>
              </a>
              <a 
                href="https://x.com/saikoushik_42" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <div className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors transform group-hover:scale-110 duration-300">
                  <Twitter size={24} className="text-white/80 group-hover:text-white" />
                </div>
                <span className="mt-2 text-white/70 group-hover:text-white text-sm transition-colors">Twitter</span>
              </a>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-medium italic">
                "Do not go gentle into that good night. Rage, rage against the dying of the light."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Dylan Thomas</p>
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
          
          {/* Added MagicApple here in the footer */}
          <div className="flex justify-center mb-6">
            <div className="magic-apple-container">
              <MagicApple />
            </div>
          </div>
          
          <div className="text-center mb-6">
            <div className="einstein-quote inline-block">
              <p className="einstein-quote-text">
                "The distinction between past, present, and future is only a stubbornly persistent illusion."
              </p>
              <p className="text-center text-white text-sm font-medium mt-2">
                — Albert Einstein
              </p>
            </div>
          </div>
          
          <p className="text-center text-white/60 mt-6">
            © {new Date().getFullYear()} Saikoushik Nalubola. All rights reserved in this timeline.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
