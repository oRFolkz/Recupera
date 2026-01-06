
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ProductIngredients: React.FC = () => {
  const reveal = useReveal();

  const ingredients = [
    {
      title: "Óleo de Girassol Ozonizado",
      description: "Base rica em propriedades anti-inflamatórias e oxigenação tecidual."
    },
    {
      title: "Arnica Montana",
      description: "Analgésico natural eficaz para contusões e alívio de hematomas."
    },
    {
      title: "Cânfora",
      description: "Antiespasmódico que age diretamente no relaxamento muscular."
    },
    {
      title: "Menta Piperita",
      description: "Propriedades anti-inflamatórias com efeito refrescante imediato."
    }
  ];

  return (
    <section className="py-16 bg-[#F1F5F2] font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1300px]">
        
        <div ref={reveal.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center animeTexto ${reveal.className}`}>
          
          {/* Coluna Esquerda: Texto e Lista */}
          <div className="order-2 md:order-1">
            <div className="mb-10">
              <span className="text-[#E3C08D] font-bold uppercase tracking-[0.2em] text-sm mb-3 block">
                FÓRMULA EXCLUSIVA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#063326] leading-tight">
                Composição Natural <br />e <span className="font-normal">Poderosa</span>
              </h2>
            </div>

            {/* Lista Vertical com Linha Dourada Contínua */}
            <div className="border-l-2 border-[#E3C08D]/30 ml-2 space-y-10 py-2">
              {ingredients.map((item, idx) => (
                <div key={idx} className="relative pl-8 group">
                  {/* Marcador (Dot) na linha - Ring ajustado para a nova cor de fundo */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#E3C08D] ring-4 ring-[#F1F5F2] transition-transform duration-300 group-hover:scale-125"></div>
                  
                  {/* Conteúdo à direita da borda */}
                  <div>
                    <h3 className="text-lg font-bold text-[#063326] mb-2 group-hover:text-[#E3C08D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Imagem Livre */}
          <div className="order-1 md:order-2 flex justify-center items-center relative">
            {/* Elemento decorativo de fundo */}
            <div className="absolute bg-white rounded-full blur-3xl opacity-80 -z-10"></div>
            
            <img 
              src="https://i.postimg.cc/hvJVhcmJ/RECUPERA-BLEND-2-1.png" 
              alt="N2 Recupera Blend" 
              className="drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
