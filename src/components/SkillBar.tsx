
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  emoji?: string;
  className?: string;
  style?: 'default' | 'neon' | 'split' | 'futuristic' | 'dostoevsky' | 'apple';
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-neon-purple',
  emoji,
  className,
  style = 'default'
}) => {
  const getStyleClasses = () => {
    switch(style) {
      case 'neon':
        return "shadow-[0_0_10px_rgba(139,92,246,0.6)]";
      case 'split':
        return "bg-gradient-to-r from-neon-purple to-neon-cyan";
      case 'futuristic':
        return "bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 relative after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-20 after:animate-pulse";
      case 'dostoevsky':
        return "bg-gradient-to-r from-red-700 to-red-900";
      case 'apple':
        return "bg-gradient-to-r from-blue-400 to-blue-600 rounded-full backdrop-blur-sm";
      default:
        return color;
    }
  };
  
  return (
    <div className={cn("mb-6 transform transition-all duration-300 hover:scale-[1.01]", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">
          {emoji && <span className="mr-2">{emoji}</span>}
          {name}
        </span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className={cn("h-full rounded-full transition-all duration-1000 relative", getStyleClasses())}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
