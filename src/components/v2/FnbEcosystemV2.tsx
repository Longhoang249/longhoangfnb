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
  image: string;
  imageAlt: string;
  visualBg: string;
};

const products: Product[] = [
  {
    index: '01',
    phase: 'Marketing online',
    domain: 'fnbanlien.com',
    href: 'https://fnbanlien.com/',
    title: 'Làm marketing quán ở bất cứ đâu',
    description:
      'Từ ý tưởng đến content, hình ảnh và lịch marketing đều có thể thực hiện ngay trên điện thoại, theo đúng DNA của quán.',
    benefits: ['Chủ động làm marketing ngay trên điện thoại', 'Ra nội dung nhanh hơn, ít phụ thuộc agency', 'Giữ thương hiệu nhất quán để kéo khách'],
    accent: '#F28A45',
    image: '/ecosystem/fnbanlien-marketing-mobile.jpg',
    imageAlt: 'Giao diện mobile thật của bộ công cụ Marketing AI trên fnbanlien.com',
    visualBg: '#efe8df',
  },
  {
    index: '02',
    phase: 'Chăm khách online',
    domain: 'play.fnbanlien.com',
    href: 'https://play.fnbanlien.com/',
    title: 'Chăm khách cũ và nuôi dưỡng loyalty',
    description:
      'Đưa chương trình thành viên lên online để khách xem Xu, đổi ưu đãi và có thêm lý do quay lại. Game chỉ là một điểm chạm bổ trợ trong vòng lặp loyalty.',
    benefits: ['Tạo vòng lặp tích điểm – đổi quà rõ ràng', 'Có dữ liệu để tiếp tục chăm sóc khách hàng', 'Tăng tỷ lệ khách quay lại quán'],
    accent: '#72D6FF',
    image: '/ecosystem/fnbanlien-play-mobile.jpg',
    imageAlt: 'Giao diện mobile thật của chương trình loyalty Đảo Matcha Hải Dương trên Fnbanlien Play',
    visualBg: '#e9d9cb',
  },
  {
    index: '03',
    phase: 'Vận hành từ xa',
    domain: 'run.fnbanlien.com',
    href: 'https://run.fnbanlien.com/',
    title: 'Theo dõi quán khi không có mặt',
    description:
      'Theo dõi công việc, lịch ca, sức khỏe đội ngũ và các điểm nóng vận hành ngay trên điện thoại, dù chủ quán đang ở bất cứ đâu.',
    benefits: ['Giảm phụ thuộc vào việc chủ quán có mặt', 'Nhân viên biết đúng việc, đúng chuẩn mỗi ca', 'Phát hiện sớm chậm trễ và điểm yếu đội ngũ'],
    accent: '#82D9B6',
    image: '/ecosystem/fnbanlien-run-mobile.jpg',
    imageAlt: 'Giao diện mobile thật của dashboard vận hành và sức khỏe đội ngũ trên run.fnbanlien.com',
    visualBg: '#efe9e3',
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
              Hệ sinh thái FNB Ăn Liền
            </p>
            <h2 className="font-display text-5xl uppercase leading-[1.02] sm:text-6xl md:text-8xl">
              Cả quán trong
              <br />
              <span className="text-[#72D6FF]">một chiếc điện thoại.</span>
            </h2>
          </div>

          <div className="border-l-4 border-[#72D6FF] pl-5 md:pl-7">
            <p className="text-xl font-black leading-snug md:text-2xl">
              Quản lý những việc quan trọng của quán online, kể cả khi bạn không có mặt tại quán.
            </p>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-white/50 md:text-base">
              Từ làm marketing, chăm sóc khách cũ đến giao việc và theo dõi đội ngũ — ba sản phẩm được thiết kế để chủ quán có thể nhìn, làm và kiểm soát ngay trên điện thoại.
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
              <div className="relative aspect-[4/5] overflow-hidden p-4 md:p-5" style={{ backgroundColor: product.visualBg }}>
                <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="relative mx-auto h-full w-auto rounded-[1.65rem] border-[7px] border-[#211b19] object-contain shadow-2xl transition duration-700 group-hover:-translate-y-1 group-hover:scale-[1.015]"
                  loading="lazy"
                />

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
            Mục tiêu không phải thêm thật nhiều phần mềm. Mục tiêu là để chủ quán mở điện thoại lên và biết hôm nay cần làm gì để có khách, giữ khách và giữ quán chạy đúng chuẩn.
          </p>
          <p className="shrink-0 font-display text-2xl uppercase tracking-wide text-white md:text-3xl">
            Marketing <span className="text-white/25">→</span> Loyalty <span className="text-white/25">→</span> Vận hành
          </p>
        </div>
      </div>
    </section>
  );
};

export default FnbEcosystemV2;
