
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ParadoxSide {
  title: string;
  description: string;
}

interface PhilosophicalParadoxProps {
  thesis: ParadoxSide;
  antithesis: ParadoxSide;
  synthesis: string;
  className?: string;
}

const PhilosophicalParadox: React.FC<PhilosophicalParadoxProps> = ({
  thesis,
  antithesis,
  synthesis,
  className
}) => {
  const [activeTab, setActiveTab] = useState<'thesis' | 'antithesis' | 'synthesis'>('thesis');

  return (
    <div className={cn("glass-card overflow-hidden", className)}>
      <div className="flex border-b border-white/10">
        <button
          className={cn(
            "flex-1 py-4 px-6 font-medium transition-colors",
            activeTab === 'thesis' ? "bg-neon-purple/20 text-white" : "text-muted-foreground hover:bg-white/5"
          )}
          onClick={() => setActiveTab('thesis')}
        >
          Thesis
        </button>
        <button
          className={cn(
            "flex-1 py-4 px-6 font-medium transition-colors",
            activeTab === 'antithesis' ? "bg-neon-purple/20 text-white" : "text-muted-foreground hover:bg-white/5"
          )}
          onClick={() => setActiveTab('antithesis')}
        >
          Antithesis
        </button>
        <button
          className={cn(
            "flex-1 py-4 px-6 font-medium transition-colors",
            activeTab === 'synthesis' ? "bg-neon-purple/20 text-white" : "text-muted-foreground hover:bg-white/5"
          )}
          onClick={() => setActiveTab('synthesis')}
        >
          Synthesis
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === 'thesis' && (
          <div>
            <h3 className="text-xl font-bold mb-3">{thesis.title}</h3>
            <p>{thesis.description}</p>
          </div>
        )}
        
        {activeTab === 'antithesis' && (
          <div>
            <h3 className="text-xl font-bold mb-3">{antithesis.title}</h3>
            <p>{antithesis.description}</p>
          </div>
        )}
        
        {activeTab === 'synthesis' && (
          <div>
            <h3 className="text-xl font-bold mb-3">The Reconciliation</h3>
            <p className="italic">{synthesis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhilosophicalParadox;
