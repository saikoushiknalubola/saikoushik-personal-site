
import React from 'react';
import { motion } from 'framer-motion';

const TechStackVisualizer = () => {
  const techStacks = [
    {
      category: 'Frontend Magic',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      humor: "Making pixels dance since 2020 💃"
    },
    {
      category: 'Backend Wizardry',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      humor: "Where the real magic happens (behind the scenes) 🧙‍♂️"
    },
    {
      category: 'AI & Brain Power',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      humor: "Teaching computers to be almost as smart as coffee ☕"
    },
    {
      category: 'Space-Age Tools',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      humor: "Tools that make me look smarter than I am 🚀"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {techStacks.map((stack, index) => (
        <motion.div
          key={stack.category}
          className={`glass-card p-4 md:p-6 ${stack.bgColor} border border-white/10 group hover:scale-105 transition-all duration-300`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-sf font-bold text-lg md:text-xl bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
              {stack.category}
            </h3>
            <motion.div
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${stack.color}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <motion.p 
            className="font-sf text-xs md:text-sm text-purple-300/80 italic mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (index * 0.1) + 0.3 }}
          >
            {stack.humor}
          </motion.p>
          
          <div className="flex flex-wrap gap-2">
            {stack.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs md:text-sm text-white/80 border border-white/10 hover:bg-white/10 transition-all duration-200 font-sf"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                whileHover={{ scale: 1.05, y: -2 }}
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
