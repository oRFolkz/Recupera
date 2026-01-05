
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FAQItem[] = [
    { 
      question: 'O produto tem cheiro forte do ozônio?', 
      answer: 'Não. O N2 – Recupera Blend não possui o cheiro característico do ozônio. Ao contrário, ele foi desenvolvido para apresentar um aroma suave e confortável, garantindo uma experiência agradável durante o uso, sem odor intenso ou incômodo.' 
    },
    { 
      question: 'Em quanto tempo sinto o alívio da dor?', 
      answer: 'Graças à ação da Cânfora e Menta, a sensação de frescor e analgesia é quase imediata (em minutos). A ação anti-inflamatória profunda do **Ozônio e Arnica** trabalha progressivamente, com melhoras significativas na mobilidade e inchaço nas primeiras **24 a 48 horas** de uso contínuo.' 
    },
    { 
      question: 'O N2 – Recupera Blend serve para qualquer tipo de dor?', 
      answer: 'Ele é extremamente eficaz para **dores musculares, articulares (artrite/artrose), tendinites, pancadas e fadiga muscular**. Também auxilia na recuperação estética de hematomas e na circulação periférica.' 
    },
    { 
      question: 'Posso usar em feridas abertas?', 
      answer: 'O Óleo Ozonizado é excelente para cicatrização devido ao seu poder germicida. No entanto, devido à presença de **Cânfora e Menta**, evite contato com os olhos e mucosas. Em feridas abertas, aplique apenas nas bordas ou consulte um profissional.' 
    },
    { 
      question: 'O produto é seguro para todos os tipos de pele?', 
      answer: 'Sim, o N2 é formulado com base **100% natural** e óleos vegetais hipoalergênicos. É livre de parabenos e petrolatos. Recomendamos sempre um teste de toque em uma pequena área antes do uso extensivo.' 
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#063326] leading-tight">
            Perguntas <span className="font-normal">Frequentes</span>
          </h2>
          <p className="text-[#A0A0A0] text-sm md:text-sm uppercase tracking-[0.2em] font-medium">
            Tudo o que você precisa saber
          </p>
        </div>

        <div ref={reveal.ref} className={`space-y-4 ${reveal.className}`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl md:rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                className="w-full px-5 py-5 md:px-8 md:py-6 flex justify-between items-center text-left hover:text-[#063326] transition-colors gap-4 md:gap-6"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-sm md:text-lg text-[#063326] leading-snug">
                  {item.question}
                </span>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#E3C08D] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === idx ? 'bg-[#E3C08D] text-white' : 'text-[#E3C08D] bg-transparent'}`}>
                  <i className={`fa-solid ${openIndex === idx ? 'fa-minus' : 'fa-plus'} text-sm md:text-lg transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0">
                   <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light border-t border-gray-100 pt-4 md:pt-6" dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
            <h4 className="text-[#A0A0A0] text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] mb-2">AINDA TEM DÚVIDAS?</h4>
            <a href="#" className="text-[#063326] text-base md:text-lg font-normal hover:opacity-80 transition-opacity underline decoration-1 underline-offset-4">
                Fale com nosso suporte.
            </a>
        </div>
      </div>
    </section>
  );
};
