
import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean; // If true, eager load (for hero images)
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = '', priority = false, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string>('');

    // Normalize Unsplash URLs for better performance
    const optimizeSrc = (url: string) => {
        if (url.includes('images.unsplash.com') && !url.includes('w=')) {
            return `${url}&w=800&q=80&auto=format`;
        }
        return url;
    };

    useEffect(() => {
        const finalSrc = optimizeSrc(src);

        // If priority is true, load immediately
        if (priority) {
            const img = new Image();
            img.src = finalSrc;
            img.onload = () => {
                setCurrentSrc(finalSrc);
                setIsLoaded(true);
            };
            return;
        }

        // Lazy load logic
        const imgInfo = new Image();
        imgInfo.src = finalSrc;
        imgInfo.onload = () => {
            setCurrentSrc(finalSrc);
            setIsLoaded(true);
        };
    }, [src, priority]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Skeleton / Blur Placeholder */}
            <div
                className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                aria-hidden="true"
            />

            {/* Actual Image */}
            {currentSrc && (
                <img
                    src={currentSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading={priority ? 'eager' : 'lazy'}
                    {...props}
                />
            )}
        </div>
    );
};

export default SmartImage;
