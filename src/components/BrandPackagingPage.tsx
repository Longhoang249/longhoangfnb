import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmartImage from '../../components/SmartImage';

const BrandPackagingPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [activeContact, setActiveContact] = useState<'facebook' | 'tiktok' | 'gmail' | 'phone' | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Load external fonts and icons
        const links = [
            { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap', rel: 'stylesheet' },
            { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
        ];
        const addedLinks: HTMLLinkElement[] = [];
        links.forEach(({ href, rel }) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.href = href;
                link.rel = rel;
                document.head.appendChild(link);
                addedLinks.push(link);
            }
        });
        return () => { addedLinks.forEach(l => l.remove()); };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const faqData = [
        { question: 'Làm việc với Long thế nào?', answer: 'Chúng ta chủ yếu sẽ làm việc online qua Zoom hoặc video call. Nếu anh chị ở Hà Nội, Long có thể qua trực tiếp quán để đồng hành.' },
        { question: 'Bao lâu Long làm xong một gói?', answer: 'Thông thường từ 2-4 tuần tùy theo quy mô và mức độ phức tạp của thương hiệu.' },
        { question: 'Long tính phí như nào?', answer: 'Trò chuyện với Long là miễn phí. Long chỉ báo giá và nhận thanh toán sau khi anh chị đồng ý với phương án Long đưa ra. Giá gói sẽ dao động từ 15 - 30 triệu tuỳ vào đề bài cần giải.' },
        { question: 'Quá trình thanh toán ra sao?', answer: 'Long sẽ nhận 50% thanh toán để bắt đầu đi vào xây dựng Gói cho quán. 50% còn lại sẽ nhận nốt khi Gói hoàn thiện và sẵn sàng bàn giao.' },
        { question: 'Nếu Long không làm đúng như đã nói?', answer: 'Trong quá trình đồng hành cho tới trước khi hoàn tất bàn giao, chủ quán có thể dừng hợp tác bất kỳ lúc nào và nhận lại toàn bộ tiền cọc mà không cần lý do. (Việc đặt cọc chỉ như một phần tăng cam kết cho đôi bên. Long sẽ trân trọng những người phù hợp với mình hơn là cố gắng chiều lòng tất cả).' },
    ];

    return (
        <div className="bg-white text-gray-700 antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
            <style>{`
                .glass-panel {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }
                .font-serif-display {
                    font-family: 'Playfair Display', serif;
                }
                html { scroll-behavior: smooth; }
            `}</style>

            {/* NAV */}
            <nav className="fixed top-0 w-full z-50 glass-panel px-6 py-4 flex justify-between items-center border-b border-black/5">
                <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                    <Link to="/" className="text-gray-900 font-serif-display italic text-xl font-bold tracking-tight">LH.</Link>
                    <Link to="/" className="text-gray-900 hover:text-[#B87333] transition-colors">
                        <span className="material-icons">arrow_back</span>
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative h-screen flex flex-col justify-end pb-20 pt-28 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <SmartImage
                        className="w-full h-full object-cover brightness-[0.85] grayscale-[0.1]"
                        alt="Bright minimalist cafe interior architecture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_kVZdb2O5xBQ_SXBd2y0VPXVb78kKJseaY_LXNlDqwmoiJdDWE9LN8_GAvh8GgOPIbP_tnnx36S26-jEtSIi3payXLPgEEfIZjA1vz2hjYFIheJm5OkpigUxKoWD98SmywTcx1gmBHJRc9KT44c5VJVAaEUftAUDKHfBn-fbs4PcFOZQbv-hkzrKOHQymFyGyfvQ2XpkSw8Z0APzNqY5BiFkO7CGLaQNn3j_eEIAqBWPvDmGXOqL_q-0-3-UxQVLqfKkPiuzQxEgJ"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                </div>
                <div className="relative z-10 space-y-5 max-w-5xl mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-[#B87333]"></div>
                        <span className="text-[#B87333] tracking-[0.2em] text-xs font-bold uppercase">Chủ quán tự tay</span>
                    </div>
                    <h1 className="text-gray-900 font-serif-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
                        <span className="whitespace-nowrap">LÀM MARKETING</span> <br />
                        <span className="italic font-normal text-gray-600 whitespace-nowrap">Cho Quán của Mình</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-sm md:max-w-xl font-light leading-relaxed border-l-2 border-[#B87333]/30 pl-4">
                        "Tôi có sản phẩm tốt, không gian đẹp, nhưng khách hàng vẫn không nhớ tôi là ai giữa hàng ngàn thương hiệu khác..."
                    </p>
                    <p className="text-gray-600 text-lg max-w-sm md:max-w-xl font-light leading-relaxed border-l-2 border-[#B87333]/30 pl-4">
                        "Tôi muốn tự làm marketing nhưng không biết bắt đầu từ đâu,<br />nên đăng cái gì và làm như thế nào..."
                    </p>
                    <div className="flex flex-wrap gap-3 pt-6">
                        {[
                            { label: 'Thông tin gói', href: '#giai-phap' },
                            { label: 'Quy trình hợp tác', href: '#quy-trinh' },
                            { label: 'Sản phẩm nhận về', href: '#san-pham' },
                            { label: 'Q&A', href: '#qa' },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-xs md:text-sm font-medium rounded-full border border-gray-200 text-gray-600 hover:text-[#B87333] hover:bg-[#B87333]/5 hover:border-[#B87333]/50 transition-all duration-300 backdrop-blur-sm bg-white/60"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* GIẢI PHÁP */}
            <section id="giai-phap" className="py-24 px-6 lg:px-8 bg-gray-50 scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Giải Pháp</h2>
                        <h3 className="text-gray-900 font-serif-display text-3xl">Đóng Gói Thương Hiệu <br />& quy trình <br />Marketing Tự Vận Hành</h3>
                        <div className="h-1 w-20 bg-[#B87333]/50 mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-[#B87333]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B87333]/10 transition-colors">
                                <span className="material-icons text-[#B87333] text-3xl">palette</span>
                            </div>
                            <p className="text-gray-600 text-lg font-light leading-relaxed">
                                Xây dựng hệ thống nhận diện thương hiệu thực dụng kèm kế hoạch truyền thông chạy được trong 6
                                tháng.
                            </p>
                        </div>

                        <div className="p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-[#B87333]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B87333]/10 transition-colors">
                                <span className="material-icons text-[#B87333] text-3xl">precision_manufacturing</span>
                            </div>
                            <div className="text-gray-600 text-lg font-light leading-relaxed space-y-4">
                                <p>Bàn giao quy trình marketing tự vận hành với sự hỗ trợ của công cụ AI và tài nguyên marketing đã thiết kế sẵn.</p>
                                <p className="text-base text-gray-500 border-l-2 border-[#B87333]/30 pl-4 py-1">
                                    Chủ quán có thể tự làm truyền thông hoặc đào tạo chính nhân sự quán để thực thi.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NEW VIDEO SECTION */}
                    <div className="mt-12 group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#B87333]/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl border border-black/5 animate-fadeIn">
                            <div className="aspect-video w-full bg-gray-900 flex items-center justify-center">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/S_vG-O8_rNo"
                                    title="LH. Brand Packaging Solution"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ĐỐI TƯỢNG */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Đối Tượng</h2>
                        <h3 className="text-gray-900 font-serif-display text-3xl">Ai cần gói này?</h3>
                        <div className="h-1 w-20 bg-[#B87333]/50 mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: 'storefront', title: 'Chủ quán tự doanh', desc: 'Xây dựng hình ảnh thương hiệu phù hợp, dễ dàng áp dụng, giúp chủ quán tự đăng bài, xây kênh và chia sẻ câu chuyện thương hiệu của mình.' },
                            { icon: 'refresh', title: 'Chủ Quán Tay Trái', desc: 'Chuyển giao quy trình tự làm marketing cho chính nhân sự của quán, giúp mô hình marketing vẫn hoạt động mà không cần chủ quán trực tiếp tham gia.' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                            >
                                <div className="w-12 h-12 bg-[#B87333]/5 rounded flex items-center justify-center mb-6 relative z-10">
                                    <span className="material-icons text-[#B87333] text-2xl">{item.icon}</span>
                                </div>
                                <h4 className="text-gray-900 font-bold text-xl mb-3 tracking-tight relative z-10">{item.title}</h4>
                                <p className="text-gray-600 font-light text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUY TRÌNH */}
            <section id="quy-trinh" className="py-24 bg-gray-50 scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="px-6 lg:px-8 mb-16">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Quy Trình</h2>
                        <h3 className="text-gray-900 font-serif-display text-3xl">3 Giai Đoạn Thực Thi</h3>
                    </div>
                    <div className="space-y-0">
                        {[
                            {
                                num: '01', title: 'Phân tích nội tại thương hiệu',
                                steps: [
                                    { id: '1.1', text: 'Phân tích thị trường, đối thủ cạnh tranh và insight khách hàng mục tiêu.' },
                                    { id: '1.2', text: 'Xác định Brand DNA, tính cách thương hiệu và chiến lược định vị.' },
                                    { id: '1.3', text: 'Xác định nguồn lực và tính thực dụng trong khả năng tự triển khai marketing cho quán để ra kế hoạch phù hợp.' },
                                ]
                            },
                            {
                                num: '02', title: 'Thiết kế hệ thống',
                                steps: [
                                    { id: '2.1', text: 'Xây dựng và đóng gói bộ nhận diện thương hiệu.' },
                                    { id: '2.2', text: 'Xây dựng hệ thống công cụ, biểu bảng, quy trình marketing phù hợp với nguồn lực thương hiệu.' },
                                ]
                            },
                            {
                                num: '03', title: 'Hoàn Thiện & Bàn Giao',
                                steps: [
                                    { id: '3.1', text: 'Hoàn thiện Bộ Nhận Diện Thương Hiệu và Quy Trình Marketing Tự Vận Hành.' },
                                    { id: '3.2', text: 'Đào tạo chuyển giao và hướng dẫn ứng dụng thực tế.' },
                                    { id: '3.3', text: 'Đồng hành ít nhất 6 tháng để hỗ trợ hướng dẫn, tư vấn thực hành sử dụng Gói.' },
                                ]
                            },
                        ].map((phase, idx) => (
                            <div key={idx} className={`relative flex border-t ${idx === 2 ? 'border-y' : ''} border-gray-200 group hover:bg-[#B87333]/[0.02] transition-colors`}>
                                <div className="w-[28%] sticky top-24 h-fit py-8 pl-6 pr-2">
                                    <span className="text-gray-200 font-serif-display text-5xl font-bold group-hover:text-[#B87333]/40 transition-colors">{phase.num}</span>
                                </div>
                                <div className="w-[72%] py-8 pr-6 pl-4 space-y-6 border-l border-gray-200">
                                    <h4 className="text-gray-900 font-bold text-xl uppercase tracking-tight">{phase.title}</h4>
                                    <div className="space-y-4">
                                        {phase.steps.map((step, sIdx) => (
                                            <div key={sIdx} className="flex gap-4 items-start">
                                                <span className="text-[#B87333] font-mono text-sm pt-1">{step.id}</span>
                                                <p className="text-gray-600 text-sm">{step.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DELIVERABLES */}
            <section id="san-pham" className="py-24 px-6 lg:px-8 bg-white scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Chủ quán</h2>
                        <h3 className="text-gray-900 font-serif-display text-3xl">Nhận Được Gì?</h3>
                    </div>
                    <div className="relative space-y-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
                        {[
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU1xfTkNwNjttJddUKRwJGMUsmJBx9pRjdx_xrTuJY3Z_J_jXHIR7bN_uzBhDooMAjA44c0FXGBHgYg08zPFja8PsXuxsx9L04gSY7OOEFGVLFw9awY71PrNUTNDn9WQA6B2FXQLSPzrui9U51IPQ9i80rzN_ogtWwpwoHHzonuE0Im13axPwhK7_l5Ov46Vz-ntZi9qjZPCn35Zwiwfm0AGIO7DCmk5RZznTg1O4xHD2GQ3YyfLPZ6SV-MD1-55cxa26uawCcQtWJ',
                                alt: 'Premium brand guidelines PDF on a modern tablet mockup with dark theme',
                                title: 'Bộ Nhận Diện Thương Hiệu',
                                icon: 'description',
                                desc: 'Cẩm nang giúp chủ quán biết mình nên chụp ảnh như thế nào, viết bài Facebook ra sao và chọn màu gì cho thiết kế thì đẹp.',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOwHS633sDWpilos1wGfis_PMCNjvVVBxfc8ZR04uK7qoFIfJffYeFpRRNhHePn7i48E_p72Rq5wDFtz84kHgLdCFt_Jz3gvLlk8famaVNXfZhn8BDJWdvtaei50kd2hw8P9KTDis5OUn5FDVRaW3JG-BrInKkZzX9MDFJ97k2vGynI8g5qT6hgBHjsveqT589LL4A_VW2cU-J7iI55zev3QGmnqSD0CE2D0SOxXFskTs4uITFYoaRkG_pPh4qGA8_qOJo8ZzmjxFt',
                                alt: 'Social media templates for Canva on a smartphone screen dark mode',
                                title: 'Bộ Công Cụ Excel Marketing',
                                icon: 'dashboard',
                                desc: 'Bao gồm biểu mẫu, kế hoạch, tài liệu Excel giúp chủ quán biết cách lên kế hoạch nội dung cho một tuần, tìm mẫu thiết kế menu mới hay ý tưởng để làm một mini game tại quán.',
                            },
                            {
                                img: 'https://placehold.co/600x400/f9fafb/B87333?text=AI+Tools',
                                alt: 'AI Marketing Tools interface',
                                title: 'Bộ Công Cụ AI Marketing',
                                icon: 'smart_toy',
                                desc: 'Bao gồm các ứng dụng AI giúp chủ quán viết bài, lên kịch bản video, tạo ảnh, lập kế hoạch marketing, tính toán chi phí marketing...',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B87333]/10 to-gray-100 rounded blur opacity-0 transition duration-1000 group-hover:opacity-50"></div>
                                <div className="relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                                    <SmartImage className="w-full h-64 object-cover" alt={item.alt} src={item.img} />
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-gray-900 font-bold text-lg uppercase tracking-wide">{item.title}</h4>
                                            <span className="material-icons text-[#B87333]/70">{item.icon}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B87333]/20 to-[#F59E0B]/10 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-gray-50 border border-[#B87333]/20 rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-md">
                            <div className="md:w-1/3 flex-shrink-0 w-full">
                                <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-[#B87333]/5 mix-blend-overlay z-10"></div>
                                    <SmartImage
                                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
                                        alt="Customer experience in coffee shop"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#B87333] text-white text-xs font-bold px-3 py-1 rounded shadow-lg z-20 flex items-center gap-1">
                                        <span className="material-icons text-[14px]">card_giftcard</span>
                                        QUÀ TẶNG KÈM
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-4">
                                <h4 className="text-gray-900 font-serif-display text-2xl md:text-3xl leading-tight">Đề Xuất Các Hoạt Động Tăng Trải Nghiệm Khách Hàng Tại Quán</h4>
                                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                                    Marketing không chỉ nằm ở màu sắc, logo hay các bài đăng trên mạng xã hội, nó còn hiện hữu ở ngay những điểm chạm nhỏ nhất tính từ cửa quán tới tận nơi đi nặng nhẹ. Một tờ giấy note với lời nhắn đủ "chạm" cũng có thể trở thành lý do để vị khách quay lại quán hàng chục lần tiếp theo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & CAM KẾT */}
            <section id="qa" className="py-24 px-6 lg:px-8 bg-gray-50 scroll-mt-20">
                <div className="max-w-5xl mx-auto grid gap-12">
                    <div>
                        <h3 className="text-gray-900 font-serif-display text-3xl mb-10">Có Thể Chủ Quán Thắc Mắc</h3>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`group border ${openFaqIndex === idx ? 'border-[#B87333]/30 shadow-md' : 'border-gray-200 hover:border-gray-300'} bg-white p-1 rounded transition-all`}
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex justify-between items-center p-4 text-left"
                                    >
                                        <span className={`${openFaqIndex === idx ? 'text-[#B87333] font-bold' : 'text-gray-900 font-medium'} text-sm`}>
                                            {faq.question}
                                        </span>
                                        <span className="material-icons text-[#B87333] text-lg">
                                            {openFaqIndex === idx ? 'remove' : 'add'}
                                        </span>
                                    </button>
                                    {openFaqIndex === idx && (
                                        <div className="px-4 pb-4">
                                            <p className="text-gray-600 text-xs leading-relaxed border-l-2 border-[#B87333]/20 pl-3">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lời nhắn */}
                    <div className="mt-8 p-8 bg-gradient-to-br from-white to-gray-50 rounded border border-gray-200 relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <span className="material-icons text-6xl text-gray-900">format_quote</span>
                        </div>
                        <h4 className="font-serif-display text-2xl text-gray-900 mb-6 italic relative z-10">Lời nhắn:</h4>
                        <div className="text-gray-600 font-light leading-relaxed mb-8 relative z-10 text-sm space-y-4">
                            <p>"Mỗi sản phẩm được đóng gói và bàn giao cho chủ quán đều là thành quả của quá trình trò chuyện, thấu hiểu và xác định rõ đề bài.</p>
                            <p>Vì vậy yếu tố tiên quyết để có được sự hợp tác thành công là chúng ta hãy trò chuyện thật nhiều và trung thực.</p>
                            <p>Sẽ là tuyệt vời nhất nếu Long và chủ quán có được tiếng nói chung về mục tiêu và kỳ vọng của nhau trước khi bắt đầu.</p>
                            <p>Vậy nên, đừng ngại nhắn cho Long nha!"</p>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
                                <SmartImage
                                    className="w-full h-full object-cover"
                                    alt="Long Hoang Marketing FnB Expert"
                                    src="https://i.ibb.co/3m8sdk0j/6330560-A-04-F3-40-B6-913-D-B853-DFB2-CDBF-1-105-c.jpg"
                                />
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold uppercase text-xs tracking-wider mb-1">Long Hoang</p>
                                <p className="text-[#B87333] text-[10px] uppercase tracking-widest">Marketing F&B Expert</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 lg:px-8 bg-white border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-gray-900 font-serif-display text-2xl md:text-3xl mb-2">Kết Bạn Với Long</h3>
                        <p className="text-gray-500 text-xs tracking-widest uppercase">Biết đâu chúng ta có thể đồng hành</p>
                    </div>

                    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-md mx-auto mb-10">
                        <a href="https://www.facebook.com/Long2492/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-2xl md:rounded-[1.5rem] bg-gray-50 border border-gray-200 hover:border-[#B87333]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group active:scale-95">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-[#1877F2] transition-colors flex items-center justify-center">
                                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </div>
                        </a>

                        <a href="https://www.tiktok.com/@long.moquancaphe" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-2xl md:rounded-[1.5rem] bg-gray-50 border border-gray-200 hover:border-[#B87333]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-black transition-colors flex items-center justify-center">
                                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </div>
                        </a>

                        <button onClick={() => setActiveContact(activeContact === 'gmail' ? null : 'gmail')} className={`aspect-square rounded-2xl md:rounded-[1.5rem] bg-gray-50 border border-gray-200 hover:border-[#B87333]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'gmail' ? 'ring-2 ring-[#B87333] -translate-y-1 shadow-xl' : ''}`}>
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-red-500 transition-colors flex items-center justify-center">
                                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </div>
                        </button>

                        <button onClick={() => setActiveContact(activeContact === 'phone' ? null : 'phone')} className={`aspect-square rounded-2xl md:rounded-[1.5rem] bg-gray-50 border border-gray-200 hover:border-[#B87333]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'phone' ? 'ring-2 ring-[#B87333] -translate-y-1 shadow-xl' : ''}`}>
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-green-500 transition-colors flex items-center justify-center">
                                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.28 1.12.27 2.33.39 3.57.39.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.13 2.45.4 3.57.08.35-.01.74-.29 1.02l-2.2 2.2z" /></svg>
                            </div>
                        </button>
                    </div>

                    {activeContact === 'gmail' && (
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 max-w-md mx-auto mb-8 relative overflow-hidden animate-fadeIn">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Gmail</p>
                            <div className="text-lg md:text-xl font-bold text-gray-900 tracking-tight mb-6 break-all">Long2492000@gmail.com</div>
                            <button onClick={() => navigator.clipboard.writeText('Long2492000@gmail.com')} className="bg-[#B87333] hover:bg-[#D98C45] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                Sao chép
                            </button>
                        </div>
                    )}

                    {activeContact === 'phone' && (
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 max-w-md mx-auto mb-8 relative overflow-hidden animate-fadeIn">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Phone / Zalo</p>
                            <div className="text-lg md:text-xl font-bold text-gray-900 tracking-tight mb-6">0528 442 530</div>
                            <button onClick={() => navigator.clipboard.writeText('0528442530')} className="bg-[#B87333] hover:bg-[#D98C45] text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                Sao chép
                            </button>
                        </div>
                    )}

                    <div className="text-center mt-10">
                        <div className="w-12 h-[1px] bg-gray-200 mx-auto mb-6"></div>
                        <p className="text-gray-600 text-[10px] tracking-widest uppercase">© 2026 Long Hoang. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default BrandPackagingPage;
