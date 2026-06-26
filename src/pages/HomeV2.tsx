import React, { useEffect } from 'react';
import { InteractiveIntro } from '../components/InteractiveIntro';
import CapabilityBridge from '../components/v2/CapabilityBridge';
import JourneyProofV2 from '../components/v2/JourneyProofV2';
import PrinciplesMentorsV2 from '../components/v2/PrinciplesMentorsV2';
import ThoughtsTimelineV2 from '../components/v2/ThoughtsTimelineV2';
import OfferingsContactV2 from '../components/v2/OfferingsContactV2';

const V2_TITLE = 'Long Hoàng FnB — Marketing, AI và xây dựng mô hình F&B';
const V2_DESCRIPTION = 'Marketing thực chiến, giải pháp AI ứng dụng và đồng hành xây dựng mô hình cho thương hiệu F&B.';

const HomeV2: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;

    document.title = V2_TITLE;
    if (descriptionMeta) {
      descriptionMeta.content = V2_DESCRIPTION;
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription) {
        descriptionMeta.content = previousDescription;
      }
    };
  }, []);

  const scrollToBridge = () => {
    document.getElementById('bridge')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffdf8] text-[#171717]">
      <section aria-label="Hero" className="relative min-h-screen">
        <InteractiveIntro onExplore={scrollToBridge} />
      </section>

      <CapabilityBridge />
      <JourneyProofV2 />
      <PrinciplesMentorsV2 />
      <ThoughtsTimelineV2 />
      <OfferingsContactV2 />

      <footer className="bg-[#151515] px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl uppercase leading-[1.08]">LONGHOANGFNB</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">© 2026 Hoàng Duy Long</p>
          </div>
          <a href="#bridge" className="w-fit border border-white/15 px-4 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white/70 transition hover:bg-white hover:text-black">
            Lên đầu trang
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomeV2;
