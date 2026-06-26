import React from 'react';
import { STORY_TABS_CONTENT } from '../../../constants';
import SmartImage from '../../../components/SmartImage';

const PrinciplesMentorsV2: React.FC = () => {
  const dont = STORY_TABS_CONTENT.dont as any;
  const learned = STORY_TABS_CONTENT.learned as any;

  return (
    <section id="principles" className="bg-[#f4f1ea] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-black/40">Cách Long làm nghề</p>
            <h2 className="font-display text-5xl uppercase leading-[1.08] text-[#171717] md:text-7xl">
              Biết làm gì.
              <br />
              Biết không làm gì.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-relaxed text-black/62">
            Phần này nói rõ ranh giới làm việc của Long và những người đã cho Long nhiều bài học quan trọng trên hành trình.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {dont.details.map((item: any, index: number) => (
            <article key={item.title} className="border border-black/10 bg-white p-6 shadow-sm md:p-8" style={{ borderTop: '6px solid #F28A45' }}>
              <p className="mb-6 font-display text-6xl leading-none text-[#F28A45]/20">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-[#151515]">{item.title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-black/58">{item.reason}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <PersonGroup title={learned.label} intro={learned.preview} people={learned.details} accent="#5FA7E8" />
        </div>
      </div>
    </section>
  );
};

const PersonGroup = ({ title, intro, people, accent }: { title: string; intro: string; people: any[]; accent: string }) => (
  <div>
    <div className="mb-8 border-l-8 bg-white px-5 py-5 shadow-sm" style={{ borderColor: accent }}>
      <h3 className="font-display text-4xl uppercase leading-[1.08] text-[#151515] md:text-5xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-black/55">{intro}</p>
    </div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <article key={person.name} className="border border-black/10 bg-white p-5 shadow-sm">
          <SmartImage src={person.image} alt={person.name} className="mb-5 aspect-square w-full bg-[#fffaf3]" />
          <h4 className="text-xl font-black uppercase leading-tight text-[#151515]">{person.name}</h4>
          <div className="mt-2 space-y-1">
            {person.role.split('|').map((line: string) => (
              <p key={line} className="text-[10px] font-black uppercase tracking-[0.12em] text-black/38">{line.trim()}</p>
            ))}
          </div>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-black/58">{person.story}</p>
        </article>
      ))}
    </div>
  </div>
);

export default PrinciplesMentorsV2;
