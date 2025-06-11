import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Experiência incrível nos Cânions do São Francisco! A equipe da CANDEEIROS ECOTUR foi extremamente atenciosa e profissional. O passeio de lancha foi maravilhoso, com paradas para banho em lugares paradisíacos. Recomendo a todos!",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Oliveira",
      location: "Rio de Janeiro, RJ",
      text: "Passeio inesquecível na Rota do Cangaço! Conhecer a história de Lampião e seu bando no local onde viveram foi uma experiência única. Os guias são muito bem informados e a estrutura oferecida é excelente. Voltarei com certeza!",
      rating: 5
    },
    {
      id: 3,
      name: "Marcos Pereira",
      location: "Recife, PE",
      text: "Fiz o passeio de catamarã com minha família e foi simplesmente perfeito! As paisagens dos cânions são de tirar o fôlego. A equipe da CANDEEIROS ECOTUR cuidou de todos os detalhes para que tivéssemos conforto e segurança. Super recomendo!",
      rating: 5
    },
    {
      id: 4,
      name: "Juliana Costa",
      location: "Brasília, DF",
      text: "O passeio aos Cânions do São Francisco superou todas as minhas expectativas! A beleza natural do local é indescritível e o atendimento da equipe foi impecável. Adorei conhecer a cultura local e a história da região.",
      rating: 4
    },
    {
      id: 5,
      name: "Roberto Almeida",
      location: "Belo Horizonte, MG",
      text: "Contratei o passeio especial no Cânion Prime e foi uma experiência de luxo! Embarcação confortável, serviço de bordo excelente e vistas deslumbrantes. Vale cada centavo investido. Parabéns à CANDEEIROS ECOTUR pelo profissionalismo!",
      rating: 5
    }
  ];

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setAutoplay(false);
    setCurrentSlide(index);
  };

  return (
    <section className="section bg-primary/5 py-20">
      <div className="container mx-auto">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Controles de navegação */}
          <button
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="mt-6">
                      <p className="testimonial-author">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

