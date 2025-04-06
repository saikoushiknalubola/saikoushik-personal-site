
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  emoji: string;
  className?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  emoji,
  className,
  tags = []
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:-translate-y-1",
        className
      )}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-secondary text-xs font-medium py-1 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
