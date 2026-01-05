
import React from 'react';
import { Hero } from './components/Hero';
import { ClinicalResults } from './components/ClinicalResults';
import { ParallaxSection } from './components/ParallaxSection';
import { ScientificComparison } from './components/ScientificComparison';
import { FAQ } from './components/FAQ';
import { Marquee } from './components/Marquee';
import { ProductIngredients } from './components/ProductIngredients';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow">
        {/* Marquee Trust Bar */}
        <Marquee />

        {/* Section 1: Eficácia que se sente na pele (ClinicalResults) - BRANCO */}
        <ClinicalResults />

        {/* Section 2: Resultados Visíveis (ScientificComparison) - PASTEL */}
        <ScientificComparison />

        {/* Section 3: Hero (Ciência da Ozonoterapia) - BRANCO */}
        <Hero />

        {/* Section 4: Parallax com Card Dark Glass - PASTEL */}
        <section className="bg-[#F1F5F2]">
          {/* Container removido aqui para a imagem ocupar 100% da largura */}
          <ParallaxSection image="https://i.postimg.cc/hP0KRZ15/Generated-Image-January-05-2026-12-14PM.png" height="480px">
            {/* Container adicionado aqui dentro para alinhar o conteúdo ao grid de 1300px */}
            <div className="container mx-auto px-4 max-w-[1300px] h-full flex justify-end items-center">
              <div className="w-full flex justify-end px-0 md:px-12 py-4">
                <div className="max-w-[550px] w-full bg-[#063326]/90 backdrop-blur-[16px] border border-white/10 p-6 md:p-10 text-left shadow-2xl rounded-xl">
                  {/* Título */}
                  <h2 className="text-xl md:text-2xl text-white mb-4 md:mb-6 leading-tight font-bold">
                    Por que escolher o N2 – Recupera Blend?
                  </h2>
                  
                  {/* Texto Principal */}
                  <div className="space-y-4 text-[#F0F0F0] text-sm md:text-base leading-relaxed font-light">
                    <p>
                      O N2 – Recupera Blend une a eficácia de ativos naturais cuidadosamente selecionados à inovação do processo de ozonização, resultando em uma fórmula moderna, segura e funcional para o cuidado muscular e da pele.
                    </p>
                    <p>
                      Sua composição foi pensada para quem busca uma alternativa confiável aos métodos convencionais, sem abrir mão da naturalidade, da qualidade e de um padrão elevado de desenvolvimento.
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-6 md:mt-8 pt-4 border-t border-white/10">
                    <p className="text-[10px] md:text-[12px] text-white/80 leading-snug">
                      <strong>Produto registrado e aprovado pelos órgãos competentes.</strong> <br/>
                      Manter fora do alcance de crianças.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </section>

        {/* Section 5: Seu Ritual de Recuperação - BRANCO */}
        <section id="ritual" className="py-16 md:py-32 bg-white">
          <div className="container mx-auto px-4 max-w-[1300px]">
            <div className="flex flex-wrap -mx-4 items-start justify-center relative">
              
              {/* Coluna do Vídeo (Sticky Desktop, Normal Mobile) */}
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1 lg:sticky lg:top-28 self-start">
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
                <div className="max-w-md w-full lg:ml-12">
                  <h2 className="text-3xl md:text-[44px] font-bold mb-6 text-[#063326] leading-tight text-center lg:text-left">
                    Como Integrar o Recupera Blend <span className="font-normal">na Sua Rotina.</span>
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 font-light text-center lg:text-left">
                    A eficácia do N2 Blend é potencializada pela forma como você o aplica. Siga essas dicas para garantir o máximo de absorção bioativa.
                  </p>
                  
                  <div className="space-y-10 md:space-y-12">
                    <div className="bg-gray-50 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none">
                      <h4 className="text-[13px] md:text-[14px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">Para Dores e Inflamações</h4>
                      <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        Aplicar quantidade suficiente para espalhar no local a ser tratado e massagear suavemente. Usar 2 vezes ao dia ou quando necessário.
                      </p>
                    </div>

                    <div className="bg-gray-50 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none">
                      <h4 className="text-[13px] md:text-[14px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">Para Pré-treino</h4>
                      <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        Aplicar no músculo que será trabalhado antes da atividade física.
                      </p>
                    </div>

                    <div className="bg-gray-50 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none">
                      <h4 className="text-[13px] md:text-[14px] font-bold text-[#063326] uppercase tracking-[0.2em] mb-3">Para Redução de Medidas</h4>
                      <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                        Aplicar no local desejado e massagear 2 vezes ao dia.
                      </p>
                    </div>

                    {/* Dica de Especialista */}
                    <div className="bg-[#F8F9FA] p-6 md:p-8 border-l-4 border-[#063326] rounded-xl shadow-sm mt-8">
                      <span className="text-[10px] font-bold text-[#063326] uppercase tracking-widest block mb-3">DICA DE ESPECIALISTA</span>
                      <p className="text-[#3D3935] text-sm md:text-base leading-relaxed font-light">
                        Para redução de medidas e celulite, utilize o N2 associado a uma massagem de drenagem linfática. O ozônio auxilia na quebra de toxinas locais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Novos Ingredientes - PASTEL */}
        <ProductIngredients />

        {/* Section 7: FAQ - BRANCO */}
        <FAQ />
      </main>
    </div>
  );
};

export default App;
