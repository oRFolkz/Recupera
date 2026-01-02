
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="beneficios" className="relative py-8 lg:py-12 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={reveal.ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna 1: Conteúdo de Texto + Dados (Ocupa 6/12 - Equilibrado) */}
          <div className={`lg:col-span-6 flex flex-col justify-center animeTexto ${reveal.className}`}>
            
            {/* Kicker Dourado Atualizado */}
            <span className="text-[#E3C08D] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Tecnologia Bioativa
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#063326] mb-4 leading-[1.1] tracking-tight">
              A Ciência da Ozonoterapia <br />
              <span className="text-[#063326]/80 font-normal italic">Unida à Potência da Natureza.</span>
            </h1>
            
            <p className="text-[#555] text-sm md:text-base leading-relaxed font-light mb-8 max-w-xl">
              Desbloqueie o poder regenerativo do <strong>Óleo de Girassol Ozonizado</strong> potencializado com Arnica, Cânfora e Menta. Uma fórmula desenhada para recuperação total.
            </p>

            {/* Bloco de Resultados - Compacto e Elegante */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100">
                <div className="text-center sm:text-left px-2">
                  <span className="block text-2xl lg:text-3xl font-bold text-[#063326]">97%</span>
                  <span className="block text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Aprovação</span>
                </div>
                <div className="text-center sm:text-left px-2 pl-4">
                  <span className="block text-2xl lg:text-3xl font-bold text-[#063326]">94%</span>
                  <span className="block text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Alívio da Dor</span>
                </div>
                <div className="text-center sm:text-left px-2 pl-4">
                  <span className="block text-2xl lg:text-3xl font-bold text-[#063326]">87%</span>
                  <span className="block text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Menos Edemas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Imagem (Ocupa 6/12) */}
          <div className={`lg:col-span-6 relative animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://i.postimg.cc/RFcHxCXT/image.png" 
                alt="Aplicação N2 Recupera" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063326]/20 to-transparent pointer-events-none"></div>
              
              {/* Card Flutuante Interno */}
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-64 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#063326] flex-shrink-0">
                    <i className="fa-solid fa-droplet text-xs"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#063326] mb-0.5">Absorção Profunda</p>
                    <p className="text-[9px] text-gray-500 leading-snug">Penetra na derme sem deixar resíduos oleosos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elemento Decorativo de Fundo - Ajustado */}
            <div className="hidden lg:block absolute -z-10 top-8 -right-8 w-full h-full bg-[#F1F5F2] rounded-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
