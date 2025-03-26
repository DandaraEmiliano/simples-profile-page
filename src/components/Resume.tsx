
import React, { useEffect } from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  level: number;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    period: "2020 - Presente",
    description: "Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. Liderança técnica de uma equipe de 5 desenvolvedores."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2017 - 2020",
    description: "Implementação de aplicações web e APIs REST utilizando JavaScript, TypeScript, React e Express. Integração com sistemas de pagamento e autenticação."
  },
  {
    id: 3,
    role: "Front-end Developer",
    company: "Web Creative Agency",
    period: "2015 - 2017",
    description: "Criação de interfaces interativas e responsivas utilizando HTML, CSS e JavaScript. Colaboração com designers e desenvolvimento de protótipos."
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "Mestrado em Ciência da Computação",
    institution: "Universidade Federal",
    period: "2018 - 2020",
    description: "Especialização em Engenharia de Software e Sistemas Distribuídos. Dissertação sobre arquiteturas de microserviços."
  },
  {
    id: 2,
    degree: "Bacharel em Ciência da Computação",
    institution: "Universidade Estadual",
    period: "2014 - 2018",
    description: "Foco em Desenvolvimento de Software e Banco de Dados. Projeto final sobre sistemas de recomendação."
  }
];

const skills: Skill[] = [
  { id: 1, name: "JavaScript", level: 95 },
  { id: 2, name: "TypeScript", level: 90 },
  { id: 3, name: "React", level: 92 },
  { id: 4, name: "Node.js", level: 88 },
  { id: 5, name: "HTML/CSS", level: 95 },
  { id: 6, name: "SQL", level: 85 },
  { id: 7, name: "MongoDB", level: 82 },
  { id: 8, name: "AWS", level: 78 },
  { id: 9, name: "Docker", level: 80 },
  { id: 10, name: "Git", level: 90 }
];

const Resume: React.FC = () => {
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
    <section id="resume" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm text-portfolio-primary font-medium px-3 py-1 bg-portfolio-primary/5 rounded-full">
            Currículo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Experiência & Habilidades
          </h2>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Conheça minha trajetória profissional, formação acadêmica e competências técnicas.
          </p>
          <a 
            href="#"
            className="inline-flex items-center mt-6 px-6 py-3 bg-portfolio-primary text-white rounded-lg transition duration-300 hover:bg-portfolio-primary/90 hover:shadow-lg"
          >
            <Download size={18} className="mr-2" />
            Baixar CV completo
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Experiência Profissional */}
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <Briefcase className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experiência</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-portfolio-primary">{exp.role}</h4>
                  <p className="text-sm text-gray-500 mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-portfolio-muted">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <GraduationCap className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Educação</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-portfolio-primary">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 mb-2">{edu.institution} | {edu.period}</p>
                  <p className="text-portfolio-muted">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <Award className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Habilidades</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
