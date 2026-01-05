
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

  const treatments = [
    "Artrite e Artrose",
    "Fibromialgia",
    "Dores musculares e articulares",
    "Inflamações localizadas",
    "Varizes e problemas circulatórios",
    "Contusões e lesões esportivas"
  ];

  const indications = [
    "Pré-treino e aquecimento esportivo",
    "Regeneração dos tecidos musculares",
    "Aumento da resistência física muscular",
    "Redução de medidas (uso estético)"
  ];

  return (
    <section id="resultados-clinicos" className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={reveal.ref} className={`text-center max-w-4xl mx-auto mb-12 md:mb-16 animeTexto ${reveal.className}`}>
          
          {/* Kicker principal da seção - Permitido 12px */}
          <span className="text-[#E3C08D] font-bold uppercase tracking-[0.2em] text-[12px] md:text-[12px] mb-4 block">
            BENEFÍCIOS COMPROVADOS
          </span>

          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-tight">
            Eficácia que se <span className="font-normal">sente na pele</span>
          </h2>
          
          {/* Subtítulo descritivo - Mínimo 14px */}
          <p className="text-gray-500 text-[14px] md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Tecnologia desenvolvida para entregar resultados superiores em menos tempo.
          </p>
        </div>

        {/* Grid ajustado para tablet (md:grid-cols-2) e desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative items-stretch">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-[#F1F5F2] p-6 md:p-8 border border-transparent flex flex-col h-full animeTexto relative z-10 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 rounded-xl group hover:bg-[#F1F5F2] hover:border-[#E3C08D]/20 ${reveal.className} ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#E3C08D] p-3 bg-white rounded-lg shadow-sm group-hover:bg-[#E3C08D] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#063326] leading-tight mb-1">
                    {item.title}
                  </h4>
                  {/* Kicker interno do card - Ajustado para 14px conforme solicitado para textos legíveis */}
                  <span className="text-[14px] font-bold uppercase tracking-wider text-[#E3C08D]">
                    {item.kicker}
                  </span>
                </div>
              </div>

              {/* Descrição do card - Mínimo 14px */}
              <p className="text-gray-600 text-[14px] leading-relaxed font-light mt-2 pl-0 md:pl-[calc(1rem+3rem)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Indicações Terapêuticas */}
        <div className={`mt-8 md:mt-10 bg-[#F1F5F2] rounded-xl p-6 md:p-10 border border-transparent hover:border-[#E3C08D]/20 transition-all duration-500 shadow-none animeTexto ${reveal.className}`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-center text-[#063326] font-bold text-lg md:text-xl mb-8 uppercase tracking-widest">
            Indicações Terapêuticas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            {/* Coluna 1 */}
            <div>
              {/* Título da coluna - Mínimo 14px */}
              <h4 className="font-bold text-[#E3C08D] mb-4 md:mb-5 text-[14px] md:text-[15px] uppercase tracking-wider border-b border-[#063326]/10 pb-3">
                Ideal para tratamento de
              </h4>
              <ul className="space-y-3">
                {treatments.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-[14px] md:text-[15px] font-medium leading-normal">
                    <span className="w-1.5 h-1.5 bg-[#063326] rounded-full flex-shrink-0 mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2 */}
            <div>
              <h4 className="font-bold text-[#E3C08D] mb-4 md:mb-5 text-[14px] md:text-[15px] uppercase tracking-wider border-b border-[#063326]/10 pb-3">
                Também indicado para
              </h4>
              <ul className="space-y-3">
                {indications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-[14px] md:text-[15px] font-medium leading-normal">
                    <span className="w-1.5 h-1.5 bg-[#063326] rounded-full flex-shrink-0 mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
