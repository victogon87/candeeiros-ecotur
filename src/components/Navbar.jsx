import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    { name: 'Início', link: '#home' },
    { 
      name: 'Passeios', 
      link: '#passeios',
      dropdown: [
        { name: 'Cânion do São Francisco', link: '#canion' },
        { name: 'Rota do Cangaço', link: '#cangaco' },
        { name: 'Passeios Especiais', link: '#especiais' }
      ]
    },
    { name: 'Sobre Nós', link: '#sobre' },
    { name: 'Galeria', link: '#galeria' },
    { name: 'Contato', link: '#contato' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
          CANDEEIROS ECOTUR
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <>
                  <button 
                    className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${activeDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="py-1">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.link}
                  className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <a
            href="#contato"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-all duration-300"
          >
            Reservar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full text-gray-800 hover:text-primary"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className={`pl-4 mt-2 space-y-2 ${activeDropdown === index ? 'block' : 'hidden'}`}>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropItem.link}
                        className="block text-gray-600 hover:text-primary"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.link}
                  className="block text-gray-800 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="mt-4">
            <a
              href="#contato"
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center px-4 py-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Reservar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

