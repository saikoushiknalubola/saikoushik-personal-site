
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import QuoteCard from '@/components/QuoteCard';
import LiteraryQuote from '@/components/LiteraryQuote';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoulOfCreation = () => {
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

  const artisanQuotes = [
    {
      quote: "The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
      author: "Albert Camus"
    },
    {
      quote: "I measure the progress of a community by the degree of progress which women have achieved.",
      author: "APJ Abdul Kalam"
    },
    {
      quote: "The people who are crazy enough to think they can change the world are the ones who do.",
      author: "Steve Jobs"
    },
    {
      quote: "The first problem for all of us, men and women, is not to learn, but to unlearn.",
      author: "Gloria Steinem"
    }
  ];

  const creationEssays = [
    {
      title: "The Sacred Geometry of Innovation",
      excerpt: "Every creation begins with destruction. We must first dismantle our preconceptions, our comfortable assumptions, before we can build something genuinely new. In the spirit of Kafka's metamorphosis, we must become strangers to ourselves to rediscover what's possible...",
      mood: "Transformative"
    },
    {
      title: "The Underground Revolutionary",
      excerpt: "Dostoevsky's underground man knew what many innovators discover: society pushes back against those who challenge its foundations. The true revolutionary doesn't seek permission but acts with the certainty that history will vindicate what the present cannot comprehend...",
      mood: "Rebellious"
    },
    {
      title: "Dreams and Wings",
      excerpt: "Abdul Kalam taught that dreams are not what you see in sleep, but what keeps you from sleeping. The creator's mind is haunted by visions of what could be, by the gap between reality and possibility. This divine discontent is both curse and blessing...",
      mood: "Inspirational"
    },
    {
      title: "The Algorithmic Soul",
      excerpt: "We stand at a crossroads between human creativity and artificial intelligence. The question is not whether machines can create, but whether humans can maintain the spiritual dimension of creation—the understanding that art and technology must serve human flourishing...",
      mood: "Contemplative"
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
            The Soul of <span className="text-neon-purple">Creation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-on-scroll">
            Philosophical meditations on creativity, purpose, and the artistic temperament in a technological age.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-lg mb-6">
              What does it mean to create in an age where lines between human and machine blur? What is the soul of our work when algorithms can generate art, code, and design?
            </p>
            
            <p className="text-lg mb-6">
              These essays explore the existential dimensions of creation through the lenses of literature, philosophy, and technology. They are written in the tradition of Dostoevsky's psychological depth, Kafka's surreal clarity, and the revolutionary wisdom of creators like Kalam and Jobs.
            </p>
            
            <p className="text-lg mb-10">
              Here, we delve into the paradoxes and purposes that animate the creative spirit.
            </p>
            
            <LiteraryQuote 
              text="The formula 'Two plus two equals five' is not without its attractions."
              author="Fyodor Dostoevsky"
              work="Notes from Underground"
              style="dostoevsky"
              className="animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* Artisan Wisdom */}
      <section className="py-20 px-4 md:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeader 
            title="Artisan Wisdom" 
            subtitle="Timeless insights that guide the creative journey"
            style="futuristic"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {artisanQuotes.map((item, index) => (
              <QuoteCard 
                key={index}
                quote={item.quote}
                author={item.author}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Essays */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Essays on Creation" 
            subtitle="Philosophical meditations on the act of bringing new ideas into being"
            style="kafka"
            className="animate-on-scroll"
          />
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {creationEssays.map((essay, index) => (
              <div key={index} className="animate-on-scroll relative">
                <div className="absolute -top-6 right-0">
                  <span className="inline-block py-1 px-3 bg-secondary text-xs font-medium rounded-full">
                    {essay.mood}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{essay.title}</h3>
                <p className="text-muted-foreground mb-4">{essay.excerpt}</p>
                <Link 
                  to="#" 
                  className="text-neon-purple hover:text-purple-400 transition-colors inline-flex items-center font-medium"
                >
                  Read full essay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto glass-card p-8 border border-white/10 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">A Personal Note</h2>
            
            <p className="mb-4">
              I believe that creation is the highest form of rebellion against the mundane, the expected, and the limiting beliefs of our time.
            </p>
            
            <p className="mb-4">
              My work spans technology, philosophy, and social impact not because I lack focus, but because I understand that the most meaningful innovations emerge at these intersections.
            </p>
            
            <p className="mb-4">
              Like Kafka's characters, we often find ourselves in absurd systems not of our making. Like Dostoevsky's protagonists, we struggle with questions of purpose and morality. And like Kalam's vision for India, we must dream of possibilities beyond current limitations.
            </p>
            
            <p>
              These essays are my attempt to make sense of this creative journey and to invite you along this path of passionate exploration.
            </p>
            
            <div className="mt-8 text-right">
              <span className="font-medium">— Saikoushik Nalubola</span>
            </div>
          </div>
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

export default SoulOfCreation;
