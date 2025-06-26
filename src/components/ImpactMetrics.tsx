
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Award, Lightbulb, TrendingUp } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const metrics = [
    { 
      icon: <Users className="w-8 h-8" />, 
      value: 50000, 
      label: 'Lives Impacted', 
      suffix: '+',
      color: 'from-blue-400 to-cyan-400',
      description: 'Through innovative solutions'
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      value: 25, 
      label: 'Projects Launched', 
      suffix: '+',
      color: 'from-yellow-400 to-orange-400',
      description: 'From concept to reality'
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: 8, 
      label: 'Recognition Awards', 
      suffix: '',
      color: 'from-purple-400 to-pink-400',
      description: 'Industry acknowledgments'
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: 300, 
      label: 'Growth Rate', 
      suffix: '%',
      color: 'from-green-400 to-teal-400',
      description: 'Year over year impact'
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
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
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
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="group relative glass-card p-6 text-center hover:scale-105 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ y: -8 }}
        >
          {/* Background glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`} />
          
          <div className="relative z-10">
            <motion.div 
              className={`inline-flex p-4 rounded-full bg-gradient-to-r ${metric.color} mb-4 shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {metric.icon}
            </motion.div>
            
            <div className="font-sf font-bold text-2xl lg:text-3xl text-white mb-2">
              <CountUpAnimation end={metric.value} suffix={metric.suffix} />
            </div>
            
            <p className="text-sm font-sf font-semibold text-white mb-1">{metric.label}</p>
            <p className="text-xs text-white/60 font-sf">{metric.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactMetrics;
