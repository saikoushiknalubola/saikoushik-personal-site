
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import QuoteCard from '@/components/QuoteCard';
import LiteraryQuote from '@/components/LiteraryQuote';
import PhilosophicalParadox from '@/components/PhilosophicalParadox';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RebellionManifesto = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const manifestoParadoxes = [
    {
      thesis: {
        title: "The System is Necessary",
        description: "Structures, institutions, and systems create stability, order, and a framework that allows society to function. Without systems, chaos would reign."
      },
      antithesis: {
        title: "The System is Oppressive",
        description: "These same structures often become rigid, exploitative, and resistant to change, crushing innovation and individual freedom under the weight of standardization."
      },
      synthesis: "We must be architects who both understand systems and remain free from their limitations. Build systems that liberate rather than imprison, that evolve rather than stagnate."
    },
    {
      thesis: {
        title: "Technology is Salvation",
        description: "Technology extends human capability, solves impossible problems, and has the potential to create abundance and liberation for all."
      },
      antithesis: {
        title: "Technology is Enslavement",
        description: "Our creations now control us, surveilling our lives, manipulating our thoughts, and creating dependencies that diminish our humanity."
      },
      synthesis: "Technology must be guided by human wisdom and ethical boundaries. We create tools not to become them, but to transcend our limitations while preserving our humanity."
    }
  ];

  const manifestoPrinciples = [
    {
      title: "Principle 1: Discomfort as Compass",
      content: "If you're not uncomfortable, you're not growing. Seek the edges of your knowledge, abilities, and comfort zone. The boundary of discomfort is where growth happens."
    },
    {
      title: "Principle 2: Creation Over Criticism",
      content: "Anyone can tear down ideas. Few can build them. Focus your energy on creation, not destruction. The world needs more builders."
    },
    {
      title: "Principle 3: Ethical Power",
      content: "Power without ethics is destructive noise. Develop your capabilities alongside your moral compass. The two must grow in tandem."
    },
    {
      title: "Principle 4: Poetic Vision",
      content: "See the world not just as it is, but as it could be. Cultivate the ability to envision possibilities that others cannot yet see."
    },
    {
      title: "Principle 5: Rebellious Execution",
      content: "Ideas without implementation remain dreams. Execute with bias toward action, learning through iteration, not endless theorizing."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center pt-20 px-4 md:px-8 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-on-scroll">
            The Rebellion <span className="text-neon-purple">Manifesto</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-on-scroll">
            A philosophical framework for creators, rebels, and visionaries who refuse to accept the world as it is.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-lg mb-6">
              In the spirit of Dostoevsky's examination of human nature, Kafka's confrontation with absurdity, and the revolutionary spirit of Che Guevara, this manifesto serves as both compass and challenge.
            </p>
            
            <p className="text-lg mb-6">
              It is for those who seek not just to exist within systems, but to transform them. For those who believe that creation is the highest form of rebellion, and that ideas, when wielded with courage, can reshape reality.
            </p>
            
            <p className="text-lg mb-10">
              This is not a manual for the comfortable. It is a call to those willing to stand at the edge of possibility, where discomfort and growth intersect.
            </p>
            
            <LiteraryQuote 
              text="The mystery of human existence lies not in just staying alive, but in finding something to live for."
              author="Fyodor Dostoevsky"
              work="The Brothers Karamazov"
              style="dostoevsky"
              className="animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader 
            title="Core Principles" 
            subtitle="The philosophical foundation upon which we build our work and lives"
            style="rebel"
            className="animate-on-scroll"
          />
          
          <div className="space-y-10 max-w-4xl mx-auto">
            {manifestoPrinciples.map((principle, index) => (
              <div key={index} className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4 text-neon-purple">{principle.title}</h3>
                <p className="text-lg">{principle.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paradoxes */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="The Great Paradoxes" 
            subtitle="Embracing contradiction as a source of wisdom and creativity"
            highlightText="In the Kafkaesque tradition of embracing absurdity"
            style="kafka"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {manifestoParadoxes.map((paradox, index) => (
              <PhilosophicalParadox
                key={index}
                thesis={paradox.thesis}
                antithesis={paradox.antithesis}
                synthesis={paradox.synthesis}
                className="animate-on-scroll"
              />
            ))}
          </div>
          
          <div className="mt-16 animate-on-scroll">
            <LiteraryQuote 
              text="I want to break the world's heart, and I want to mend it too."
              author="Saikoushik Nalubola"
              style="kafka"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto text-center max-w-3xl animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the Rebellion</h2>
          <p className="text-xl mb-10">
            This manifesto is not just words on a screen. It's an invitation to create, challenge, and transform. To build what should exist, not what's expected.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-neon-purple text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors text-lg font-medium">
            Connect with Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-muted">
        <div className="container mx-auto">
          <p className="text-center text-lg font-medium mb-4">
            "Most people accept the world as it is. I'm here to rebuild it."
          </p>
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Nalubola Saikoushik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RebellionManifesto;
