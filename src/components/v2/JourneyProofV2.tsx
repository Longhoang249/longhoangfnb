import React from 'react';
import { STORY_TABS_CONTENT } from '../../../constants';
import SmartImage from '../../../components/SmartImage';
import VideoFacade from '../VideoFacade';

const splitLines = (value = '') => value.split('\n').filter((line) => line.trim());

const JourneyProofV2: React.FC = () => {
  const did = STORY_TABS_CONTENT.did as any;
  const events = did.sections.find((section: any) => section.id === 'events');
  const partnership = did.sections.find((section: any) => section.id === 'partnership');
  const otherActivities = did.sections.find((section: any) => section.id === 'other_activities');

  return (
    <section id="journey" className="bg-[#fffdf8] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-black/40">Hành trình của Long</p>
            <h2 className="font-display text-5xl uppercase leading-[1.08] text-[#171717] md:text-7xl">
              Trong 7 năm
              <br />
              làm nghề.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-relaxed text-black/62">
            Đây là những hoạt động, chiến dịch, thương hiệu và điểm nhấn quan trọng trên hành trình Long làm truyền thông ngành ăn uống.
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <SectionTitle title={events.title} description={events.description} accent="#5DB872" />
            <div className="grid gap-5 lg:grid-cols-2">
              {events.items.map((item: any, index: number) => (
                <article key={item.title} className="overflow-hidden border border-black/10 bg-white shadow-sm" style={{ borderTop: '6px solid #5DB872' }}>
                  <div className="aspect-video bg-black">
                    <VideoFacade videoUrl={item.videoUrl} title={item.title} />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-5 flex min-w-0 flex-col items-start justify-between gap-4 md:flex-row md:gap-5">
                      <div>
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#5DB872]">Chiến dịch {String(index + 1).padStart(2, '0')}</p>
                        <h3 className="text-2xl font-black uppercase leading-tight text-[#151515] md:text-3xl">{item.title}</h3>
                      </div>
                      {item.role && <span className="max-w-full break-words border border-black/10 bg-[#ecf8e9] px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#1f5a2e] md:shrink-0">{item.role}</span>}
                    </div>
                    {item.brand && <p className="mb-5 text-sm font-semibold leading-relaxed text-black/55">{item.brand}</p>}
                    <div className="grid gap-2">
                      {splitLines(item.results).map((line) => (
                        <p key={line} className="border-l-4 border-[#5DB872] bg-[#ecf8e9] px-4 py-3 text-sm font-bold leading-relaxed text-[#1f5a2e]">{line}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle title={partnership.title} description={partnership.description} accent="#5FA7E8" />
            <div className="grid gap-5">
              {partnership.logoGroups.map((group: any) => (
                <article key={group.company} className="grid min-w-0 overflow-hidden border border-black/10 bg-[#f8fcff] shadow-sm lg:grid-cols-[0.95fr_1.05fr]" style={{ borderTop: '6px solid #5FA7E8' }}>
                  <div className="min-w-0 p-5 md:p-8">
                    <p className="mb-4 break-words whitespace-pre-line font-display text-4xl uppercase leading-[1.08] text-[#151515] md:text-5xl">{group.company}</p>
                    <div className="mb-6 space-y-2">
                      {group.roles.map((role: any) => (
                        <div key={`${role.title}-${role.time}`} className="border border-black/10 bg-white px-4 py-3">
                          <p className="break-words text-xs font-black uppercase tracking-[0.14em] text-[#245980]">{role.title}</p>
                          <p className="mt-1 text-xs font-semibold text-black/45">{role.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid min-w-0 grid-cols-3 gap-3 sm:grid-cols-5">
                      {group.logos.map((logo: any) => (
                        <div key={logo.id} className="aspect-square overflow-hidden border border-black/10 bg-white p-1">
                          <img src={logo.src} alt={logo.name} className={logo.fill ? 'h-full w-full object-cover' : 'h-full w-full object-contain'} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {group.featuredImage && (
                    <div className="min-h-[320px] min-w-0 bg-white p-3">
                      <SmartImage src={group.featuredImage} alt={group.company} className="h-full min-h-[320px] w-full bg-[#eef7ff]" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle title={otherActivities.title} description={otherActivities.description} accent="#F28A45" />
            <div className="grid gap-5 md:grid-cols-2">
              {otherActivities.items.map((item: any, index: number) => (
                <article key={item.title} className="border border-black/10 bg-[#fff7ef] p-5 shadow-sm md:p-6" style={{ borderTop: '6px solid #F28A45' }}>
                  <p className="mb-3 font-display text-5xl leading-none text-white">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="text-2xl font-black uppercase leading-tight text-[#151515]">{item.title}</h3>
                  {item.brand && <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#7a3e15]">{item.brand}</p>}
                  <div className="mt-5 space-y-2">
                    {splitLines(item.results).map((line) => (
                      <p key={line} className="text-sm font-bold leading-relaxed text-black/62">{line}</p>
                    ))}
                  </div>

                  {item.subItems ? (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.subItems.map((subItem: any) => (
                        <div key={subItem.name} className="overflow-hidden border border-black/10 bg-white">
                          <SmartImage src={subItem.image} alt={subItem.name} className="aspect-[4/3] w-full" />
                          <p className="p-3 text-xs font-black uppercase leading-tight text-black/70">{subItem.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : item.videoUrl ? (
                    <div className="mt-6 aspect-video overflow-hidden bg-black">
                      <VideoFacade videoUrl={item.videoUrl} title={item.title} />
                    </div>
                  ) : (
                    <SmartImage src={item.image} alt={item.title} className="mt-6 aspect-[4/3] w-full bg-white" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title, description, accent }: { title: string; description: string; accent: string }) => (
  <div className="mb-8 flex flex-col gap-3 border-l-8 bg-white px-5 py-4 shadow-sm md:flex-row md:items-end md:justify-between" style={{ borderColor: accent }}>
    <div>
      <h3 className="font-display text-4xl uppercase leading-[1.08] text-[#151515] md:text-5xl">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-black/45">{description}</p>
    </div>
  </div>
);

export default JourneyProofV2;
