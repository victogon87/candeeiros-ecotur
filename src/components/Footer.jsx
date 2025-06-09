import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="footer-title">CANDEEIROS ECOTUR</h3>
            <p className="text-gray-300 mt-4">
              Agência de turismo sustentável que trabalha com a comunidade local 
              para proporcionar experiências únicas nos Cânions do São Francisco 
              e na Rota do Cangaço.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="footer-link">Início</a>
              </li>
              <li>
                <a href="#passeios" className="footer-link">Nossos Passeios</a>
              </li>
              <li>
                <a href="#sobre" className="footer-link">Sobre Nós</a>
              </li>
              <li>
                <a href="#galeria" className="footer-link">Galeria</a>
              </li>
              <li>
                <a href="#contato" className="footer-link">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Passeios */}
          <div>
            <h3 className="footer-title">Passeios</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#canion" className="footer-link">Cânion do São Francisco</a>
              </li>
              <li>
                <a href="#cangaco" className="footer-link">Rota do Cangaço</a>
              </li>
              <li>
                <a href="#especiais" className="footer-link">Passeios Especiais</a>
              </li>
              <li>
                <a href="#contato" className="footer-link">Reservas</a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="footer-title">Contato</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-primary" size={20} />
                <span className="text-gray-300">
                  Rodovia Altemar Dutra, AL - 220, CEP: 57470-000
                  Olho D'água do Casado - AL
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-primary" size={20} />
                <span className="text-gray-300">
                  (82) 98838-3509<br />
                  (82) 98871-9355
                </span>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-primary" size={20} />
                <span className="text-gray-300">
                  contato@candeeirosecotur.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} CANDEEIROS ECOTUR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

