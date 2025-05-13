
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';
import { cn } from '@/lib/utils';

type TimelineEvent = {
  date?: string; // Make date optional
  title: string;
  description: string;
  icon?: string;
  image?: string;
  tags?: string[];
};

type InteractiveTimelineProps = {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
};

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ 
  events, 
  title = "Timeline", 
  subtitle = "A journey through the fabric of space and innovation" 
}) => {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-bold mb-2 font-playfair">{title}</h2>}
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto font-inter">{subtitle}</p>}
        </div>
      )}
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-purple via-white/20 to-transparent"></div>
        
        {/* Timeline Events */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <TimelineItem 
              key={index} 
              event={event} 
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ 
  event: TimelineEvent; 
  index: number;
  isLeft: boolean;
}> = ({ event, index, isLeft }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // On mobile, everything is on the right
  const mobileClassName = "ml-8 md:ml-0";
  
  // On desktop, alternate left and right
  const desktopClassName = isLeft 
    ? "md:text-right md:mr-[calc(50%+2rem)] md:ml-0" 
    : "md:ml-[calc(50%+2rem)]";
  
  return (
    <motion.div 
      ref={ref}
      className={cn("relative", mobileClassName, desktopClassName)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Dot */}
      <div 
        className="absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full bg-neon-purple"
      ></div>
      
      {/* Dot Pulse Animation */}
      <div 
        className="absolute top-0 left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full bg-neon-purple/50 animate-ping"
      ></div>
      
      {/* Content Card */}
      <div className="glass-card p-6 max-w-md backdrop-blur-xl bg-black/30 border border-white/10">
        {event.date && (
          <div className="text-neon-purple text-sm font-space mb-2 font-medium tracking-wide">{event.date}</div>
        )}
        <h3 className="text-xl font-bold mb-3 font-playfair">{event.title}</h3>
        
        {event.image && (
          <div className="mb-4 rounded-md overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover rounded-md transition-transform hover:scale-105 duration-700"
              />
            </AspectRatio>
          </div>
        )}
        
        <p className="text-white/80 font-inter leading-relaxed">{event.description}</p>
        
        {event.tags && event.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.tags.map((tag, i) => (
              <span 
                key={i} 
                className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs font-inter"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Cinematic corner elements */}
        <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[1px] h-5 bg-gradient-to-b from-transparent to-neon-purple/50"></div>
          <div className="absolute top-0 right-0 h-[1px] w-5 bg-gradient-to-l from-transparent to-neon-purple/50"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[1px] h-5 bg-gradient-to-t from-transparent to-neon-purple/50"></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-5 bg-gradient-to-r from-transparent to-neon-purple/50"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTimeline;
