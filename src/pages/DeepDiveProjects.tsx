
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsGrid from '@/components/SkillsGrid';
import ImpactMetrics from '@/components/ImpactMetrics';
import TechStackVisualizer from '@/components/TechStackVisualizer';

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
      description: "An AI-driven legal advisory assistant to provide affordable and accessible legal guidance - a system that bends reality to serve justice.",
      highlights: [
        "Developed using NLP techniques to understand legal queries",
        "Implemented a knowledge base covering multiple areas of law",
        "Designed for accessibility across different devices and connectivity"
      ],
      type: 'work' as const
    },
    {
      title: "Movie Recommendation System",
      organization: "Research Project",
      description: "Where dreams and reality collide - an AI-powered movie recommender using collaborative and content-based filtering, achieving 85% accuracy in a world of subjective taste.",
      highlights: [
        "Implemented collaborative filtering algorithms",
        "Used content-based analysis for more accurate recommendations",
        "Built a user-friendly interface for testing and feedback"
      ],
      type: 'work' as const
    },
    {
      title: "Face Recognition Security System",
      organization: "Security Tech Initiative",
      description: "A high-precision security system leveraging deep learning-based facial feature extraction. The eyes are windows to the soul, but also keys to a secure future.",
      highlights: [
        "Used FaceNet architecture for facial recognition",
        "Implemented anti-spoofing measures for enhanced security",
        "Created a rapid response notification system"
      ],
      type: 'work' as const
    },
    {
      title: "Revithalize: EV Retrofitting",
      organization: "Climate Tech Incubator",
      description: "A startup developing modular EV retrofitting kits for sustainability. Like a tesseract folding time, we fold the future into the vehicles of today.",
      highlights: [
        "Founded the startup focusing on sustainable transportation solutions",
        "Designed modular conversion kits for existing vehicles",
        "Secured selection in the Climate Tech Incubator"
      ],
      type: 'achievement' as const
    },
    {
      title: "AI-Powered Crop Health Monitoring",
      organization: "Agricultural Innovation Initiative",
      description: "Implemented deep learning models to assess crop diseases via drone imagery. In the vast expanse of fields, our AI sees what human eyes cannot - the invisible battle for plant survival.",
      highlights: [
        "Developed image processing algorithms for disease detection",
        "Created a classification system for different crop ailments",
        "Built a reporting system for early intervention"
      ],
      type: 'work' as const
    },
    {
      title: "Carbon Neutral Mining Framework",
      organization: "Environmental Tech Coalition",
      description: "Like exploring the dark recesses of the human mind, we've designed a data-driven framework for reducing carbon emissions in coal mining operations, exposing the raw truth beneath.",
      highlights: [
        "Created metrics for measuring carbon output",
        "Developed optimization algorithms for mining procedures",
        "Built visualization tools for environmental impact assessment"
      ],
      type: 'work' as const
    },
    {
      title: "Vitalia: Digital Health Companion",
      organization: "Health Tech Initiative",
      description: "A web-based health tracker using ReactJS & Bolt AI, enabling users to monitor well-being metrics. In the darkness of health uncertainty, this technology is the light guiding the way.",
      highlights: [
        "Built responsive UI for tracking multiple health metrics",
        "Implemented AI-driven personalization for recommendations",
        "Created data visualization for health trends analysis"
      ],
      type: 'work' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-20 px-4 md:px-8 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6 sm:mb-8 text-sm sm:text-base">
            <ArrowLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Back to Home
          </Link>
          
          <h1 className="font-inter font-bold text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 animate-on-scroll leading-tight">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Laboratory</span>
          </h1>
          
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl animate-on-scroll leading-relaxed">
            In the vastness of imagination, reality is just a suggestion. These projects are the manifestation of dreams in the physical realm.
          </p>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Impact & Innovation" 
            subtitle="Quantifying the reach and influence of technological solutions"
            style="futuristic"
            className="animate-on-scroll mb-8 sm:mb-12"
          />
          
          <ImpactMetrics />
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-slate-900/50 to-purple-900/10">
        <div className="container mx-auto">
          <SectionHeader 
            title="Technical Expertise" 
            subtitle="A comprehensive overview of skills and proficiencies across the technology spectrum"
            style="futuristic"
            className="animate-on-scroll mb-8 sm:mb-12"
          />
          
          <SkillsGrid />
        </div>
      </section>

      {/* Technology Stack Visualization */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Technology Arsenal" 
            subtitle="The tools and frameworks that power innovation and bring ideas to life"
            style="kafka"
            className="animate-on-scroll mb-8 sm:mb-12"
          />
          
          <TechStackVisualizer />
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-purple-900/10 to-slate-900/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Project Timeline" 
            subtitle="A non-linear journey through the corridors of innovation and experiments"
            style="futuristic"
            className="animate-on-scroll mb-8 sm:mb-12"
          />
          
          <ExperienceTimeline items={projects} />
        </div>
      </section>

      {/* Technical Showcase */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Technical Showcase" 
            subtitle="Deep dives into the architecture and implementation of selected projects"
            style="kafka"
            className="animate-on-scroll mb-8 sm:mb-12"
          />
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 animate-on-scroll">
            <div className="glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="font-inter font-bold text-lg sm:text-xl text-white">Nyaayasaathi Architecture</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-blue-400">NLP Pipeline</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "In the labyrinth of language, meaning hides in the shadows." Our custom-built NLP pipeline unravels legal queries with the precision of a surgeon's scalpel.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-green-400">Knowledge Graph</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "The truth is not a straight line but a web of interconnections." Our graph-based representation of legal concepts creates a multidimensional space for accurate information retrieval.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-purple-400">Accessibility Layer</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Technology that cannot reach the masses is not technology at all, but privilege disguised as innovation." Multi-language support and low-bandwidth optimizations ensure universal access.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  View technical documentation →
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="font-inter font-bold text-lg sm:text-xl text-white">Revithalize EV System</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-orange-400">Modular Design</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Like dreams within dreams, our components nest within each other." Adaptable modules transform conventional vehicles into visions of the future through the wormhole of innovation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-cyan-400">Energy Management System</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Love is the one thing that transcends time and space." Our intelligent power distribution systems create an invisible bond between energy sources and consumption needs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold mb-2 text-yellow-400">Integration Framework</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "The past and future exist simultaneously in the present." Our software system merges legacy vehicle electronics with cutting-edge diagnostics in a temporal convergence.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  View technical specifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Approach */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 border border-white/10 animate-on-scroll">
            <h2 className="font-inter font-bold text-xl sm:text-2xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Philosophical Paradox of Technology
            </h2>
            
            <p className="mb-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              "Technology without purpose is merely gadgetry. Purpose without morality is merely efficiency in service of nothing." Each project emerges from the darkness of possibility into the light of reality, guided by a clear philosophical intention:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <span className="text-blue-400 mr-3 font-bold">1.</span>
                <div>
                  <strong className="block mb-1 font-inter font-semibold text-white">The Paradox of Knowledge</strong>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">"In the raw truth of life, knowledge is both salvation and burden." We make specialized knowledge accessible to those who need it most, stripping away the veneer of exclusivity.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-purple-400 mr-3 font-bold">2.</span>
                <div>
                  <strong className="block mb-1 font-inter font-semibold text-white">The Duality of Innovation</strong>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">"To create is to destroy what came before." Our systems align technological progress with environmental wellbeing, acknowledging that true advancement must honor its foundations.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-cyan-400 mr-3 font-bold">3.</span>
                <div>
                  <strong className="block mb-1 font-inter font-semibold text-white">The Illusion of Intelligence</strong>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">"AI is the mirror reflecting our best and worst selves." We ensure artificial intelligence amplifies human capability without replacing the irreplaceable human spirit.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-green-400 mr-3 font-bold">4.</span>
                <div>
                  <strong className="block mb-1 font-inter font-semibold text-white">The Liberation Equation</strong>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">"True power lies not in control but in release." Our tools empower individuals rather than creating dependencies, measuring success by the freedom they create.</p>
                </div>
              </li>
            </ul>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "Like a tesseract folding dimensions, technology must fold the paradoxes of human existence—our need for both freedom and structure, our desire for both connection and privacy, our capacity for both creation and destruction. The raw truth is that technology is neither good nor evil; it is a manifestation of our collective intent."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 md:px-8 border-t border-slate-700">
        <div className="container mx-auto">
          <p className="text-center font-inter text-base sm:text-lg font-medium mb-4 text-white">
            "In a time of deceit, telling the truth is a revolutionary act. In a world of imitation, creating reality is divine."
          </p>
          <p className="text-center text-slate-400 text-sm sm:text-base">
            © Nalubola Saikoushik. All rights reserved across all dimensions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeepDiveProjects;
