
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveUrl?: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comércio eletrônico completa construída com React, Node.js e MongoDB. Inclui sistema de pagamento, autenticação e painel administrativo.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    github: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e sincronização em tempo real.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Aplicativo móvel para rastreamento de atividades físicas, nutrição e bem-estar, com análises detalhadas e recomendações personalizadas.",
    tags: ["React Native", "GraphQL", "AWS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    github: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm text-portfolio-primary font-medium px-3 py-1 bg-portfolio-primary/5 rounded-full">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Projetos em destaque
          </h2>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes e relevantes, demonstrando minhas habilidades e experiência no desenvolvimento de software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
          {defaultProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-on-scroll bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-portfolio-secondary/10 text-portfolio-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
