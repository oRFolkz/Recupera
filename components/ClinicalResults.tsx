
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ClinicalResults: React.FC = () => {
  const reveal = useReveal();

  const benefits = [
    {
      title: "Cicatrização Acelerada",
      kicker: "ATÉ 3X MAIS RÁPIDA",
      description: "Supera métodos convencionais ao acelerar o fechamento de feridas e a recuperação tecidual de forma natural.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Regeneração Tecidual",
      kicker: "RENOVAÇÃO CELULAR PROFUNDA",
      description: "Estimula a produção de fatores de crescimento, promovendo uma reestruturação da pele de dentro para fora.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Tratamento de Queimaduras",
      kicker: "ALÍVIO IMEDIATO E OTIMIZADO",
      description: "Reduz a sensação térmica e a dor instantaneamente, prevenindo a formação de bolhas severas e marcas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="resultados-clinicos" className="py-16 md:py-24 bg-[#F1F5F2] relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={reveal.ref} className={`text-center max-w-4xl mx-auto mb-16 animeTexto ${reveal.className}`}>
          
          {/* Kicker Dourado conforme imagem */}
          <span className="text-[#E3C08D] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
            BENEFÍCIOS COMPROVADOS
          </span>

          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-tight">
            Eficácia que se sente na <span className="italic font-normal">pele</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
            Tecnologia desenvolvida para entregar resultados superiores em menos tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full animeTexto relative z-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 rounded-xl group ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Ícone Dourado */}
                <div className="text-[#E3C08D] p-3 bg-[#FCF9F4] rounded-lg group-hover:bg-[#E3C08D] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#063326] leading-tight mb-1">
                    {item.title}
                  </h4>
                  {/* Kicker interno do card Dourado */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E3C08D]">
                    {item.kicker}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-light mt-2 pl-[calc(1rem+3rem)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
