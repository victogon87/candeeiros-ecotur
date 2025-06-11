import { Users, Leaf, Map } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Sobre a CANDEEIROS ECOTUR</h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            A CANDEEIROS ECOTUR é uma agência de turismo localizada em Olho D'água do Casado, Alagoas, 
            que trabalha com turismo sustentável e envolve a comunidade local em todos os processos. 
            Acreditamos que uma comunidade participativa contribui com a sua experiência na região, 
            proporcionando aos visitantes momentos únicos e autênticos.
          </p>
          <p className="text-lg text-gray-600">
            Preparamos opções especiais para todo tipo de perfil de viajantes, desde aventureiros 
            até famílias que buscam tranquilidade e contato com a natureza. Conheça as experiências 
            que reservamos para você!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Turismo Sustentável</h3>
            <p className="text-gray-600">
              Promovemos práticas sustentáveis em todos os nossos passeios, 
              respeitando o meio ambiente e contribuindo para a preservação 
              dos ecossistemas locais.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Comunidade Local</h3>
            <p className="text-gray-600">
              Trabalhamos em parceria com a comunidade local, valorizando 
              seus conhecimentos e tradições, e gerando oportunidades de 
              desenvolvimento econômico para a região.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Experiências Únicas</h3>
            <p className="text-gray-600">
              Oferecemos experiências autênticas e memoráveis, permitindo 
              que nossos visitantes conheçam a verdadeira essência dos 
              Cânions do São Francisco e da cultura local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

