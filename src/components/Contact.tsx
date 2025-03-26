
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log(formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm text-portfolio-primary font-medium px-3 py-1 bg-portfolio-primary/5 rounded-full">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Vamos conversar!
          </h2>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Interessado em trabalharmos juntos? Entre em contato por meio do formulário ou utilize os dados de contato abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                    <Mail className="text-portfolio-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                    <p className="text-portfolio-dark">contato@seudominio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                    <Phone className="text-portfolio-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Telefone</h4>
                    <p className="text-portfolio-dark">+55 (11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-portfolio-primary/10 rounded-lg mr-4">
                    <MapPin className="text-portfolio-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Localização</h4>
                    <p className="text-portfolio-dark">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold mb-4">Disponibilidade</h4>
                <p className="text-portfolio-muted mb-2">
                  Atualmente disponível para projetos freelance e oportunidades de emprego.
                </p>
                <p className="text-portfolio-muted">
                  Horário de atendimento: Segunda a Sexta, 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-transparent transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-transparent transition"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-transparent transition"
                    placeholder="Como posso ajudar?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-transparent transition"
                    placeholder="Descreva seu projeto ou oportunidade..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-portfolio-primary text-white rounded-lg transition duration-300 hover:bg-portfolio-primary/90 hover:shadow-lg"
                >
                  <Send size={18} className="mr-2" />
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
