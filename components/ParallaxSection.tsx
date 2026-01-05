
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  image: string;
  children?: React.ReactNode;
  height?: string;
  showOverlay?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  image, 
  children, 
  height = "600px",
  showOverlay = true 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalRange = windowHeight + rect.height;
        const progress = (windowHeight - rect.top) / totalRange;
        
        // Reduzindo a intensidade do movimento para evitar quebras de borda em containers pequenos
        const maxMovement = 10; 
        const yOffset = (progress * 2 - 1) * maxMovement; 
        
        imgRef.current.style.transform = `translate3D(-50%, ${yOffset}%, 0)`;
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="parallax-container w-full relative overflow-hidden" style={{ height }}>
      <img ref={imgRef} src={image} className="parallax-img" alt="Background Parallax" />
      {showOverlay && <div className="absolute inset-0 bg-black/10"></div>}
      {/* Removido flex center para permitir que o filho controle o layout (container) */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
