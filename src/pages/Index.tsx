
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import TypedText from '@/components/TypedText';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import QuoteCard from '@/components/QuoteCard';
import SkillBar from '@/components/SkillBar';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Index = () => {
  // Detect when elements should animate on scroll
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
      title: "Garuda OS",
      description: "An Android-based privacy-focused operating system designed to give users complete control over their data.",
      emoji: "🦅",
      tags: ["Privacy", "Android", "OS Development"]
    },
    {
      title: "Solar-Powered Water Purification Drone",
      description: "Autonomous drone technology that purifies water in remote areas using solar energy.",
      emoji: "🌞",
      tags: ["Renewable Energy", "Autonomous Systems", "Water Purification"]
    },
    {
      title: "Electric Bike Conversion",
      description: "Project to convert traditional bikes to electric vehicles, making sustainable transport accessible.",
      emoji: "⚡",
      tags: ["Electric Vehicles", "Sustainable Transport", "DIY"]
    },
    {
      title: "Revitalize Innovations",
      description: "Founder of a startup focused on building impactful, unexpected solutions to real-world problems.",
      emoji: "🚀",
      tags: ["Startup", "Innovation", "Social Impact"]
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
    { name: "AI/ML", percentage: 95, emoji: "🧠" },
    { name: "Public Speaking", percentage: 93, emoji: "🎤" },
    { name: "Political Analysis", percentage: 88, emoji: "📊" },
    { name: "Entrepreneurship", percentage: 90, emoji: "💼" },
    { name: "Telling uncomfortable truths", percentage: 100, emoji: "💯" },
    { name: "Problem Solving", percentage: 96, emoji: "🧩" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="text-neon-purple font-space text-sm tracking-wider mb-2 block">
              NALUBOLA SAIKOUSHIK
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building What Should Exist,<br /> 
              <span className="text-neon-purple">Not What's Expected</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium mb-8 h-12">
              <TypedText texts={typingRoles} />
            </div>
            <div>
              <a 
                href="#about" 
                className="inline-flex items-center font-medium bg-neon-purple text-white px-5 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Scroll if you dare to dream big
                <ArrowDown className="ml-2 animate-bounce-light" size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-4 md:px-8 bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Ctrl+Alt+Reboot: The Birth of a Creator" 
            subtitle="My journey from curious student to rebellious innovator"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-4">
              <p>
                I'm a B.Tech student in Computer Science and Engineering with specialization in AI & Robotics — but that's just the formal part of my story.
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
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section 
        id="manifesto" 
        className="py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="What I Believe (and Why It Matters)" 
            subtitle="The principles that guide my work and vision"
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
            </div>
            
            <div className="space-y-4 animate-on-scroll">
              {manifestoQuotes.map((quote, index) => (
                <QuoteCard 
                  key={index}
                  quote={quote}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 px-4 md:px-8 bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Projects & Experiments" 
            subtitle="Bold ideas brought to life through code, hardware, and relentless iteration"
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
            <a 
              href="#contact"
              className="inline-flex items-center font-medium text-neon-purple hover:text-purple-400 transition-colors"
            >
              Have a project idea? Let's collaborate
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section 
        id="thoughts" 
        className="py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Writing & Thoughts" 
            subtitle="Exploring ideas at the intersection of technology, philosophy, and social change"
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
                <a 
                  href="#"
                  className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery" 
        className="py-20 px-4 md:px-8 bg-secondary/30"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Chaos Wall" 
            subtitle="Visual snapshots from my journey as a creator, rebel, and builder"
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
            {Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-muted rounded-md overflow-hidden flex items-center justify-center"
              >
                <span className="text-4xl">📷</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <SectionHeader 
            title="Skills & Expertise" 
            subtitle="What I bring to the table as an entrepreneur, technologist, and changemaker"
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
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <a 
                href="mailto:contact@saikoushik.com"
                className="flex items-center justify-center bg-neon-purple text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Email Me
              </a>
              
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

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-muted">
        <div className="container mx-auto">
          <p className="text-center text-lg font-medium mb-4">
            "Most people accept the world as it is. I'm here to rebuild it."
          </p>
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Nalubola Saikoushik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
