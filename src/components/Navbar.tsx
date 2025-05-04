
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-brand-blue">Cogent Forge</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
            About
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
            Testimonials
          </a>
          <a href="#contact">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              Contact Us
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
