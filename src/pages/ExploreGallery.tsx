
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ZoomIn, MoveHorizontal, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import { Link } from 'react-router-dom';

const ExploreGallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'immersive'>('grid');

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
          subtitle="Visual fragments across space and time - moments captured in the continuum"
          style="futuristic"
          highlightText="As Einstein would see it"
        />
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 flex items-center gap-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
          >
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-current rounded-sm"></div>
              <div className="w-2 h-2 bg-current rounded-sm"></div>
              <div className="w-2 h-2 bg-current rounded-sm"></div>
              <div className="w-2 h-2 bg-current rounded-sm"></div>
            </div>
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
        </div>

        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {allImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => openFullscreen(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
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
                className="relative break-inside-avoid overflow-hidden rounded-lg group cursor-pointer mb-4"
                onClick={() => openFullscreen(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
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
                transition={{ duration: 0.7, delay: index * 0.08, type: "spring" }}
                className="relative overflow-hidden will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  onClick={() => openFullscreen(img.src)}
                  className="aspect-[3/4] w-full cursor-pointer rounded-xl"
                >
                  <img 
                    src={img.src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover rounded-xl shadow-lg shadow-purple-900/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                        <ZoomIn size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {activeImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ExploreGallery;
