
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Origin Story', href: '/#about' },
    { name: 'Manifesto', href: '/manifesto' },
    { name: 'Projects', href: '/projects' },
    { name: 'Writings', href: '/soul' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl py-2 shadow-lg" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-space text-xl md:text-2xl font-bold relative group">
          <span className="text-white group-hover:text-neon-purple transition-colors duration-300">Saikoushik</span>
          <span className="text-neon-purple">Nalubola</span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden pt-20"
        )}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xl font-medium text-white hover:text-neon-purple transition-colors relative group"
              onClick={handleNavClick}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
