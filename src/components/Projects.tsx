
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
    title: "Bank Management API",
    description: "API para gerenciamento bancário com funcionalidades de controle de contas, transações e autenticação de usuários.",
    tags: ["Java", "Spring Boot", "API REST", "JPA"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    github: "https://github.com/DandaraEmiliano/Bank-Management-API",
  },
  {
    id: 2,
    title: "Sistema de Biblioteca",
    description: "Sistema completo para gerenciamento de biblioteca com cadastro de livros, empréstimos e controle de usuários.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/DandaraEmiliano/Biblioteca-Spring",
  },
  {
    id: 3,
    title: "Product Price Service",
    description: "Microserviço para gerenciamento de preços de produtos com integração a sistemas externos e cache distribuído.",
    tags: ["Java", "Spring Boot", "Microservices", "Redis"],
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    github: "https://github.com/DandaraEmiliano/ProductPriceService",
  },
  {
    id: 4,
    title: "Terraform AWS Project",
    description: "Infraestrutura como código para provisionamento de recursos na AWS, incluindo VPC, EC2, S3 e serviços de monitoramento.",
    tags: ["Terraform", "AWS", "IaC", "DevOps"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/DandaraEmiliano/Terraform-AWS-Project",
  },
  {
    id: 5,
    title: "NestJS API",
    description: "API moderna construída com NestJS, implementando autenticação JWT, validação de dados e documentação automática.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Swagger"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/DandaraEmiliano/api-nestjs",
  },
  {
    id: 6,
    title: "Cultura e Automação DevOps",
    description: "Projeto demonstrando práticas de DevOps, CI/CD e automação de processos para melhorar o ciclo de desenvolvimento de software.",
    tags: ["DevOps", "CI/CD", "Docker", "Jenkins"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/DandaraEmiliano/cultura-e-automacao-devops",
  },
  {
    id: 7,
    title: "Todo List App",
    description: "Aplicativo de lista de tarefas com interface responsiva, persistência de dados e categorização de tarefas.",
    tags: ["React", "JavaScript", "LocalStorage", "CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    github: "https://github.com/DandaraEmiliano/todolist",
  },
  {
    id: 8,
    title: "Sistema de Gerenciamento de Tarefas",
    description: "Sistema completo para gerenciamento de tarefas e projetos em equipe, com atribuições, prazos e notificações.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    github: "https://github.com/DandaraEmiliano/sistema-gerenciamento-tarefas",
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
