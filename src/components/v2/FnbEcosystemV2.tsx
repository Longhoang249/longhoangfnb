import React from 'react';

type Product = {
  index: string;
  phase: string;
  domain: string;
  href: string;
  title: string;
  description: string;
  benefits: string[];
  accent: string;
  image?: string;
  imageAlt?: string;
  visual: 'screen' | 'play';
};

const products: Product[] = [
  {
    index: '01',
    phase: 'Tìm & kéo khách',
    domain: 'fnbanlien.com',
    href: 'https://fnbanlien.com/',
    title: 'Marketing AI cho chủ quán',
    description:
      'Biến DNA thương hiệu thành nội dung, hình ảnh và kế hoạch marketing đủ rõ để một đội ngũ nhỏ vẫn có thể làm đều mỗi ngày.',
    benefits: ['Ra nội dung nhanh hơn, ít phụ thuộc agency', 'Giữ thương hiệu nhất quán trên mọi điểm chạm', 'Chủ động kế hoạch và ý tưởng kéo khách'],
    accent: '#F28A45',
    image: '/ecosystem/fnbanlien-marketing.jpg',
    imageAlt: 'Màn hình tổng quan các công cụ Marketing AI trên fnbanlien.com',
    visual: 'screen',
  },
  {
    index: '02',
    phase: 'Loyalty & giữ chân',
    domain: 'play.fnbanlien.com',
    href: 'https://play.fnbanlien.com/',
    title: 'Nuôi dưỡng loyalty, tăng lượt quay lại',
    description:
      'Tạo vòng lặp từ mua hàng, tích Xu, đổi ưu đãi đến quay lại quán. Game và nhiệm vụ là những điểm chạm bổ trợ để hành trình loyalty vui hơn.',
    benefits: ['Tăng tỷ lệ khách quay lại quán', 'Tạo vòng lặp tích điểm – đổi quà rõ ràng', 'Có dữ liệu để tiếp tục chăm sóc khách hàng'],
    accent: '#72D6FF',
    visual: 'play',
  },
  {
    index: '03',
    phase: 'Nhân sự & vận hành',
    domain: 'run.fnbanlien.com',
    href: 'https://run.fnbanlien.com/',
    title: 'Biến tiêu chuẩn thành hành động',
    description:
      'Đưa SOP vào từng ca làm, giao đúng việc, thu bằng chứng và nhìn thấy ngoại lệ để chủ quán quản lý bằng dữ liệu thay vì trí nhớ.',
    benefits: ['Giảm phụ thuộc vào việc chủ quán có mặt', 'Nhân viên biết đúng việc, đúng chuẩn mỗi ca', 'Phát hiện sớm chậm trễ và điểm yếu đội ngũ'],
    accent: '#82D9B6',
    image: '/ecosystem/fnbanlien-run.jpg',
    imageAlt: 'Dashboard vận hành và sức khoẻ đội ngũ trên run.fnbanlien.com',
    visual: 'screen',
  },
];

const FnbEcosystemV2: React.FC = () => {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#151515] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#5FA7E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-[#F28A45]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
              <span className="h-2 w-2 bg-[#72D6FF]" />
              Sản phẩm đang phát triển
            </p>
            <h2 className="font-display text-5xl uppercase leading-[1.02] sm:text-6xl md:text-8xl">
              Hệ sinh thái
              <br />
              <span className="text-[#72D6FF]">FNB Ăn Liền.</span>
            </h2>
          </div>

          <div className="border-l-4 border-[#72D6FF] pl-5 md:pl-7">
            <p className="text-xl font-black leading-snug md:text-2xl">
              Một vòng lặp xuyên suốt từ khách mới đến một quán có thể tự vận hành tốt hơn.
            </p>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-white/50 md:text-base">
              Long đang xây ba sản phẩm cho những bài toán sát sườn nhất của quán F&amp;B: thu hút khách, giữ chân khách và biến tiêu chuẩn vận hành thành việc làm mỗi ngày.
            </p>
          </div>
        </div>

        <div className="mb-7 grid grid-cols-3 border border-white/10 bg-white/[0.035]">
          {products.map((product, index) => (
            <div key={product.domain} className={`relative px-3 py-4 text-center md:px-6 md:py-5 ${index < products.length - 1 ? 'border-r border-white/10' : ''}`}>
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-white/45 md:text-[11px] md:tracking-[0.18em]">{product.phase}</p>
              {index < products.length - 1 && <span className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 bg-[#151515] px-1 text-sm text-white/35 md:-right-3 md:text-xl">→</span>}
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.domain} className="group flex min-h-full flex-col overflow-hidden border border-white/10 bg-[#1d1d1d] transition duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ececec]">
                {product.visual === 'play' ? (
                  <PlayVisual />
                ) : (
                  <>
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                  </>
                )}

                <span className="absolute left-4 top-4 border border-white/20 bg-black/70 px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {product.phase}
                </span>
                <span className="absolute bottom-3 right-4 font-display text-7xl leading-none text-white/85 drop-shadow-lg">{product.index}</span>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6" style={{ borderTop: `6px solid ${product.accent}` }}>
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: product.accent }}>
                  {product.domain}
                </p>
                <h3 className="font-display text-4xl uppercase leading-[1.08] text-white md:text-[2.7rem]">{product.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-white/55">{product.description}</p>

                <div className="mt-6">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/35">Lợi ích cho chủ quán</p>
                  <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 border border-white/8 bg-white/[0.035] px-3 py-3 text-xs font-bold leading-relaxed text-white/72">
                      <span className="mt-1 h-2 w-2 shrink-0" style={{ backgroundColor: product.accent }} />
                      {benefit}
                    </li>
                  ))}
                  </ul>
                </div>

                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-between border px-4 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[#151515] focus-visible:bg-[var(--accent)] focus-visible:text-[#151515]"
                  style={{ borderColor: `${product.accent}66`, '--accent': product.accent } as React.CSSProperties}
                >
                  Mở sản phẩm
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-4 border border-white/10 bg-white/[0.035] p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-white/55">
            Mục tiêu không phải thêm thật nhiều công cụ. Mục tiêu là nối dữ liệu và hành động để mỗi quán nhỏ có một hệ thống đủ dùng, dễ học và bám sát thực tế.
          </p>
          <p className="shrink-0 font-display text-2xl uppercase tracking-wide text-white md:text-3xl">
            Kéo khách <span className="text-white/25">→</span> Giữ khách <span className="text-white/25">→</span> Vận hành
          </p>
        </div>
      </div>
    </section>
  );
};

const PlayVisual = () => (
  <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_right,#8be0ff_0,#5dbce7_35%,#256e98_100%)] p-4 pt-14">
    <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
    <div className="relative mx-auto flex h-full max-w-[330px] flex-col rounded-t-[1.6rem] border-[5px] border-[#2b211f] bg-[#fffaf0] px-4 pt-4 shadow-2xl transition duration-700 group-hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#8e6f34]">Thành viên của quán</p>
          <p className="mt-1 text-xl font-black text-[#38251f]">2.480 Xu</p>
        </div>
        <span className="rounded-full bg-[#ffe594] px-2 py-1 text-[8px] font-black text-[#6b4d00]">Hạng vàng</span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-1">
        {['Mua hàng', 'Tích Xu', 'Đổi quà', 'Quay lại'].map((step, index) => (
          <div key={step} className="relative rounded-lg bg-white px-1 py-2 text-center shadow-sm">
            <span className="mx-auto mb-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#72D6FF] text-[8px] font-black text-[#17384a]">{index + 1}</span>
            <p className="text-[7px] font-black leading-tight text-[#38251f]">{step}</p>
            {index < 3 && <span className="absolute -right-1.5 top-1/2 z-10 -translate-y-1/2 text-[8px] text-[#38251f]/40">→</span>}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#38251f] px-3 py-2 text-white">
        <div>
          <p className="text-[7px] font-bold text-white/55">Sắp nhận được</p>
          <p className="text-[9px] font-black">Voucher ưu đãi</p>
        </div>
        <span className="rounded-lg bg-[#ffca4b] px-2 py-1.5 text-[8px] font-black text-[#38251f]">Đổi quà</span>
      </div>

      <p className="mt-2 text-center text-[7px] font-bold text-[#38251f]/45">Game &amp; nhiệm vụ là điểm chạm bổ trợ trong vòng lặp loyalty</p>
    </div>
  </div>
);

export default FnbEcosystemV2;
