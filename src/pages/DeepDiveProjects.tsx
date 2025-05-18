
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import InteractiveTimeline from '@/components/InteractiveTimeline';

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

  const timelineEvents = [
    {
      date: "2019",
      title: "Genesis of Quantum Insight",
      description: "The initial conception of a revolutionary theory combining quantum mechanics and user experience design principles.",
      tags: ["Quantum", "Design", "Theory"]
    },
    {
      date: "2020",
      title: "Gravity OS Prototype",
      description: "Development of the first prototype of the Gravity-responsive operating system, changing how we interact with devices.",
      image: "/lovable-uploads/14b4370d-d103-473a-a273-98168020f91b.png",
      tags: ["OS", "Innovation", "Prototype"]
    },
    {
      date: "2021",
      title: "Time Capsule Achievement",
      description: "Honored for pioneering work in temporal data compression and visualization techniques.",
      tags: ["Award", "Research", "Data"]
    },
    {
      date: "2022",
      title: "Spacetime Platform Launch",
      description: "The successful deployment of the Spacetime communication platform, connecting users across different temporal frameworks.",
      image: "/lovable-uploads/4fc90ebc-922f-45ed-910b-664c0cae51e3.png",
      tags: ["Platform", "Communication", "Launch"]
    },
    {
      date: "2023",
      title: "Quantum Present Developments",
      description: "Current innovations in quantum computing and artificial intelligence, pushing boundaries of what's possible.",
      tags: ["Quantum", "AI", "Current"]
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
            In the vastness of imagination, reality is just a suggestion. These projects are the manifestation of dreams in the physical realm.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-lg mb-6">
              Like whispers in the dark, ideas transform into tangible creations here. Each project represents not just technical achievement, but a philosophical journey through the labyrinth of human innovation.
            </p>
            
            <p className="text-lg mb-6">
              "Time is not linear, it's a relativity of existence." From AI systems that democratize legal knowledge to technologies that address environmental challenges, these projects unfold across dimensions, bending reality to serve humanity.
            </p>
            
            <p className="text-lg mb-10">
              "Do not go gentle into that good night." Explore the technical details, philosophical underpinnings, and real-world impact of each initiative that rages against the dying of the light.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader 
            title="Project Timeline" 
            subtitle="A non-linear journey through the corridors of innovation and experiments"
            style="futuristic"
            className="animate-on-scroll"
          />
          
          <ExperienceTimeline items={projects} />
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Conceptual Journey" 
            subtitle="Traversing through time and space of creative manifestation"
            style="kafka"
            className="animate-on-scroll"
          />
          
          <div className="mt-16">
            <InteractiveTimeline events={timelineEvents} />
          </div>
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
                    "In the labyrinth of language, meaning hides in the shadows." Our custom-built NLP pipeline unravels legal queries with the precision of a surgeon's scalpel.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Knowledge Graph</h4>
                  <p className="text-sm text-muted-foreground">
                    "The truth is not a straight line but a web of interconnections." Our graph-based representation of legal concepts creates a multidimensional space for accurate information retrieval.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Accessibility Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    "Technology that cannot reach the masses is not technology at all, but privilege disguised as innovation." Multi-language support and low-bandwidth optimizations ensure universal access.
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
                    "Like dreams within dreams, our components nest within each other." Adaptable modules transform conventional vehicles into visions of the future through the wormhole of innovation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Energy Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    "Love is the one thing that transcends time and space." Our intelligent power distribution systems create an invisible bond between energy sources and consumption needs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Integration Framework</h4>
                  <p className="text-sm text-muted-foreground">
                    "The past and future exist simultaneously in the present." Our software system merges legacy vehicle electronics with cutting-edge diagnostics in a temporal convergence.
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
            <h2 className="text-2xl font-bold mb-6">The Philosophical Paradox of Technology</h2>
            
            <p className="mb-4">
              "Technology without purpose is merely gadgetry. Purpose without morality is merely efficiency in service of nothing." Each project emerges from the darkness of possibility into the light of reality, guided by a clear philosophical intention:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <span className="text-neon-purple mr-3">1.</span>
                <div>
                  <strong className="block mb-1">The Paradox of Knowledge</strong>
                  <p className="text-muted-foreground">"In the raw truth of life, knowledge is both salvation and burden." We make specialized knowledge accessible to those who need it most, stripping away the veneer of exclusivity.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">2.</span>
                <div>
                  <strong className="block mb-1">The Duality of Innovation</strong>
                  <p className="text-muted-foreground">"To create is to destroy what came before." Our systems align technological progress with environmental wellbeing, acknowledging that true advancement must honor its foundations.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">3.</span>
                <div>
                  <strong className="block mb-1">The Illusion of Intelligence</strong>
                  <p className="text-muted-foreground">"AI is the mirror reflecting our best and worst selves." We ensure artificial intelligence amplifies human capability without replacing the irreplaceable human spirit.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-neon-purple mr-3">4.</span>
                <div>
                  <strong className="block mb-1">The Liberation Equation</strong>
                  <p className="text-muted-foreground">"True power lies not in control but in release." Our tools empower individuals rather than creating dependencies, measuring success by the freedom they create.</p>
                </div>
              </li>
            </ul>
            
            <p>
              "Like a tesseract folding dimensions, technology must fold the paradoxes of human existence—our need for both freedom and structure, our desire for both connection and privacy, our capacity for both creation and destruction. The raw truth is that technology is neither good nor evil; it is a manifestation of our collective intent."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-muted">
        <div className="container mx-auto">
          <p className="text-center text-lg font-medium mb-4">
            "In a time of deceit, telling the truth is a revolutionary act. In a world of imitation, creating reality is divine."
          </p>
          <p className="text-center text-muted-foreground">
            © Nalubola Saikoushik. All rights reserved across all dimensions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeepDiveProjects;
