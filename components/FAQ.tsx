
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
      question: 'O produto tem um cheiro característico. Isso é normal?', 
      answer: 'Sim! O N2 não utiliza fragrâncias sintéticas para mascarar seus ativos. O aroma herbal e intenso (ozônico) é a garantia de que o ozônio está ativo e estabilizado na fórmula. É o **"cheiro da eficácia"** que desaparece alguns minutos após a aplicação.' 
    },
    { 
      question: 'Em quanto tempo sinto o alívio da dor?', 
      answer: 'Graças à ação da Cânfora e Menta, a sensação de frescor e analgesia é quase imediata (em minutos). A ação anti-inflamatória profunda do **Ozônio e Arnica** trabalha progressivamente, com melhoras significativas na mobilidade e inchaço nas primeiras **24 a 48 horas** de uso contínuo.' 
    },
    { 
      question: 'O N2 serve para qualquer tipo de dor?', 
      answer: 'Ele é extremamente eficaz para **dores musculares, articulares (artrite/artrose), tendinites, pancadas e fadiga muscular**. Também auxilia na recuperação estética de hematomas e na circulação periférica.' 
    },
    { 
      question: 'Posso usar no rosto ou em feridas abertas?', 
      answer: 'O Óleo Ozonizado é excelente para cicatrização e acne devido ao seu poder germicida. No entanto, devido à presença de **Cânfora e Menta** (que são refrescantes e potentes), evite contato com os olhos e mucosas. Em feridas abertas, aplique apenas nas bordas ou consulte um profissional.' 
    },
    { 
      question: 'O produto é seguro para todos os tipos de pele?', 
      answer: 'Sim, o N2 é formulado com base **100% natural** e óleos vegetais hipoalergênicos. É livre de parabenos e petrolatos. Recomendamos sempre um teste de toque em uma pequena área antes do uso extensivo.' 
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F0F4F2] font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#063326] leading-tight">
            Perguntas <span className="font-normal italic">Frequentes</span>
          </h2>
          <p className="text-[#A0A0A0] text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
            TUDO O QUE VOCÊ PRECISA SABER SOBRE O N2 RECUPERA BLEND
          </p>
        </div>

        <div ref={reveal.ref} className={`space-y-4 ${reveal.className}`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
              <button 
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:text-[#063326] transition-colors gap-6"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-base md:text-lg text-[#063326] leading-snug">
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full border border-[#E3C08D] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === idx ? 'bg-[#E3C08D] text-white' : 'text-[#E3C08D] bg-transparent'}`}>
                  <i className={`fa-solid ${openIndex === idx ? 'fa-minus' : 'fa-plus'} text-lg transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 pt-0">
                   <p className="text-gray-600 text-base leading-relaxed font-light border-t border-gray-100 pt-6" dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <h4 className="text-[#A0A0A0] text-xs font-bold uppercase tracking-[0.1em] mb-2">AINDA TEM DÚVIDAS?</h4>
            <a href="#" className="text-[#063326] text-lg font-normal hover:opacity-80 transition-opacity">
                Fale com nosso suporte especializado.
            </a>
        </div>
      </div>
    </section>
  );
};
