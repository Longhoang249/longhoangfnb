import React from 'react';
import { capabilities } from './v2Data';

const CapabilityBridge: React.FC = () => {
  return (
    <section id="bridge" className="relative overflow-hidden bg-[#fffaf3] px-5 py-20 md:px-8 md:py-28">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-25" />
      <div className="absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] uppercase leading-none text-black/[0.035] md:text-[12vw]">
        LONG HOÀNG FNB
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 border border-black/10 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black/55">
            <span className="h-2 w-2 bg-[#5DB872]" />
            Long Hoàng FnB
          </p>
          <h1 className="font-display text-4xl uppercase leading-[1.08] text-[#151515] sm:text-5xl md:text-7xl">
            NGƯỜI LÀM TRUYỀN THÔNG
            <br />
            NGÀNH ẨM THỰC VÀ ĐỒ UỐNG
          </h1>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4">
            {capabilities.map((capability) => (
              <a
                key={capability.id}
                href="#journey"
                className="group relative min-h-[230px] overflow-hidden border border-black/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6"
                style={{ backgroundColor: capability.accentSoft, borderTop: `6px solid ${capability.accent}` }}
              >
                <div className="grain-bg pointer-events-none absolute inset-0 opacity-15" />
                <div className="absolute right-4 top-3 font-display text-8xl leading-none text-white/70">{capability.index}</div>
                <div className="absolute bottom-0 right-0 h-[76%] w-[38%] transition duration-500 group-hover:scale-105">
                  <img src={capability.character} alt={capability.title} className="h-full w-full object-contain object-bottom" />
                </div>
                <div className="relative z-10 max-w-[70%]">
                  <p className="mb-4 inline-flex px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white" style={{ backgroundColor: capability.accent }}>
                    {capability.eyebrow}
                  </p>
                  <h2 className="mb-3 font-display text-4xl uppercase leading-[1.08] text-[#111] md:text-5xl">{capability.title}</h2>
                  <p className="mb-4 text-base font-black leading-snug" style={{ color: capability.accentDark }}>
                    {capability.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-black/60">
                    {capability.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityBridge;
