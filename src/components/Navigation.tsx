
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type NavigationProps = {
  activeSection?: string;  // Make activeSection an optional prop
};

const Navigation: React.FC<NavigationProps> = ({ activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'manifesto', label: 'Manifesto', href: '#manifesto' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'thoughts', label: 'Thoughts', href: '#thoughts' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];
  
  const isActive = (id: string) => activeSection === id;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-space text-xl font-bold">
            <span className="text-white">Saikoushik</span>
            <span className="text-neon-purple">Nalubola</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative font-medium hover:text-neon-purple transition-colors ${
                  isActive(item.id) ? 'text-neon-purple' : 'text-white'
                }`}
              >
                {item.label}
                {isActive(item.id) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-purple"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-neon-purple transition-colors p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute left-0 right-0 mt-2 bg-black/95 backdrop-blur-md p-6 border-t border-white/10"
        >
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-medium text-lg hover:text-neon-purple transition-colors ${
                  isActive(item.id) ? 'text-neon-purple' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
