
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Award, Lightbulb, Coffee, Code } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const metrics = [
    { 
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 50000, 
      label: 'Lives Impacted', 
      suffix: '+',
      color: 'from-blue-400 to-cyan-400',
      humor: "That's more people than attend most concerts!"
    },
    { 
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 25, 
      label: 'Projects Shipped', 
      suffix: '+',
      color: 'from-yellow-400 to-orange-400',
      humor: "Each one crafted with love and caffeine"
    },
    { 
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 8, 
      label: 'Awards Won', 
      suffix: '',
      color: 'from-purple-400 to-pink-400',
      humor: "Shiny objects that validate my existence"
    },
    { 
      icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 2847, 
      label: 'Cups of Coffee', 
      suffix: '+',
      color: 'from-amber-400 to-orange-500',
      humor: "The real fuel behind innovation ☕"
    },
    { 
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 100000, 
      label: 'Lines of Code', 
      suffix: '+',
      color: 'from-green-400 to-teal-400',
      humor: "Most of them actually work!"
    },
    { 
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />, 
      value: 99, 
      label: 'Innovation Score', 
      suffix: '%',
      color: 'from-yellow-300 to-yellow-500',
      humor: "1% short of genius (working on it)"
    }
  ];

  const CountUpAnimation = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <motion.div 
      className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="glass-card p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r ${metric.color} mb-3 md:mb-4 shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {metric.icon}
          </motion.div>
          
          <div className="font-sf font-bold text-xl md:text-2xl lg:text-3xl text-white mb-2">
            <CountUpAnimation end={metric.value} suffix={metric.suffix} />
          </div>
          
          <p className="font-sf text-xs md:text-sm text-white/70 font-medium mb-2">
            {metric.label}
          </p>
          
          <motion.p 
            className="font-sf text-xs text-purple-300/70 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (index * 0.1) + 0.6 }}
          >
            {metric.humor}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactMetrics;
