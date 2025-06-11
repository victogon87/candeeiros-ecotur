import { useState } from 'react';
import { X } from 'lucide-react';

// Importando imagens existentes
import img1 from '../assets/images/TbyoEdOZ8Jic.jpg';
import img2 from '../assets/images/guCt7VZMPMFa.jpg';
import img3 from '../assets/images/py5vF7vClc6i.jpg';
import img4 from '../assets/images/bXbMhPB1FmbZ.jpg';
import img5 from '../assets/images/Pd4QsO5NNI4T.jpg';
import img6 from '../assets/images/NQ7O51sNcmnI.jpg';
import img7 from '../assets/images/Ov0h7GsNkFgK.jpeg';
import img8 from '../assets/images/cSXI5pLSRvX0.jpg';

// Importando novas imagens dos Cânions Dourados
import canionsDourados1 from '../assets/images/canions_dourados_1.jpg';
import canionsDourados2 from '../assets/images/canions_dourados_2.jpg';
import canionsDourados3 from '../assets/images/canions_dourados_3.jpg';
import canionsDourados4 from '../assets/images/canions_dourados_4.jpg';
import canionsDourados5 from '../assets/images/canions_dourados_5.jpg';
import canionsDourados6 from '../assets/images/canions_dourados_6.jpg';
import canionsDourados7 from '../assets/images/canions_dourados_7.jpg';
import canionsDourados8 from '../assets/images/canions_dourados_8.jpg';
import canionsDourados9 from '../assets/images/canions_dourados_9.jpg';
import canionsDourados10 from '../assets/images/canions_dourados_10.jpg';
import canionsDourados11 from '../assets/images/canions_dourados_11.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { src: img1, alt: "Cânions do São Francisco" },
    { src: img2, alt: "Passeio de barco nos Cânions" },
    { src: img3, alt: "Vista panorâmica dos Cânions" },
    { src: img4, alt: "Navegação no Rio São Francisco" },
    { src: img5, alt: "Área de banho nos Cânions" },
    { src: img6, alt: "Passeio de catamarã" },
    { src: img7, alt: "Formações rochosas dos Cânions" },
    { src: img8, alt: "Turistas nos Cânions" },
    // Novas imagens dos Cânions Dourados
    { src: canionsDourados1, alt: "Piquenique Cânion Dourado" },
    { src: canionsDourados2, alt: "Cânions Dourados" },
    { src: canionsDourados3, alt: "Pôr do Sol nos Cânions Dourados" },
    { src: canionsDourados4, alt: "Trilha nos Cânions Dourados" },
    { src: canionsDourados5, alt: "Piquenique nos Cânions Dourados" },
    { src: canionsDourados6, alt: "Vista dos Cânions Dourados" },
    { src: canionsDourados7, alt: "Detalhes dos Cânions Dourados" },
    { src: canionsDourados8, alt: "Paisagem dos Cânions Dourados" },
    { src: canionsDourados9, alt: "Formação rochosa nos Cânions Dourados" },
    { src: canionsDourados10, alt: "Beleza natural dos Cânions Dourados" },
    { src: canionsDourados11, alt: "Cânions Dourados - Vista" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeria" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Galeria de Fotos</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-medium px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de visualização da imagem */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[90vh] object-contain"
          />
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;

