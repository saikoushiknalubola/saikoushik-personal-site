
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import FuturisticButton from './FuturisticButton';
import { Link } from 'react-router-dom';

interface EnhancedGalleryProps {
  images: {
    src: string;
    description: string;
  }[];
  className?: string;
}

const EnhancedGallery: React.FC<EnhancedGalleryProps> = ({ images, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  useEffect(() => {
    // Preload images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoaded(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, [images]);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setIsFullscreen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentImage = images[activeIndex];

  return (
    <div className={`${className} relative overflow-hidden`}>
      <div className="rounded-2xl overflow-hidden glass-card bg-black/30 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
        <div className="relative aspect-video overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {loaded[activeIndex] ? (
                <img
                  src={currentImage.src}
                  alt={currentImage.description}
                  className="w-full h-full object-contain"
                  onClick={() => setIsFullscreen(true)}
                />
              ) : (
                <div className="w-full h-full bg-black/40 animate-pulse flex items-center justify-center">
                  <motion.div 
                    className="loading-spinner" 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={24} className="text-neon-purple" />
                  </motion.div>
                </div>
              )}
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white font-medium text-center line-clamp-2 font-outfit">
                  {currentImage.description}
                </p>
                <div className="text-center mt-1">
                  <span className="text-white/60 text-sm font-space">by Saikoushik Nalubola</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="p-4 flex justify-between items-center bg-black/40">
          <div className="flex gap-2">
            {Array.from({ length: Math.min(5, images.length) }).map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === activeIndex % 5 ? 'bg-neon-purple' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(idx + Math.floor(activeIndex / 5) * 5)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          <Link to="/gallery">
            <FuturisticButton variant="ghost" size="sm">
              Explore Full Gallery
            </FuturisticButton>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              className="relative max-w-7xl max-h-screen px-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.description}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-white text-lg font-medium font-outfit">{currentImage.description}</p>
                <p className="text-white/70 text-sm font-space mt-1">Curated by Saikoushik Nalubola</p>
              </motion.div>

              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={24} />
              </button>

              <button
                className="absolute top-4 right-4 bg-neon-purple/70 text-white p-2 rounded-full hover:bg-neon-purple transition-colors"
                onClick={() => setIsFullscreen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedGallery;
