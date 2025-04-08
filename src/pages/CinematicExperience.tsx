
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Sparkles, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import QuoteCard from '@/components/QuoteCard';
import ExperienceTimeline from '@/components/ExperienceTimeline';

const CinematicExperience = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1.05, 1.1, 1.15]);
  const [activeSection, setActiveSection] = useState('interstellar');

  const cinematicSequences = [
    {
      title: "Time Is A Flat Circle",
      organization: "Interstellar Consciousness",
      description: "Love is the one thing that transcends time and space. Maybe we should trust that, even if we can't understand it.",
      highlights: [
        "What if our existence is merely a higher dimensional being's simulation?",
        "Time as a physical dimension rather than a linear concept",
        "Quantum reality as a mirror to human consciousness"
      ],
      type: "achievement"
    },
    {
      title: "The Relentless Pursuit",
      organization: "Nolanverse Paradox",
      description: "Every moment of your life—every decision—creates another parallel universe where another version of you exists.",
      highlights: [
        "Memory as an unreliable narrator of our own existence",
        "Trauma as a black hole warping reality around its event horizon",
        "The subjective experience of time under psychological stress"
      ],
      type: "work"
    },
    {
      title: "The Satya Experiment",
      organization: "RGV's Anarchic Vision",
      description: "What appears as chaos is simply order operating at a level too complex for our understanding.",
      highlights: [
        "Raw human psychology under extreme pressure",
        "The illusion of societal structures when faced with primal fear",
        "Beauty in the breakdown of conventional narrative structures"
      ],
      type: "education"
    }
  ];

  const cinemaQuotes = [
    {
      quote: "Do not go gentle into that good night. Rage, rage against the dying of the light.",
      author: "Dylan Thomas via Interstellar"
    },
    {
      quote: "We've always defined ourselves by the ability to overcome the impossible.",
      author: "Cooper, Interstellar"
    },
    {
      quote: "Fear is the reason why the best in me is never good enough.",
      author: "Ram Gopal Varma"
    },
    {
      quote: "Once you become fearless, life becomes limitless.",
      author: "Satya, 1998"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>
      
      <Navigation />
      
      <motion.div 
        className="relative z-10 pt-24 pb-20 px-4 md:px-8"
        style={{ opacity, scale }}
      >
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <FuturisticButton variant="ghost" size="sm">
                <ArrowLeft className="mr-2" size={16} />
                Return to Reality
              </FuturisticButton>
            </Link>
          </div>
          
          <SectionHeader 
            title="Cinematic Quantum Narratives" 
            subtitle="Where Nolan's cosmic wonder meets Varma's raw human intensity"
            style="futuristic"
            highlightText="Time is not linear, but consciousness might be"
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-4 text-gradient from-blue-400 to-purple-400">The Philosophy of Cinematic Time</h3>
              
              <div className="glass-card p-6 backdrop-blur-md">
                <p className="mb-4">In the vast tapestry of space-time, our narratives are but ripples in an ocean of quantum possibility. Like Nolan's Cooper trapped in the tesseract, we exist simultaneously across all moments.</p>
                
                <p className="mb-4">The raw intensity of human experience—as captured in Varma's unflinching lens—reminds us that despite our cosmic insignificance, our emotions create gravitational waves across the universe.</p>
                
                <p>What if the love you feel right now is actually influencing events in another dimension? What if your consciousness is the bridge between parallel realities?</p>
              </div>
              
              <div className="mt-8 space-y-4">
                {cinemaQuotes.map((quote, index) => (
                  <QuoteCard 
                    key={index}
                    quote={quote.quote}
                    author={quote.author}
                    color={index % 2 === 0 ? "border-neon-purple" : "border-neon-cyan"}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <div className="glass-card p-6 backdrop-blur-md mb-8">
                  <div className="flex space-x-4 mb-6">
                    <button 
                      onClick={() => setActiveSection('interstellar')}
                      className={`px-4 py-2 rounded-full transition-all ${activeSection === 'interstellar' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      <Clock className="inline-block mr-2" size={16} />
                      Temporal Loop
                    </button>
                    
                    <button 
                      onClick={() => setActiveSection('inception')}
                      className={`px-4 py-2 rounded-full transition-all ${activeSection === 'inception' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      <RotateCcw className="inline-block mr-2" size={16} />
                      Dream Logic
                    </button>
                    
                    <button 
                      onClick={() => setActiveSection('rgv')}
                      className={`px-4 py-2 rounded-full transition-all ${activeSection === 'rgv' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      <Sparkles className="inline-block mr-2" size={16} />
                      Raw Intensity
                    </button>
                  </div>
                  
                  {activeSection === 'interstellar' && (
                    <div className="space-y-4 animate-fade-in">
                      <h4 className="text-xl font-bold">The Gravity of Time</h4>
                      <p>Like water on Miller's planet, each second here is seven years elsewhere. Our perception of time is merely a human construct, warped by the gravity of emotional significance.</p>
                      <div className="relative h-60 overflow-hidden rounded-lg mt-4">
                        <img 
                          src="/lovable-uploads/5b6abb0a-b304-45e9-bb26-436dcdb02785.png" 
                          alt="Interstellar inspired visual" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-sm italic text-white/80">"We're just here to be memories for our kids."</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 'inception' && (
                    <div className="space-y-4 animate-fade-in">
                      <h4 className="text-xl font-bold">Dreams Within Dreams</h4>
                      <p>Reality is subjective. The deeper we go into our subconscious, the more time dilates. What feels like decades might be mere moments in waking life.</p>
                      <div className="relative h-60 overflow-hidden rounded-lg mt-4">
                        <img 
                          src="/lovable-uploads/d00b1c86-928d-4dfb-9985-e352dcc01e95.png" 
                          alt="Inception inspired visual" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-sm italic text-white/80">"An idea is like a virus. Resilient. Highly contagious."</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 'rgv' && (
                    <div className="space-y-4 animate-fade-in">
                      <h4 className="text-xl font-bold">The Visceral Truth</h4>
                      <p>Through Varma's lens, humanity is stripped of pretense. The camera doesn't flinch, even when we do. In this raw honesty lies a transcendent truth about our existence.</p>
                      <div className="relative h-60 overflow-hidden rounded-lg mt-4">
                        <img 
                          src="/lovable-uploads/c82f9bea-ce9a-44ad-b971-f2d53ffc72f7.png" 
                          alt="RGV inspired visual" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-sm italic text-white/80">"Fear is the most primal human emotion."</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Cinematic Timeline of Consciousness</h3>
            <ExperienceTimeline items={cinematicSequences} />
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-lg mb-8 max-w-3xl mx-auto">Like a tesseract that allows you to move freely through time, these cinematic experiences transcend conventional narrative structures.</p>
            <FuturisticButton href="/experiments" variant="secondary" size="lg">
              <Sparkles className="mr-2" size={18} />
              Enter Quantum Experiments
            </FuturisticButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CinematicExperience;
