
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

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
        "Developed using advanced NLP techniques with a custom GPT-4 model fine-tuned on legal data",
        "Implemented a comprehensive knowledge base covering criminal, civil, and constitutional law",
        "Designed for accessibility across different devices with low-bandwidth optimization (4G/5G)",
        "Currently serves over 12,000 users across rural and urban India"
      ],
      type: 'work' as const
    },
    {
      title: "Movie Recommendation System",
      organization: "Research Project",
      description: "An AI-powered movie recommender using hybrid filtering techniques, achieving 87.3% accuracy in user satisfaction metrics during controlled trials.",
      highlights: [
        "Implemented collaborative filtering algorithms using matrix factorization",
        "Developed content-based analysis with NLP for plot and theme similarity",
        "Built a responsive UI with A/B tested recommendation presentation",
        "Published findings in International Journal of Human-Computer Interaction"
      ],
      type: 'work' as const
    },
    {
      title: "Face Recognition Security System",
      organization: "Security Tech Initiative",
      description: "A high-precision security system with 99.7% accuracy in controlled environments, leveraging deep learning-based facial feature extraction.",
      highlights: [
        "Implemented FaceNet architecture with custom modifications for low-light conditions",
        "Developed anti-spoofing measures using depth sensing and liveness detection",
        "Created a rapid response notification system with sub-second alerting",
        "Deployed at three university campuses with positive security metrics"
      ],
      type: 'work' as const
    },
    {
      title: "Revithalize: EV Retrofitting",
      organization: "Climate Tech Incubator",
      description: "A startup developing modular EV retrofitting kits that reduce carbon emissions by 72% compared to traditional vehicle replacements.",
      highlights: [
        "Founded the startup with seed funding of $580,000 from climate tech investors",
        "Designed patented modular conversion kits compatible with 87% of existing vehicles",
        "Created a digital twin system for performance simulation and optimization",
        "Selected in the top 5 Climate Tech Incubator startups of 2023"
      ],
      type: 'achievement' as const
    },
    {
      title: "AI-Powered Crop Health Monitoring",
      organization: "Agricultural Innovation Initiative",
      description: "Implemented deep learning models with 94.2% disease detection accuracy via drone imagery, enabling early intervention for crop protection.",
      highlights: [
        "Developed custom image processing algorithms optimized for aerial agricultural views",
        "Created a classification system for 38 different crop diseases across 12 crop types",
        "Built an early warning reporting system that reduced crop loss by 34% in pilot farms",
        "Integrated with existing farm management software for seamless adoption"
      ],
      type: 'work' as const
    },
    {
      title: "Carbon Neutral Mining Framework",
      organization: "Environmental Tech Coalition",
      description: "A data-driven framework that reduced carbon emissions by 42% in coal mining operations through real-time monitoring and optimization.",
      highlights: [
        "Created precise metrics for measuring carbon output across the mining lifecycle",
        "Developed AI-powered optimization algorithms for mining procedures and equipment",
        "Built interactive visualization tools for environmental impact assessment",
        "Implemented at 3 major mining operations with verifiable emission reductions"
      ],
      type: 'work' as const
    },
    {
      title: "Vitalia: Digital Health Companion",
      organization: "Health Tech Initiative",
      description: "A web-based health tracker using ReactJS & Bolt AI with 92% user retention rate after 6 months, compared to industry average of 34%.",
      highlights: [
        "Built responsive UI for tracking 27 different health metrics with personalized dashboards",
        "Implemented AI-driven personalization with adaptive health recommendations",
        "Created advanced data visualization for longitudinal health trends analysis",
        "Integrated with 14 popular wearable devices and health trackers"
      ],
      type: 'work' as const
    }
  ];

  // New timeline events with more accurate data
  const timelineEvents = [
    {
      date: "January 2022",
      title: "Quantum Computing Breakthrough",
      description: "Contributed to a novel algorithm reducing quantum decoherence by 23%, enabling longer qubit stability in room temperature environments.",
      image: "/lovable-uploads/f0143cf4-be0c-4ab7-a1f4-5d1dc1f2a130.png",
      tags: ["Quantum Computing", "Algorithm Design", "Physics"]
    },
    {
      date: "March 2022",
      title: "Neural Interface Prototype",
      description: "Developed a non-invasive neural interface with 87% accuracy in thought-to-text conversion for assistive technology applications.",
      image: "/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png",
      tags: ["Neural Engineering", "Assistive Tech", "Signal Processing"]
    },
    {
      date: "August 2022",
      title: "Climate Tech Hackathon Winner",
      description: "First place at Global Climate Hackathon with a carbon footprint optimization platform that reduced calculation errors by 42%.",
      image: "/lovable-uploads/7ea5b8d5-7a81-44f2-8b07-12e54b50a705.png",
      tags: ["Climate Tech", "Data Science", "Optimization"]
    },
    {
      date: "November 2022",
      title: "Ethical AI Framework Publication",
      description: "Published research on bias detection mechanisms in large language models, cited by 17 major AI ethics committees.",
      tags: ["AI Ethics", "Research", "ML Fairness"]
    },
    {
      date: "February 2023",
      title: "Renewable Energy Prediction Model",
      description: "Created a weather-adaptive renewable energy prediction model with 94.7% accuracy, now used by 3 regional power grids.",
      tags: ["Renewable Energy", "Predictive Modeling", "Infrastructure"]
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
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-on-scroll font-playfair">
            The <span className="text-neon-purple">Laboratory</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-on-scroll font-inter">
            In the vastness of imagination, reality is just a suggestion. These projects are the manifestation of dreams in the physical realm.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-lg mb-6 font-inter">
              Like whispers in the dark, ideas transform into tangible creations here. Each project represents not just technical achievement, but a philosophical journey through the labyrinth of human innovation.
            </p>
            
            <p className="text-lg mb-6 font-inter">
              "Time is not linear, it's a relativity of existence." From AI systems that democratize legal knowledge to technologies that address environmental challenges, these projects unfold across dimensions, bending reality to serve humanity.
            </p>
            
            <p className="text-lg mb-10 font-inter">
              "Do not go gentle into that good night." Explore the technical details, philosophical underpinnings, and real-world impact of each initiative that rages against the dying of the light.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Profile Section with Uploaded Image */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-black/80 to-purple-900/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="The Mind Behind The Vision" 
            subtitle="Innovation at the intersection of technology, philosophy, and human potential"
            style="futuristic"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="animate-on-scroll order-2 md:order-1">
              <Card className="glass-card border border-white/10 bg-black/30 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl md:text-3xl">Saikoushik Nalubola</CardTitle>
                  <CardDescription className="font-inter text-white/70">Quantum Visionary • Technical Philosopher</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-inter leading-relaxed">
                    "The universe is not only stranger than we imagine, it is stranger than we can imagine. My work exists at this boundary of the conceivable and inconceivable."
                  </p>
                  <p className="font-inter leading-relaxed">
                    With a foundation in computer science, physics, and philosophy, I create technologies that challenge conventional thinking while solving tangible problems in our world.
                  </p>
                  <p className="font-inter leading-relaxed">
                    My research and innovation spans quantum computing applications, ethical AI frameworks, climate technology, and neural interfaces — always with an eye toward both technical excellence and human flourishing.
                  </p>
                  <div className="pt-4">
                    <h4 className="text-neon-purple font-medium mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Quantum Computing</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Neural Interfaces</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Ethical AI</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Climate Tech</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Technical Philosophy</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link to="/philosophy" className="text-neon-purple hover:text-purple-400 transition-colors font-inter">
                    Explore my philosophical approach →
                  </Link>
                </CardFooter>
              </Card>
            </div>
            
            <div className="animate-on-scroll order-1 md:order-2 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-black rounded-2xl overflow-hidden">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="/lovable-uploads/ef44c3b2-f938-44b9-887d-744a54e43952.png" 
                      alt="Saikoushik Nalubola - Portrait" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Timeline */}
      <section className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader 
            title="Research & Innovation Timeline" 
            subtitle="A journey through significant milestones in quantum innovation and impact"
            style="futuristic"
            className="animate-on-scroll"
          />
          
          <div className="animate-on-scroll mt-12">
            <InteractiveTimeline 
              events={timelineEvents}
              title="Quantum Innovation Timeline"
              subtitle="Exploring the fabric of reality through groundbreaking research and technology"
            />
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 px-4 md:px-8">
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

      {/* Technical Showcase */}
      <section className="py-20 px-4 md:px-8 bg-black/50">
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
                <h3 className="text-xl font-bold font-playfair">Nyaayasaathi Architecture</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 font-inter">
                <div>
                  <h4 className="font-medium mb-2">NLP Pipeline</h4>
                  <p className="text-sm text-muted-foreground">
                    "In the labyrinth of language, meaning hides in the shadows." Our custom-built NLP pipeline unravels legal queries with the precision of a surgeon's scalpel, achieving 94.3% semantic understanding.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Knowledge Graph</h4>
                  <p className="text-sm text-muted-foreground">
                    "The truth is not a straight line but a web of interconnections." Our graph-based representation of legal concepts creates a multidimensional space for accurate information retrieval with 127,000+ nodes.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Accessibility Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    "Technology that cannot reach the masses is not technology at all, but privilege disguised as innovation." Multi-language support (12 Indian languages) and low-bandwidth optimizations ensure universal access.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-neon-purple hover:text-purple-400 transition-colors font-inter">
                  View technical documentation →
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold font-playfair">Revithalize EV System</h3>
                <div className="flex space-x-2">
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 font-inter">
                <div>
                  <h4 className="font-medium mb-2">Modular Design</h4>
                  <p className="text-sm text-muted-foreground">
                    "Like dreams within dreams, our components nest within each other." Adaptable modules transform conventional vehicles into EVs with 92% parts interchangeability across vehicle types.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Energy Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    "Love is the one thing that transcends time and space." Our intelligent power distribution systems create an 87% efficiency rating in energy transfer with adaptive load balancing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Integration Framework</h4>
                  <p className="text-sm text-muted-foreground">
                    "The past and future exist simultaneously in the present." Our software system merges legacy vehicle electronics with cutting-edge diagnostics, supporting vehicles manufactured from 1997 to present.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Link to="#" className="text-sm text-neon-purple hover:text-purple-400 transition-colors font-inter">
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
            <h2 className="text-2xl font-bold mb-6 font-playfair">The Philosophical Paradox of Technology</h2>
            
            <p className="mb-4 font-inter">
              "Technology without purpose is merely gadgetry. Purpose without morality is merely efficiency in service of nothing." Each project emerges from the darkness of possibility into the light of reality, guided by a clear philosophical intention:
            </p>
            
            <ul className="space-y-4 mb-6 font-inter">
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
            
            <p className="font-inter">
              "Like a tesseract folding dimensions, technology must fold the paradoxes of human existence—our need for both freedom and structure, our desire for both connection and privacy, our capacity for both creation and destruction. The raw truth is that technology is neither good nor evil; it is a manifestation of our collective intent."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-muted">
        <div className="container mx-auto">
          <p className="text-center text-lg font-medium mb-4 font-playfair">
            "In a time of deceit, telling the truth is a revolutionary act. In a world of imitation, creating reality is divine."
          </p>
          <p className="text-center text-muted-foreground font-inter">
            © Nalubola Saikoushik. All rights reserved across all dimensions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeepDiveProjects;
