import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, PRODUCTS } from '../../../constants';

const OfferingsContactV2: React.FC = () => {
  return (
    <>
      <section id="offerings" className="bg-[#fffaf3] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-black/40">Long bán gì không?</p>
              <h2 className="font-display text-5xl uppercase leading-[1.08] text-[#171717] md:text-7xl">
                Long có
                <br />
                Đây là các gói.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-relaxed text-black/62">
              Đây là các dịch vụ Long đang cung cấp: ứng dụng F&B ăn liền và marketing tổng thể cho quán.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {PRODUCTS.map((product, index) => (
              <article key={product.id} className="border border-black/10 bg-white p-6 shadow-sm md:p-8" style={{ borderTop: `6px solid ${index === 0 ? '#5FA7E8' : '#5DB872'}` }}>
                <p className="mb-6 font-display text-7xl leading-none text-black/[0.06]">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-4xl uppercase leading-[1.08] text-[#151515] md:text-5xl">{product.title}</h3>
                <p className="mt-6 text-base font-semibold leading-relaxed text-black/58">{product.shortDescription}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {product.id === 'goi-dong-goi-thuong-hieu' ? (
                    <a href="https://app.fnbanlien.com/" target="_blank" rel="noopener noreferrer" className="bg-[#151515] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-[#5FA7E8]">
                      Khám phá ứng dụng →
                    </a>
                  ) : (
                    <Link to={`/product/${product.id}`} className="bg-[#151515] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-[#5DB872]">
                      Xem chi tiết →
                    </Link>
                  )}
                  <a href="#contact" className="border border-black/10 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-black/65 transition hover:bg-black hover:text-white">
                    Cần gói riêng?
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-[#f4f1ea] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-black/40">Blog của Long</p>
              <h2 className="font-display text-5xl uppercase leading-[1.08] text-[#171717] md:text-7xl">Đang khóa nhẹ.</h2>
            </div>
            <p className="max-w-xl text-sm font-semibold leading-relaxed text-black/55">Một vài ý tưởng bài viết Long đã lưu lại, nhưng khu blog vẫn chưa mở chính thức.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="relative overflow-hidden border border-black/10 bg-white p-5 opacity-55 blur-[1px]">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.14em] text-black/35">{post.date} · {post.readTime}</p>
                <h3 className="text-xl font-black uppercase leading-tight text-[#151515]">{post.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-black/50">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-bold italic text-black/45">Long lười quá nên chưa viết gì.</p>
        </div>
      </section>

      <section id="contact" className="bg-[#151515] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-white/40">Kết bạn với Long</p>
            <h2 className="font-display text-5xl uppercase leading-[1.08] md:text-7xl">
              Biết đâu
              <br />
              chúng ta có thể
              <br />
              đồng hành.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="https://www.facebook.com/Long2492/" target="_blank" rel="noopener noreferrer" className="border border-white/10 bg-white/7 px-4 py-5 text-sm font-black uppercase tracking-[0.12em] text-white/75 transition hover:bg-[#1877F2] hover:text-white md:px-5 md:tracking-[0.14em]">Facebook →</a>
            <a href="https://www.tiktok.com/@long.moquancaphe" target="_blank" rel="noopener noreferrer" className="border border-white/10 bg-white/7 px-4 py-5 text-sm font-black uppercase tracking-[0.12em] text-white/75 transition hover:bg-white hover:text-black md:px-5 md:tracking-[0.14em]">TikTok →</a>
            <a href="mailto:Long2492000@gmail.com" className="break-all border border-white/10 bg-white/7 px-4 py-5 text-sm font-black uppercase tracking-[0.08em] text-white/75 transition hover:bg-[#F28A45] hover:text-white md:px-5 md:tracking-[0.14em]">Long2492000@gmail.com</a>
            <a href="tel:0528442530" className="border border-white/10 bg-white/7 px-4 py-5 text-sm font-black uppercase tracking-[0.12em] text-white/75 transition hover:bg-[#5DB872] hover:text-white md:px-5 md:tracking-[0.14em]">0528 442 530</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferingsContactV2;
