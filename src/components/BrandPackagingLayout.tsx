import React, { useState } from 'react';

// Timeline data for sticky navigation
const PHASES = [
    { id: 1, title: 'Lắng Nghe', subtitle: 'Tuần 1-2', icon: '👂' },
    { id: 2, title: 'Đóng Gói', subtitle: 'Tuần 3-5', icon: '📦' },
    { id: 3, title: 'Đồng Hành', subtitle: 'Tháng 1-6', icon: '🤝' }
];

// Phase Badge Component
const PhaseBadge = ({ phase, isActive }: { phase: number; isActive?: boolean }) => (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}>
        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
            {phase}
        </span>
        Giai đoạn {phase}
    </div>
);

// Step Card Component for sub-steps
const StepCard = ({
    stepNumber,
    title,
    content,
    isOpen,
    onToggle
}: {
    stepNumber: string;
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-all hover:shadow-md">
        <button
            onClick={onToggle}
            className="w-full px-5 py-4 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
        >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg">
                {stepNumber}
            </span>
            <span className="font-bold text-gray-900 flex-1">{title}</span>
            <svg
                className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        {isOpen && (
            <div className="px-5 pb-5 pt-2 text-gray-600 leading-relaxed animate-fadeIn border-t border-gray-100 bg-gray-50/50">
                <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: content
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                            .replace(/\n/g, '<br />')
                            .replace(/•/g, '<span class="text-gray-400 mr-2">•</span>')
                    }}
                />
            </div>
        )}
    </div>
);

// Deliverable Grid Card
const DeliverableCard = ({ item, index }: { item: string; index: number }) => (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </span>
        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
    </div>
);

// Commitment Card
const CommitmentCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 hover:shadow-lg transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

// Comparison List Item
const ComparisonItem = ({ text, isPositive }: { text: string; isPositive: boolean }) => (
    <div className={`flex items-start gap-3 p-3 rounded-lg ${isPositive ? 'bg-green-50/50' : 'bg-gray-50'} transition-all hover:shadow-sm`}>
        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPositive ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'}`}>
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
        <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
);

interface BrandPackagingLayoutProps {
    service: {
        title: string;
        type?: string;
        description?: string;
        image?: string;
        note?: {
            title: string;
            items: string[];
        };
        items?: Array<{
            title: string;
            lists?: string[];
            description?: string;
            price?: string;
            subtitle?: string;
            isFeatured?: boolean;
        }>;
    };
    index: number;
}

const BrandPackagingLayout: React.FC<BrandPackagingLayoutProps> = ({ service, index }) => {
    const [openSteps, setOpenSteps] = useState<number[]>([0]); // First step open by default

    const toggleStep = (stepIndex: number) => {
        setOpenSteps(prev =>
            prev.includes(stepIndex)
                ? prev.filter(i => i !== stepIndex)
                : [...prev, stepIndex]
        );
    };

    // Check if this is a Phase section (Giai đoạn)
    const isPhaseSection = service.title?.includes('Giai đoạn');
    const phaseNumber = isPhaseSection ? parseInt(service.title.match(/\d/)?.[0] || '0') : 0;

    // Check if this is Commitment section
    const isCommitmentSection = service.title === 'Cam kết của Long';

    // Check if this is "Sẵn sàng bắt đầu" section
    const isCTASection = service.title === 'Sẵn sàng bắt đầu?';

    // Parse steps from description for Phase sections
    const parseSteps = (description: string) => {
        const stepMatches = description.match(/\*\*Bước \d+\.\d+:[^*]+\*\*[^*]+(?=\*\*Bước|\*\*Gặp|$)/g);
        if (!stepMatches) return null;

        return stepMatches.map(match => {
            const titleMatch = match.match(/\*\*Bước (\d+\.\d+): ([^*]+)\*\*/);
            const stepNumber = titleMatch?.[1] || '';
            const title = titleMatch?.[2]?.trim() || '';
            const content = match.replace(/\*\*Bước \d+\.\d+:[^*]+\*\*/, '').trim();
            return { stepNumber, title, content };
        });
    };

    // Parse commitment items
    const parseCommitments = (description: string) => {
        const commitments = [
            {
                icon: '🛡️',
                title: 'Hoàn tiền nếu không hài lòng',
                pattern: /\*\*Cam kết 1:[^*]*\*\*([^*]+)(?=\*\*Cam kết 2|---)/s
            },
            {
                icon: '🔒',
                title: 'Tối đa 3 quán/tháng',
                pattern: /\*\*Cam kết 2:[^*]*\*\*([^*]+)(?=\*\*Cam kết 3|---)/s
            },
            {
                icon: '🤝',
                title: 'Không làm đối thủ trực tiếp',
                pattern: /\*\*Cam kết 3:[^*]*\*\*([^*]+)$/s
            }
        ];

        return commitments.map(c => {
            const match = description.match(c.pattern);
            return {
                icon: c.icon,
                title: c.title,
                description: match?.[1]?.replace(/---/g, '').trim() || ''
            };
        });
    };

    // Render Phase Section with improved layout
    if (isPhaseSection && service.description) {
        const steps = parseSteps(service.description);
        const introText = service.description.split('**Bước')[0].trim();

        return (
            <div className="space-y-8">
                {/* Phase Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Left: Phase Info */}
                    <div className="flex-1 space-y-6">
                        <PhaseBadge phase={phaseNumber} isActive />

                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900">
                            {service.title.replace(/Giai đoạn \d+: /, '')}
                        </h3>

                        {introText && (
                            <div
                                className="text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: introText
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                                        .replace(/\n\n/g, '</p><p class="mt-4">')
                                }}
                            />
                        )}
                    </div>

                    {/* Right: Image */}
                    {service.image && (
                        <div className="md:w-80 shrink-0">
                            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Steps as Collapsible Cards */}
                {steps && steps.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                            Các bước thực hiện
                        </h4>
                        {steps.map((step, idx) => (
                            <StepCard
                                key={idx}
                                stepNumber={step.stepNumber}
                                title={step.title}
                                content={step.content}
                                isOpen={openSteps.includes(idx)}
                                onToggle={() => toggleStep(idx)}
                            />
                        ))}
                    </div>
                )}

                {/* Deliverables Grid */}
                {service.note && (
                    <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-200">
                        <h5 className="text-lg font-black text-blue-900 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-lg">
                                ✨
                            </span>
                            {service.note.title}
                        </h5>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {service.note.items.map((item, i) => (
                                <DeliverableCard key={i} item={item} index={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Render Commitment Section with 3 cards
    if (isCommitmentSection && service.description) {
        const commitments = parseCommitments(service.description);

        return (
            <div className="space-y-8">
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">
                        {service.title}
                    </h3>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Những cam kết Long đưa ra để bạn yên tâm đồng hành
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {commitments.map((commitment, idx) => (
                        <CommitmentCard
                            key={idx}
                            icon={commitment.icon}
                            title={commitment.title}
                            description={commitment.description}
                        />
                    ))}
                </div>

                {service.note && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                        <h5 className="font-bold text-gray-900 mb-3">{service.note.title}</h5>
                        <div className="flex flex-wrap justify-center gap-4">
                            {service.note.items.map((item, i) => (
                                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Render CTA Section
    if (isCTASection) {
        return (
            <div className="text-center space-y-8">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900">
                    {service.title}
                </h3>

                {service.description && (
                    <div className="max-w-2xl mx-auto">
                        <div
                            className="text-gray-600 leading-relaxed text-left"
                            dangerouslySetInnerHTML={{
                                __html: service.description
                                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                                    .replace(/\n\n---\n\n/g, '<div class="my-6 border-t border-gray-200"></div>')
                                    .replace(/\n/g, '<br />')
                            }}
                        />
                    </div>
                )}

                {service.note && (
                    <div className="mt-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                        <h5 className="text-xl font-bold mb-6">{service.note.title}</h5>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {service.note.items.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.includes('Facebook') ? 'https://www.facebook.com/Long2492/' : item.includes('Zalo') ? 'tel:0528442530' : 'mailto:Long2492000@gmail.com'}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                                >
                                    <span className="text-lg">
                                        {item.includes('Facebook') ? '📘' : item.includes('Zalo') ? '📞' : '✉️'}
                                    </span>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Return null for sections that should use default rendering
    return null;
};

export default BrandPackagingLayout;
