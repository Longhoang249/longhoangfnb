import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === id);
    const otherProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 2);
    const [activeContact, setActiveContact] = useState<'facebook' | 'tiktok' | 'gmail' | 'phone' | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <h1 className="text-4xl font-black mb-4">404</h1>
                <p className="text-gray-500 mb-8">Không tìm thấy gói dịch vụ này.</p>
                <Link to="/" className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">Về trang chủ</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest mb-10 group">
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Quay lại trang chủ
                </Link>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Content - Spans 7 columns */}
                    <div className={`${product.detailedServices ? 'md:col-span-12 max-w-5xl mx-auto' : 'md:col-span-7'} space-y-12 order-2 md:order-1`}>
                        <div>
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">Gói giải pháp chuyên biệt</span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">{product.title}</h1>
                            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-black pl-6">{product.shortDescription}</p>
                        </div>

                        {/* Content Body */}
                        {product.detailedServices ? (
                            <div className="space-y-16">
                                {product.detailedServices.map((service, index) => (
                                    <div key={index} className="scroll-mt-24 group">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform">{index + 1}</div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-black transition-colors">{service.title}</h3>
                                                {/* Description with HTML support for line breaks */}
                                                <div className="text-gray-600 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: service.description }} />
                                            </div>
                                        </div>

                                        {/* Sub-sections Rendering (3.1, 3.2 style) */}
                                        {service.subSections && (
                                            <div className="pl-12 md:pl-14 space-y-12 mt-8">
                                                {service.subSections.map((sub, subIdx) => (
                                                    <div key={subIdx} className="pl-4 border-l-2 border-gray-100 ml-2">
                                                        <h4 className="text-lg md:text-xl font-bold tracking-tight mb-3 flex items-center gap-2">
                                                            <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-500">{index + 1}.{subIdx + 1}</span>
                                                            {sub.title}
                                                        </h4>
                                                        <div className="text-gray-600 leading-relaxed text-base mb-4" dangerouslySetInnerHTML={{ __html: sub.description }} />

                                                        {/* Sub-section Media */}
                                                        <div className="space-y-6">
                                                            {/* Videos */}
                                                            {sub.videos && sub.videos.length > 0 && (
                                                                <div className="flex flex-col gap-6">
                                                                    {sub.videos.map((vid, vIdx) => (
                                                                        <div key={vIdx} className={`shrink-0 ${vid.isVertical ? 'w-full max-w-sm aspect-[9/16]' : 'w-full aspect-video'} bg-black rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100`}>
                                                                            <iframe src={vid.url} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}

                                                            {/* Gallery */}
                                                            {sub.gallery && sub.gallery.length > 0 && (
                                                                <div className={`grid gap-3 ${sub.gallery.length === 1 ? 'grid-cols-1' : sub.gallery.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                                                                    {sub.gallery.map((img, idx) => (
                                                                        <div key={idx} className={`aspect-[4/3] bg-gray-100 rounded-[1rem] overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${idx === 0 && sub.gallery && sub.gallery.length === 3 ? 'md:col-span-3 aspect-[21/9]' : ''}`}>
                                                                            <img src={img} alt={`${sub.title} ${idx}`} className="w-full h-full object-cover" />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Existing Media Rendering (for non-nested sections) */}
                                        {!service.subSections && (
                                            <div className="pl-12 md:pl-14 space-y-6">
                                                {/* Videos if exists */}
                                                {service.videos && service.videos.length > 0 && (
                                                    <div className="flex flex-col gap-6">
                                                        {service.videos.map((vid, vIdx) => (
                                                            <div key={vIdx} className={`shrink-0 ${vid.isVertical ? 'w-full max-w-sm aspect-[9/16]' : 'w-full aspect-video'} bg-black rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100`}>
                                                                <iframe src={vid.url} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Gallery Grid */}
                                                {service.gallery && service.gallery.length > 0 && (
                                                    <div className={`grid gap-3 ${service.gallery.length === 1 ? 'grid-cols-1' : service.gallery.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                                                        {service.gallery.map((img, idx) => (
                                                            <div key={idx} className={`aspect-[4/3] bg-gray-100 rounded-[1rem] overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${idx === 0 && service.gallery && service.gallery.length === 3 ? 'md:col-span-3 aspect-[21/9]' : ''}`}>
                                                                <img src={img} alt={`${service.title} ${idx}`} className="w-full h-full object-cover" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        )}

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-xl font-bold mb-6 tracking-tight">Liên hệ với Long</h3>
                            <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-md">
                                <a href="https://www.facebook.com/Long2492/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 group-hover:bg-[#1877F2] transition-colors flex items-center justify-center">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </div>
                                </a>

                                <a href="https://www.tiktok.com/@long.moquancaphe" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 group-hover:bg-black transition-colors flex items-center justify-center">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                    </div>
                                </a>

                                <button onClick={() => setActiveContact('gmail')} className={`aspect-square rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'gmail' ? 'ring-2 ring-black transform -translate-y-1 shadow-xl' : ''}`}>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 group-hover:bg-red-500 transition-colors flex items-center justify-center">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                    </div>
                                </button>

                                <button onClick={() => setActiveContact('phone')} className={`aspect-square rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'phone' ? 'ring-2 ring-black transform -translate-y-1 shadow-xl' : ''}`}>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 group-hover:bg-green-500 transition-colors flex items-center justify-center">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.28 1.12.27 2.33.39 3.57.39.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.13 2.45.4 3.57.08.35-.01.74-.29 1.02l-2.2 2.2z" /></svg>
                                    </div>
                                </button>
                            </div>

                            {activeContact === 'gmail' && (
                                <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-[2rem] shadow-inner border border-gray-100 animate-fadeIn relative overflow-hidden">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Gmail</p>
                                    <div className="text-lg md:text-xl font-bold tracking-tight mb-6 break-all">Long2492000@gmail.com</div>
                                    <button onClick={() => navigator.clipboard.writeText('Long2492000@gmail.com')} className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg w-fit">
                                        Sao chép
                                    </button>
                                </div>
                            )}

                            {activeContact === 'phone' && (
                                <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-[2rem] shadow-inner border border-gray-100 animate-fadeIn relative overflow-hidden">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Phone / Zalo</p>
                                    <div className="text-lg md:text-xl font-bold tracking-tight mb-6">0528 442 530</div>
                                    <button onClick={() => navigator.clipboard.writeText('0528442530')} className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg w-fit">
                                        Sao chép
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Media Gallery - Spans 5 columns - Only show if not detailed view OR supplement */}
                    {!product.detailedServices && (
                        <div className="md:col-span-5 space-y-8 order-1 md:order-2">
                            {/* ... (Existing Media Gallery Code) ... */}
                            {/* Main Image */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                                <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            {/* Videos if available */}
                            {product.videos && product.videos.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Video thực tế</h3>
                                    <div className="space-y-4">
                                        {product.videos.map((video, idx) => (
                                            <div key={idx} className="aspect-video bg-black rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
                                                <iframe src={video} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Additional Images */}
                            {product.gallery && product.gallery.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Hình ảnh dự án</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {product.gallery.map((img, idx) => (
                                            <div key={idx} className="aspect-square bg-gray-100 rounded-[2rem] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 group cursor-pointer">
                                                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>


            {/* Related Products */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tighter mb-2">Các gói dịch vụ khác</h2>
                    <div className="w-1 h-1 rounded-full bg-black mx-auto opacity-20"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {otherProducts.map((p) => (
                        <Link to={`/product/${p.id}`} key={p.id} className="group bg-gray-50 rounded-[2rem] p-4 flex gap-6 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] bg-gray-200 overflow-hidden flex-shrink-0">
                                <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center py-2 pr-4">
                                <h4 className="text-lg font-bold mb-2 group-hover:text-black transition-colors">{p.title}</h4>
                                <p className="text-xs text-gray-400 line-clamp-2 mb-3">{p.shortDescription}</p>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-black transition-colors flex items-center gap-1">
                                    Xem chi tiết <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <footer className="py-10 border-t border-gray-100 px-6 bg-white mt-12 md:mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"><div className="text-lg font-bold tracking-tighter uppercase">DUYLONG<span className="text-gray-400">.F&B</span></div><div className="text-gray-300 text-[10px] uppercase tracking-widest font-bold">© 2024 Hoang Duy Long</div></div>
            </footer>
        </div >
    );
};

export default ProductDetail;
