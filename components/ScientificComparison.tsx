
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ScientificComparison: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="py-16 md:py-20 bg-[#F1F5F2] overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div ref={reveal.ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Imagens Compactas */}
          <div className={`lg:col-span-5 animeTexto ${reveal.className}`}>
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative max-w-md mx-auto lg:max-w-none">
              {/* Imagem 1: Dia 0 */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src="https://i.postimg.cc/yx6L3RZX/image.png" 
                  alt="Fase Inflamatória Aguda" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                   <span className="bg-red-600/90 backdrop-blur-sm text-white px-2 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                    Dia 0
                  </span>
                </div>
              </div>

              {/* Imagem 2: Dia 7 */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8 group">
                <img 
                  src="https://i.postimg.cc/L5qZW6dC/image.png" 
                  alt="Recuperação e Vitalidade" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                  <span className="bg-[#063326]/90 backdrop-blur-sm text-white px-2 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                    Dia 7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Texto Original Organizado */}
          <div className={`lg:col-span-7 flex flex-col justify-center animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
            
            <div className="mb-6 text-center lg:text-left mt-8 lg:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#063326] mb-3 leading-tight">
                Resultados Visíveis: <br />
                <span className="font-normal text-2xl md:text-3xl">A Jornada de Regeneração.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                Veja como o N2 Recupera Blend atua na redução de processos inflamatórios.
              </p>
            </div>

            <div className="space-y-6 border-l-2 border-[#063326]/10 pl-6 mb-8 ml-2 lg:ml-0">
              <div>
                <h3 className="text-lg font-bold text-[#063326] mb-2">Fase Inflamatória Aguda</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                  Músculo tensionado com sinais visíveis de edema (inchaço), vermelhidão e aspecto de fadiga tecidual. A circulação local está comprometida.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#063326] mb-2">Recuperação e Vitalidade</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                  Tecido regenerado com aspecto saudável e tonificado. Redução completa do inchaço e hematomas. A pele apresenta brilho natural e elasticidade recuperada.
                </p>
              </div>
            </div>

            {/* Bloco de Conclusão */}
            <div className="bg-white rounded-lg p-5 md:p-6 border border-gray-100 shadow-sm">
               <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-0">
                  A combinação de oxigenação celular e ação anti-inflamatória não apenas alivia a dor interna, mas transforma a aparência externa, eliminando vermelhidão.
               </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
