
import React from 'react';
import { motion } from 'framer-motion';

const TechStackVisualizer = () => {
  const techStacks = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      category: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {techStacks.map((stack, index) => (
        <motion.div
          key={stack.category}
          className={`glass-card p-4 sm:p-6 ${stack.bgColor} border border-white/10`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className={`font-inter font-bold text-lg sm:text-xl mb-4 bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
            {stack.category}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {stack.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/80 border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackVisualizer;
