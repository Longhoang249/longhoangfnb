import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { STORY_TABS_CONTENT, RESOURCES, OFFERINGS, BLOG_POSTS, LONG_THOUGHTS_PARAGRAPHS, THOUGHTS_CAROUSEL_ITEMS, PRODUCTS } from '../../constants';
import AIConsultant from '../../components/AIConsultant';
import SmartImage from '../../components/SmartImage';

const TikTokCarousel = ({ items }: { items: { name: string; image: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  return (
    <div className="space-y-6 flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-black rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 relative group aspect-[3/2]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.name}
                className="w-full h-full"
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Soon</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-sm md:text-base font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-300">
          {items[currentIndex].name}
        </p>

        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-black hover:text-white transition-all active:scale-95 z-20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="flex gap-1.5 z-20">
            {items.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-black' : 'w-1.5 bg-gray-200'}`} />
            ))}
          </div>

          <button onClick={next} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-black hover:text-white transition-all active:scale-95 z-20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
const LearnedItem = ({ person }: { person: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white text-center">
      <div className={`aspect-square w-32 md:w-40 mx-auto rounded-full overflow-hidden mb-8 shadow-xl transition-all duration-700 ring-4 ring-gray-100 ${isVisible ? 'grayscale-0 scale-105 ring-green-400' : 'grayscale custom-grayscale'}`}>
        <SmartImage src={person.image} alt={person.name} className="w-full h-full" />
      </div>
      <div className="space-y-4">
        <div><h4 className="text-lg font-bold mb-1.5">{person.name}</h4><div className="space-y-1 text-[10px] md:text-[11px] font-medium text-gray-400 leading-tight">{person.role.split('|').map((r: string, rIdx: number) => (<p key={rIdx}>{r.trim()}</p>))}</div></div>
        <p className="text-sm text-gray-500 italic leading-relaxed mx-auto text-justify">{person.story}</p>
      </div>
    </div>
  );
};
// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Navigation items
const NAV_ITEMS = [
  { id: 'story', label: 'Hành trình' },
  { id: 'offerings', label: 'Dịch vụ' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Liên hệ' },
];

const Home: React.FC = () => {
  // Refs để cuộn trang
  const partRef = useRef<HTMLDivElement>(null);
  const windowTopRef = useRef<HTMLDivElement>(null);

  // Restore scroll position when returning from product page
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      sessionStorage.removeItem('homeScrollPosition');
    }
  }, []);

  // States cho Story Section (Merged)
  const [activeTab, setActiveTab] = useState<'did' | 'dont' | 'learned' | 'mentored'>('did');
  const [isWindowExpanded, setIsWindowExpanded] = useState(false);

  // Các states khác giữ nguyên
  const [isThoughtsExpanded, setIsThoughtsExpanded] = useState(false);
  const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);
  const [activeContact, setActiveContact] = useState<'facebook' | 'tiktok' | 'gmail' | 'phone' | null>(null);

  // States cho các playlist/interaction trong tab
  const [activeEventIdx, setActiveEventIdx] = useState(0);
  const [activeFanpageIdx, setActiveFanpageIdx] = useState(0);
  const [selectedLogoId, setSelectedLogoId] = useState<string | null>(null);
  const [activeThoughtIndex, setActiveThoughtIndex] = useState(0);

  // State cho Offerings
  const [activeProductTab, setActiveProductTab] = useState<string>(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find(p => p.id === activeProductTab) || PRODUCTS[0];

  // Removed scroll animations to fix flickering bug

  // Removed sticky nav scroll handler to fix flickering bug

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleWhoIsLong = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('did');
      setIsWindowExpanded(true);
    }
  };

  const handleCollapseWindow = () => {
    setIsWindowExpanded(false);
    // Cuộn lên đầu phần Story (Chỗ tabs)
    partRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleCollapseThoughts = () => {
    setIsThoughtsExpanded(false);
    const section = document.getElementById('thoughts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCollapseResources = () => {
    setIsResourcesExpanded(false);
    const section = document.getElementById('store');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Component render nội dung cho cửa sổ khám phá
  const WindowContent = ({ tabKey }: { tabKey: keyof typeof STORY_TABS_CONTENT }) => {
    const content = STORY_TABS_CONTENT[tabKey] as any;



    const renderTabBody = () => {
      if (tabKey === 'did') {
        return (
          <div className="flex flex-col">
            {content.sections?.map((section: any, sIdx: number) => {
              const sectionContent = (() => {
                if (section.id === 'events') {
                  const active = section.items[activeEventIdx];
                  return (
                    <div className="max-w-3xl mx-auto space-y-5">
                      <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">{section.title}</h4>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium italic">{section.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="aspect-video w-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-gray-100 relative">
                          <iframe key={activeEventIdx} src={active.videoUrl} title={active.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                        <div className="flex items-center justify-between px-2">
                          <button onClick={() => setActiveEventIdx((prev) => (prev - 1 + section.items.length) % section.items.length)} className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-black hover:bg-black hover:text-white"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                          <div className="flex gap-1.5 md:gap-2">{section.items.map((_: any, idx: number) => (<div key={idx} className={`h-1 rounded-full transition-all duration-300 ${activeEventIdx === idx ? 'w-5 bg-black' : 'w-1 bg-gray-200'}`} />))}</div>
                          <button onClick={() => setActiveEventIdx((prev) => (prev + 1) % section.items.length)} className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-black hover:bg-black hover:text-white"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                        </div>
                        <div className="bg-gray-50/50 p-5 rounded-[2rem] border border-gray-100 text-center space-y-3">
                          <div>
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Chiến dịch</p>
                            <h5 className="text-lg md:text-xl font-bold">{active.title}</h5>
                            {active.brand && <p className="text-xs md:text-sm font-medium text-gray-500 mt-1 max-w-xl mx-auto leading-relaxed">{active.brand}</p>}
                          </div>
                          <div className="max-w-md mx-auto">
                            <div className="space-y-1">
                              {active.results.split('\n').map((line: string, i: number) => (
                                <p key={i} className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">{line}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (section.id === 'fanpage') {
                  const active = section.items[activeFanpageIdx];
                  return (
                    <div className="max-w-2xl mx-auto space-y-5">
                      <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">{section.title}</h4>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium italic">{section.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="aspect-[9/16] w-56 md:w-72 bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-gray-100">
                            <iframe key={activeFanpageIdx} src={active.videoUrl} title={active.brand} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-2 max-sm mx-auto">
                          <button onClick={() => setActiveFanpageIdx((prev) => (prev - 1 + section.items.length) % section.items.length)} className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-black hover:bg-black hover:text-white"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                          <div className="flex gap-1.5 md:gap-2">{section.items.map((_: any, idx: number) => (<div key={idx} className={`h-1 rounded-full transition-all duration-300 ${activeFanpageIdx === idx ? 'w-5 bg-black' : 'w-1 bg-gray-200'}`} />))}</div>
                          <button onClick={() => setActiveFanpageIdx((prev) => (prev + 1) % section.items.length)} className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-black hover:bg-black hover:text-white"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                        </div>
                        <div className="bg-gray-50/50 p-5 rounded-[2rem] border border-gray-100 text-center space-y-2">
                          <div><p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Thương hiệu</p><h5 className="text-lg md:text-xl font-bold">{active.brand}</h5><p className="text-[10px] text-gray-400 mt-0.5">{active.title}</p></div>
                          <div className="max-w-md mx-auto"><p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Hiệu quả</p><p className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed italic">{active.results}</p></div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (section.id === 'partnership') {
                  return (
                    <div className="max-w-4xl mx-auto space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">{section.title}</h4>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium italic">{section.description}</p>
                      </div>
                      <div className="space-y-4">
                        {section.logoGroups.map((group: any, gIdx: number) => {
                          return (
                            <div key={gIdx} className="space-y-3 bg-gray-50/30 p-5 rounded-[2.5rem] border border-gray-50">
                              <div className="text-center space-y-1.5"><p className="text-lg md:text-xl font-black text-black tracking-tighter whitespace-pre-line leading-tight w-full">{group.company}</p><div className="flex flex-col items-center gap-1 w-full">{group.roles.map((role: any, rIdx: number) => (<div key={rIdx} className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center w-full"><span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wide">{role.title}</span><span className="hidden md:inline text-gray-200 max-h-3">•</span><span className="text-[10px] md:text-xs font-medium text-gray-400 italic">{role.time}</span></div>))}</div></div>
                              <div className="flex flex-col items-center gap-3 md:gap-4 px-4 w-full">
                                <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 w-full overflow-x-auto pb-2 custom-scrollbar">
                                  {group.logos.map((logo: any) => {
                                    return (
                                      <div
                                        key={logo.id}
                                        className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 overflow-hidden"
                                      >
                                        <img src={logo.src} alt={logo.name} className={logo.fill ? "w-full h-full object-cover" : "w-7 h-7 md:w-9 md:h-9 object-contain"} />
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              {group.featuredImage && (
                                <div className="w-full max-w-3xl mx-auto mt-6 bg-gray-50/50 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 p-1.5 md:p-2.5">
                                  <div className="w-full aspect-[940/788] overflow-hidden rounded-xl md:rounded-[1.5rem] shadow-inner relative group/img">
                                    <div className="absolute inset-0 bg-gray-100">
                                      <SmartImage src={group.featuredImage} alt="" className="w-full h-full object-cover blur-md scale-110 opacity-60" />
                                    </div>
                                    <SmartImage src={group.featuredImage} alt={group.company} className="relative w-full h-full object-contain z-10 group-hover/img:scale-105 transition-transform duration-700" />
                                  </div>
                                </div>
                              )}
                            </div>

                          );
                        })
                        }
                      </div>
                    </div >
                  );
                }
                if (section.id === 'community' || section.id === 'personal_brand' || section.id === 'other_activities') {
                  return (
                    <div className="max-w-4xl mx-auto space-y-6">
                      <div className="text-center"><h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">{section.title}</h4><p className="text-gray-400 text-[10px] md:text-xs font-medium italic">{section.description}</p></div>
                      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
                        {section.items.map((item: any, idx: number) => (
                          <div key={idx} className="group/community border-b border-dashed border-gray-200 last:border-0 p-6 md:p-8 space-y-6">
                            <div className="text-center max-w-2xl mx-auto space-y-2">
                              <h5 className="text-xl md:text-2xl font-black mb-0.5 leading-tight">{item.title}</h5>
                              {item.brand && <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">{item.brand}</p>}
                              <div className="flex flex-col items-center gap-1 pt-0.5">
                                {item.results.split('\n').map((line: string, lIdx: number) => {
                                  if (!line.trim()) return null;
                                  const isYear = /^\d{4}/.test(line.trim());
                                  if (isYear) {
                                    return (
                                      <div key={lIdx} className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-800 bg-gray-50 px-2.5 py-0.5 rounded-full border border-gray-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                                        <span>{line.trim()}</span>
                                      </div>
                                    );
                                  }
                                  return <p key={lIdx} className="text-sm md:text-base font-medium text-gray-500 leading-relaxed italic text-center max-w-xl">{line.trim()}</p>
                                })}
                              </div>
                            </div>

                            <div className="flex justify-center w-full">
                              {item.subItems ? (
                                <TikTokCarousel items={item.subItems} />
                              ) : (
                                <div className="w-full max-w-3xl bg-gray-50/50 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 p-1.5 md:p-2.5">
                                  {item.videoUrl ? (
                                    <div className="w-full aspect-video bg-black rounded-xl md:rounded-[1.5rem] overflow-hidden shadow-inner">
                                      <iframe src={item.videoUrl} title={item.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                    </div>
                                  ) : (
                                    <div className="w-full aspect-[3/2] overflow-hidden rounded-xl md:rounded-[1.5rem] shadow-inner relative group/img">
                                      <SmartImage src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })();
              return (
                <div key={section.id}>
                  {sIdx > 0 && (<div className="py-8 md:py-12 flex flex-col items-center"><div className="w-px h-6 md:h-10 bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div><div className="w-1.5 h-1.5 rounded-full bg-black/5 my-2"></div></div>)}
                  <div className={`transition-all duration-300 ${sIdx % 2 !== 0 ? 'bg-gray-50 rounded-[2.5rem] p-5 md:p-8' : ''}`}>
                    {sectionContent}
                  </div>
                </div>
              );
            })}
          </div >
        );
      }
      if (tabKey === 'dont') {
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            {(content.details as any).map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 p-6 bg-gray-50/50 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow text-left items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-50 text-red-400 rounded-full flex items-center justify-center font-bold text-[10px] mt-1">✕</div>
                <div className="space-y-1"><h4 className="text-lg font-bold leading-tight">{item.title}</h4><p className="text-gray-500 text-xs leading-relaxed">{item.reason}</p></div>
              </div>
            ))}
          </div>
        );
      }
      if (tabKey === 'learned' || tabKey === 'mentored') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {(content.details as any).map((person: any, idx: number) => (
              <LearnedItem key={idx} person={person} />
            ))}
          </div>
        );
      }
      return null;
    };

    return (
      <div className="animate-fadeIn">
        {renderTabBody()}

        {/* Nút gợi ý đọc phần còn lại */}

      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans bg-white text-[#1a1a1a]" onClick={() => { setSelectedLogoId(null); }}>
      {/* Hero Section */}
      <section id="about" className="pt-16 md:pt-24 pb-6 md:pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left md:pl-16">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">Truyền thông chuyên biệt ngành FnB</span>
            <h1 className="text-[9.5vw] sm:text-5xl md:text-7xl font-bold leading-none mb-8 tracking-tighter">Hoàng Duy Long</h1>
            <div className="text-sm md:text-lg text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 space-y-4">
              <p>Một người tin vào IKIGAI, thành công với Long chỉ đơn giản là được học thứ mình thích, làm thứ mình giỏi và kiếm đủ thu nhập bằng đam mê đó.</p>
              <p>Và IKIGAI của Long là Marketing F&B Expert - <strong>Người làm truyền thông chuyên biệt ngành Ẩm thực và Đồ uống.</strong></p>
            </div>

            {/* Navigation - Inside Hero, below text on desktop - Full width matching text */}
            <nav className="hidden md:block">
              <div className="bg-gray-100 px-1.5 py-1.5 rounded-full border border-gray-200 flex items-center justify-between max-w-lg shadow-inner">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex-1 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-black hover:bg-white hover:shadow-sm transition-all active:scale-95 text-center"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
          <div className="relative md:w-3/4 md:mx-auto">
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <SmartImage src="https://i.ibb.co/3m8sdk0j/6330560-A-04-F3-40-B6-913-D-B853-DFB2-CDBF-1-105-c.jpg" alt="Hoàng Duy Long" className="w-full h-full" priority />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm py-4 px-5 rounded-2xl shadow-xl border border-gray-100 z-10 flex flex-col items-start transition-all hover:scale-105 max-w-[260px]">
              <p className="text-[10px] md:text-xs font-medium text-gray-500 italic leading-relaxed">
                "Chào bạn đến nhà Long - nơi mình khoe ra những thành tựu đáng để khoe nhưng giấu nhẹm mấy thất bại ê chề."
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Full width, more spacing from image */}
        <nav className="md:hidden mt-12 -mx-6 px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 px-3 py-2.5 rounded-full border border-gray-200 flex items-center justify-center gap-1 shadow-inner mb-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-wide text-gray-500 hover:text-black hover:bg-white hover:shadow-sm transition-all active:scale-95 whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </section>



      {/* Hành trình của Long Section */}
      <section id="story" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4">Hành trình của Long</h2>
            <p className="text-gray-400 text-xs md:text-sm font-normal tracking-normal uppercase">kinh nghiệm qua từng dự án thực tế</p>
          </div>

          {/* MERGED STORY SECTION */}
          <div className="space-y-12" ref={partRef}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-1.5 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="grid grid-cols-3 gap-1 md:gap-1.5">
                  {/* Temporarily hiding 'mentored' tab - data still exists in constants */}
                  {(['did', 'dont', 'learned'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(key);
                        setIsWindowExpanded(false);
                      }}
                      className={`py-3 px-2 md:py-4 md:px-4 rounded-full text-[9px] md:text-xs font-bold transition-all duration-500 uppercase tracking-tighter ${activeTab === key ? 'bg-black text-white shadow-xl scale-[1.02]' : 'text-gray-400 hover:text-black hover:bg-gray-50'}`}
                    >
                      {STORY_TABS_CONTENT[key].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto" ref={windowTopRef}>
              {isWindowExpanded ? (
                <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-gray-200 shadow-2xl overflow-hidden flex flex-col h-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                  <div className="px-8 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{STORY_TABS_CONTENT[activeTab].label}</div>
                  </div>
                  <div className="p-6 md:p-12 scroll-smooth">
                    <WindowContent tabKey={activeTab} />

                    {/* 3 Suggestions Section */}
                    <div className="mt-20 pt-10 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Khám phá tiếp</p>
                      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {/* Only showing did, dont, learned tabs - mentored is temporarily hidden */}
                        {(['did', 'dont', 'learned'] as const)
                          .filter(k => k !== activeTab)
                          .map(k => (
                            <button
                              key={k}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab(k);
                                windowTopRef.current?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="py-3 px-8 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all text-center group min-w-[200px]"
                            >
                              <span className="text-xs font-bold tracking-tight text-gray-400 group-hover:text-black transition-colors">{STORY_TABS_CONTENT[k].label}</span>
                            </button>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex justify-center"><button onClick={handleCollapseWindow} className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">rút gọn</button></div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border border-gray-200 shadow-xl p-8 md:p-16 text-center animate-fadeIn group" onClick={(e) => e.stopPropagation()}>
                  <p className="text-base md:text-xl font-medium text-gray-500 mb-10 italic leading-relaxed">{(STORY_TABS_CONTENT[activeTab] as any).preview}</p>
                  <button onClick={() => setIsWindowExpanded(true)} className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-110 transition-all shadow-2xl flex items-center gap-3 mx-auto">Khám phá <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">Long bán gì không?</h2>
            <p className="text-gray-400 text-xs md:text-sm font-normal tracking-normal">có, long cung cấp các gói giải pháp</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex bg-white p-1 rounded-full shadow-sm border border-gray-100 max-w-3xl mx-auto">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProductTab(product.id);
                  }}
                  className={`flex-1 py-3 px-2 md:py-4 md:px-4 rounded-full text-[9px] md:text-xs font-bold transition-all duration-500 uppercase tracking-tighter ${activeProductTab === product.id ? 'bg-black text-white shadow-xl scale-[1.02]' : 'text-gray-400 hover:text-black hover:bg-gray-50'}`}
                >
                  {product.title}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border border-gray-200 shadow-xl p-8 md:p-16 text-center animate-fadeIn group">
              <p className="text-base md:text-xl font-medium text-gray-500 mb-10 italic leading-relaxed max-w-2xl mx-auto">{activeProduct.shortDescription}</p>
              {activeProduct.id === 'goi-marketing-tong-the' ? (
                <button disabled className="bg-gray-400 text-white px-10 py-4 rounded-full text-sm font-bold cursor-not-allowed shadow-none flex items-center gap-3 mx-auto w-fit">
                  Sorry bạn, Long kín lịch rùi
                </button>
              ) : (
                <Link
                  to={`/product/${activeProduct.id}`}
                  onClick={() => sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())}
                  className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-110 transition-all shadow-2xl flex items-center gap-3 mx-auto w-fit"
                >
                  Khám phá <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
              )}
            </div>
          </div>

          <div className="mt-16 text-center"><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-black text-xs font-bold uppercase tracking-widest transition-all underline underline-offset-8">Có gói riêng không?</button></div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section id="thoughts" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16"><h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Long và vài tâm sự</h2><p className="text-gray-400 text-xs md:text-sm font-normal leading-relaxed italic max-w-sm mx-auto">Hơi dài, mong là không lê thê</p></div>
          <div className="max-w-4xl mx-auto">
            {isThoughtsExpanded ? (
              <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-gray-200 shadow-2xl flex flex-col h-auto animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                <div className="px-8 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50"><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div><div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-none">Vài lời chia sẻ</div></div>
                <div className="p-8 md:p-16 max-w-2xl mx-auto">
                  <div className="mb-10 space-y-4">
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden shadow-lg relative">
                      {THOUGHTS_CAROUSEL_ITEMS.map((item, idx) => (
                        <div key={idx} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${idx === activeThoughtIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                          <SmartImage src={item.image} alt={item.title} className="w-full h-full" />
                        </div>
                      ))}

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {THOUGHTS_CAROUSEL_ITEMS.map((_, idx) => (
                          <div key={idx} className={`h-1 rounded-full transition-all duration-300 shadow-sm ${activeThoughtIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <button onClick={(e) => { e.stopPropagation(); setActiveThoughtIndex(prev => (prev - 1 + THOUGHTS_CAROUSEL_ITEMS.length) % THOUGHTS_CAROUSEL_ITEMS.length); }} className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:scale-110 hover:border-black transition-all text-gray-400 hover:text-black hover:shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                      <button onClick={(e) => { e.stopPropagation(); setActiveThoughtIndex(prev => (prev + 1) % THOUGHTS_CAROUSEL_ITEMS.length); }} className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:scale-110 hover:border-black transition-all text-gray-400 hover:text-black hover:shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                    </div>

                    <div className="bg-white border border-gray-100 p-5 md:p-6 rounded-[2rem] shadow-sm text-left">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {THOUGHTS_CAROUSEL_ITEMS[activeThoughtIndex].date && <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md border border-gray-100 whitespace-nowrap">{THOUGHTS_CAROUSEL_ITEMS[activeThoughtIndex].date}</span>}
                          <span className="text-xs md:text-sm font-black text-gray-800 uppercase tracking-tight">{THOUGHTS_CAROUSEL_ITEMS[activeThoughtIndex].title}</span>
                        </div>
                        <p className="text-sm md:text-base font-normal text-gray-600 leading-relaxed">{THOUGHTS_CAROUSEL_ITEMS[activeThoughtIndex].description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 my-10 opacity-30">
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  </div>

                  <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700 font-normal tracking-normal text-justify">{LONG_THOUGHTS_PARAGRAPHS.map((para, idx) => (<p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:text-black first-letter:mr-3 first-letter:float-left" : ""} dangerouslySetInnerHTML={{ __html: para }}></p>))}</div>
                </div>
                <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex justify-center"><button onClick={handleCollapseThoughts} className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">rút gọn</button></div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-white rounded-[3rem] border border-gray-200 shadow-xl p-8 md:p-16 text-center animate-fadeIn group" onClick={(e) => e.stopPropagation()}><p className="text-base md:text-lg font-normal text-gray-500 mb-10 italic leading-relaxed">Long bắt đầu hành trình Làm Marketing Chuyên Biệt Ngành Ăn Uống không phải từ trường lớp bài bản...</p><button onClick={() => setIsThoughtsExpanded(true)} className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-110 transition-all shadow-2xl flex items-center gap-3 mx-auto">Khám phá <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button></div>
            )}
          </div>
        </div>
      </section>



      {/* Blog Section */}
      <section id="blog" className="py-20 md:py-32 bg-white overflow-hidden border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16"><h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Blog Của Long</h2><p className="text-gray-400 text-xs md:text-sm font-normal leading-relaxed italic max-sm mx-auto">Nơi chứa mấy thứ linh tinh có thể Long sẽ viết, hoặc không</p></div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-gray-200 shadow-2xl overflow-hidden flex flex-col h-auto relative">
              <div className="px-8 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50"><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div><div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-none">Blog cá nhân</div></div>
              <div className="relative">
                <div className="p-4 md:p-8 blur-[10px] opacity-20 select-none pointer-events-none">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-8 ml-2">Latest Articles</h4>
                  <div className="space-y-2">{BLOG_POSTS.map((post) => (<div key={post.id} className="flex items-center gap-4 md:gap-6 p-3 md:p-6 rounded-[1.5rem]"><div className="w-24 h-20 md:w-56 md:h-auto md:aspect-[16/10] flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl bg-gray-100"></div><div className="flex flex-col justify-center min-w-0 flex-1"><h3 className="text-sm md:text-xl font-bold text-black leading-tight line-clamp-2 mb-1">{post.title}</h3><p className="hidden md:block text-sm text-gray-500 line-clamp-2 leading-relaxed font-medium mb-2">{post.excerpt}</p></div></div>))}</div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"><div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300 shadow-sm border border-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div><p className="text-sm md:text-base font-medium text-gray-400 italic">Long lười quá nên chưa viết gì</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-gray-50/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Kết Bạn Với Long</h2>
            <p className="text-gray-400 text-xs md:text-sm font-normal tracking-normal">Biết đâu chúng ta có thể đồng hành</p>
          </div>

          {/* Improved mobile touch targets - min 44x44px */}
          <div className="grid grid-cols-4 gap-3 md:gap-8 max-w-lg mx-auto mb-12">
            <a href="https://www.facebook.com/Long2492/" target="_blank" rel="noopener noreferrer" className="aspect-square min-w-[72px] rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group active:scale-95">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 group-hover:bg-[#1877F2] transition-colors flex items-center justify-center">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </div>
            </a>

            <a href="https://www.tiktok.com/@long.moquancaphe" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 group-hover:bg-black transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </div>
            </a>

            <button onClick={() => setActiveContact('gmail')} className={`aspect-square rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'gmail' ? 'ring-2 ring-black transform -translate-y-1 shadow-xl' : ''}`}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 group-hover:bg-red-500 transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </div>
            </button>

            <button onClick={() => setActiveContact('phone')} className={`aspect-square rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group ${activeContact === 'phone' ? 'ring-2 ring-black transform -translate-y-1 shadow-xl' : ''}`}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 group-hover:bg-green-500 transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.28 1.12.27 2.33.39 3.57.39.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.13 2.45.4 3.57.08.35-.01.74-.29 1.02l-2.2 2.2z" /></svg>
              </div>
            </button>
          </div>

          {activeContact === 'gmail' && (
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-lg mx-auto animate-fadeIn relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-6">Liên hệ qua Gmail</p>
              <div className="text-xl md:text-3xl font-bold tracking-tight mb-8 break-all">Long2492000@gmail.com</div>
              <div className="flex justify-center gap-4">
                <button onClick={() => navigator.clipboard.writeText('Long2492000@gmail.com')} className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Sao chép
                </button>
              </div>
              <button onClick={() => setActiveContact(null)} className="mt-8 text-[10px] font-bold text-gray-300 hover:text-black uppercase tracking-widest transition-colors">Đóng</button>
            </div>
          )}

          {activeContact === 'phone' && (
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-lg mx-auto animate-fadeIn relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-6">Liên hệ qua Phone</p>
              <div className="text-xl md:text-3xl font-bold tracking-tight mb-8">0528 442 530</div>
              <div className="flex justify-center gap-4">
                <button onClick={() => navigator.clipboard.writeText('0528442530')} className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Sao chép
                </button>
              </div>
              <button onClick={() => setActiveContact(null)} className="mt-8 text-[10px] font-bold text-gray-300 hover:text-black uppercase tracking-widest transition-colors">Đóng</button>
            </div>
          )}
        </div>
      </section>

      <footer className="py-10 border-t border-gray-100 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"><div className="text-lg font-bold tracking-tighter uppercase">LONGHOANG<span className="text-gray-400">.FnB</span></div><div className="text-gray-300 text-[10px] uppercase tracking-widest font-bold">© 2026 Hoang Duy Long</div></div>
      </footer>

      <AIConsultant />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .custom-grayscale { filter: grayscale(100%); transition: filter 0.3s ease; }
        .custom-grayscale:hover { filter: grayscale(0%); }
        
        /* Typography improvements */
        body { text-wrap: pretty; }
        h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
      `}</style>
    </div>
  );
};

export default Home;
