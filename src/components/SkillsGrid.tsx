
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';

const SkillsGrid = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" />, level: 90, color: 'from-purple-400 to-purple-600' },
    { name: 'Database Design', icon: <Database className="w-6 h-6" />, level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Web Technologies', icon: <Globe className="w-6 h-6" />, level: 92, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Mobile Development', icon: <Smartphone className="w-6 h-6" />, level: 80, color: 'from-orange-400 to-orange-600' },
    { name: 'Innovation & Strategy', icon: <Zap className="w-6 h-6" />, level: 88, color: 'from-yellow-400 to-yellow-600' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="font-inter font-semibold text-sm sm:text-base text-white">{skill.name}</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-white/70">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
