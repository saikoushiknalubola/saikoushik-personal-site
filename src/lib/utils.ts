
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utility for magic apple effect
export const applyMagicAppleAnimation = (element: HTMLElement | null) => {
  if (!element) return;
  
  // Add the necessary animation classes
  element.classList.add('magic-apple-animation');
  element.classList.add('animate-apple-bounce');
  
  // Create the glow effect
  const glowElement = document.createElement('div');
  glowElement.classList.add('magic-apple-glow', 'animate-apple-breathing');
  element.appendChild(glowElement);
  
  return () => {
    // Cleanup function
    element.classList.remove('magic-apple-animation', 'animate-apple-bounce');
    if (glowElement && element.contains(glowElement)) {
      element.removeChild(glowElement);
    }
  };
};

// Add keyframes for magic apple animations for direct CSS usage
export const magicAppleKeyframes = `
  @keyframes apple-bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  @keyframes apple-glow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
  
  @keyframes apple-pulse {
    0%, 100% {
      box-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 25px rgba(139, 92, 246, 0.7);
    }
  }
  
  .magic-apple-container {
    position: relative;
    display: inline-block;
    padding: 10px;
    z-index: 10;
  }
  
  .magic-apple-animation {
    position: relative;
    animation: apple-bounce 2s ease-in-out infinite;
  }
  
  .magic-apple-glow {
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%);
    animation: apple-glow 3s ease-in-out infinite;
    z-index: -1;
  }
  
  .animate-apple-breathing {
    animation: apple-pulse 3s ease-in-out infinite;
  }
  
  .animate-apple-bounce {
    animation: apple-bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }
  
  .einstein-quote {
    position: relative;
    padding: 1rem 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Playfair Display', serif;
  }
  
  .einstein-quote:before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    left: -1.5rem;
    top: -1rem;
    color: rgba(139, 92, 246, 0.4);
    font-family: 'Playfair Display', serif;
  }
  
  .einstein-quote-text {
    font-size: 1.2rem;
    line-height: 1.7;
    font-style: italic;
    color: rgba(255, 255, 255, 0.9);
  }
`;

// CSS class string for magic apple glow
export const magicAppleGlowClass = `
  relative overflow-visible
  before:content-[""] before:absolute before:-inset-[15%]
  before:bg-gradient-to-r before:from-purple-500/30 before:to-indigo-500/30
  before:rounded-full before:blur-xl before:animate-pulse
  hover:before:animate-ping
`;
