
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-xl font-semibold text-portfolio-primary">
              Portfolio
            </a>
            <p className="text-portfolio-muted mt-2 max-w-md">
              Software Engineer specialized in developing modern, high-performance web applications.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/DandaraEmiliano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-portfolio-muted hover:text-portfolio-primary hover:bg-portfolio-primary/5 rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-portfolio-muted">
              © {currentYear} Dandara Emiliano. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-portfolio-muted hover:text-portfolio-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-portfolio-muted hover:text-portfolio-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
