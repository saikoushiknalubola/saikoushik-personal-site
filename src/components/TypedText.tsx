
import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const TypedText: React.FC<TypedTextProps> = ({ 
  texts, 
  speed = 100,
  delay = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setIsDeleting(true);
          clearTimeout(timeout);
          setTimeout(() => {
            // Start deleting after delay
          }, delay);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay]);

  return (
    <span className="font-space text-neon-purple">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypedText;
