
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Music, BookOpen, Beaker, Laugh, Film } from 'lucide-react';
import { useDeviceSize } from '@/hooks/use-mobile';

type NavigationProps = {
  activeSection?: string;
};

// Define a proper type for navigation items
type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  isNew?: boolean; // Make isNew optional
};

const Navigation: React.FC<NavigationProps> = ({ activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { pathname } = useLocation();
  const { isTabletOrSmaller } = useDeviceSize();
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show navbar at top of page
      if (currentScrollPos < 10) {
        setVisible(true);
        return;
      }
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollPos > prevScrollPos && visible) {
        setVisible(false);
      } else if (currentScrollPos < prevScrollPos && !visible) {
        setVisible(true);
      }
      
      // Close mobile menu on scroll
      if (isOpen) {
        setIsOpen(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, isOpen]);
  
  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  // Combine all navigation items into a single array
  const allNavItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '/', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'about', label: 'About', href: '#about', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'manifesto', label: 'Manifesto', href: '/manifesto', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'projects', label: 'Projects', href: '/projects', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'thoughts', label: 'Thoughts', href: '#thoughts', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'gallery', label: 'Gallery', href: '/gallery', icon: <Sparkles size={18} className="mr-2" /> },
    { id: 'cinema', label: 'Cinema', href: '/cinema', icon: <Film size={18} className="mr-2" /> },
    { id: 'lab', label: 'Digital Lab', href: '/lab', icon: <Beaker size={18} className="mr-2" /> },
    { id: 'philosophy', label: 'Philosophy', href: '/philosophy', icon: <BookOpen size={18} className="mr-2" /> },
    { id: 'music', label: 'Music', href: '/music', icon: <Music size={18} className="mr-2" /> },
    { id: 'comedy', label: 'Comedy', href: '/comedy', icon: <Laugh size={18} className="mr-2" />, isNew: true },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Sparkles size={18} className="mr-2" /> },
  ];
  
  const isActive = (id: string) => {
    if (activeSection === id) return true;
    
    // Check if the current path matches the href for router links
    if (id !== 'home' && pathname === allNavItems.find(item => item.id === id)?.href) return true;
    
    return false;
  };
  
  return (
    <header 
      className={`fixed-header bg-black/60 backdrop-blur-md py-4 px-6 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
          
          <div className="hidden md:flex items-center space-x-1 overflow-x-auto max-w-[70vw] pb-1 header-scrollable">
            {allNavItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative font-raleway font-medium hover:text-neon-purple transition-colors px-2 py-2 whitespace-nowrap flex items-center ${
                    isActive(item.id) ? 'text-neon-purple' : 'text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                  )}
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
                  className={`relative font-raleway font-medium hover:text-neon-purple transition-colors px-2 py-2 whitespace-nowrap flex items-center ${
                    isActive(item.id) ? 'text-neon-purple' : 'text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                  )}
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
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed left-0 right-0 top-[76px] bg-black/95 backdrop-blur-md border-t border-white/10 z-50 max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="flex flex-col p-4">
              {allNavItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`font-raleway font-medium text-lg flex items-center justify-between py-3 px-4 rounded-lg mb-1 ${
                      isActive(item.id) 
                        ? 'text-neon-purple bg-white/5' 
                        : 'text-white hover:bg-white/5'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      {item.label}
                    </span>
                    {item.isNew && (
                      <span className="text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                    )}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`font-raleway font-medium text-lg flex items-center justify-between py-3 px-4 rounded-lg mb-1 ${
                      isActive(item.id) 
                        ? 'text-neon-purple bg-white/5' 
                        : 'text-white hover:bg-white/5'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      {item.label}
                    </span>
                    {item.isNew && (
                      <span className="text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                    )}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
