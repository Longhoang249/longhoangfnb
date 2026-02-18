import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants';
import BrandPackagingQuiz from '../components/BrandPackagingQuiz';
import BrandPackagingLayout from '../components/BrandPackagingLayout';
import BrandPackagingPage from '../components/BrandPackagingPage';
import SmartImage from '../../components/SmartImage';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === id);

    const [activeContact, setActiveContact] = useState<'facebook' | 'tiktok' | 'gmail' | 'phone' | null>(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

    // Render dedicated Brand Packaging page
    if (product.id === 'goi-dong-goi-thuong-hieu') {
        return <BrandPackagingPage />;
    }

    return (
        <div className="min-h-screen bg-white font-sans animate-fadeIn">
            <div className="max-w-[1920px] mx-auto px-8 lg:px-16 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest mb-10 group">
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Quay lại trang chủ
                </Link>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Content - Spans 7 columns */}
                    <div className={`${product.detailedServices ? 'md:col-span-12 max-w-7xl mx-auto' : 'md:col-span-7'} space-y-8 md:space-y-12 order-2 md:order-1`}>
                        {/* HERO SECTION - Minimalist */}
                        <div className="relative py-10 md:py-16 flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
                                Gói giải pháp chuyên biệt
                            </span>

                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-gray-900 mb-6 text-balance">
                                {product.title}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
                                {product.shortDescription}
                            </p>

                            <div className="w-16 h-px bg-gray-200 mt-12"></div>
                        </div>

                        {/* Content Body */}
                        {product.detailedServices ? (
                            <div className="w-full">
                                {product.detailedServices.map((service, index) => (
                                    <div key={index} className={`py-12 md:py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className={`mx-auto px-6 ${service.type === 'text' || service.type === 'comparison' ? 'max-w-7xl' : 'max-w-3xl'}`}>

                                            {/* Section Header - Skip for 'text' and 'comparison' type to render custom layout */}
                                            {service.type !== 'intro' && service.type !== 'text' && (
                                                <div className="mb-12 md:mb-16">
                                                    <div className="flex flex-col gap-4 mb-6">
                                                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 text-balance">
                                                            {service.title}
                                                        </h3>
                                                    </div>
                                                    {/* Skip description for 'text' type since it renders in its own block */}
                                                    {service.description && (service.type as string) !== 'text' && (
                                                        <p className="text-lg text-gray-600 font-medium leading-relaxed text-pretty">{service.description}</p>
                                                    )}

                                                    {/* Consistent Section Image (Placeholder if needed) - Skip for FAQ & Comparison */}
                                                    {service.type !== 'faq' && (service.type as string) !== 'text' && service.type !== 'comparison' && (
                                                        <div className="mt-8 mb-12 rounded-2xl overflow-hidden shadow-sm aspect-[21/9] bg-gray-100">
                                                            <SmartImage
                                                                src={service.image || `https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200&idx=${index}`}
                                                                alt={service.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* RENDER BASED ON TYPE */}

                                            {/* --- TYPE: GRID → Blog Style Text + Image --- */}
                                            {service.type === 'grid' && service.items && (
                                                <div className="space-y-12">
                                                    {service.items.map((item, idx) => (
                                                        <div key={idx} className="border-b border-gray-100 pb-10 last:border-b-0">
                                                            <div className="flex items-start gap-4 mb-4">
                                                                {item.icon && <span className="text-2xl">{item.icon}</span>}
                                                                <div>
                                                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                                                                    {item.subtitle && <p className="text-sm text-gray-400 font-medium">{item.subtitle}</p>}
                                                                </div>
                                                            </div>
                                                            {item.description && (
                                                                <div className="text-gray-600 leading-relaxed prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                            )}
                                                            {item.image && (
                                                                <div className="mt-6 rounded-xl overflow-hidden">
                                                                    <SmartImage src={item.image} alt={item.title} className="w-full h-auto" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* --- TYPE: TIMELINE → Simple Numbered List --- */}
                                            {service.type === 'timeline' && service.items && (
                                                <div className="space-y-8">
                                                    {service.items.map((item, idx) => (
                                                        <div key={idx} className="flex gap-6">
                                                            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                                {idx + 1}
                                                            </div>
                                                            <div className="flex-1 pb-8 border-b border-gray-100 last:border-b-0">
                                                                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                                                <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* --- TYPE: PRICING → Clean Cards --- */}
                                            {service.type === 'pricing' && service.items && (
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    {service.items.map((item, idx) => (
                                                        <div key={idx} className={`p-8 rounded-2xl border ${item.isFeatured ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white'}`}>
                                                            {item.isFeatured && (
                                                                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Đề xuất</span>
                                                            )}
                                                            <div className="text-sm font-medium text-gray-400 mb-2">{item.title}</div>
                                                            <div className="text-4xl font-black tracking-tight mb-2">{item.price}</div>
                                                            <div className={`text-sm ${item.isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>{item.subtitle}</div>
                                                            <div className={`mt-6 pt-6 border-t ${item.isFeatured ? 'border-gray-700' : 'border-gray-100'}`}>
                                                                <p className={`text-sm ${item.isFeatured ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* --- TYPE: COMPARISON → Interactive Quiz for first section, Enhanced Cards for others --- */}
                                            {service.type === 'comparison' && (
                                                <>
                                                    {/* Show Quiz only for first section (index === 0) of brand-packaging product */}
                                                    {product.id === 'goi-dong-goi-thuong-hieu' && index === 0 ? (
                                                        <BrandPackagingQuiz />
                                                    ) : service.title?.includes('Cam Kết') ? (
                                                        /* Minimalist Card Style for Commitments - Full Width */
                                                        <div className="grid md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
                                                            {service.items?.map((item, idx) => {
                                                                // Clean title - remove emoji
                                                                const cleanTitle = item.title?.replace(/^[\p{Emoji}\s]+/u, '').trim();

                                                                return (
                                                                    <div
                                                                        key={idx}
                                                                        className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all"
                                                                    >
                                                                        {/* Title */}
                                                                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                                                                            {cleanTitle}
                                                                        </h4>

                                                                        {/* Content items - simple paragraphs */}
                                                                        <div className="space-y-3">
                                                                            {item.lists?.map((li, i) => (
                                                                                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                                                                                    {li}
                                                                                </p>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : service.items ? (
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            {service.items.map((item, idx) => {
                                                                const isPositive = item.title?.includes('✅') || idx === 0;
                                                                return (
                                                                    <div
                                                                        key={idx}
                                                                        className={`p-6 rounded-2xl transition-all hover:shadow-lg ${isPositive
                                                                            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200'
                                                                            : 'bg-white border-2 border-gray-200'
                                                                            }`}
                                                                    >
                                                                        <div className="flex items-center gap-3 mb-6">
                                                                            <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md ${isPositive
                                                                                ? 'bg-green-500 text-white'
                                                                                : 'bg-gray-100 text-gray-500'
                                                                                }`}>
                                                                                {isPositive ? '✓' : '✗'}
                                                                            </span>
                                                                            <h4 className="text-lg font-bold text-gray-900">
                                                                                {item.title?.replace(/[✅❌]/g, '').trim()}
                                                                            </h4>
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            {item.lists?.map((li, i) => (
                                                                                <div
                                                                                    key={i}
                                                                                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${isPositive ? 'bg-white/70 hover:bg-white' : 'bg-gray-50 hover:bg-gray-100'
                                                                                        }`}
                                                                                >
                                                                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPositive ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                                                                                        }`}>
                                                                                        {isPositive ? (
                                                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                                            </svg>
                                                                                        ) : (
                                                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                                            </svg>
                                                                                        )}
                                                                                    </span>
                                                                                    <span className="text-gray-700 text-sm leading-relaxed">{li}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : null}
                                                </>
                                            )}

                                            {/* --- TYPE: FAQ → Accordion Toggle Dropdown --- */}
                                            {service.type === 'faq' && service.items && (
                                                <div className="space-y-3">
                                                    {service.items.map((item, idx) => (
                                                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
                                                            <button
                                                                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                                            >
                                                                <h4 className="font-bold text-base text-gray-900 pr-4">{item.title}</h4>
                                                                <svg
                                                                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                            {openFaqIndex === idx && (
                                                                <div className="px-6 pb-4 pt-1 text-gray-600 leading-relaxed animate-fadeIn">
                                                                    {item.description}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}


                                            {/* --- TYPE: TEXT → Enhanced Layout with BrandPackagingLayout --- */}
                                            {service.type === 'text' && (
                                                <>
                                                    {/* Use BrandPackagingLayout for Phase sections */}
                                                    {product.id === 'goi-dong-goi-thuong-hieu' &&
                                                        (service.title?.includes('Giai đoạn') || service.title === 'Cam kết của Long' || service.title === 'Sẵn sàng bắt đầu?') ? (
                                                        <BrandPackagingLayout service={service as any} index={index} />
                                                    ) : (
                                                        <div className={`grid md:grid-cols-12 gap-12 lg:gap-16 items-start ${service.image ? '' : 'max-w-4xl mx-auto'}`}>

                                                            {/* Text Column */}
                                                            <div className={`${service.image ? 'md:col-span-7' : 'md:col-span-12'} space-y-6 ${index % 2 !== 0 && service.image ? 'md:order-2' : 'md:order-1'}`}>

                                                                {/* Custom Title rendering for Text type */}
                                                                {service.title && (
                                                                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4 text-balance">
                                                                        {service.title}
                                                                    </h3>
                                                                )}

                                                                {/* Narrative Description - improved readability */}
                                                                {service.description && (
                                                                    <div
                                                                        className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: service.description
                                                                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                                                                                .replace(/\n\n---\n\n/g, '<hr class="my-6 border-gray-200"/>')
                                                                                .replace(/\n\n/g, '</p><p class="mt-4">')
                                                                                .replace(/\n•/g, '</p><div class="flex items-start gap-3 mt-2"><span class="text-gray-400 shrink-0">•</span><span>')
                                                                                .replace(/•/g, '</span></div><div class="flex items-start gap-3 mt-2"><span class="text-gray-400 shrink-0">•</span><span>')
                                                                        }}
                                                                    />
                                                                )}

                                                                {/* Deliverables Note Card - Grid Layout */}
                                                                {service.note && (
                                                                    <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-200 shadow-lg">
                                                                        <h5 className="text-base font-black text-blue-900 mb-6 flex items-center gap-3">
                                                                            <span className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-md text-lg">
                                                                                ✨
                                                                            </span>
                                                                            {service.note.title}
                                                                        </h5>
                                                                        <div className="grid sm:grid-cols-2 gap-3">
                                                                            {service.note.items.map((item, i) => (
                                                                                <div
                                                                                    key={i}
                                                                                    className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
                                                                                >
                                                                                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {/* Image Column */}
                                                            {service.image && (
                                                                <div className={`md:col-span-5 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                                                                    <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sticky top-24">
                                                                        <SmartImage
                                                                            src={service.image}
                                                                            alt={service.title}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            {/* --- TYPE: CHECKLIST → Clean Summary --- */}
                                            {service.type === 'checklist' && service.items && (
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    {service.items.map((item, idx) => (
                                                        <div key={idx} className="p-6 bg-gray-50 rounded-xl">
                                                            <h4 className="text-lg font-bold mb-4 text-gray-900">{item.title}</h4>
                                                            <ul className="space-y-2">
                                                                {item.lists?.map((li, i) => (
                                                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                                                        <span className="text-green-500 mt-1">✓</span>
                                                                        <span>{li}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* --- DEFAULT / CHECKLIST --- */}
                                            {(!service.type || service.type === 'default') && (
                                                <div>
                                                    {!service.subSections && (
                                                        <div>
                                                            <div className="text-gray-600 leading-relaxed text-xl space-y-6 max-w-4xl" dangerouslySetInnerHTML={{ __html: service.description || '' }} />

                                                            {/* Videos if exists */}
                                                            {service.videos && service.videos.length > 0 && (
                                                                <div className="flex flex-col gap-12 mt-16">
                                                                    {service.videos.map((vid, vIdx) => (
                                                                        <div key={vIdx} className={`shrink-0 ${vid.isVertical ? 'w-full max-w-sm ml-auto mr-auto aspect-[9/16]' : 'w-full aspect-video'} bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl`}>
                                                                            <iframe src={vid.url} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}

                                                            {/* Gallery Grid */}
                                                            {service.gallery && service.gallery.length > 0 && (
                                                                <div className={`grid gap-6 mt-16 ${service.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                                                    {service.gallery.map((img, idx) => (
                                                                        <div key={idx} className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500">
                                                                            <SmartImage src={img} alt={`${service.title} ${idx}`} className="w-full h-full object-cover" />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Sub-sections Rendering */}
                                                    {service.subSections && (
                                                        <div className="space-y-24 mt-20">
                                                            {service.subSections.map((sub, subIdx) => (
                                                                <div key={subIdx} className="grid md:grid-cols-12 gap-10">
                                                                    <div className="md:col-span-4">
                                                                        <div className="sticky top-24">
                                                                            <h4 className="text-2xl font-bold mb-4">{sub.title}</h4>
                                                                            <div className="h-1 w-12 bg-black rounded-full mb-4"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="md:col-span-8 space-y-8">
                                                                        <div className="text-gray-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: sub.description || '' }} />

                                                                        {sub.gallery && sub.gallery.length > 0 && (
                                                                            <div className="grid grid-cols-2 gap-4">
                                                                                {sub.gallery.map((img, idx) => (
                                                                                    <div key={idx} className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                                                                                        <SmartImage src={img} alt="" className="w-full h-full object-cover" />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        {sub.videos && (
                                                                            <div className="grid grid-cols-2 gap-4">
                                                                                {sub.videos.map((vid, vidIdx) => (
                                                                                    <div key={vidIdx} className="aspect-video bg-black rounded-2xl overflow-hidden">
                                                                                        <iframe src={vid.url} className="w-full h-full" allowFullScreen></iframe>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
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

                        <div className="mt-16 text-center">
                            <Link to="/" className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-black text-gray-500 hover:text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 group shadow-sm hover:shadow-lg">
                                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                Quay lại trang chủ
                            </Link>
                        </div>
                    </div>

                    {/* Right: Media Gallery - Spans 5 columns - Only show if not detailed view OR supplement */}
                    {!product.detailedServices && (
                        <div className="md:col-span-5 space-y-8 order-1 md:order-2">
                            {/* ... (Existing Media Gallery Code) ... */}
                            {/* Main Image */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                                <SmartImage src={product.thumbnail} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                                                <SmartImage src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>




            <footer className="py-10 border-t border-gray-100 px-6 bg-white mt-12 md:mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"><div className="text-lg font-bold tracking-tighter uppercase">LONGHOANG<span className="text-gray-400">.FnB</span></div><div className="text-gray-300 text-[10px] uppercase tracking-widest font-bold">© 2026 Hoang Duy Long</div></div>
            </footer>
        </div >
    );
};

export default ProductDetail;
