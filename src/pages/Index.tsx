import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import ImpactMetrics from "@/components/ImpactMetrics";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import SkillsGrid from "@/components/SkillsGrid";
import ThinkDifferentQuote from "@/components/ThinkDifferentQuote";
import HumorousQuote from "@/components/HumorousQuote";
import FormulaPlayground from "@/components/FormulaPlayground";
import PremiumButton from "@/components/PremiumButton";
import { ArrowRight, Lightbulb, Rocket, Code, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <motion.div 
          className="container mx-auto text-center relative z-10"
          style={{ y, opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building the{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text animate-pulse">
              Future
            </span>{" "}
            with Code
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming innovative ideas into revolutionary digital experiences that make a difference.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/projects">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-medium flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Explore My Work
              </button>
            </Link>
            <Link to="/manifesto">
              <button className="border border-muted-foreground text-muted-foreground px-8 py-3 rounded-md hover:bg-muted-foreground hover:text-background transition-colors text-lg font-medium">
                My Philosophy
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-sf font-bold text-white mb-6">
              Impact in <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Numbers</span>
            </h2>
            <p className="text-lg text-white/70 font-sf max-w-2xl mx-auto">
              Every line of code, every innovation, every solution - measured by real-world impact
            </p>
          </motion.div>
          
          <ImpactMetrics />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-sf font-bold text-white mb-4">
              Wisdom with a <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Twist</span>
            </h2>
          </motion.div>

          <HumorousQuote
            quote="Imagination is more important than knowledge. For knowledge is limited, whereas imagination circles the world."
            author="Albert Einstein"
            humor="Translation: Google has all the knowledge, but only humans have the crazy ideas to build apps that let you order pizza with your thoughts."
          />

          <HumorousQuote
            quote="Innovation distinguishes between a leader and a follower."
            author="Steve Jobs"
            humor="Modern translation: While others copy-paste from Stack Overflow, true innovators write their own bugs... I mean, features."
          />

          <HumorousQuote
            quote="The best time to plant a tree was 20 years ago. The second best time is now."
            author="Chinese Proverb"
            humor="The best time to start that side project was last year. The second best time is... right after I finish watching just one more YouTube tutorial."
          />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto">
          <FormulaPlayground />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <ThinkDifferentQuote />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-sf font-bold text-white mb-6">
              Technology <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Arsenal</span>
            </h2>
            <p className="text-lg text-white/70 font-sf max-w-2xl mx-auto">
              From frontend wizardry to AI sorcery - the tools that bring impossible ideas to life
            </p>
          </motion.div>
          
          <TechStackVisualizer />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-sf font-bold text-white mb-6">
              Core <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">Competencies</span>
            </h2>
            <p className="text-lg text-white/70 font-sf max-w-2xl mx-auto">
              Years of dedication crystallized into expertise that drives innovation forward
            </p>
          </motion.div>
          
          <SkillsGrid />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-t from-black to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-sf font-bold text-white mb-6">
              Ready to Build the <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Impossible</span>?
            </h2>
            <p className="text-lg text-white/70 font-sf max-w-2xl mx-auto mb-8">
              Let's turn your wildest ideas into digital reality. No concept too ambitious, no problem too complex.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <PremiumButton variant="primary" size="lg" icon={Code}>
                  Explore My Projects
                </PremiumButton>
              </Link>
              <Link to="/philosophy">
                <PremiumButton variant="secondary" size="lg" icon={Brain}>
                  Read My Philosophy
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
