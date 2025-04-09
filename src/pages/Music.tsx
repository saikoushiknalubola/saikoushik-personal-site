
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { useDeviceSize } from '@/hooks/use-mobile';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music as MusicIcon } from 'lucide-react';

const Music = () => {
  const { isTabletOrSmaller } = useDeviceSize();
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playlists = [
    {
      id: 'creative',
      title: 'Creative Flow',
      description: 'Music that fuels the creative process',
      coverImage: '/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png',
      color: 'from-purple-600/30 to-blue-600/30'
    },
    {
      id: 'ambient',
      title: 'Ambient Exploration',
      description: 'Atmospheric sounds for deep thinking',
      coverImage: '/lovable-uploads/54de61e9-b777-47cb-bb61-8a3ce48c4045.png',
      color: 'from-cyan-600/30 to-teal-600/30'
    },
    {
      id: 'focus',
      title: 'Deep Focus',
      description: 'Minimal music for maximum concentration',
      coverImage: '/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png',
      color: 'from-blue-600/30 to-indigo-600/30'
    }
  ];
  
  const tracks = [
    { title: 'Neural Symphony', artist: 'Digital Dreamers', duration: '4:32' },
    { title: 'Quantum Vibrations', artist: 'Electric Pulse', duration: '3:45' },
    { title: 'Algorithmic Harmony', artist: 'Code Composer', duration: '5:16' },
    { title: 'Synthetic Emotion', artist: 'Artificial Heart', duration: '3:58' },
    { title: 'Binary Sunset', artist: 'Digital Horizon', duration: '4:27' },
    { title: 'Silicon Dreams', artist: 'Electronic Mind', duration: '3:33' }
  ];
  
  const togglePlay = (index: number) => {
    if (activeTrack === index) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(index);
      setIsPlaying(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection="music" />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        <SectionHeader
          title="Musical Universe"
          subtitle="Audio Explorations and Inspirations"
          align="center"
          glowColor="cyan"
        />
        
        <div className="mt-12 max-w-5xl mx-auto">
          <motion.p 
            className="text-lg text-white/80 mb-12 font-outfit text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Music is an integral part of my creative process and technological journey. 
            These carefully curated playlists represent the sonic landscapes that inspire different aspects of my work.
          </motion.p>
          
          <div className={`grid ${isTabletOrSmaller ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-8'} mb-16`}>
            {playlists.map((playlist) => (
              <motion.div
                key={playlist.id}
                className={`rounded-xl overflow-hidden bg-gradient-to-br ${playlist.color} backdrop-blur-md border border-white/10 hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * playlists.indexOf(playlist) }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={playlist.coverImage} 
                    alt={playlist.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-raleway font-bold text-white">{playlist.title}</h3>
                      <p className="text-white/80 text-sm">{playlist.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-white/70 text-sm">6 tracks</span>
                  <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <Play size={18} className="text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="glass-card p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-raleway font-bold mb-6 text-future-primary flex items-center">
              <MusicIcon className="mr-2" /> Featured Tracks
            </h2>
            
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className={`p-3 rounded-lg flex items-center justify-between ${activeTrack === index ? 'bg-white/10' : 'hover:bg-white/5'} transition-colors`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="flex items-center">
                    <button 
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full mr-4 transition-colors"
                      onClick={() => togglePlay(index)}
                    >
                      {activeTrack === index && isPlaying ? (
                        <Pause size={16} className="text-white" />
                      ) : (
                        <Play size={16} className="text-white" />
                      )}
                    </button>
                    <div>
                      <h3 className="font-medium text-white">{track.title}</h3>
                      <p className="text-white/60 text-sm">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-white/60 text-sm">{track.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {activeTrack !== null && (
            <motion.div 
              className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={playlists[0].coverImage} 
                    alt={tracks[activeTrack].title} 
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-white">{tracks[activeTrack].title}</h4>
                    <p className="text-white/60 text-sm">{tracks[activeTrack].artist}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-3 ${isTabletOrSmaller ? 'hidden' : 'flex'}`}>
                  <button className="text-white/70 hover:text-white transition-colors">
                    <SkipBack size={20} />
                  </button>
                  <button 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause size={20} className="text-white" />
                    ) : (
                      <Play size={20} className="text-white" />
                    )}
                  </button>
                  <button className="text-white/70 hover:text-white transition-colors">
                    <SkipForward size={20} />
                  </button>
                </div>
                
                <div className={`flex items-center ${isTabletOrSmaller ? 'hidden' : 'flex'}`}>
                  <Volume2 size={20} className="text-white/70 mr-2" />
                  <div className="w-24 h-1 bg-white/20 rounded-full">
                    <div className="w-2/3 h-full bg-future-primary rounded-full"></div>
                  </div>
                </div>
                
                {isTabletOrSmaller && (
                  <button 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause size={20} className="text-white" />
                    ) : (
                      <Play size={20} className="text-white" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Music;
