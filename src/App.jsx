import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

function App() {
  useEffect(() => {
    // Função para rolagem suave ao clicar em links de âncora
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Ajuste para compensar a altura do navbar
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;

