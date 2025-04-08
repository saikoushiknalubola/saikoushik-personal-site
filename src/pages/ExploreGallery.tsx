
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ZoomIn, MoveHorizontal, Sparkles, Grid, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import ImmersiveImageCard from '@/components/ImmersiveImageCard';
import { Link } from 'react-router-dom';

const ExploreGallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'immersive' | 'vortex'>('grid');

  const allImages = [
    { src: "/lovable-uploads/43580418-0baf-4983-b05b-1337d21b60cd.png" },
    { src: "/lovable-uploads/e6ce2159-d844-4def-b3c7-39aa47e8de0b.png" },
    { src: "/lovable-uploads/6bea4682-b2ac-4a5d-ab80-dc7f3da6449e.png" },
    { src: "/lovable-uploads/5693851a-14d4-45f8-9922-94d7790dd370.png" },
    { src: "/lovable-uploads/f0143cf4-be0c-4ab7-a1f4-5d1dc1f2a130.png" },
    { src: "/lovable-uploads/7ea5b8d5-7a81-44f2-8b07-12e54b50a705.png" },
    { src: "/lovable-uploads/d6774541-916b-41b5-9fef-e3183da18750.png" },
    { src: "/lovable-uploads/49cc4f99-9030-4bef-8ac0-00597408b6d2.png" },
    { src: "/lovable-uploads/c82f9bea-ce9a-44ad-b971-f2d53ffc72f7.png" },
    { src: "/lovable-uploads/c55f370a-7ade-4c7c-af22-98c4d8176529.png" },
    { src: "/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png" },
    { src: "/lovable-uploads/14b4370d-d103-473a-a273-98168020f91b.png" },
    { src: "/lovable-uploads/68be4ea6-9c69-4d1a-8281-dd4a0cf519f2.png" },
    { src: "/lovable-uploads/0a34d2bf-6f36-42f9-8f1f-99d687f9fe35.png" },
    { src: "/lovable-uploads/4fc90ebc-922f-45ed-910b-664c0cae51e3.png" },
    { src: "/lovable-uploads/55ea3f25-e942-4216-8ebf-930555d21681.png" },
    { src: "/lovable-uploads/6ab8962f-cb9b-4c09-98d7-55e307c2a186.png" },
    { src: "/lovable-uploads/859aa36d-8920-44fe-a461-d2d9a0d48568.png" },
    { src: "/lovable-uploads/d00b1c86-928d-4dfb-9985-e352dcc01e95.png" },
    { src: "/lovable-uploads/333c6b72-4298-49dc-acb9-f578b4b06784.png" },
    { src: "/lovable-uploads/ca3e6d73-40c3-4c1d-b6b9-d23896c17c29.png" },
    { src: "/lovable-uploads/da853ef4-3ec6-4609-a838-faa972d455e7.png" },
    { src: "/lovable-uploads/fe1bcb19-a6fc-49ad-94ac-da69273261a7.png" },
    { src: "/lovable-uploads/54de61e9-b777-47cb-bb61-8a3ce48c4045.png" },
    { src: "/lovable-uploads/931d5d56-b50c-44d2-b01e-6416eeb2bb98.png" },
    { src: "/lovable-uploads/20bf0f10-2783-44da-8f19-f2f365af1cb7.png" },
    { src: "/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png" },
    { src: "/lovable-uploads/5b6abb0a-b304-45e9-bb26-436dcdb02785.png" },
    { src: "/lovable-uploads/9a6e6906-e56d-43ed-86e1-598f0bbeef3d.png" }
  ];

  const openFullscreen = (src: string) => {
    setActiveImage(src);
  };

  const closeFullscreen = () => {
    setActiveImage(null);
  };

  const getRandomDelay = () => Math.random() * 0.5;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
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
          subtitle="Visual fragments across space and time"
          style="futuristic"
          highlightText="Transcending visual boundaries"
        />
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
          >
            <Grid size={16} />
            Grid View
          </button>
          
          <button 
            onClick={() => setViewMode('masonry')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'masonry' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
          >
            <MoveHorizontal size={16} />
            Masonry View
          </button>
          
          <button 
            onClick={() => setViewMode('immersive')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'immersive' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
          >
            <Sparkles size={16} />
            Immersive View
          </button>
          
          <button 
            onClick={() => setViewMode('vortex')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'vortex' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 12 4 4"/><path d="M12 12v8"/></svg>
            Quantum Vortex
          </button>
        </div>

        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {allImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-square"
              >
                <ImmersiveImageCard 
                  src={img.src} 
                  alt={`Quantum dimension ${index + 1}`}
                  onClick={() => openFullscreen(img.src)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'masonry' && (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative break-inside-avoid overflow-hidden rounded-lg mb-4"
              >
                <ImmersiveImageCard 
                  src={img.src} 
                  alt={`Quantum dimension ${index + 1}`}
                  onClick={() => openFullscreen(img.src)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'immersive' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
            {allImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, rotateY: -20, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.08, 
                  type: "spring" 
                }}
                className="relative overflow-hidden will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="aspect-[3/4] w-full">
                  <ImmersiveImageCard 
                    src={img.src} 
                    alt={`Quantum dimension ${index + 1}`}
                    onClick={() => openFullscreen(img.src)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'vortex' && (
          <div className="relative h-[800px] overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 blur-xl animate-pulse"></div>
            </div>
            
            {allImages.map((img, index) => {
              const radius = 250 + (index % 3) * 50;
              const angle = (index * (2 * Math.PI) / (allImages.length / 3)) + (index * 0.1);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const z = -300 + (index % 7) * 100;
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-32 h-32 rounded-lg overflow-hidden shadow-lg"
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
                    duration: 2,
                    delay: index * 0.05,
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
                    alt={`Quantum dimension ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

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
              className="max-w-full max-h-[90vh] rounded-lg object-contain mx-auto"
            />
            <button 
              onClick={closeFullscreen}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ExploreGallery;
