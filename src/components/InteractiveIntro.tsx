import React, { useState, useEffect, useCallback } from 'react';

const PERSONAS = [
  {
    id: 'marketing',
    index: '01',
    title: 'MARKETING CHO FNB',
    backgroundText: 'MARKETING',
    description: 'Thay chủ quán thực thi các dịch vụ truyền thông cho quán, đem lại tương tác, khách hàng và doanh thu từ marketing.',
    src: '/char2.webp', // Green shirt leaning on utility pole
    theme: {
      background: '#5DB872',
      accent: '#DDF2C2',
      text: '#FFFFFF',
    },
  },
  {
    id: 'ai',
    index: '02',
    title: 'GIẢI PHÁP AI CHO FNB',
    backgroundText: 'AI SOLUTIONS',
    description: 'Ứng dụng AI vào marketing, kinh doanh, vận hành quán, giúp tăng doanh thu, giảm chi phí, tạo sự khác biệt cho thương hiệu.',
    src: '/char1.webp', // Blue shirt sitting on blue stool with laptop
    theme: {
      background: '#5FA7E8',
      accent: '#D8F4FF',
      text: '#FFFFFF',
    },
  },
  {
    id: 'startup',
    index: '03',
    title: 'F&B STARTUP',
    backgroundText: 'F&B STARTUP',
    description: 'Đồng hành cùng chủ quán xây dựng viên gạch đầu tiên, Long không trực tiếp làm nhưng có đủ giải pháp và quy trình đã chứng minh thành công.',
    src: '/char3.webp', // Orange shirt leaning on wooden coffee cart
    theme: {
      background: '#F28A45',
      accent: '#FFE3C3',
      text: '#FFFFFF',
    },
  },
];

interface InteractiveIntroProps {
  onExplore: () => void;
}

export const InteractiveIntro: React.FC<InteractiveIntroProps> = ({ onExplore }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Preload all images on mount
  useEffect(() => {
    PERSONAS.forEach((persona) => {
      const img = new Image();
      img.src = persona.src;
    });
  }, []);

  // Update mobile layout state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % 3);
    } else {
      setActiveIndex((prev) => (prev + 2) % 3);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  }, [isAnimating]);

  // Bind keyboard arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigate('next');
      } else if (e.key === 'ArrowLeft') {
        navigate('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Derive roles based on activeIndex for 3 items
  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 2) % 3) return 'left';
    return 'right';
  };

  const getCharacterStyle = (role: 'center' | 'left' | 'right') => {
    if (role === 'center') {
      return {
        zIndex: 3,
        height: isMobile ? '65vh' : '92vh', // Large center focal point
        bottom: isMobile ? '25vh' : '0', // Grounded to the bottom (partially behind card on mobile)
        left: '50%',
        transform: 'translateX(-50%) scale(1)', // Pure 1:1 sharp scale
        opacity: 1,
        filter: 'none',
        display: 'block',
      };
    }
    if (role === 'left') {
      return {
        zIndex: 2,
        height: isMobile ? '0px' : '48vh', // Side character depth preview
        bottom: '6%',
        left: '20%',
        transform: 'translateX(-50%) scale(1)',
        opacity: isMobile ? 0 : 0.35,
        filter: 'blur(2px)',
        display: isMobile ? 'none' : 'block',
      };
    }
    // right
    return {
      zIndex: 2,
      height: isMobile ? '0px' : '48vh',
      bottom: '6%',
      left: '80%',
      transform: 'translateX(-50%) scale(1)',
      opacity: isMobile ? 0 : 0.35,
      filter: 'blur(2px)',
      display: isMobile ? 'none' : 'block',
    };
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      style={{
        backgroundColor: PERSONAS[activeIndex].theme.background,
        transition: 'background-color 650ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50 grain-bg"
          style={{
            opacity: 0.4,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* 2. Giant background ghost text */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center select-none">
          {PERSONAS.map((item, index) => {
            const role = getRole(index);
            let transformStr = 'scale(0.96) translateX(0)';
            let opacityVal = 0;

            if (role === 'center') {
              transformStr = 'scale(1) translateX(0)';
              opacityVal = 0.88; // Bright poster-like background text
            } else if (role === 'left') {
              transformStr = 'scale(0.96) translateX(-80px)';
              opacityVal = 0;
            } else if (role === 'right') {
              transformStr = 'scale(0.96) translateX(80px)';
              opacityVal = 0;
            }
            return (
              <div
                key={item.id}
                className="absolute text-center uppercase font-display text-white select-none pointer-events-none"
                style={{
                  fontSize: isMobile ? 'clamp(70px, 18vw, 110px)' : 'clamp(120px, 16vw, 300px)',
                  fontWeight: 900,
                  lineHeight: 0.8,
                  letterSpacing: '-0.02em', // Airy and modern spacing
                  top: '20%',
                  opacity: opacityVal,
                  transform: transformStr,
                  transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform, opacity',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.backgroundText}
              </div>
            );
          })}
        </div>

        {/* 3. Top-left brand label */}
        <div className="absolute top-6 left-4 sm:top-8 sm:left-8 z-[60] text-white select-none">
          <div className="font-sans text-lg sm:text-2xl font-bold tracking-tight leading-none uppercase">
            LONGHOANGFNB
          </div>
          <div className="font-sans text-[9px] sm:text-xs font-normal text-white/80 mt-1.5 max-w-[240px] sm:max-w-none leading-normal">
            Truyền Thông Ngành Ẩm Thực và Đồ Uống
          </div>
        </div>

        {/* 4. Character Carousel */}
        <div className="absolute inset-0 z-20">
          {PERSONAS.map((item, index) => {
            const role = getRole(index);
            const style = getCharacterStyle(role);

            return (
              <div
                key={item.id}
                className="absolute aspect-[0.6/1]"
                style={{
                  ...style,
                  position: 'absolute',
                  transformOrigin: 'bottom center',
                  transition:
                    'transform 650ms cubic-bezier(0.22, 1, 0.36, 1), filter 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), left 650ms cubic-bezier(0.22, 1, 0.36, 1), bottom 650ms cubic-bezier(0.22, 1, 0.36, 1), height 650ms cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform, filter, opacity',
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain object-bottom"
                  style={{ objectPosition: 'bottom center' }}
                  draggable="false"
                />
              </div>
            );
          })}
        </div>

        {/* 5. Small, compact glassmorphic content card panel */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {PERSONAS.map((item, index) => {
            const role = getRole(index);
            const isActive = role === 'center';
            return (
              <div
                key={item.id}
                className="absolute pointer-events-auto"
                style={{
                  left: isMobile ? '16px' : '8%',
                  right: isMobile ? '16px' : 'auto',
                  bottom: isMobile ? '7vh' : '48px',
                  maxWidth: isMobile ? 'none' : '420px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  padding: '20px 24px',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(16px)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Title */}
                <h2
                  className="font-display uppercase mb-1.5 sm:mb-2"
                  style={{
                    fontSize: isMobile ? '20px' : '26px',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    color: '#ffffff',
                  }}
                >
                  {item.title}
                </h2>

                {/* Description */}
                <p
                  className="font-sans text-sm sm:text-[15px] leading-relaxed"
                  style={{
                    color: '#ffffff',
                    opacity: 0.92,
                  }}
                >
                  {item.description}
                </p>

                {/* Mobile Controls (CTA + Arrows) */}
                {isMobile && (
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/15">
                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate('prev')}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/5 active:bg-white/20 transition-all cursor-pointer"
                        aria-label="Previous capability"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.25}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </button>
                      <button
                        onClick={() => navigate('next')}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/5 active:bg-white/20 transition-all cursor-pointer"
                        aria-label="Next capability"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.25}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onExplore();
                      }}
                      className="flex items-center gap-1.5 bg-white text-black px-5 py-2.5 rounded-full font-display text-[11px] font-black uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                      <span>KHÁM PHÁ</span>
                      <span className="font-sans text-xs translate-y-[-1px]">→</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 6. Bottom-right Action Cluster (CTA + Navigation Arrows underneath) - Desktop only */}
        {!isMobile && (
          <div
            className="absolute z-40 flex flex-col items-end gap-5"
            style={{
              right: '6%',
              bottom: '48px',
            }}
          >
            {/* CTA Link */}
            <button
              onClick={(e) => {
                e.preventDefault();
                onExplore();
              }}
              className="flex items-center gap-4 text-white transition-all duration-200 opacity-95 hover:opacity-100 hover:scale-[1.03] bg-transparent border-0 cursor-pointer p-0 font-display uppercase leading-none"
              style={{
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              <span>KHÁM PHÁ</span>
              <span className="font-sans font-normal text-2xl translate-y-[-1px]">→</span>
            </button>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate('prev')}
                className="rounded-full border-2 flex items-center justify-center text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-150 cursor-pointer hover:scale-[1.08] hover:bg-[rgba(255,255,255,0.15)] active:scale-95"
                style={{
                  width: '72px',
                  height: '72px',
                  borderColor: 'rgba(255, 255, 255, 0.75)',
                }}
                aria-label="Previous capability"
              >
                {/* Inline ArrowLeft SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                onClick={() => navigate('next')}
                className="rounded-full border-2 flex items-center justify-center text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-150 cursor-pointer hover:scale-[1.08] hover:bg-[rgba(255,255,255,0.15)] active:scale-95"
                style={{
                  width: '72px',
                  height: '72px',
                  borderColor: 'rgba(255, 255, 255, 0.75)',
                }}
                aria-label="Next capability"
              >
                {/* Inline ArrowRight SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
