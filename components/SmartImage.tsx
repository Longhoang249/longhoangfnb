
import React from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean; // If true, eager load (for hero images)
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = '', priority = false, ...props }) => {
    // Normalize Unsplash URLs for better performance
    const finalSrc = React.useMemo(() => {
        if (src.includes('images.unsplash.com') && !src.includes('w=')) {
            return `${src}&w=800&q=80&auto=format`;
        }
        return src;
    }, [src]);

    return (
        <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
            {/* Actual Image */}
            <img
                src={finalSrc}
                alt={alt}
                className="w-full h-full object-cover"
                loading={priority ? 'eager' : 'lazy'}
                {...props}
            />
        </div>
    );
};

export default SmartImage;
