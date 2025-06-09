import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'canion'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Preparar a mensagem para o WhatsApp
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
      `Estou interessado(a) em: ${formData.service === 'canion' ? 'Passeio aos Cânions do São Francisco' : 
                                formData.service === 'cangaco' ? 'Passeio na Rota do Cangaço' : 
                                'Passeios Especiais'}.\n\n` +
      `${formData.message}\n\n` +
      `Meus contatos:\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}`
    );
    
    // Redirecionar para o WhatsApp
    window.open(`https://wa.me/5582988882672?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Informações de Contato */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-gray-600">
                      Rodovia Altemar Dutra, AL - 220, CEP: 57470-000<br />
                      Olho D'água do Casado - Alagoas<br />
                      (Em frente ao posto de combustível, no trevo da cidade)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefones</h4>
                    <p className="text-gray-600">
                      (82) 98838-3509<br />
                      (82) 98871-9355<br />
                      (82) 98888-2672 (WhatsApp)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-600">
                      contato@candeeirosecotur.com.br
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Horário de Funcionamento</h4>
                <p className="text-gray-600">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado e Domingo: 8h às 17h
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulário de Contato */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="form-label">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="canion">Passeio aos Cânions do São Francisco</option>
                  <option value="cangaco">Passeio na Rota do Cangaço</option>
                  <option value="especial">Passeios Especiais</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-button flex items-center justify-center">
                Enviar Mensagem <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

