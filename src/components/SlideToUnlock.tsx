
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SlideToUnlockProps {
  onUnlock: () => void;
  text?: string;
  width?: string;
}

const SlideToUnlock: React.FC<SlideToUnlockProps> = ({ 
  onUnlock, 
  text = "slide to unlock", 
  width = "300px" 
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Get dimensions for calculations
  const [sliderWidth, setSliderWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  
  // Calculate progress based on x position
  const progress = useTransform(
    x,
    [0, sliderWidth - buttonWidth],
    [0, 100]
  );
  
  // Calculate opacity for shine effect
  const shineOpacity = useTransform(
    x,
    [0, sliderWidth - buttonWidth],
    [0.1, 0.5]
  );
  
  // Calculate gradient stop position
  const gradientPosition = useTransform(
    progress,
    [0, 100],
    ["0%", "100%"]
  );
  
  // Text opacity that fades out as slider moves
  const textOpacity = useTransform(
    progress,
    [0, 50],
    [0.8, 0]
  );
  
  const handleDragEnd = () => {
    // If dragged more than 90% of the way, consider it unlocked
    if (progress.get() > 90) {
      setIsUnlocked(true);
      setTimeout(() => {
        onUnlock();
      }, 500);
    } else {
      // Reset to start position
      x.set(0);
    }
  };
  
  // Get element dimensions after render
  React.useEffect(() => {
    if (constraintsRef.current) {
      setSliderWidth(constraintsRef.current.offsetWidth);
      setButtonWidth(60); // Approximation of button width
    }
  }, []);
  
  return (
    <div 
      className="flex flex-col items-center justify-center py-4"
      style={{ width }}
    >
      <motion.div 
        ref={constraintsRef}
        className="w-full h-14 rounded-full border border-white/10 bg-black/20 backdrop-blur-lg relative overflow-hidden"
        animate={{
          boxShadow: isUnlocked 
            ? ["0 0 0px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0.2)"] 
            : "0 0 15px rgba(139, 92, 246, 0.15)"
        }}
        transition={{ 
          duration: 2, 
          repeat: isUnlocked ? 0 : Infinity 
        }}
      >
        {/* Text label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.p 
            className="text-white/70 font-sf uppercase tracking-widest text-sm"
            style={{ opacity: textOpacity }}
          >
            {text}
          </motion.p>
        </div>
        
        {/* Gradient background that fills based on progress */}
        <motion.div 
          className="absolute h-full top-0 left-0 bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: gradientPosition }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
          style={{ 
            left: useTransform(x, v => v - 80 + 'px'),
            opacity: shineOpacity 
          }}
        />
        
        {/* Draggable button */}
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="absolute top-1 left-1 bottom-1 w-14 bg-white/90 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
          animate={{
            scale: isUnlocked ? 30 : 1,
            opacity: isUnlocked ? 0 : 1,
          }}
          transition={{
            scale: { duration: 0.5 },
            opacity: { duration: 0.5, delay: 0.2 }
          }}
        >
          <ArrowRight className="text-black/80 w-5 h-5" />
        </motion.div>
      </motion.div>
      
      {/* Success message that appears when unlocked */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 font-sf text-sm text-center"
          >
            <span className="text-green-400">Unlocked successfully</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideToUnlock;
