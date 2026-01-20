import React, { useState } from 'react';

// Interface cho câu hỏi
interface QuizQuestion {
    id: number;
    question: string;
    options: {
        label: string;
        value: string;
        isCorrect: boolean;
    }[];
}

// Data mẫu cho 10 câu hỏi
const QUIZ_DATA: QuizQuestion[] = [
    {
        id: 1,
        question: "Quy mô đầu tư của quán?",
        options: [
            { label: "Dưới 300 triệu", value: "A", isCorrect: false },
            { label: "500tr - 1,5 tỷ", value: "B", isCorrect: true },
            { label: "1,5 - 3 tỷ", value: "C", isCorrect: true },
            { label: "Trên 3 tỷ", value: "D", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "Thời gian dành cho marketing mỗi ngày?",
        options: [
            { label: "Không có thời gian", value: "A", isCorrect: false },
            { label: "15-30 phút", value: "B", isCorrect: true },
            { label: "1-2 tiếng", value: "C", isCorrect: true },
            { label: "Cả ngày", value: "D", isCorrect: true }
        ]
    },
    {
        id: 3,
        question: "Kinh nghiệm marketing trước đây?",
        options: [
            { label: "Chưa từng làm", value: "A", isCorrect: true },
            { label: "Tự đăng bài FB", value: "B", isCorrect: true },
            { label: "Đã thuê agency", value: "C", isCorrect: true },
            { label: "Có nhân viên MKT", value: "D", isCorrect: true }
        ]
    },
    {
        id: 4,
        question: "Mục tiêu marketing của bạn?",
        options: [
            { label: "Tăng doanh số ngay", value: "A", isCorrect: false },
            { label: "Xây thương hiệu bền vững", value: "B", isCorrect: true },
            { label: "Tăng nhận diện", value: "C", isCorrect: true },
            { label: "Viral nhanh", value: "D", isCorrect: false }
        ]
    },
    {
        id: 5,
        question: "Bạn muốn tự làm marketing?",
        options: [
            { label: "Không, thuê người", value: "A", isCorrect: false },
            { label: "Có, muốn tự làm", value: "B", isCorrect: true },
            { label: "Học để dạy nhân viên", value: "C", isCorrect: true },
            { label: "Chưa biết", value: "D", isCorrect: true }
        ]
    },
    {
        id: 6,
        question: "Sẵn sàng học AI, Canva?",
        options: [
            { label: "Không, không rành", value: "A", isCorrect: false },
            { label: "Có, nếu được dạy", value: "B", isCorrect: true },
            { label: "Có, học nhanh", value: "C", isCorrect: true },
            { label: "Đang dùng rồi", value: "D", isCorrect: true }
        ]
    },
    {
        id: 7,
        question: "Kỳ vọng sau khi tham gia?",
        options: [
            { label: "Quán đông ngay", value: "A", isCorrect: false },
            { label: "Có kế hoạch rõ ràng", value: "B", isCorrect: true },
            { label: "Tự tin làm content", value: "C", isCorrect: true },
            { label: "Bài viral", value: "D", isCorrect: false }
        ]
    },
    {
        id: 8,
        question: "Thời gian đồng hành mong muốn?",
        options: [
            { label: "1 tháng", value: "A", isCorrect: false },
            { label: "3-6 tháng", value: "B", isCorrect: true },
            { label: "6-12 tháng", value: "C", isCorrect: true },
            { label: "Không cần", value: "D", isCorrect: false }
        ]
    },
    {
        id: 9,
        question: "Có nhân viên làm marketing?",
        options: [
            { label: "Không, chỉ mình", value: "A", isCorrect: true },
            { label: "Có 1-2 người", value: "B", isCorrect: true },
            { label: "Có team riêng", value: "C", isCorrect: false },
            { label: "Chưa nghĩ", value: "D", isCorrect: true }
        ]
    },
    {
        id: 10,
        question: "Ngân sách đầu tư?",
        options: [
            { label: "Dưới 10 triệu", value: "A", isCorrect: false },
            { label: "10-20 triệu", value: "B", isCorrect: true },
            { label: "20-30 triệu", value: "C", isCorrect: true },
            { label: "Trên 30 triệu", value: "D", isCorrect: true }
        ]
    }
];

const BrandPackagingQuiz: React.FC = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResult(false);
        setScore(0);
    };

    const handleSelectAnswer = (questionId: number, value: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestion < QUIZ_DATA.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            let totalScore = 0;
            QUIZ_DATA.forEach(question => {
                const selectedValue = selectedAnswers[question.id];
                const selectedOption = question.options.find(opt => opt.value === selectedValue);
                if (selectedOption?.isCorrect) {
                    totalScore += 1;
                }
            });
            setScore(totalScore);
            setShowResult(true);
        }
    };

    const getResultMessage = () => {
        const percentage = (score / QUIZ_DATA.length) * 100;

        if (percentage >= 80) {
            return {
                title: "🎉 Rất phù hợp!",
                message: "Bạn sẵn sàng để tự chủ marketing. Gói này sẽ giúp bạn tiết kiệm hàng chục triệu mỗi tháng!",
                color: "from-green-500 to-emerald-600"
            };
        } else if (percentage >= 60) {
            return {
                title: "✨ Khá phù hợp",
                message: "Bạn có tiềm năng. Với hỗ trợ chi tiết, bạn sẽ tự tin hơn nhiều.",
                color: "from-blue-500 to-indigo-600"
            };
        } else if (percentage >= 40) {
            return {
                title: "🤔 Cân nhắc thêm",
                message: "Gói này yêu cầu thời gian và kiên trì. Có thể gói Marketing Tổng Thể phù hợp hơn.",
                color: "from-yellow-500 to-orange-600"
            };
        } else {
            return {
                title: "💡 Chưa phù hợp",
                message: "Nên cân nhắc gói Marketing Tổng Thể hoặc trò chuyện với Long.",
                color: "from-red-500 to-pink-600"
            };
        }
    };

    // Introduction
    if (!quizStarted) {
        return (
            <div className="flex items-center py-4 md:py-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
                    <div className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
                        Quiz 2 phút
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        Gói này có phù hợp?
                    </h3>
                    <p className="text-base text-gray-600 mb-8">
                        10 câu hỏi nhanh để biết bạn có phù hợp không
                    </p>
                    <button
                        onClick={handleStartQuiz}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
                    >
                        Bắt đầu
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    // Result
    if (showResult) {
        const result = getResultMessage();
        return (
            <div className="flex items-center py-4 md:py-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="max-w-2xl mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className={`bg-gradient-to-r ${result.color} p-6 md:p-8 text-white text-center`}>
                            <div className="text-5xl mb-3">
                                {score >= 8 ? '🎉' : score >= 6 ? '✨' : score >= 4 ? '🤔' : '💡'}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-2">{result.title}</h3>
                            <p className="text-sm opacity-90">Điểm: {score}/{QUIZ_DATA.length}</p>
                        </div>

                        <div className="p-6 md:p-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {result.message}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleStartQuiz}
                                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all"
                                >
                                    Làm lại
                                </button>
                                <a
                                    href="https://www.facebook.com/Long2492/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-all text-center"
                                >
                                    Liên hệ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Question
    const question = QUIZ_DATA[currentQuestion];
    const selectedAnswer = selectedAnswers[question.id];
    const progress = ((currentQuestion + 1) / QUIZ_DATA.length) * 100;

    return (
        <div className="flex items-center py-3 md:py-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="w-full max-w-2xl mx-auto px-4 md:px-6">
                {/* Progress */}
                <div className="mb-4 md:mb-6">
                    <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                        <span>Câu {currentQuestion + 1}/{QUIZ_DATA.length}</span>
                        <span className="text-indigo-600">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                        {question.question}
                    </h3>

                    {/* Options - Compact */}
                    <div className="space-y-2">
                        {question.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelectAnswer(question.id, option.value)}
                                className={`w-full p-3 md:p-3.5 rounded-xl border-2 text-left transition-all text-sm ${selectedAnswer === option.value
                                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                    : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedAnswer === option.value
                                        ? 'border-indigo-600 bg-indigo-600'
                                        : 'border-gray-300'
                                        }`}>
                                        {selectedAnswer === option.value && (
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        )}
                                    </div>
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm shrink-0 ${selectedAnswer === option.value
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {option.value}
                                    </div>
                                    <span className={`font-medium ${selectedAnswer === option.value ? 'text-gray-900' : 'text-gray-700'
                                        }`}>
                                        {option.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation - Compact */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestion === 0}
                        className="px-4 py-2 rounded-full text-sm font-bold text-gray-600 hover:bg-white/80 transition-all disabled:opacity-30"
                    >
                        ← Quay lại
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        disabled={!selectedAnswer}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg disabled:opacity-50"
                    >
                        {currentQuestion === QUIZ_DATA.length - 1 ? 'Kết quả' : 'Tiếp →'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandPackagingQuiz;
