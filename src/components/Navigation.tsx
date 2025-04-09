
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Music, BookOpen, Flask, Braces } from 'lucide-react';
import { useDeviceSize } from '@/hooks/use-mobile';

type NavigationProps = {
  activeSection?: string;  // Keep this as an optional prop
};

const Navigation: React.FC<NavigationProps> = ({ activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const { isTabletOrSmaller } = useDeviceSize();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // The dropdown will close if user scrolls while it's open
  React.useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);
  
  // Auto-close the mobile menu when changing routes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  const navItems = [
    { id: 'home', label: 'Home', href: '/', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'about', label: 'About', href: '#about', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'manifesto', label: 'Manifesto', href: '/manifesto', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'projects', label: 'Projects', href: '/projects', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'thoughts', label: 'Thoughts', href: '#thoughts', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'gallery', label: 'Gallery', href: '/gallery', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'cinema', label: 'Cinema', href: '/cinema', icon: <Sparkles size={18} className="mr-2" />  },
    { id: 'lab', label: 'Digital Lab', href: '/lab', icon: <Flask size={18} className="mr-2" />  },
    { id: 'philosophy', label: 'Philosophy', href: '/philosophy', icon: <BookOpen size={18} className="mr-2" />  },
    { id: 'music', label: 'Music', href: '/music', icon: <Music size={18} className="mr-2" />  },
    { id: 'experiments', label: 'Experiments', href: '/experiments', icon: <Braces size={18} className="mr-2" />  },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Sparkles size={18} className="mr-2" />  },
  ];
  
  const isActive = (id: string) => {
    if (activeSection === id) return true;
    
    // Check if the current path matches the href for router links
    if (id !== 'home' && pathname === navItems.find(item => item.id === id)?.href) return true;
    
    return false;
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-raleway text-xl font-bold group relative">
            <motion.span 
              className="text-white inline-flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={18} className="text-neon-purple mr-2 animate-pulse-glow" />
              Saikoushik
            </motion.span>
            <motion.span 
              className="text-neon-purple ml-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nalubola
            </motion.span>
            <motion.span 
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple to-future-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </Link>
          
          <div className="hidden md:flex space-x-4 items-center overflow-x-auto thin-scrollbar">
            {navItems.slice(0, isTabletOrSmaller ? 5 : 8).map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative font-raleway font-medium hover:text-neon-purple transition-colors px-3 py-2 ${
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
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`relative font-raleway font-medium hover:text-neon-purple transition-colors px-3 py-2 ${
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
                </Link>
              )
            ))}
            
            {/* Add a "More" dropdown for desktop if needed */}
            {navItems.length > 8 && !isTabletOrSmaller && (
              <div className="relative group">
                <button className="relative font-raleway font-medium text-white hover:text-neon-purple transition-colors px-3 py-2">
                  More
                </button>
                <div className="absolute top-full right-0 mt-1 w-48 hidden group-hover:block">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                    {navItems.slice(8).map((item) => (
                      item.href.startsWith('#') ? (
                        <a
                          key={item.id}
                          href={item.href}
                          className="flex items-center px-4 py-2 text-white hover:bg-white/10 transition-colors"
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="flex items-center px-4 py-2 text-white hover:bg-white/10 transition-colors"
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}
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
      
      {/* Mobile menu with improved animation and styling */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute left-0 right-0 mt-2 bg-black/95 backdrop-blur-md border-t border-white/10 z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-raleway font-medium text-lg flex items-center py-3 px-4 rounded-lg mb-1 ${
                    isActive(item.id) 
                      ? 'text-neon-purple bg-white/5' 
                      : 'text-white hover:bg-white/5'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`font-raleway font-medium text-lg flex items-center py-3 px-4 rounded-lg mb-1 ${
                    isActive(item.id) 
                      ? 'text-neon-purple bg-white/5' 
                      : 'text-white hover:bg-white/5'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
