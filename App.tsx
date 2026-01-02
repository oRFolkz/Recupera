
import React from 'react';
import { Hero } from './components/Hero';
import { ClinicalResults } from './components/ClinicalResults';
import { ParallaxSection } from './components/ParallaxSection';
import { ScientificComparison } from './components/ScientificComparison';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  const benefits = [
    "<strong>Aceleração da Recuperação Muscular:</strong> Reduz drasticamente o tempo de inatividade pós-treino através da <strong>oxigenação tecidual direta</strong>.",
    "<strong>Alívio Imediato da Dor e Inchaço:</strong> A sinergia criogênica da Cânfora e Menta bloqueia os sinais de dor enquanto a <strong>Arnica combate a inflamação</strong>.",
    "<strong>Regeneração Dérmica Profunda:</strong> Tecnologia de ozonídeos que <strong>estimula a cicatrização</strong> e melhora visivelmente a textura da pele."
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow">
        {/* Section 1: Resultados Visíveis */}
        <ScientificComparison />

        {/* Section 2: Engenharia Natural (Movido para cá) */}
        <ClinicalResults />

        {/* Section 3: Hero (Ciência da Ozonoterapia - Compactado) */}
        <Hero />

        {/* Section 4: Parallax com Card Dark Glass (Compactado) */}
        <section className="py-8 md:py-12 bg-[#F1F5F2]">
          <div className="container mx-auto px-4">
            <ParallaxSection image="https://i.postimg.cc/cLgj7PDK/image.png" height="480px">
              <div className="w-full flex justify-end items-center h-full px-4 md:px-12 py-4">
                <div className="max-w-[550px] w-full bg-[#063326]/90 backdrop-blur-[16px] border border-white/10 p-6 md:p-10 text-left shadow-2xl rounded-xl">
                  {/* Título */}
                  <h2 className="text-lg md:text-2xl text-white mb-4 leading-tight font-bold">
                    Mais do que um Analgésico Tópico: <br />
                    <span className="italic font-normal">Um Sistema de Biohacking para sua Pele e Músculos.</span>
                  </h2>
                  
                  {/* Lista de Benefícios (Copy da Imagem) */}
                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 min-w-[6px]">
                          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        </div>
                        <span className="text-[#F0F0F0] text-xs md:text-sm leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: item }}></span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-[9px] text-white/60 font-bold uppercase tracking-[0.2em]">
                      Tecnologia de Alta Absorção
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Section 5: Seu Ritual de Recuperação */}
        <section id="ritual" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 items-start justify-center relative">
              {/* Coluna do Vídeo (Sticky) */}
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 order-2 lg:order-1 lg:sticky lg:top-28 self-start">
                <div className="flex justify-center lg:justify-end w-full">
                  <div className="shadow-2xl overflow-hidden aspect-[4/5] relative rounded-xl bg-gray-100 w-full max-w-[450px]">
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src="https://framerusercontent.com/assets/oGWOkSo3em8eufTAx5oecHE7YY.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                    <div className="absolute inset-0 bg-[#063326]/5 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Coluna do Texto */}
              <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2 mb-12 lg:mb-0 flex justify-center lg:justify-start">
                <div className="max-w-md lg:ml-12">
                  <h2 className="text-3xl md:text-[44px] font-bold mb-6 text-[#063326] leading-tight">
                    Como Integrar o N2 na <br/>Sua Rotina de Performance.
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 font-light">
                    A eficácia do N2 Blend é potencializada pela forma como você o aplica. Siga os passos para garantir o máximo de absorção biativa.
                  </p>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[11px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">PASSO 1: PREPARAÇÃO</h4>
                      <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        Com a pele limpa (preferencialmente após o banho, quando os poros estão dilatados), prepare a região afetada. A pele limpa facilita a penetração dos ozonídeos ativos.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">PASSO 2: APLICAÇÃO E ATIVAÇÃO</h4>
                      <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        Aplique uma quantidade generosa do <strong>N2 Recupera Blend</strong>. Massageie a área com movimentos circulares e firmes. A massagem não só espalha o produto, mas ativa a circulação periférica, potencializando a ação vasodilatadora da cânfora.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">PASSO 3: FREQUÊNCIA E MOMENTO</h4>
                      <div className="space-y-4 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        <p><strong className="text-[#063326]">Pré-Treino:</strong> Aplique levemente para aquecer a musculatura e prevenir lesões.</p>
                        <p><strong className="text-[#063326]">Pós-Treino:</strong> Use generosamente para recuperação imediata e relaxamento.</p>
                        <p><strong className="text-[#063326]">Tratamento de Dor/Lesão:</strong> Repita a aplicação 2 a 3 vezes ao dia até a remissão dos sintomas.</p>
                      </div>
                    </div>

                    {/* Dica de Especialista */}
                    <div className="bg-[#F8F9FA] p-8 border-l-4 border-[#063326] rounded-xl shadow-sm">
                      <span className="text-[10px] font-bold text-[#063326] uppercase tracking-widest block mb-3">DICA DE ESPECIALISTA</span>
                      <p className="text-[#3D3935] text-sm md:text-base leading-relaxed italic font-light">
                        Para redução de medidas e celulite, utilize o N2 associado a uma massagem de drenagem linfática. O ozônio auxilia na quebra de toxinas locais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <FAQ />
      </main>
    </div>
  );
};

export default App;
