
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Mail, ExternalLink } from 'lucide-react';
import { useDeviceSize } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type NavigationProps = {
  activeSection?: string;
};

// Define a proper type for navigation items
type NavItem = {
  id: string;
  label: string;
  href: string;
  isNew?: boolean; // Make isNew optional
};

// Define type for dropdown items with additional context
type DropdownItem = {
  id: string;
  label: string;
  description?: string; // Add description field
  href: string;
  isNew?: boolean;
  isExternal?: boolean; // For external links
};

const Navigation: React.FC<NavigationProps> = ({ activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();
  const { isTabletOrSmaller } = useDeviceSize();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Track mouse movement for hover effects
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle scroll behavior and calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newScrollProgress = totalHeight > 0 ? (currentScrollPos / totalHeight) * 100 : 0;
      
      setScrollProgress(newScrollProgress);
      
      // Always show navbar at top of page
      if (currentScrollPos < 10) {
        setVisible(true);
        return;
      }
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollPos > prevScrollPos && visible && currentScrollPos > 100) {
        setVisible(false);
      } else if (currentScrollPos < prevScrollPos && !visible) {
        setVisible(true);
      }
      
      // Close mobile menu on scroll
      if (isOpen && Math.abs(currentScrollPos - prevScrollPos) > 30) {
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
  
  // Main navigation items
  const mainNavItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'manifesto', label: 'Manifesto', href: '/manifesto' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'thoughts', label: 'Thoughts', href: '#thoughts' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];
  
  // Enhanced More dropdown items with descriptions
  const moreDropdownItems: DropdownItem[] = [
    { 
      id: 'gallery', 
      label: 'Gallery', 
      description: 'Visual exploration of creative works and inspiration',
      href: '/gallery' 
    },
    { 
      id: 'cinema', 
      label: 'Cinema', 
      description: 'Film analysis and cinematic inspiration',
      href: '/cinema' 
    },
    { 
      id: 'lab', 
      label: 'Digital Lab', 
      description: 'Experimental projects and technical explorations',
      href: '/lab' 
    },
    { 
      id: 'philosophy', 
      label: 'Philosophy', 
      description: 'Deep thoughts on life, technology and creativity',
      href: '/philosophy' 
    },
    { 
      id: 'music', 
      label: 'Music', 
      description: 'Musical influences and sound explorations',
      href: '/music' 
    },
    { 
      id: 'comedy', 
      label: 'Comedy', 
      description: 'Humor and creative fun experiments',
      href: '/comedy', 
      isNew: true 
    },
  ];
  
  // All navigation items combined for mobile view
  const allNavItems: NavItem[] = [
    ...mainNavItems,
    ...moreDropdownItems
  ];
  
  const isActive = (id: string) => {
    if (activeSection === id) return true;
    
    // Check if the current path matches the href for router links
    if (id !== 'home' && pathname === allNavItems.find(item => item.id === id)?.href) return true;
    
    return false;
  };

  // Navbar variants for animation
  const navVariants = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    },
    hidden: { 
      y: -100, 
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };
  
  return (
    <motion.header 
      className="fixed-header bg-black/60 backdrop-blur-xl py-3 md:py-4 px-3 md:px-6 border-b border-white/5 w-full left-0 top-0 z-50"
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      variants={navVariants}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-raleway text-lg md:text-xl font-bold group relative">
            <motion.span 
              className="text-white inline-flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </Link>
          
          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-purple" style={{ width: `${scrollProgress}%` }}></div>
          
          <div className="hidden md:flex items-center space-x-4">
            {mainNavItems.map((item) => {
              const active = isActive(item.id);
              
              return item.href.startsWith('#') ? (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative font-poppins font-medium hover:text-neon-purple transition-colors px-3 py-2 ${
                    active ? 'text-neon-purple' : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
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
                  className={`relative font-poppins font-medium hover:text-neon-purple transition-colors px-3 py-2 ${
                    active ? 'text-neon-purple' : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-purple"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Enhanced More dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="relative font-poppins font-medium text-white hover:text-neon-purple transition-colors px-3 py-2 flex items-center">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border border-white/10 backdrop-blur-xl text-white min-w-[280px] rounded-xl shadow-lg z-50">
                {moreDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.id} asChild className="focus:bg-neon-purple/20">
                    {item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        className="w-full cursor-pointer hover:bg-white/10 px-4 py-3 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.label}</span>
                            {item.isNew && (
                              <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                            )}
                            {item.isExternal && <ExternalLink className="ml-1 h-3 w-3" />}
                          </div>
                          {item.description && (
                            <span className="text-xs text-white/70 mt-1">{item.description}</span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="w-full cursor-pointer hover:bg-white/10 px-4 py-3 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.label}</span>
                            {item.isNew && (
                              <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                            )}
                            {item.isExternal && <ExternalLink className="ml-1 h-3 w-3" />}
                          </div>
                          {item.description && (
                            <span className="text-xs text-white/70 mt-1">{item.description}</span>
                          )}
                        </div>
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-neon-purple transition-colors p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.4 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
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
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden fixed left-0 right-0 top-[62px] bg-black/95 backdrop-blur-xl border-t border-white/10 z-50 max-h-[calc(100vh-62px)] overflow-y-auto"
          >
            <div className="flex flex-col p-4">
              {mainNavItems.map((item, index) => {
                const active = isActive(item.id);
                
                return item.href.startsWith('#') ? (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`font-poppins font-medium text-lg py-3 px-4 rounded-lg mb-1 ${
                      active 
                        ? 'text-neon-purple bg-white/5' 
                        : 'text-white hover:bg-white/5'
                    } transition-colors relative overflow-hidden`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    {active && (
                      <motion.span 
                        layoutId="activeMobile"
                        className="absolute left-0 top-1/2 h-1/2 w-1 bg-neon-purple rounded-full transform -translate-y-1/2"
                      />
                    )}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`font-poppins font-medium text-lg py-3 px-4 rounded-lg mb-1 ${
                        active 
                          ? 'text-neon-purple bg-white/5' 
                          : 'text-white hover:bg-white/5'
                      } transition-colors relative overflow-hidden block`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      {active && (
                        <motion.span 
                          layoutId="activeMobile"
                          className="absolute left-0 top-1/2 h-1/2 w-1 bg-neon-purple rounded-full transform -translate-y-1/2"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Enhanced More section header in mobile menu */}
              <motion.div 
                className="font-poppins font-medium text-lg text-neon-purple py-2 px-4 mt-2 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: mainNavItems.length * 0.05 }}
              >
                More Sections
              </motion.div>
              
              {/* Enhanced mobile More items with descriptions */}
              {moreDropdownItems.map((item, index) => {
                const active = isActive(item.id);
                
                return item.href.startsWith('#') ? (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`font-poppins mb-3 py-3 px-4 rounded-lg ${
                      active 
                        ? 'bg-white/5' 
                        : 'hover:bg-white/5'
                    } transition-colors relative overflow-hidden`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (mainNavItems.length + index) * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className={`font-medium text-lg ${active ? 'text-neon-purple' : 'text-white'}`}>
                          {item.label}
                        </span>
                        {item.isNew && (
                          <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                        )}
                      </div>
                      {item.description && (
                        <span className="text-sm text-white/70 mt-1">{item.description}</span>
                      )}
                    </div>
                    {active && (
                      <motion.span 
                        className="absolute left-0 top-1/2 h-1/2 w-1 bg-neon-purple rounded-full transform -translate-y-1/2"
                      />
                    )}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (mainNavItems.length + index) * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`font-poppins mb-3 py-3 px-4 rounded-lg ${
                        active 
                          ? 'bg-white/5' 
                          : 'hover:bg-white/5'
                      } transition-colors relative overflow-hidden block`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium text-lg ${active ? 'text-neon-purple' : 'text-white'}`}>
                            {item.label}
                          </span>
                          {item.isNew && (
                            <span className="ml-1 text-xs bg-yellow-500/80 text-black px-1.5 py-0.5 rounded-full">New!</span>
                          )}
                        </div>
                        {item.description && (
                          <span className="text-sm text-white/70 mt-1">{item.description}</span>
                        )}
                      </div>
                      {active && (
                        <motion.span 
                          className="absolute left-0 top-1/2 h-1/2 w-1 bg-neon-purple rounded-full transform -translate-y-1/2"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Enhanced Social links in mobile menu */}
              <motion.div 
                className="border-t border-white/10 mt-4 pt-4 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (mainNavItems.length + moreDropdownItems.length) * 0.05 }}
              >
                <div className="text-center text-sm text-white/70 mb-2">Get in touch</div>
                <div className="flex gap-4 justify-center">
                  <motion.a 
                    href="#"
                    className="bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={20} />
                  </motion.a>
                  <motion.a 
                    href="mailto:saikoushik42@gmail.com"
                    className="bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-3 rounded-full transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                    <span className="text-sm">saikoushik42@gmail.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
