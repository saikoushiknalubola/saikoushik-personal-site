
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Star, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import FuturisticButton from './FuturisticButton';

interface ThoughtExperimentProps {
  className?: string;
  title?: string;
  description?: string;
}

const ThoughtExperiment: React.FC<ThoughtExperimentProps> = ({
  className,
  title = "Thought Experiment",
  description = "What if we could explore ideas with the curiosity of a child and the intellect of a genius?",
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      icon: Compass,
      title: "Curiosity",
      content: "I can still remember — or at least I believe I can remember — that this experience made a deep and lasting impression on me. After being mesmerized by the compass needle's fealty to an unseen field, I would develop a lifelong devotion to field theories as a way to describe nature.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: Brain,
      title: "Independent Thinking",
      content: "A foolish faith in authority is the worst enemy of truth. Without the ability to develop the powerful independence of mind, one would not have the courage to challenge established beliefs and revolutionize physics.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: Star,
      title: "Imagination",
      content: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10"
    },
    {
      icon: Lightbulb,
      title: "Wonder",
      content: "People like you and me never grow old. We never cease to stand like curious children before the great mystery into which we were born. Out yonder there was this huge world, which exists independently of us human beings and which stands before us like a great, eternal riddle.",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    }
  ];

  return (
    <div className={cn("my-12 p-6 rounded-xl glass-card-glow relative overflow-hidden", className)}>
      {/* Background spacetime fabric */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div 
              key={i}
              className="border-[0.5px] border-white/10"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3 + Math.random() * 5,
                delay: Math.random() * 2 
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-sf font-bold mb-2 text-blue-400">{title}</h3>
          <p className="text-white/70">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => (
            <motion.button
              key={idx}
              className={cn(
                "p-4 rounded-lg transition-all relative overflow-hidden",
                activeStep === idx ? step.bgColor : "bg-black/20 hover:bg-black/30"
              )}
              onClick={() => setActiveStep(idx)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center justify-center">
                <step.icon 
                  className={cn("w-8 h-8 mb-3", activeStep === idx ? step.color : "text-white/60")} 
                />
                <span className={cn("font-medium", activeStep === idx ? step.color : "text-white/80")}>
                  {step.title}
                </span>
              </div>
              
              {activeStep === idx && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundColor: step.color.replace('text-', 'bg-').split('-')[1],
                    transformOrigin: 'left'
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <div className={cn("p-3 rounded-full mr-3", steps[activeStep].bgColor)}>
              <steps[activeStep].icon className={steps[activeStep].color} size={24} />
            </div>
            <h4 className={cn("text-xl font-medium", steps[activeStep].color)}>
              {steps[activeStep].title}
            </h4>
          </div>
          <p className="text-white/80 italic leading-relaxed">
            "{steps[activeStep].content}"
          </p>
          <p className="text-right mt-2 text-white/50 text-sm">— Albert Einstein</p>
        </motion.div>

        <div className="mt-6 flex justify-center">
          <FuturisticButton 
            variant="secondary" 
            size="sm"
            className="btn-glow"
            onClick={() => setActiveStep((activeStep + 1) % steps.length)}
          >
            Next Principle
          </FuturisticButton>
        </div>
      </div>
    </div>
  );
};

export default ThoughtExperiment;
