
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
  
  // Create the glow effect
  const glowElement = document.createElement('div');
  glowElement.classList.add('magic-apple-glow');
  element.appendChild(glowElement);
  
  // Apply the bounce animation
  element.style.animation = 'bounce 2s ease-in-out infinite';
  
  return () => {
    // Cleanup function
    element.classList.remove('magic-apple-animation');
    if (glowElement && element.contains(glowElement)) {
      element.removeChild(glowElement);
    }
    element.style.animation = '';
  };
};

// Add keyframes for magic apple animations for direct CSS usage
export const magicAppleKeyframes = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2);
    }
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
