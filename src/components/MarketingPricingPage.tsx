import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ServiceItem {
    id: string;
    name: string;
    price: number;
    qty: number;
    unit: string;
    description: string;
    category: string;
}

const MarketingPricingPage: React.FC = () => {
    const [isNextMonth, setIsNextMonth] = useState<boolean>(false);
    const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    
    // Form state
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [shopName, setShopName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactFormRef = useRef<HTMLDivElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // FAQ definition
    const faqData = [
        { question: 'Quy trình làm việc thế nào?', answer: 'Khảo sát thực tế quán -> Thống nhất các hạng mục -> Ký hợp đồng -> Triển khai công việc và báo cáo số liệu định kỳ hàng tháng.' },
        { question: 'Chi phí thanh toán ra sao?', answer: 'Thanh toán chia làm 2 đợt: Đợt 1 tạm ứng 50% trước khi triển khai. Đợt 2 thanh toán 50% còn lại sau khi hoàn tất nghiệm thu tháng.' },
        { question: 'Thời hạn hợp đồng tối thiểu bao lâu?', answer: 'Hợp đồng ký theo từng tháng để bạn dễ dàng đánh giá tính phù hợp trước khi tiếp tục gia hạn.' },
        { question: 'Có cam kết doanh số không?', answer: 'Không cam kết doanh số bán ra. Hiệu quả chiến dịch truyền thông được đo lường khách quan qua lượt hiển thị, tương tác và số lượt tiếp cận/tin nhắn quanh khu vực quán.' }
    ];

    // Calculator service items definition
    const [services] = useState<ServiceItem[]>([
        // Gói Sản xuất Nội dung
        { id: 'content-text', name: 'Bài viết Content + Ảnh thiết kế', price: 350000, qty: 1, unit: 'bài', description: 'Bài viết hoàn thiện gồm nội dung chi tiết và hình ảnh thiết kế đăng tải trên page.', category: 'content' },
        { id: 'content-video', name: 'Dựng video ngắn (TikTok/Reels)', price: 450000, qty: 1, unit: 'video', description: 'Dựng video ngắn hoàn chỉnh dựa trên nguồn tư liệu do quán cung cấp.', category: 'content' },
        { id: 'ads-content', name: 'Sản xuất bài quảng cáo', price: 550000, qty: 1, unit: 'bài', description: 'Bài viết kèm hình ảnh hoặc video tối ưu tỷ lệ nhấp để phục vụ chạy Ads.', category: 'content' },
        
        // Thiết kế ấn phẩm phụ trợ
        { id: 'design-post', name: 'Thiết kế ấn phẩm truyền thông lẻ', price: 200000, qty: 1, unit: 'post', description: 'Banner, hình ảnh thông báo lẻ phục vụ các sự kiện của quán.', category: 'design' },
        { id: 'design-voucher', name: 'Thiết kế Standee/Voucher/Banner lớn', price: 400000, qty: 1, unit: 'tấm', description: 'Thiết kế các ấn phẩm phục vụ việc in ấn và quảng bá tại điểm bán.', category: 'design' },
        { id: 'design-menu', name: 'Thiết kế Menu quán', price: 500000, qty: 1, unit: 'gói', description: 'Thiết kế lại menu trực quan, sắp xếp bố cục tối ưu để tăng doanh số món.', category: 'design' },
        { id: 'design-logo', name: 'Thiết kế Logo thương hiệu', price: 750000, qty: 1, unit: 'bản', description: 'Thiết kế logo thương hiệu tối giản và hiện đại.', category: 'design' },
        { id: 'design-packaging', name: 'Thiết kế Bao bì/Tem nhãn/Hộp giấy', price: 850000, qty: 1, unit: 'bản', description: 'Thiết kế bộ nhận diện cốc, túi mang đi đồng bộ cho quán.', category: 'design' },
        
        // Chạy QC & Chụp ảnh máy cơ
        { id: 'ads-mgmt', name: 'Setup & Tối ưu quảng cáo', price: 1000000, qty: 1, unit: 'kênh/tháng', description: 'Cài đặt và tối ưu hóa chiến dịch quảng cáo khoanh vùng xung quanh quán.', category: 'production' },
        { id: 'photo-dslr', name: 'Chụp ảnh chuyên nghiệp máy cơ', price: 1500000, qty: 1, unit: 'buổi', description: 'Chụp ảnh món ăn, đồ uống và không gian quán bằng máy ảnh chuyên dụng.', category: 'production' },
        { id: 'video-dslr-raw', name: 'Quay source video máy cơ', price: 1500000, qty: 1, unit: 'buổi', description: 'Quay lấy nguồn tư liệu video thô sắc nét tại quán bằng máy cơ.', category: 'production' },
        { id: 'video-dslr-edit', name: 'Quay & Dựng video thành phẩm máy cơ', price: 1500000, qty: 1, unit: 'video', description: 'Sản xuất video giới thiệu quán hoặc video sự kiện hoàn chỉnh bằng máy cơ.', category: 'production' },
    ]);

    // Handle card click (toggle selection)
    const toggleServiceSelection = (id: string) => {
        setSelectedServices(prev => {
            const next = { ...prev };
            if (id in next) {
                delete next[id];
            } else {
                next[id] = 1; // Default quantity is 1 when checked
            }
            return next;
        });
    };

    // Handle quantity changes
    const changeServiceQty = (id: string, delta: number) => {
        setSelectedServices(prev => {
            if (!(id in prev)) return prev;
            const nextQty = Math.max(1, prev[id] + delta);
            return { ...prev, [id]: nextQty };
        });
    };

    // Calculate total price based on selected items
    const calculateTotal = () => {
        let total = 0;
        const selectedList: { name: string; qty: number; unit: string; subtotal: number }[] = [];
        
        Object.entries(selectedServices).forEach(([id, qty]) => {
            const item = services.find(s => s.id === id);
            if (item) {
                const subtotal = item.price * qty;
                total += subtotal;
                selectedList.push({
                    name: item.name,
                    qty,
                    unit: item.unit,
                    subtotal
                });
            }
        });

        return { total, selectedList };
    };

    const { total, selectedList } = calculateTotal();

    // Trigger pre-fill of form message and scroll to contact
    const handleSendCalculatorRequest = () => {
        if (selectedList.length === 0) return;

        const servicesString = selectedList
            .map(item => `- ${item.name}: ${item.qty} ${item.unit} (${(item.subtotal).toLocaleString('vi-VN')}đ)`)
            .join('\n');
        
        const generatedMessage = `Chào bạn, tôi cần báo giá các hạng mục sau:\n${servicesString}\n\nTổng chi phí dự kiến: ${total.toLocaleString('vi-VN')}đ.\n\nThông tin quán hiện tại: `;
        
        setMessage(generatedMessage);
        
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                if (messageInputRef.current) {
                    messageInputRef.current.focus();
                }
            }, 800);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            const leadData = {
                name,
                phone,
                shopName,
                message,
                timestamp: new Date().toISOString(),
                selectedServices: selectedList.map(i => `${i.name} (x${i.qty})`)
            };
            
            const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
            existingLeads.push(leadData);
            localStorage.setItem('leads', JSON.stringify(existingLeads));

            setIsSubmitting(false);
            setIsSubmitted(true);

            setName('');
            setPhone('');
            setShopName('');
        }, 1200);
    };

    return (
        <div className="bg-white text-gray-900 antialiased overflow-x-hidden min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
            <style>{`
                .glass-card {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
                }
                .glass-card-hover:hover {
                    border-color: rgba(184, 115, 51, 0.6);
                    box-shadow: 0 10px 30px rgba(184, 115, 51, 0.12);
                }
                .accent-btn {
                    background: #111111;
                    color: #fff;
                    transition: all 0.2s ease;
                }
                .accent-btn:hover {
                    background: #B87333;
                    transform: translateY(-1px);
                    box-shadow: 0 8px 16px rgba(184, 115, 51, 0.2);
                }
                .accent-btn-secondary {
                    background: transparent;
                    color: #111111;
                    border: 1px solid rgba(0,0,0,0.35);
                    transition: all 0.2s ease;
                }
                .accent-btn-secondary:hover {
                    border-color: #B87333;
                    color: #B87333;
                    background: rgba(184, 115, 51, 0.03);
                    transform: translateY(-1px);
                }
            `}</style>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black transition-colors uppercase tracking-widest mb-12 group">
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    {"Quay lại trang\u00a0chủ"}
                </Link>

                {/* HERO SECTION */}
                <section className="relative py-8 md:py-12 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-[#B87333] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]"></span> 
                        {"Báo giá Dịch vụ\u00a0Marketing"}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-gray-900 mb-6 text-balance">
                        Báo Giá Dịch Vụ Marketing F&B <br />
                        <span className="text-[#B87333] font-normal italic">{"Chi tiết các hạng mục và gói giải\u00a0pháp."}</span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
                        {"Bảng kê chi tiết chi phí sản xuất nội dung, quay chụp sản phẩm, thiết kế ấn phẩm và setup quảng cáo quanh khu vực\u00a0quán."}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <a href="#packages" className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest accent-btn shadow-md">
                            {"Xem các gói giải\u00a0pháp"}
                        </a>
                        <a href="#calculator" className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest accent-btn-secondary">
                            {"Tự tính chi phí\u00a0lẻ"}
                        </a>
                    </div>
                </section>

                {/* PACKAGES SECTION */}
                <section id="packages" className="py-12 border-t border-gray-200 scroll-mt-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-balance">{"Các Gói Giải Pháp Marketing Toàn\u00a0Diện"}</h2>
                        <p className="text-gray-700 mt-2 text-sm md:text-base font-medium text-balance">{"Lựa chọn gói giải pháp phù hợp với quy mô và nhu cầu hoạt động của\u00a0quán."}</p>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="inline-flex bg-gray-50 border border-gray-200 p-1 rounded-full">
                            <button
                                onClick={() => setIsNextMonth(false)}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-250 ${!isNextMonth ? 'bg-black text-white shadow-sm' : 'text-gray-700 hover:text-black'}`}
                            >
                                {"Setup & Chạy (Tháng\u00a01)"}
                            </button>
                            <button
                                onClick={() => setIsNextMonth(true)}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-250 ${isNextMonth ? 'bg-black text-white shadow-sm' : 'text-gray-700 hover:text-black'}`}
                            >
                                {"Duy trì (Tháng tiếp\u00a0theo)"}
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Package 1: Content */}
                        <div className="p-6 rounded-2xl glass-card flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden">
                            <div>
                                <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-700 rounded-full mb-3">
                                    {"Cho quán\u00a0nhỏ"}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Gói CONTENT</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">{"Sản xuất nội dung đăng page định\u00a0kỳ."}</p>
                                
                                <div className="py-3 border-y border-gray-200 mb-4">
                                    <span className="text-2xl font-extrabold text-gray-900">
                                        {isNextMonth ? '6.800.000đ' : '8.800.000đ'}
                                    </span>
                                    <span className="text-gray-700 text-sm font-semibold ml-1">/tháng</span>
                                    <div className="text-xs font-bold text-[#B87333] uppercase tracking-wide mt-1">{"Quán tự quản lý và tự chạy quảng\u00a0cáo"}</div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Quay/Chụp tại quán: 2 buổi/tháng</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Bài viết kèm thiết kế ảnh: 8 bài/tháng</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Video ngắn dựng hoàn chỉnh: 5 video</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Sản xuất bài viết chạy Ads: 2 bài</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Thiết kế phụ trợ: tối đa 1 banner/tháng</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest accent-btn-secondary">
                                {"Đăng ký gói\u00a0này"}
                            </a>
                        </div>

                        {/* Package 2: Marketing Base (Featured) */}
                        <div className="p-6 rounded-2xl glass-card flex flex-col justify-between border-2 border-[#B87333] transition-all hover:shadow-md relative overflow-hidden bg-gradient-to-b from-[#B87333]/[0.02] to-white">
                            <div className="absolute top-3 right-3 bg-[#B87333] text-white text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full">
                                {"Khuyên\u00a0dùng"}
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 bg-[#B87333]/10 text-xs font-bold uppercase tracking-widest text-[#B87333] rounded-full mb-3">
                                    {"Quán vừa & trung\u00a0bình"}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">MARKETING BASE</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">{"Sản xuất nội dung và chạy quảng cáo cơ\u00a0bản."}</p>
                                
                                <div className="py-3 border-y border-gray-200 mb-4">
                                    <span className="text-2xl font-extrabold text-[#B87333]">
                                        {isNextMonth ? '10.800.000đ' : '12.800.000đ'}
                                    </span>
                                    <span className="text-[#B87333] text-sm font-semibold ml-1">/tháng</span>
                                    <div className="text-xs font-bold text-gray-900 uppercase tracking-wide mt-1">{"Đã bao gồm phí setup & tối ưu ads cơ\u00a0bản"}</div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Tư vấn định hướng &amp; chiến lược công việc</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Quay/Chụp tại quán: 2-3 buổi/tháng</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Bài viết kèm thiết kế ảnh: 7 bài</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Video ngắn dựng hoàn chỉnh: 6 video</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Setup và tối ưu Ads hàng tháng: 2 bài</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Lên ý tưởng triển khai 1 mini campaign</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-[#B87333] font-bold">✓</span>
                                        <span>Thiết kế voucher/banner: 3 mẫu miễn phí</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest accent-btn shadow-md">
                                {"Chọn gói tối ưu\u00a0này"}
                            </a>
                        </div>

                        {/* Package 3: Event - Promotion */}
                        <div className="p-6 rounded-2xl glass-card flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden">
                            <div>
                                <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-700 rounded-full mb-3">
                                    {"Khai trương / Kích\u00a0cầu"}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">EVENT - PROMOTION</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">{"Triển khai truyền thông cho sự kiện hoặc chương trình kích\u00a0cầu."}</p>
                                
                                <div className="py-3 border-y border-gray-200 mb-4">
                                    <span className="text-2xl font-extrabold text-gray-900">
                                        {isNextMonth ? '16.800.000đ' : '18.800.000đ'}
                                    </span>
                                    <span className="text-gray-700 text-sm font-semibold ml-1">/tháng</span>
                                    <div className="text-xs font-bold text-gray-900 uppercase tracking-wide mt-1">{"Dành cho hoạt động sự kiện/khai trương\u00a0quán"}</div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Lên kế hoạch &amp; kịch bản sự kiện chi tiết</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Ekip hỗ trợ điều phối sự kiện tại quán</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Sản xuất 12 bài viết/video sự kiện</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Setup &amp; Tối ưu ads chiến dịch: 3 bài</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-800 font-medium">
                                        <span className="text-green-600 font-bold">✓</span>
                                        <span>Thiết kế trọn bộ ấn phẩm sự kiện</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest accent-btn-secondary">
                                {"Đăng ký gói\u00a0Event"}
                            </a>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE CALCULATOR SECTION */}
                <section id="calculator" className="py-12 border-t border-gray-200 scroll-mt-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-balance">{"Tính Chi Phí Hạng Mục\u00a0Lẻ"}</h2>
                        <p className="text-gray-700 mt-2 text-sm md:text-base font-medium text-balance">{"Chọn các hạng mục lẻ dưới đây để ước tính ngân sách phù hợp với nhu\u00a0cầu."}</p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Calculator Items Box */}
                        <div className="lg:col-span-8 space-y-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-200">
                            
                            {/* Category 1 */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-4 pb-1.5 border-b border-gray-300">
                                    ✍️ Gói Sản xuất Nội dung
                                </h3>
                                <div className="space-y-3">
                                    {services.filter(s => s.category === 'content').map(service => {
                                        const isSelected = service.id in selectedServices;
                                        const activeQty = selectedServices[service.id] || 1;
                                        
                                        return (
                                            <div 
                                                key={service.id}
                                                onClick={() => toggleServiceSelection(service.id)}
                                                className={`flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border transition-all cursor-pointer bg-white ${isSelected ? 'border-[#B87333] bg-[#B87333]/[0.01]' : 'border-gray-200 hover:border-gray-300'}`}
                                            >
                                                <div className="flex gap-3 items-start pr-4">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isSelected ? 'bg-[#B87333] border-[#B87333] text-white' : 'border-gray-350 text-transparent'}`}>
                                                        <span className="font-bold text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm md:text-base font-bold text-gray-905">{service.name}</h4>
                                                        <p className="text-sm text-gray-700 mt-1 leading-relaxed">{service.description}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mt-3 sm:mt-0 justify-between sm:justify-end shrink-0">
                                                    <span className="text-sm md:text-base font-extrabold text-[#B87333]">
                                                        {(service.price).toLocaleString('vi-VN')}đ/{service.unit}
                                                    </span>
                                                    
                                                    {/* Quantity Control */}
                                                    <div 
                                                        onClick={(e) => e.stopPropagation()} 
                                                        className={`flex items-center bg-gray-50 border border-gray-200 rounded-full p-0.5 gap-1.5 transition-all ${isSelected ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none'}`}
                                                    >
                                                        <button 
                                                            onClick={() => changeServiceQty(service.id, -1)}
                                                            className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                        >
                                                            &minus;
                                                        </button>
                                                        <span className="text-xs font-bold text-gray-900 min-w-4 text-center">
                                                            {activeQty}
                                                        </span>
                                                        <button 
                                                            onClick={() => changeServiceQty(service.id, 1)}
                                                            className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Category 2 */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-4 pb-1.5 border-b border-gray-300">
                                    🎨 Thiết kế ấn phẩm phụ trợ
                                </h3>
                                <div className="space-y-3">
                                    {services.filter(s => s.category === 'design').map(service => {
                                        const isSelected = service.id in selectedServices;
                                        const activeQty = selectedServices[service.id] || 1;
                                        const isFixedQty = service.id === 'design-logo' || service.id === 'design-packaging';
                                        
                                        return (
                                            <div 
                                                key={service.id}
                                                onClick={() => toggleServiceSelection(service.id)}
                                                className={`flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border transition-all cursor-pointer bg-white ${isSelected ? 'border-[#B87333] bg-[#B87333]/[0.01]' : 'border-gray-200 hover:border-gray-300'}`}
                                            >
                                                <div className="flex gap-3 items-start pr-4">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isSelected ? 'bg-[#B87333] border-[#B87333] text-white' : 'border-gray-350 text-transparent'}`}>
                                                        <span className="font-bold text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm md:text-base font-bold text-gray-905">{service.name}</h4>
                                                        <p className="text-sm text-gray-700 mt-1 leading-relaxed">{service.description}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mt-3 sm:mt-0 justify-between sm:justify-end shrink-0">
                                                    <span className="text-sm md:text-base font-extrabold text-[#B87333]">
                                                        {(service.price).toLocaleString('vi-VN')}đ/{service.unit}
                                                    </span>
                                                    
                                                    {/* Quantity Control */}
                                                    {!isFixedQty ? (
                                                        <div 
                                                            onClick={(e) => e.stopPropagation()} 
                                                            className={`flex items-center bg-gray-50 border border-gray-200 rounded-full p-0.5 gap-1.5 transition-all ${isSelected ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none'}`}
                                                        >
                                                            <button 
                                                                onClick={() => changeServiceQty(service.id, -1)}
                                                                className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                            >
                                                                &minus;
                                                            </button>
                                                            <span className="text-xs font-bold text-gray-900 min-w-4 text-center">
                                                                {activeQty}
                                                            </span>
                                                            <button 
                                                                onClick={() => changeServiceQty(service.id, 1)}
                                                                className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="w-[74px] h-[30px] flex items-center justify-center text-xs text-gray-650 font-bold uppercase tracking-wider">
                                                            Trọn gói
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Category 3 */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-4 pb-1.5 border-b border-gray-300">
                                    📸 Chạy QC & Chụp ảnh máy cơ
                                </h3>
                                <div className="space-y-3">
                                    {services.filter(s => s.category === 'production').map(service => {
                                        const isSelected = service.id in selectedServices;
                                        const activeQty = selectedServices[service.id] || 1;
                                        
                                        return (
                                            <div 
                                                key={service.id}
                                                onClick={() => toggleServiceSelection(service.id)}
                                                className={`flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border transition-all cursor-pointer bg-white ${isSelected ? 'border-[#B87333] bg-[#B87333]/[0.01]' : 'border-gray-200 hover:border-gray-300'}`}
                                            >
                                                <div className="flex gap-3 items-start pr-4">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isSelected ? 'bg-[#B87333] border-[#B87333] text-white' : 'border-gray-350 text-transparent'}`}>
                                                        <span className="font-bold text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm md:text-base font-bold text-gray-905">{service.name}</h4>
                                                        <p className="text-sm text-gray-700 mt-1 leading-relaxed">{service.description}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mt-3 sm:mt-0 justify-between sm:justify-end shrink-0">
                                                    <span className="text-sm md:text-base font-extrabold text-[#B87333]">
                                                        {(service.price).toLocaleString('vi-VN')}đ/{service.unit}
                                                    </span>
                                                    
                                                    {/* Quantity Control */}
                                                    <div 
                                                        onClick={(e) => e.stopPropagation()} 
                                                        className={`flex items-center bg-gray-50 border border-gray-200 rounded-full p-0.5 gap-1.5 transition-all ${isSelected ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none'}`}
                                                    >
                                                        <button 
                                                            onClick={() => changeServiceQty(service.id, -1)}
                                                            className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                        >
                                                            &minus;
                                                        </button>
                                                        <span className="text-xs font-bold text-gray-900 min-w-4 text-center">
                                                            {activeQty}
                                                        </span>
                                                        <button 
                                                            onClick={() => changeServiceQty(service.id, 1)}
                                                            className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center font-bold text-gray-700 hover:bg-gray-150 border border-gray-200 text-xs"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        {/* Calculator Summary Sidebar */}
                        <div className="lg:col-span-4 sticky top-24">
                            <div className="p-6 rounded-2xl glass-card border border-gray-200 bg-white">
                                <h3 className="text-base font-bold text-gray-900 mb-4">Chi tiết hạng mục</h3>

                                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1 mb-4 border-b border-gray-200 pb-4">
                                    {selectedList.length === 0 ? (
                                        <p className="text-gray-700 text-sm italic">Chưa chọn hạng mục nào. Hãy chọn các ô dịch vụ bên cạnh để tính phí.</p>
                                    ) : (
                                        selectedList.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-start text-sm text-gray-800">
                                                <span className="font-semibold max-w-[70%]">{item.name} (x{item.qty} {item.unit})</span>
                                                <span className="font-extrabold shrink-0">{(item.subtotal).toLocaleString('vi-VN')}đ</span>
                                            </div>
                                        ))
                                    )}
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Tổng phí ước tính:</span>
                                    <span className="text-xl font-black text-[#B87333]">
                                        {(total).toLocaleString('vi-VN')}đ
                                    </span>
                                </div>

                                <button 
                                    disabled={selectedList.length === 0}
                                    onClick={handleSendCalculatorRequest}
                                    className={`w-full text-center py-3 rounded-full text-sm font-bold uppercase tracking-widest accent-btn ${selectedList.length === 0 ? 'opacity-40 cursor-not-allowed shadow-none hover:bg-[#111111] hover:translate-y-0' : 'shadow-md'}`}
                                >
                                    Gửi yêu cầu báo giá
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-12 border-t border-gray-200">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-balance">{"Giải Đáp Thắc\u00a0Mắc"}</h2>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-3">
                        {faqData.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div key={idx} className="border border-gray-200 bg-white rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                        className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <h4 className="font-bold text-sm md:text-base text-gray-900 pr-4">{faq.question}</h4>
                                        <span className="text-gray-500 font-bold text-lg shrink-0">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[300px] border-t border-gray-150 bg-gray-50/30' : 'max-h-0'}`}>
                                        <div className="p-5 text-sm md:text-base text-gray-800 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section ref={contactFormRef} className="py-12 border-t border-gray-200 scroll-mt-20">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        {/* Info Left */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-balance">{"Thông Tin Liên\u00a0Hệ"}</h2>
                                <p className="text-gray-800 mt-3 text-sm md:text-base leading-relaxed text-balance">
                                    {"Điền thông tin liên hệ dưới đây để nhận báo giá chi tiết và lịch khảo sát quán trực\u00a0tiếp."}
                                </p>
                            </div>

                            <div className="space-y-4 text-sm md:text-base text-gray-900 font-medium">
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-[#B87333]">📞</span>
                                    <span>Hotline / Zalo: 0528 442 530</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-[#B87333]">📍</span>
                                    <span>Khu vực hỗ trợ: Hà Nội, Hải Dương &amp; Hưng Yên</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-[#B87333]">✉️</span>
                                    <span>Email: Long2492000@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Right */}
                        <div className="lg:col-span-7">
                            <div className="p-6 rounded-2xl glass-card">
                                {!isSubmitted ? (
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="contact-name" className="text-xs font-bold text-gray-700 uppercase">Tên của bạn</label>
                                                <input 
                                                    type="text" 
                                                    id="contact-name" 
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required 
                                                    placeholder="Ví dụ: Hoàng Văn" 
                                                    className="px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none text-sm transition-all text-gray-900"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="contact-phone" className="text-xs font-bold text-gray-700 uppercase">Số điện thoại / Zalo</label>
                                                <input 
                                                    type="tel" 
                                                    id="contact-phone" 
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    required 
                                                    placeholder="Ví dụ: 0912345678" 
                                                    className="px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none text-sm transition-all text-gray-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="contact-shop" className="text-xs font-bold text-gray-700 uppercase">Tên quán &amp; Địa chỉ</label>
                                            <input 
                                                type="text" 
                                                id="contact-shop" 
                                                value={shopName}
                                                onChange={(e) => setShopName(e.target.value)}
                                                required 
                                                placeholder="Ví dụ: Đảo Matcha Hải Dương - 12 Trần Hưng Đạo" 
                                                className="px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none text-sm transition-all text-gray-900"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="contact-message" className="text-xs font-bold text-gray-700 uppercase">Tình trạng quán hiện tại &amp; Hạng mục cần báo giá</label>
                                            <textarea 
                                                id="contact-message" 
                                                ref={messageInputRef}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={4}
                                                placeholder="Mô tả sơ qua tình trạng quán hoặc các dịch vụ bạn cần." 
                                                className="px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none text-sm transition-all resize-y text-gray-900"
                                            />
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest accent-btn shadow-md"
                                        >
                                            {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi yêu cầu tư vấn'}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-8 space-y-4 animate-fadeIn">
                                        <div className="w-12 h-12 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                                            ✓
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 animate-pulse">Gửi thông tin thành công!</h3>
                                        <p className="text-gray-800 text-sm max-w-sm mx-auto leading-relaxed">
                                            Đã nhận được yêu cầu của bạn. Mình sẽ xem qua và chủ động gọi điện trao đổi trực tiếp trong vòng 24 giờ nhé!
                                        </p>
                                        <button 
                                            onClick={() => setIsSubmitted(false)} 
                                            className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                                        >
                                            Gửi form khác
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MarketingPricingPage;
