
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Zap, Cpu, Rocket } from 'lucide-react';

const EnhancedSkillsGrid = () => {
  const skills = [
    { 
      name: 'AI & Machine Learning', 
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 95, 
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10',
      description: 'Neural networks & deep learning',
      humor: "Teaching machines to think... hopefully better than humans!"
    },
    { 
      name: 'Full-Stack Development', 
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 92, 
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/10',
      description: 'React, Node.js & modern frameworks',
      humor: "From frontend magic to backend wizardry ✨"
    },
    { 
      name: 'Quantum Computing', 
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 88, 
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      description: 'Qubits & quantum algorithms',
      humor: "Superposition: Being productive and lazy simultaneously"
    },
    { 
      name: 'Mobile Innovation', 
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 85, 
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10',
      description: 'iOS, Android & cross-platform',
      humor: "Making phones smarter than their users (just kidding!)"
    },
    { 
      name: 'Database Architecture', 
      icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 90, 
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10',
      description: 'SQL, NoSQL & distributed systems',
      humor: "Organizing data better than my desk drawer"
    },
    { 
      name: 'Space-Age Innovation', 
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />, 
      level: 94, 
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-500/10',
      description: 'Future tech & impossible solutions',
      humor: "Solving tomorrow's problems with today's caffeine"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`glass-card p-4 md:p-6 hover:scale-105 transition-all duration-300 ${skill.bgColor} border border-white/10`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}>
              {skill.icon}
            </div>
            <motion.div
              className="text-right"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: (index * 0.1) + 0.3, type: "spring" }}
            >
              <span className="font-sf font-bold text-lg md:text-xl text-white">{skill.level}%</span>
            </motion.div>
          </div>
          
          <h3 className="font-sf font-bold text-base md:text-lg text-white mb-2 leading-tight">
            {skill.name}
          </h3>
          
          <p className="font-sf text-xs md:text-sm text-white/70 mb-3 leading-relaxed">
            {skill.description}
          </p>
          
          <div className="space-y-3">
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
            
            <motion.p 
              className="font-sf text-xs text-purple-300/80 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (index * 0.1) + 0.6 }}
            >
              {skill.humor}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EnhancedSkillsGrid;
