
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'BENEFÍCIOS', href: '#beneficios' },
    { name: 'RESULTADOS CLÍNICOS', href: '#resultados-clinicos' },
    { name: 'INGREDIENTES', href: '#ingredientes' },
    { name: 'RITUAL', href: '#ritual' },
    { name: 'AVALIAÇÕES E DÚVIDAS', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-[0.15em] text-[#063326] z-50 relative">
          NOORSKIN
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-[#3D3935] hover:text-[#063326] tracking-[0.1em] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="bg-[#063326] text-white px-6 py-3 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors shadow-lg">
            COMPRAR AGORA
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 text-[#063326] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-[#3D3935] hover:text-[#063326] tracking-[0.1em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#063326] text-white px-8 py-4 mt-4 text-xs font-bold uppercase tracking-[0.2em]">
            COMPRAR AGORA
          </button>
        </div>
      </div>
    </header>
  );
};
