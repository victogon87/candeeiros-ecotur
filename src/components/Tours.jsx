import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

// Importando imagens
import canion1 from '../assets/images/TbyoEdOZ8Jic.jpg';
import canion2 from '../assets/images/NQ7O51sNcmnI.jpg';
import canion3 from '../assets/images/bXbMhPB1FmbZ.jpg';
import canion4 from '../assets/images/Pd4QsO5NNI4T.jpg';
import canion5 from '../assets/images/py5vF7vClc6i.jpg';
import canion6 from '../assets/images/cSXI5pLSRvX0.jpg';
import canionsDourados1 from '../assets/images/canions_dourados_1.jpg';

const Tours = () => {
  const [activeTab, setActiveTab] = useState('canion');

  const tours = {
    canion: [
      {
        id: 1,
        title: 'Lancha de Fibra - Cânion do São Francisco',
        image: canion1,
        description: 'Passeio contemplando os cânions do Rio São Francisco com parada exclusiva no Porto de Brogodó, uma estrutura flutuante com local para banho e piscinas.',
        price: 'A partir de R$ 150,00 por pessoa',
        details: 'Saída da Prainha da Dulce/Olho D\'água do Casado-AL. Capacidade para 16 passageiros. Horário: 10h às 16h.'
      },
      {
        id: 2,
        title: 'Catamarã Karrancas',
        image: canion2,
        description: 'Saída do restaurante Karrancas contemplando os cânions do Rio São Francisco com parada na plataforma flutuante e opção de passeio à Gruta do Talhado.',
        price: 'A partir de R$ 135,00 por pessoa',
        details: 'Saídas às 09h, 10h30, 11h, 11h30, 12h, 14h. Duração: 3h de passeio.'
      },
      {
        id: 3,
        title: 'Catamarã Castanho',
        image: canion3,
        description: 'Saída da prainha da Dulce contemplando os cânions do Rio São Francisco com parada na plataforma flutuante e almoço no restaurante Castanho.',
        price: 'A partir de R$ 135,00 por pessoa',
        details: 'Saída às 09h45. Duração: 5h de passeio.'
      }
    ],
    cangaco: [
      {
        id: 4,
        title: 'Catamarã Eco Pak - Rota do Cangaço',
        image: canion4,
        description: 'O catamarã parte do centro histórico de Piranhas/AL navegando pelo leito natural do rio São Francisco com destino ao restaurante Cangaço Eco parque.',
        price: 'A partir de R$ 100,00 por pessoa',
        details: 'Horários: 09h e 11h. Duração: 5h30 aproximadamente.'
      },
      {
        id: 5,
        title: 'Catamarã Angicos - Rota do Cangaço',
        image: canion5,
        description: 'O catamarã parte do centro histórico de Piranhas/AL navegando pelo leito natural do rio São Francisco com destino ao restaurante Angicos.',
        price: 'A partir de R$ 100,00 por pessoa',
        details: 'Horários: 09h e 11h. Duração: 5h30 aproximadamente.'
      }
    ],
    especiais: [
      {
        id: 6,
        title: 'Cânion Superluxo Preciossa III',
        image: canion6,
        description: 'Navegação de luxo com saída em direção ao Cânion com paradas no Vale dos mestres e no Paraiso do talhado para banho.',
        price: 'R$ 12.500,00 (até 20 passageiros)',
        details: 'Lancha modelo ECOMARINE 60 pés com 4 cabines e 3 banheiros. Horário: 10h às 18h.'
      },
      {
        id: 7,
        title: 'Cânions Prime Duplo Deck',
        image: canion1,
        description: 'Cânions Prime, Veat Aurora 900, uma embarcação exclusiva de 30 pés, com um deck, lounge diferenciado, integração e amplos serviços.',
        price: 'A partir de R$ 4.000,00 (até 12 passageiros)',
        details: 'Visita ao Cânion, Gruta do Talhado Canoa (opcional) e paradas com banho nos Cânions.'
      }
    ],
    canionsdourados: [
      {
        id: 8,
        title: 'PIQUENIQUE CÂNION DOURADO SUPER LUXE',
        image: canionsDourados1,
        description: 'Saindo da agência Candeeiros Ecotur (ao lado do Auto Posto de Combustível Casado) com destino ao cânion Dourado. Seguindo em uma pequena trilha em meio à caatinga, onde terá a oportunidade de conhecer a fauna e flora, as formações rochosas dos cânions, chegando até os pontos de gravações de minisséries, novelas e ensaios fotográficos. Finalizando com um belíssimo piquenique montado especialmente para você, ao som do saxofone ou sanfona para melhor contemplação do Pôr do Sol no Cânion do São Francisco.',
        price: 'Sob Consulta',
        details: 'Inclui: Música ao vivo, Acompanhamento de 1 guia e 3 condutores, Carro de apoio, Acesso ao local, Área exclusiva, Sanduíches natural, Salada de fruta gourmet, Tábua de frios, Cachaça Baronesa regional, Espumante/vinho(Rio Sol), Refrigerante, Água, Água de coco, Suco natural. Opcional de fotógrafo R$100,00'
      }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const goToWhatsapp = (tour) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o passeio: ${tour.title}`);
    window.open(`https://wa.me/5582988882672?text=${message}`, '_blank');
  };

  return (
    <section id="passeios" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Passeios</h2>
        
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1 mb-8">
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'canion' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabChange('canion')}
            >
              Cânion do São Francisco
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'cangaco' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabChange('cangaco')}
            >
              Rota do Cangaço
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'especiais' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabChange('especiais')}
            >
              Passeios Especiais
            </button>
             <button
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'canionsdourados' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabChange('canionsdourados')}
            >
              Piquenique Cânion Dourado
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours[activeTab].map((tour) => (
            <div key={tour.id} className="card group">
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="card-image transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{tour.title}</h3>
                <p className="card-description">{tour.description}</p>
                <p className="text-sm text-gray-500 mt-2">{tour.details}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="card-price">{tour.price}</p>
                  <button 
                    onClick={() => goToWhatsapp(tour)} 
                    className="flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Reservar <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de saber mais sobre todos os passeios disponíveis.");
              window.open(`https://wa.me/5582988882672?text=${message}`, '_blank');
            }} 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Ver Todos os Passeios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;

