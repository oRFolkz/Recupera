
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="beneficios" className="relative py-12 lg:py-16 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10 max-w-[1300px]">
        <div ref={reveal.ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna 1: Conteúdo de Texto + Dados */}
          <div className={`lg:col-span-6 flex flex-col justify-center animeTexto ${reveal.className}`}>
            
            <span className="text-[#E3C08D] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Tecnologia Bioativa
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#063326] mb-4 leading-[1.15] tracking-tight">
              A Ciência da Ozonoterapia <br />
              <span className="text-[#063326]/80 font-normal">Unida à Potência da Natureza.</span>
            </h1>
            
            <p className="text-[#555] text-sm md:text-base leading-relaxed font-light mb-8 max-w-xl">
              Uma tecnologia bioativa que combina o <strong>Óleo de Girassol Ozonizado</strong> a ativos naturais selecionados para potencializar a recuperação e o bem-estar.
            </p>

            {/* Bloco de Resultados - Responsivo */}
            <div className="bg-[#F1F5F2] rounded-xl border border-transparent p-5 md:p-8 hover:border-[#E3C08D]/20 transition-all duration-500">
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8">
                {/* Item 1 */}
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-[#063326]">94%</span>
                  <span className="block text-[11px] md:text-sm text-gray-600 font-medium leading-snug mt-1 md:mt-2">Relataram alívio na dor das pernas e pés</span>
                </div>
                {/* Item 2 */}
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-[#063326]">87%</span>
                  <span className="block text-[11px] md:text-sm text-gray-600 font-medium leading-snug mt-1 md:mt-2">Sentiram redução no inchaço</span>
                </div>
                {/* Item 3 */}
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-[#063326]">87%</span>
                  <span className="block text-[11px] md:text-sm text-gray-600 font-medium leading-snug mt-1 md:mt-2">Melhora na circulação sanguínea</span>
                </div>
                {/* Item 4 */}
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-[#063326]">97%</span>
                  <span className="block text-[11px] md:text-sm text-gray-600 font-medium leading-snug mt-1 md:mt-2">Notaram melhora na pele</span>
                </div>
                {/* Item 5 - Full Width */}
                <div className="col-span-2">
                  <span className="block text-3xl lg:text-4xl font-bold text-[#063326]">97%</span>
                  <span className="block text-[11px] md:text-sm text-gray-600 font-medium leading-snug mt-1 md:mt-2">Aprovaram o produto e comprariam novamente</span>
                </div>
              </div>

              {/* Disclaimer do Estudo Clínico (Rodapé) */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-[#063326]/10">
                <p className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                  Resultados do Estudo Clínico (31 participantes)
                </p>
              </div>

            </div>
          </div>

          {/* Coluna 2: Imagem */}
          <div className={`lg:col-span-6 relative animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-auto h-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://i.postimg.cc/RFcHxCXT/image.png" 
                alt="Aplicação N2 Recupera" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063326]/30 to-transparent pointer-events-none"></div>
              
              {/* Card Flutuante Interno - Mobile Friendly */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-auto md:right-4 md:w-64 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#063326] flex-shrink-0">
                    <i className="fa-solid fa-droplet text-sm"></i>
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
