import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    rootMargin?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({
    src,
    alt,
    className = '',
    priority = false,
    rootMargin = '200px',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    const finalSrc = React.useMemo(() => {
        if (src.includes('images.unsplash.com') && !src.includes('w=')) {
            return `${src}&w=800&q=80&auto=format`;
        }
        return src;
    }, [src]);

    useEffect(() => {
        if (priority || !imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [priority, rootMargin]);

    const handleLoad = useCallback(() => setIsLoaded(true), []);
    const handleError = useCallback(() => {
        setHasError(true);
        setIsLoaded(true);
    }, []);

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {/* Skeleton placeholder */}
            <div
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                style={{ background: 'linear-gradient(135deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)', backgroundSize: '200% 200%', animation: 'shimmer 1.5s ease-in-out infinite' }}
            />

            {/* Error fallback */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                </div>
            )}

            {/* Actual Image */}
            {isInView && !hasError && (
                <img
                    src={finalSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    decoding={priority ? 'sync' : 'async'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            )}

            {/* Shimmer keyframes (injected once) */}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
};

export default SmartImage;
