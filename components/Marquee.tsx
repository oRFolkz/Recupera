
import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "Clinicamente testado",
    "Dermatologicamente aprovado",
    "Hipoalergênico",
    "Seguro para uso diário",
    "Fórmula natural",
    "Padrões rigorosos de qualidade"
  ];

  return (
    <div className="bg-[#063326] text-white py-3 overflow-hidden relative z-30 border-b border-[#E3C08D]/20">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {items.map((item, i) => (
                <div key={i} className="flex items-center px-6">
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                    {item}
                  </span>
                  <span className="ml-6 text-[#E3C08D] text-[10px]">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
