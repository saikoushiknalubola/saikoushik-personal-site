
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Award, Lightbulb } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const metrics = [
    { 
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, 
      value: 50000, 
      label: 'Users Impacted', 
      suffix: '+',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, 
      value: 15, 
      label: 'Projects Completed', 
      suffix: '+',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, 
      value: 5, 
      label: 'Awards & Recognition', 
      suffix: '',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />, 
      value: 85, 
      label: 'Innovation Score', 
      suffix: '%',
      color: 'from-green-400 to-teal-400'
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
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r ${metric.color} mb-3 sm:mb-4`}>
            {metric.icon}
          </div>
          <div className="font-inter font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2">
            <CountUpAnimation end={metric.value} suffix={metric.suffix} />
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-medium">{metric.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactMetrics;
