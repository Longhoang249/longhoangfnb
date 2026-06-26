import React from 'react';
import { LONG_THOUGHTS_PARAGRAPHS, THOUGHTS_CAROUSEL_ITEMS } from '../../../constants';
import SmartImage from '../../../components/SmartImage';

const ThoughtsTimelineV2: React.FC = () => {
  return (
    <section id="thoughts" className="bg-[#fffdf8] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-black/40">Hành trình của Long</p>
            <h2 className="max-w-4xl font-display text-5xl uppercase leading-[1.08] text-[#171717] md:text-7xl">
              Trong ngành Ẩm thực và Đồ uống.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-relaxed text-black/62">
            Những nơi đã qua, những việc đã làm, những người đã gặp, tất thảy đều cho Long những bài học giá trị để tiến bước trên hành trình.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {THOUGHTS_CAROUSEL_ITEMS.map((item, index) => (
            <article key={`${item.title}-${index}`} className="overflow-hidden border border-black/10 bg-white shadow-sm">
              <SmartImage src={item.image} alt={item.title} className="aspect-[4/3] w-full bg-[#f4f1ea]" />
              <div className="p-4">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#5FA7E8]">{item.date || `Mốc ${index + 1}`}</p>
                <h3 className="text-base font-black uppercase leading-tight text-[#151515]">{item.title}</h3>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-black/55">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-black/10 bg-[#151515] p-6 text-white md:p-10 lg:p-14">
          <p className="mb-8 text-[10px] font-black uppercase tracking-[0.24em] text-white/40">Vài lời chia sẻ</p>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <h3 className="font-display text-5xl uppercase leading-[1.08] md:text-7xl">
              Sống cái đã,
              <br />
              mọi chuyện khác
              <br />
              tính sau.
            </h3>
            <div className="space-y-6 text-sm font-semibold leading-relaxed text-white/75 md:text-base">
              {LONG_THOUGHTS_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtsTimelineV2;
