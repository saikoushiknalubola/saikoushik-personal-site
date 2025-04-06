
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  type?: 'work' | 'education' | 'achievement';
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
  className?: string;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ 
  items,
  className
}) => {
  const getTypeColor = (type: TimelineItem['type'] = 'work') => {
    switch(type) {
      case 'education':
        return "bg-blue-500";
      case 'achievement':
        return "bg-green-500";
      default:
        return "bg-neon-purple";
    }
  };

  return (
    <div className={cn("relative py-8", className)}>
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted transform md:-translate-x-1/2"></div>
      
      {items.map((item, index) => (
        <div 
          key={index} 
          className={cn(
            "relative flex flex-col md:flex-row md:items-center mb-12 animate-on-scroll",
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          )}
        >
          {/* Timeline dot */}
          <div className={cn(
            "absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-y-1/2 md:-translate-x-1/2 z-10",
            getTypeColor(item.type)
          )} style={{ top: "2rem" }}></div>
          
          {/* Content */}
          <div className={cn(
            "ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:-translate-y-1",
            index % 2 === 0 ? "md:mr-8" : "md:ml-8"
          )}>
            <div className="mb-2">
              <span className={cn(
                "text-xs font-medium py-1 px-2 rounded-full",
                item.type === 'education' ? "bg-blue-500/20 text-blue-400" : 
                item.type === 'achievement' ? "bg-green-500/20 text-green-400" : 
                "bg-neon-purple/20 text-neon-purple"
              )}>
                {item.period}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-muted-foreground font-medium mb-4">{item.organization}</p>
            <p className="mb-4">{item.description}</p>
            {item.highlights && (
              <ul className="space-y-1">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-neon-purple mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
