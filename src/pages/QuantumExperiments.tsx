
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import { ArrowLeft, Sparkles, Zap, Globe, Rocket, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumExperiments = () => {
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null);
  const [timeSpeed, setTimeSpeed] = useState(1);
  
  useEffect(() => {
    document.title = "Quantum Experiments | Saikoushik Nalubola";
    
    // Simulate time dilation effect
    const originalSpeed = 1000;
    const updateClock = () => {
      const clockElement = document.getElementById('quantum-clock');
      if (clockElement) {
        const now = new Date();
        
        // Apply relative time dilation based on slider
        const dilatedTime = new Date(now.getTime() * timeSpeed);
        
        clockElement.textContent = dilatedTime.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
      }
    };
    
    const intervalId = setInterval(updateClock, originalSpeed / timeSpeed);
    return () => clearInterval(intervalId);
  }, [timeSpeed]);
  
  const experiments = [
    {
      id: 1,
      title: "Time Dilation Simulator",
      description: "Experience Einstein's time dilation effect as objects approach the speed of light.",
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      color: "bg-gradient-to-r from-blue-600/20 to-purple-600/20",
      component: (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Time Dilation Simulator</h3>
          <div className="text-center mb-6">
            <div id="quantum-clock" className="font-mono text-4xl text-blue-400 bg-black/40 py-3 px-6 rounded-lg inline-block">
              {new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              })}
            </div>
            <p className="mt-2 text-white/60">Relative Time</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-white/80 mb-2">Time Dilation Factor: {timeSpeed.toFixed(2)}x</label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={timeSpeed}
              onChange={(e) => setTimeSpeed(parseFloat(e.target.value))}
              className="w-full bg-white/10 rounded-lg appearance-none h-2 outline-none"
            />
            <div className="flex justify-between text-xs text-white/60 mt-1">
              <span>Slower</span>
              <span>Normal</span>
              <span>Faster</span>
            </div>
          </div>
          
          <div className="relative h-40 border border-white/10 rounded-lg bg-black/20 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6 bg-blue-500 rounded-full"
              animate={{
                x: ['0%', '100%', '0%'],
                transition: {
                  x: {
                    duration: 5 / timeSpeed,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 pointer-events-none"></div>
          </div>
          
          <p className="mt-4 text-white/70 text-sm">
            According to Einstein's theory of special relativity, time moves more slowly for objects moving at high velocities relative to an observer. This simulation demonstrates how time appears to flow differently based on relative velocity.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Quantum Superposition",
      description: "Observe particles existing in multiple states simultaneously until observed.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      color: "bg-gradient-to-r from-yellow-600/20 to-orange-600/20",
      component: (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Quantum Superposition</h3>
          
          <div className="relative h-60 border border-white/10 rounded-lg bg-black/20 overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative w-20 h-20"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-70 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.4, 0.7],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />
                <motion.div
                  className="absolute left-0 right-0 top-0 bottom-0 m-auto w-2 h-2 rounded-full bg-white"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />
                
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      transformOrigin: "center center",
                      transform: `rotate(${angle}deg) translateX(30px)`
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                      transition: { 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/30 text-white/80 px-2 py-1 rounded text-xs">
                Particle in superposition
              </span>
            </div>
          </div>
          
          <p className="text-white/70 text-sm mb-4">
            In quantum mechanics, a particle can exist in multiple states simultaneously (superposition) until it's measured, at which point it "collapses" into a single definite state.
          </p>
          
          <div className="flex justify-center">
            <button 
              className="px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/50 rounded-md transition-colors text-white"
              onClick={() => {
                // Observer effect animation could be added here
              }}
            >
              Observe Particle
            </button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Gravity Warp Simulator",
      description: "See how mass curves spacetime according to Einstein's General Relativity.",
      icon: <Globe className="w-6 h-6 text-green-400" />,
      color: "bg-gradient-to-r from-green-600/20 to-teal-600/20",
      component: (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Gravity Warp Simulator</h3>
          
          <div className="relative h-60 border border-white/10 rounded-lg bg-black/20 overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Grid lines to show spacetime curvature */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => {
                  const row = Math.floor(i / 8);
                  const col = i % 8;
                  const centerDistX = Math.abs(col - 3.5);
                  const centerDistY = Math.abs(row - 3.5);
                  const dist = Math.sqrt(centerDistX * centerDistX + centerDistY * centerDistY);
                  const warpFactor = Math.max(0, 1 - dist / 5);
                  
                  return (
                    <div 
                      key={i} 
                      className="border border-green-500/20"
                      style={{
                        transform: `scale(${1 - warpFactor * 0.4})`,
                        opacity: 0.2 + warpFactor * 0.6
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Central mass */}
              <motion.div
                className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-green-400 shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Orbiting body */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-white"
                animate={{
                  rotate: 360,
                  transition: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                style={{
                  transformOrigin: "center center",
                  left: "calc(50% + 60px)",
                  top: "calc(50% - 2px)",
                }}
              />
            </div>
          </div>
          
          <p className="text-white/70 text-sm">
            Einstein's General Theory of Relativity describes gravity not as a force, but as a curvature of spacetime caused by mass. Massive objects create a "depression" in the fabric of spacetime, causing other objects to follow curved paths.
          </p>
        </div>
      )
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation activeSection="experiments" />
      
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="mr-2" size={16} />
              Back to Quantum Home
            </Link>
          </div>
          
          <SectionHeader
            title="Einstein's Quantum Laboratory"
            subtitle="Interactive experiments demonstrating the principles of relativity and quantum mechanics"
            style="futuristic"
            theoryReference="einstein"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {experiments.map((experiment) => (
              <motion.div
                key={experiment.id}
                className={`relative overflow-hidden rounded-xl border border-white/10 ${experiment.color} p-6 hover:scale-105 transition-transform duration-300 h-64 cursor-pointer`}
                onClick={() => setActiveExperiment(experiment.id)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute top-4 right-4">
                  {experiment.icon}
                </div>
                <div className="pt-12">
                  <h3 className="text-xl font-bold mb-2">{experiment.title}</h3>
                  <p className="text-white/70">{experiment.description}</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                    <Sparkles size={16} className="text-white/80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <AnimatePresence>
            {activeExperiment && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveExperiment(null)}
              >
                <motion.div
                  className="w-full max-w-3xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {experiments.find(exp => exp.id === activeExperiment)?.component}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science." — Albert Einstein
            </p>
            <FuturisticButton href="/" variant="secondary">
              <Rocket className="mr-2" size={16} />
              Return to Quantum Home
            </FuturisticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumExperiments;
