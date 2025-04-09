import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ZoomIn, MoveHorizontal, Sparkles, Grid, X, Atom, Zap, Wand2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import ImmersiveImageCard from '@/components/ImmersiveImageCard';
import { Link } from 'react-router-dom';
import EnhancedGallery from '@/components/EnhancedGallery';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface GalleryImage {
  src: string;
  title: string;
}

const ExploreGallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'immersive' | 'vortex' | 'carousel'>('grid');
  const [rotationFactor, setRotationFactor] = useState(0);
  const [curated, setCurated] = useState(false);

  const bestImages: GalleryImage[] = [
    { src: "/lovable-uploads/49cc4f99-9030-4bef-8ac0-00597408b6d2.png", title: "Quantum Dimension Alpha" },
    { src: "/lovable-uploads/c82f9bea-ce9a-44ad-b971-f2d53ffc72f7.png", title: "Neural Network Vision" },
    { src: "/lovable-uploads/f0143cf4-be0c-4ab7-a1f4-5d1dc1f2a130.png", title: "Cosmic Entropy" },
    { src: "/lovable-uploads/7ea5b8d5-7a81-44f2-8b07-12e54b50a705.png", title: "Digital Consciousness" },
    { src: "/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png", title: "Temporal Distortion" },
    { src: "/lovable-uploads/0a34d2bf-6f36-42f9-8f1f-99d687f9fe35.png", title: "Quantum Nexus" },
    { src: "/lovable-uploads/fe1bcb19-a6fc-49ad-94ac-da69273261a7.png", title: "Parallel Reality" },
    { src: "/lovable-uploads/6bea4682-b2ac-4a5d-ab80-dc7f3da6449e.png", title: "Interdimensional Gateway" },
    { src: "/lovable-uploads/14b4370d-d103-473a-a273-98168020f91b.png", title: "Cybernetic Dreamscape" },
    { src: "/lovable-uploads/5693851a-14d4-45f8-9922-94d7790dd370.png", title: "Transhuman Evolution" },
    { src: "/lovable-uploads/333c6b72-4298-49dc-acb9-f578b4b06784.png", title: "Digital Renaissance" },
    { src: "/lovable-uploads/859aa36d-8920-44fe-a461-d2d9a0d48568.png", title: "Synthetic Consciousness" }
  ];

  const allImages: GalleryImage[] = [
    { src: "/lovable-uploads/43580418-0baf-4983-b05b-1337d21b60cd.png", title: "Quantum Realm #1" },
    { src: "/lovable-uploads/e6ce2159-d844-4def-b3c7-39aa47e8de0b.png", title: "Quantum Realm #2" },
    { src: "/lovable-uploads/6bea4682-b2ac-4a5d-ab80-dc7f3da6449e.png", title: "Interdimensional Gateway" },
    { src: "/lovable-uploads/5693851a-14d4-45f8-9922-94d7790dd370.png", title: "Transhuman Evolution" },
    { src: "/lovable-uploads/f0143cf4-be0c-4ab7-a1f4-5d1dc1f2a130.png", title: "Cosmic Entropy" },
    { src: "/lovable-uploads/7ea5b8d5-7a81-44f2-8b07-12e54b50a705.png", title: "Digital Consciousness" },
    { src: "/lovable-uploads/d6774541-916b-41b5-9fef-e3183da18750.png", title: "Quantum Realm #3" },
    { src: "/lovable-uploads/49cc4f99-9030-4bef-8ac0-00597408b6d2.png", title: "Quantum Dimension Alpha" },
    { src: "/lovable-uploads/c82f9bea-ce9a-44ad-b971-f2d53ffc72f7.png", title: "Neural Network Vision" },
    { src: "/lovable-uploads/c55f370a-7ade-4c7c-af22-98c4d8176529.png", title: "Quantum Realm #4" },
    { src: "/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png", title: "Temporal Distortion" },
    { src: "/lovable-uploads/14b4370d-d103-473a-a273-98168020f91b.png", title: "Cybernetic Dreamscape" },
    { src: "/lovable-uploads/68be4ea6-9c69-4d1a-8281-dd4a0cf519f2.png", title: "Quantum Realm #5" },
    { src: "/lovable-uploads/0a34d2bf-6f36-42f9-8f1f-99d687f9fe35.png", title: "Quantum Nexus" },
    { src: "/lovable-uploads/4fc90ebc-922f-45ed-910b-664c0cae51e3.png", title: "Quantum Realm #6" },
    { src: "/lovable-uploads/55ea3f25-e942-4216-8ebf-930555d21681.png", title: "Quantum Realm #7" },
    { src: "/lovable-uploads/6ab8962f-cb9b-4c09-98d7-55e307c2a186.png", title: "Quantum Realm #8" },
    { src: "/lovable-uploads/859aa36d-8920-44fe-a461-d2d9a0d48568.png", title: "Synthetic Consciousness" },
    { src: "/lovable-uploads/d00b1c86-928d-4dfb-9985-e352dcc01e95.png", title: "Quantum Realm #9" },
    { src: "/lovable-uploads/333c6b72-4298-49dc-acb9-f578b4b06784.png", title: "Digital Renaissance" },
    { src: "/lovable-uploads/ca3e6d73-40c3-4c1d-b6b9-d23896c17c29.png", title: "Quantum Realm #10" },
    { src: "/lovable-uploads/da853ef4-3ec6-4609-a838-faa972d455e7.png", title: "Quantum Realm #11" },
    { src: "/lovable-uploads/fe1bcb19-a6fc-49ad-94ac-da69273261a7.png", title: "Parallel Reality" },
    { src: "/lovable-uploads/54de61e9-b777-47cb-bb61-8a3ce48c4045.png", title: "Quantum Realm #12" },
    { src: "/lovable-uploads/931d5d56-b50c-44d2-b01e-6416eeb2bb98.png", title: "Quantum Realm #13" },
    { src: "/lovable-uploads/20bf0f10-2783-44da-8f19-f2f365af1cb7.png", title: "Quantum Realm #14" },
    { src: "/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png", title: "Quantum Realm #15" },
    { src: "/lovable-uploads/5b6abb0a-b304-45e9-bb26-436dcdb02785.png", title: "Quantum Realm #16" },
    { src: "/lovable-uploads/9a6e6906-e56d-43ed-86e1-598f0bbeef3d.png", title: "Quantum Realm #17" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationFactor(prev => (prev + 0.1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const displayImages = curated ? bestImages : allImages;

  const openFullscreen = (src: string) => {
    setActiveImage(src);
  };

  const closeFullscreen = () => {
    setActiveImage(null);
  };

  const getRandomDelay = () => Math.random() * 0.5;

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-purple opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-purple/20 to-future-primary/5 blur-3xl"
          style={{ top: '20%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-future-secondary/10 to-future-accent/5 blur-3xl"
          style={{ top: '50%', right: '5%' }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navigation />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <FuturisticButton variant="ghost" size="sm">
              <ArrowLeft className="mr-2" size={16} />
              Back to Reality
            </FuturisticButton>
          </Link>
        </div>
        
        <SectionHeader 
          title="Quantum Dimensions Gallery" 
          subtitle="Visual fragments across space and time curated by Saikoushik Nalubola"
          style="quantum"
          highlightText="Transcending visual boundaries"
          showSparkles={true}
          authorName={true}
        />
        
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <motion.button 
            onClick={() => {setCurated(!curated)}}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all border-2 ${curated ? 'border-neon-purple bg-neon-purple/20 text-white' : 'border-white/20 bg-white/5 text-white/70 hover:bg-white/10'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={16} className="animate-pulse" />
            {curated ? "Viewing Curated Collection" : "View Curated Collection"}
          </motion.button>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 bg-black/50 p-4 rounded-xl backdrop-blur-sm border border-white/10">
          <motion.button 
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Grid size={16} />
            Grid View
          </motion.button>
          
          <motion.button 
            onClick={() => setViewMode('masonry')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'masonry' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MoveHorizontal size={16} />
            Masonry View
          </motion.button>
          
          <motion.button 
            onClick={() => setViewMode('immersive')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'immersive' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={16} />
            Immersive View
          </motion.button>
          
          <motion.button 
            onClick={() => setViewMode('vortex')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'vortex' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Atom size={16} className={viewMode === 'vortex' ? 'animate-rotate-slow' : ''} />
            Quantum Vortex
          </motion.button>
          
          <motion.button 
            onClick={() => setViewMode('carousel')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'carousel' ? 'bg-gradient-to-r from-neon-purple to-future-primary text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Wand2 size={16} className={viewMode === 'carousel' ? 'animate-pulse' : ''} />
            Magic Carousel
          </motion.button>
        </div>

        {viewMode === 'grid' && (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-square group"
              >
                <ImmersiveImageCard 
                  src={img.src} 
                  alt={img.title}
                  onClick={() => openFullscreen(img.src)}
                />
                {curated && (
                  <motion.div 
                    className="mt-2 text-center font-space text-white/80 text-sm bg-black/50 backdrop-blur-sm rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {img.title}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {viewMode === 'masonry' && (
          <motion.div 
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative break-inside-avoid overflow-hidden rounded-lg mb-4 group"
              >
                <ImmersiveImageCard 
                  src={img.src} 
                  alt={img.title}
                  onClick={() => openFullscreen(img.src)}
                />
                {curated && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 text-center font-space text-white bg-black/70 backdrop-blur-sm py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {img.title}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {viewMode === 'immersive' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, rotateY: -20, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.08, 
                  type: "spring" 
                }}
                className="relative overflow-hidden will-change-transform group"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ 
                  z: 30, 
                  rotateY: 10, 
                  transition: { duration: 0.4 } 
                }}
              >
                <div className="aspect-[3/4] w-full">
                  <ImmersiveImageCard 
                    src={img.src} 
                    alt={img.title}
                    onClick={() => openFullscreen(img.src)}
                  />
                </div>
                {curated && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-10 pb-4 px-4 transform-gpu opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="text-white font-outfit text-center text-lg">{img.title}</h3>
                    <div className="flex justify-center mt-2">
                      <span className="text-xs text-white/60 font-space">by Saikoushik Nalubola</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {viewMode === 'vortex' && (
          <div className="relative h-[800px] overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 blur-xl animate-pulse"></div>
            </div>
            
            {displayImages.map((img, index) => {
              const radius = 250 + (index % 3) * 50;
              const angle = (index * (2 * Math.PI) / (displayImages.length / 3)) + (index * 0.1) + rotationFactor;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const z = -300 + (index % 7) * 100;
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-40 h-40 rounded-lg overflow-hidden shadow-lg"
                  initial={{ 
                    x: 0,
                    y: 0,
                    z: -1000,
                    opacity: 0,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                  }}
                  animate={{ 
                    x: x,
                    y: y,
                    z: z,
                    opacity: 1,
                    rotateX: index % 2 === 0 ? 10 : -10,
                    rotateY: index % 3 === 0 ? 15 : -15,
                    rotateZ: index % 4 === 0 ? 5 : -5
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translate(-50%, -50%) translateZ(${z}px)`
                  }}
                  whileHover={{
                    scale: 1.2,
                    z: z + 100,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => openFullscreen(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  {curated && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm py-1 px-2">
                      <p className="text-white text-xs font-outfit text-center truncate">{img.title}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
        
        {viewMode === 'carousel' && (
          <div className="px-4 py-10 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {displayImages.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      className="p-1 h-full"
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div className="overflow-hidden rounded-xl h-full border border-white/10 shadow-lg bg-black/40">
                        <div className="relative aspect-[3/4] cursor-pointer group" onClick={() => openFullscreen(img.src)}>
                          <img 
                            src={img.src} 
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {curated && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                              <h3 className="text-white font-outfit text-lg">
                                {img.title}
                              </h3>
                              <p className="text-white/70 text-sm font-space">by Saikoushik Nalubola</p>
                            </div>
                          )}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-future-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <motion.div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            <ZoomIn className="text-white" size={24} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex justify-center gap-4">
                <CarouselPrevious className="relative static" />
                <CarouselNext className="relative static" />
              </div>
            </Carousel>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeFullscreen}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage} 
                alt="Fullscreen view" 
                className="max-w-full max-h-[90vh] rounded-lg object-contain mx-auto shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md py-3 px-4 text-center rounded-b-lg">
                <p className="text-white/80 text-sm">Curated by Saikoushik Nalubola</p>
              </div>
              <button 
                onClick={closeFullscreen}
                className="absolute -top-4 -right-4 bg-neon-purple/70 backdrop-blur-md p-2 rounded-full hover:bg-neon-purple transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreGallery;
