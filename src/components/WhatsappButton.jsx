import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os passeios da CANDEEIROS ECOTUR.");
    window.open(`https://wa.me/5582988882672?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </button>
  );
};

export default WhatsappButton;

