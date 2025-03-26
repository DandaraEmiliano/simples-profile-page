
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
    company: "Group Carrefour Brazil",
    period: "2021 - Present",
    description: "Development of scalable web applications using React, Node.js, and AWS. Technical leadership of a team of 5 developers."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Hospital Israelita Albert Einstein",
    period: "2019 - 2021",
    description: "Implementation of web applications and REST APIs using JavaScript, TypeScript, React, and Express. Integration with payment and authentication systems."
  },
];

const education: Education[] = [
  {
    id: 2,
    degree: "Bachelor's in Computer Science",
    institution: "University Descomplica ",
    period: "2022 - 2025",
    description: "Focus on Software Development and Databases. Final project on recommendation systems."
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
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Experience & Skills
          </h2>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Learn about my professional journey, academic background, and technical competencies.
          </p>
          <a 
            href="#"
            className="inline-flex items-center mt-6 px-6 py-3 bg-portfolio-primary text-white rounded-lg transition duration-300 hover:bg-portfolio-primary/90 hover:shadow-lg"
          >
            <Download size={18} className="mr-2" />
            Download full CV
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Professional Experience */}
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <Briefcase className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
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

          {/* Education */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <GraduationCap className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
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

          {/* Skills */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                <Award className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Skills</h3>
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
