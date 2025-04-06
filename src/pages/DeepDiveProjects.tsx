
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExperienceTimeline from '@/components/ExperienceTimeline';

const DeepDiveProjects = () => {
  // Animation on scroll effect
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

  const projects = [
    {
      title: "Nyaayasaathi: AI Legal Assistant",
      organization: "Personal Project",
      period: "2023",
      description: "An AI-driven legal advisory assistant to provide affordable and accessible legal guidance.",
      highlights: [
        "Developed using NLP techniques to understand legal queries",
        "Implemented a knowledge base covering multiple areas of law",
        "Designed for accessibility across different devices and connectivity"
      ],
      type: 'work'
    },
    {
      title: "Movie Recommendation System",
      organization: "Research Project",
      period: "2023",
      description: "An AI-powered movie recommender using collaborative and content-based filtering, achieving 85% accuracy.",
      highlights: [
        "Implemented collaborative filtering algorithms",
        "Used content-based analysis for more accurate recommendations",
        "Built a user-friendly interface for testing and feedback"
      ],
      type: 'work'
    },
    {
      title: "Face Recognition Security System",
      organization: "Security Tech Initiative",
      period: "2022",
      description: "A high-precision security system leveraging deep learning-based facial feature extraction.",
      highlights: [
        "Used FaceNet architecture for facial recognition",
        "Implemented anti-spoofing measures for enhanced security",
        "Created a rapid response notification system"
      ],
      type: 'work'
    },
    {
      title: "Revithalize: EV Retrofitting",
      organization: "Climate Tech Incubator",
      period: "2024 - Present",
      description: "A startup developing modular EV retrofitting kits for sustainability.",
      highlights: [
        "Founded the startup focusing on sustainable transportation solutions",
        "Designed modular conversion kits for existing vehicles",
        "Secured selection in the Climate Tech Incubator"
      ],
      type: 'achievement'
    },
    {
      title: "AI-Powered Crop Health Monitoring",
      organization: "Agricultural Innovation Initiative",
      period: "2022",
      description: "Implemented deep learning models to assess crop diseases via drone imagery.",
      highlights: [
        "Developed image processing algorithms for disease detection",
        "Created a classification system for different crop ailments",
        "Built a reporting system for early intervention"
      ],
      type: 'work'
    },
    {
      title: "Carbon Neutral Mining Framework",
      organization: "Environmental Tech Coalition",
      period: "2022",
      description: "Designed a data-driven framework for reducing carbon emissions in coal mining operations.",
      highlights: [
        "Created metrics for measuring carbon output",
        "Developed optimization algorithms for mining procedures",
        "Built visualization tools for environmental impact assessment"
      ],
      type: 'work'
    },
    {
      title: "Vitalia: Digital Health Companion",
      organization: "Health Tech Initiative",
      period: "2023",
      description: "A web-based health tracker using ReactJS & Bolt AI, enabling users to monitor water intake, steps, sleep, and mood with personalized feedback.",
      highlights: [
        "Built responsive UI for tracking multiple health metrics",
        "Implemented AI-driven personalization for recommendations",
        "Created data visualization for health trends analysis"
      ],
      type: 'work'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-20 px-4 md:px-8 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-on-scroll">
            The <span className="text-neon-purple">Laboratory</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-on-scroll">
            A deep dive into the technologies, innovations, and experiments that shape my work.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-lg mb-6">
              This is where ideas transform into tangible creations. Each project represents not just technical achievement, but a philosophical approach to solving real-world problems.
            </p>
            
            <p className="text-lg mb-6">
              From AI systems that democratize legal knowledge to technologies that address environmental challenges, these projects reflect my belief that technology must serve human needs and expand human potential.
            </p>
            
            <p className="text-lg mb-10">
              Explore the technical details, philosophical underpinnings, and real-world impact of each initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader 
            title="Project Timeline" 
            subtitle="A chronological journey through innovations and experiments"
            style="futuristic"
            className="animate-on-scroll"
          />
          
          <ExperienceTimeline items={projects} />
        </div>
      </section>

      {/* Technical Showcase */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Technical Showcase" 
            subtitle="Deep dives into the architecture and implementation of selected projects"
            style="kafka"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-12 animate-on-scroll">
            <div className="glass-card p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">Nyaayasaathi Architecture</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">NLP Pipeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom-built NLP pipeline for understanding legal queries, with context-aware response generation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Knowledge Graph</h4>
                  <p className="text-sm text-muted-foreground">
                    Graph-based representation of legal concepts, precedents, and relationships for accurate information retrieval.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Accessibility Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-language support and low-bandwidth optimizations for diverse user access.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-neon-purple hover:text-purple-400 transition-colors">
                  View technical documentation →
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">Revithalize EV System</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Modular Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Adaptable components that can be configured for different vehicle types and power requirements.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Energy Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent power distribution and battery management for optimal performance and longevity.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Integration Framework</h4>
                  <p className="text-sm text-muted-foreground">
                    Software system for seamless integration with existing vehicle electronics and diagnostics.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-neon-purple hover:text-purple-400 transition-colors">
                  View technical specifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Approach */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto glass-card p-8 border border-white/10 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">The Philosophy Behind The Technology</h2>
            
            <p className="mb-4">
              Technology without purpose is merely gadgetry. Each project I undertake is guided by a clear philosophical intention:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <span className="text-neon-purple mr-3">1.</span>
                <div>
                  <strong className="block mb-1">Democratization of Knowledge</strong>
                  <p className="text-muted-foreground">Making specialized knowledge accessible to those who need it most, regardless of resources.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">2.</span>
                <div>
                  <strong className="block mb-1">Sustainability by Design</strong>
                  <p className="text-muted-foreground">Creating systems that align technological progress with environmental wellbeing.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">3.</span>
                <div>
                  <strong className="block mb-1">Human-Centered AI</strong>
                  <p className="text-muted-foreground">Ensuring artificial intelligence amplifies human capability without replacing human judgment.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">4.</span>
                <div>
                  <strong className="block mb-1">Technological Self-Determination</strong>
                  <p className="text-muted-foreground">Building tools that empower individuals rather than creating dependencies.</p>
                </div>
              </li>
            </ul>
            
            <p>
              In the spirit of Kafka and Dostoevsky, I believe technology must grapple with the paradoxes of human existence—our need for both freedom and structure, our desire for both connection and privacy, our capacity for both creation and destruction.
            </p>
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

export default DeepDiveProjects;
