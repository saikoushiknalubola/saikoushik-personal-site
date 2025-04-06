
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  emoji?: string;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-neon-purple',
  emoji,
  className
}) => {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">
          {emoji && <span className="mr-2">{emoji}</span>}
          {name}
        </span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full", color)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
