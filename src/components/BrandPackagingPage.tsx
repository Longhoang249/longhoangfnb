import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandPackagingPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1);

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
        <div className="bg-[#05080F] text-gray-200 antialiased overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
            <style>{`
                .glass-panel {
                    background: rgba(18, 24, 38, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .font-serif-display {
                    font-family: 'Playfair Display', serif;
                }
                html { scroll-behavior: smooth; }
            `}</style>

            {/* NAV */}
            <nav className="fixed top-0 w-full z-50 glass-panel px-6 py-4 flex justify-between items-center border-b border-white/5">
                <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                    <Link to="/" className="text-white font-serif-display italic text-xl font-bold tracking-tight">LH.</Link>
                    <Link to="/" className="text-white hover:text-[#B87333] transition-colors">
                        <span className="material-icons">arrow_back</span>
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative h-screen flex flex-col justify-end pb-20 pt-28 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover brightness-[0.4] grayscale-[0.3]"
                        alt="Dark wood and steel minimalist cafe interior architecture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_kVZdb2O5xBQ_SXBd2y0VPXVb78kKJseaY_LXNlDqwmoiJdDWE9LN8_GAvh8GgOPIbP_tnnx36S26-jEtSIi3payXLPgEEfIZjA1vz2hjYFIheJm5OkpigUxKoWD98SmywTcx1gmBHJRc9KT44c5VJVAaEUftAUDKHfBn-fbs4PcFOZQbv-hkzrKOHQymFyGyfvQ2XpkSw8Z0APzNqY5BiFkO7CGLaQNn3j_eEIAqBWPvDmGXOqL_q-0-3-UxQVLqfKkPiuzQxEgJ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/60 to-transparent"></div>
                </div>
                <div className="relative z-10 space-y-5 max-w-5xl mx-auto w-full">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-[#B87333]"></div>
                        <span className="text-[#B87333] tracking-[0.2em] text-xs font-bold uppercase">Chủ quán tự tay</span>
                    </div>
                    <h1 className="text-white font-serif-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
                        <span className="whitespace-nowrap">LÀM MARKETING</span> <br />
                        <span className="italic font-normal text-[#C0C0C0] whitespace-nowrap">Cho Quán của Mình</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed border-l-2 border-[#B87333]/30 pl-4">
                        "Tôi có sản phẩm tốt, không gian đẹp, nhưng khách hàng vẫn không nhớ tôi là ai giữa hàng ngàn thương hiệu khác..."
                    </p>
                    <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed border-l-2 border-[#B87333]/30 pl-4">
                        "Tôi muốn tự làm marketing nhưng không biết bắt đầu từ đâu, nên đăng cái gì và làm như thế nào..."
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
                                className="px-4 py-2 text-xs md:text-sm font-medium rounded-full border border-white/15 text-gray-300 hover:text-white hover:bg-white/10 hover:border-[#B87333]/50 transition-all duration-300 backdrop-blur-sm bg-white/5"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* GIẢI PHÁP */}
            <section id="giai-phap" className="py-24 px-6 lg:px-8 bg-[#0A0F1E] scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Giải Pháp</h2>
                        <h3 className="text-white font-serif-display text-3xl">Đóng Gói Thương Hiệu <br />& quy trình <br />Marketing Tự Vận Hành</h3>
                        <div className="h-1 w-20 bg-[#B87333]/50 mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-white/5 rounded-lg bg-[#121826]/50 hover:bg-[#121826] transition-colors group">
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B87333]/10 transition-colors">
                                <span className="material-icons text-[#B87333] text-3xl">palette</span>
                            </div>
                            <p className="text-gray-300 text-lg font-light leading-relaxed">
                                Xây dựng hệ thống nhận diện thương hiệu thực dụng kèm kế hoạch truyền thông chạy được trong 3 tháng.
                            </p>
                        </div>

                        <div className="p-8 border border-white/5 rounded-lg bg-[#121826]/50 hover:bg-[#121826] transition-colors group">
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B87333]/10 transition-colors">
                                <span className="material-icons text-[#B87333] text-3xl">precision_manufacturing</span>
                            </div>
                            <div className="text-gray-300 text-lg font-light leading-relaxed space-y-4">
                                <p>Bàn giao quy trình marketing tự vận hành với sự hỗ trợ của công cụ AI và tài nguyên marketing đã thiết kế sẵn.</p>
                                <p className="text-base text-gray-500 border-l-2 border-[#B87333]/30 pl-4 py-1">
                                    Chủ quán có thể tự làm truyền thông hoặc đào tạo chính nhân sự quán để thực thi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ĐỐI TƯỢNG */}
            <section className="py-24 px-6 lg:px-8 bg-[#05080F]">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Đối Tượng</h2>
                        <h3 className="text-white font-serif-display text-3xl">Ai cần gói này?</h3>
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
                                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6 relative z-10">
                                    <span className="material-icons text-[#B87333] text-2xl">{item.icon}</span>
                                </div>
                                <h4 className="text-white font-bold text-xl mb-3 tracking-tight relative z-10">{item.title}</h4>
                                <p className="text-gray-500 font-light text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUY TRÌNH */}
            <section id="quy-trinh" className="py-24 bg-[#0A0F1E] scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="px-6 lg:px-8 mb-16">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Quy Trình</h2>
                        <h3 className="text-white font-serif-display text-3xl">3 Giai Đoạn Thực Thi</h3>
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
                            <div key={idx} className={`relative flex border-t ${idx === 2 ? 'border-y' : ''} border-white/10 group hover:bg-white/[0.02] transition-colors`}>
                                <div className="w-[28%] sticky top-24 h-fit py-8 pl-6 pr-2">
                                    <span className="text-white/20 font-serif-display text-5xl font-bold group-hover:text-[#B87333]/40 transition-colors">{phase.num}</span>
                                </div>
                                <div className="w-[72%] py-8 pr-6 pl-4 space-y-6 border-l border-white/10">
                                    <h4 className="text-white font-bold text-xl uppercase tracking-tight">{phase.title}</h4>
                                    <div className="space-y-4">
                                        {phase.steps.map((step, sIdx) => (
                                            <div key={sIdx} className="flex gap-4 items-start">
                                                <span className="text-[#B87333] font-mono text-sm pt-1">{step.id}</span>
                                                <p className="text-gray-400 text-sm">{step.text}</p>
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
            <section id="san-pham" className="py-24 px-6 lg:px-8 bg-[#05080F] scroll-mt-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#B87333] text-xs tracking-[0.2em] font-bold mb-3 uppercase">Chủ quán</h2>
                        <h3 className="text-white font-serif-display text-3xl">Nhận Được Gì?</h3>
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
                                img: 'https://placehold.co/600x400/121826/B87333?text=AI+Tools',
                                alt: 'AI Marketing Tools interface',
                                title: 'Bộ Công Cụ AI Marketing',
                                icon: 'smart_toy',
                                desc: 'Bao gồm các ứng dụng AI giúp chủ quán viết bài, lên kịch bản video, tạo ảnh, lập kế hoạch marketing, tính toán chi phí marketing...',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B87333]/30 to-white/5 rounded blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
                                <div className="relative bg-[#121826] rounded overflow-hidden shadow-2xl border border-white/5">
                                    <img className="w-full h-64 object-cover brightness-75 grayscale-[0.2]" alt={item.alt} src={item.img} />
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-white font-bold text-lg uppercase tracking-wide">{item.title}</h4>
                                            <span className="material-icons text-[#B87333]/70">{item.icon}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm font-light">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B87333] to-[#F59E0B] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative bg-[#0A0F1E] border border-[#B87333]/50 rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-2xl">
                            <div className="md:w-1/3 flex-shrink-0 w-full">
                                <div className="aspect-video rounded-lg overflow-hidden border border-white/10 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-[#B87333]/10 mix-blend-overlay z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
                                        alt="Customer experience in coffee shop"
                                        className="w-full h-full object-cover grayscale-[0.3]"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#B87333] text-white text-xs font-bold px-3 py-1 rounded shadow-lg z-20 flex items-center gap-1">
                                        <span className="material-icons text-[14px]">card_giftcard</span>
                                        QUÀ TẶNG KÈM
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-4">
                                <h4 className="text-white font-serif-display text-2xl md:text-3xl leading-tight">Đề Xuất Các Hoạt Động Tăng Trải Nghiệm Khách Hàng Tại Quán</h4>
                                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                                    Marketing không chỉ nằm ở màu sắc, logo hay các bài đăng trên mạng xã hội, nó còn hiện hữu ở ngay những điểm chạm nhỏ nhất tính từ cửa quán tới tận nơi đi nặng nhẹ. Một tờ giấy note với lời nhắn đủ "chạm" cũng có thể trở thành lý do để vị khách quay lại quán hàng chục lần tiếp theo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & CAM KẾT */}
            <section id="qa" className="py-24 px-6 lg:px-8 bg-[#0A0F1E] scroll-mt-20">
                <div className="max-w-5xl mx-auto grid gap-12">
                    <div>
                        <h3 className="text-white font-serif-display text-3xl mb-10">Có Thể Chủ Quán Thắc Mắc</h3>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`group border ${openFaqIndex === idx ? 'border-[#B87333]/30 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]' : 'border-white/5 hover:border-white/10'} bg-[#121826] p-1 rounded transition-all`}
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex justify-between items-center p-4 text-left"
                                    >
                                        <span className={`${openFaqIndex === idx ? 'text-[#B87333] font-bold' : 'text-white font-medium'} text-sm`}>
                                            {faq.question}
                                        </span>
                                        <span className="material-icons text-[#B87333] text-lg">
                                            {openFaqIndex === idx ? 'remove' : 'add'}
                                        </span>
                                    </button>
                                    {openFaqIndex === idx && (
                                        <div className="px-4 pb-4">
                                            <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-[#B87333]/20 pl-3">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lời nhắn */}
                    <div className="mt-8 p-8 bg-gradient-to-br from-[#121826] to-black rounded border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="material-icons text-6xl text-white">format_quote</span>
                        </div>
                        <h4 className="font-serif-display text-2xl text-white mb-6 italic relative z-10">Lời nhắn:</h4>
                        <div className="text-gray-400 font-light leading-relaxed mb-8 relative z-10 text-sm space-y-4">
                            <p>"Mỗi sản phẩm được đóng gói và bàn giao cho chủ quán đều là thành quả của quá trình trò chuyện, thấu hiểu và xác định rõ đề bài.</p>
                            <p>Vì vậy yếu tố tiên quyết để có được sự hợp tác thành công là chúng ta hãy trò chuyện thật nhiều và trung thực.</p>
                            <p>Sẽ là tuyệt vời nhất nếu Long và chủ quán có được tiếng nói chung về mục tiêu và kỳ vọng của nhau trước khi bắt đầu.</p>
                            <p>Vậy nên, đừng ngại nhắn cho Long nha!"</p>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                                <img
                                    className="w-full h-full object-cover"
                                    alt="Long Hoang Marketing FnB Expert"
                                    src="https://i.ibb.co/3m8sdk0j/6330560-A-04-F3-40-B6-913-D-B853-DFB2-CDBF-1-105-c.jpg"
                                />
                            </div>
                            <div>
                                <p className="text-white font-bold uppercase text-xs tracking-wider mb-1">Long Hoang</p>
                                <p className="text-[#B87333] text-[10px] uppercase tracking-widest">Marketing F&B Expert</p>
                            </div>
                        </div>
                        <div className="pt-8 relative z-10">
                            <a
                                href="https://www.facebook.com/Long2492/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#B87333] hover:bg-[#D98C45] text-white font-bold px-8 py-4 rounded flex items-center gap-3 transition-all shadow-[0_4px_20px_-5px_rgba(184,115,51,0.4)] group border border-white/10 w-fit"
                            >
                                NHẬN TƯ VẤN
                                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black py-16 px-6 lg:px-8 border-t border-white/10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="text-white font-serif-display italic text-3xl font-bold tracking-tighter">LH.</div>
                    <div className="flex gap-8">
                        <a className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest" href="https://www.facebook.com/Long2492/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest" href="https://www.tiktok.com/@long.moquancaphe" target="_blank" rel="noopener noreferrer">TikTok</a>
                        <a className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">LinkedIn</a>
                    </div>
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <p className="text-gray-600 text-[10px] tracking-widest uppercase">
                        © 2024 Long Hoang Branding. All rights reserved.
                    </p>
                    <div className="pt-4 opacity-30 pointer-events-none select-none">
                        <span className="font-serif-display italic text-xl text-white">Long Hoang</span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default BrandPackagingPage;
