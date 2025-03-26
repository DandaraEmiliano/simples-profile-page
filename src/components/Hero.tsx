
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 -z-10" />
      
      {/* Decorative circle */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-portfolio-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-portfolio-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12" ref={heroRef}>
          <div className="md:w-1/3 flex justify-center">
            <Avatar className="w-48 h-48 border-4 border-portfolio-primary/20 shadow-xl">
              <AvatarImage src="/lovable-uploads/5bf45d38-e215-4d4c-a9b1-9f68f292e0a1.png" alt="Profile photo" />
              <AvatarFallback className="text-3xl bg-portfolio-primary/10">SE</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="md:w-2/3 stagger-animate">
            <span className="inline-block text-sm md:text-base text-portfolio-primary font-medium mb-3 px-3 py-1 bg-portfolio-primary/5 rounded-full">
              Software Engineer • +6 anos de experiência
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Construindo <span className="text-portfolio-primary">soluções digitais</span> com precisão e elegância
            </h1>
            
            <p className="text-lg md:text-xl text-portfolio-muted mb-8 text-balance">
              Desenvolvedora full-stack com mais de 6 anos de experiência, apaixonada por criar experiências digitais intuitivas e de alto desempenho. Transformando ideias em código limpo e eficiente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="btn px-6 py-3 bg-portfolio-primary text-white rounded-lg transition duration-300 hover:bg-portfolio-primary/90 hover:shadow-lg text-center"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="btn px-6 py-3 border border-portfolio-primary text-portfolio-primary rounded-lg transition duration-300 hover:bg-portfolio-primary/5 text-center"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
