
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypedTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
  cursorType?: 'block' | 'bar' | 'underscore' | 'none';
  effectStyle?: 'glitch' | 'fade' | 'slide' | 'none';
}

const TypedText: React.FC<TypedTextProps> = ({ 
  texts, 
  speed = 80,
  deleteSpeed = 50,
  delay = 2000,
  loop = true,
  className = '',
  cursorClassName = '',
  cursorType = 'bar',
  effectStyle = 'none'
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const letterRef = useRef<HTMLSpanElement>(null);
  
  // Cursor styles
  const cursorStyles = {
    bar: 'w-0.5 h-5 bg-neon-purple animate-pulse inline-block ml-0.5',
    block: 'w-2.5 h-5 bg-neon-purple/70 animate-pulse inline-block ml-0.5',
    underscore: 'w-2.5 h-0.5 bg-neon-purple/90 animate-pulse inline-block align-bottom ml-0.5',
    none: 'hidden'
  };

  // Effect for typing animation
  useEffect(() => {
    if (isPaused) return;

    const fullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText.length === fullText.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            if (loop || currentTextIndex < texts.length - 1) {
              setIsDeleting(true);
            }
          }, delay);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delay, loop, isPaused]);

  // Handle effect styles for text
  const getCharacterAnimationProps = (index: number) => {
    switch (effectStyle) {
      case 'glitch':
        return {
          initial: { opacity: 0, y: -5 },
          animate: { 
            opacity: 1, 
            y: 0,
            filter: [
              'blur(0px)',
              'blur(1px)',
              'blur(0px)'
            ]
          },
          transition: { 
            duration: 0.1,
            ease: "easeOut",
            delay: index * 0.03
          }
        };
      
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3, delay: index * 0.03 }
        };
        
      case 'slide':
        return {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { 
            type: "spring", 
            stiffness: 350, 
            damping: 30,
            delay: index * 0.03
          }
        };
        
      default:
        return {};
    }
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {effectStyle !== 'none' ? (
        <div>
          {currentText.split('').map((char, index) => (
            <motion.span
              key={`${index}-${char}`}
              ref={index === currentText.length - 1 ? letterRef : null}
              {...getCharacterAnimationProps(index)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ) : (
        <span>{currentText}</span>
      )}
      
      <span 
        className={`${cursorStyles[cursorType]} ${cursorClassName}`}
      ></span>
    </div>
  );
};

export default TypedText;
