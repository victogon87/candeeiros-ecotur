import { useState, useEffect } from 'react';

// Importando as imagens
import canion1 from '../assets/images/TbyoEdOZ8Jic.jpg';
import canion2 from '../assets/images/guCt7VZMPMFa.jpg';
import canion3 from '../assets/images/py5vF7vClc6i.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: canion1,
      title: "CANDEEIROS ECOTUR",
      subtitle: "Turismo sustentável nos Cânions do São Francisco"
    },
    {
      image: canion2,
      title: "Experiências Inesquecíveis",
      subtitle: "Conheça as belezas naturais de Olho D'água do Casado, Alagoas"
    },
    {
      image: canion3,
      title: "Aventura e Natureza",
      subtitle: "Passeios que envolvem a comunidade local e preservam o meio ambiente"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToWhatsapp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os passeios da CANDEEIROS ECOTUR.");
    window.open(`https://wa.me/5582988882672?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Cânions do São Francisco - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
        <button onClick={goToWhatsapp} className="hero-button">
          Conheça Nossos Passeios
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

