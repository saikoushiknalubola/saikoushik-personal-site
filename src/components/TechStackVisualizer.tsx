
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Zap, Star } from 'lucide-react';

const TechStackVisualizer = () => {
  const techStacks = [
    {
      category: 'Frontend Mastery',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vite'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      icon: <Code className="w-6 h-6" />,
      level: 95
    },
    {
      category: 'Backend & Database',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      icon: <Database className="w-6 h-6" />,
      level: 90
    },
    {
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn', 'LangChain'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      icon: <Brain className="w-6 h-6" />,
      level: 88
    },
    {
      category: 'Mobile & Platforms',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Capacitor', 'Expo'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      icon: <Smartphone className="w-6 h-6" />,
      level: 85
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions', 'Terraform'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      icon: <Globe className="w-6 h-6" />,
      level: 82
    },
    {
      category: 'Innovation Tools',
      technologies: ['Figma', 'Blender', 'Adobe Suite', 'Notion', 'Linear', 'Slack'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      icon: <Zap className="w-6 h-6" />,
      level: 92
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {techStacks.map((stack, index) => (
        <motion.div
          key={stack.category}
          className={`group relative glass-card p-6 ${stack.bgColor} border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Background gradient effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stack.color}`}>
                  {stack.icon}
                </div>
                <h3 className={`font-sf font-bold text-lg bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                  {stack.category}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white/70 font-sf text-sm">{stack.level}%</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className={`h-full bg-gradient-to-r ${stack.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stack.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {stack.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs font-sf text-white/80 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackVisualizer;
