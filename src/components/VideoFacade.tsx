import React, { useState } from 'react';

interface VideoFacadeProps {
  videoUrl: string;
  title: string;
  className?: string;
}

const VideoFacade: React.FC<VideoFacadeProps> = ({ videoUrl, title, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract YouTube ID
  // e.g. https://www.youtube.com/embed/Qb2ek3S6kdA?rel=0
  const extractVideoId = (url: string) => {
    const match = url.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);
  // Using maxresdefault for best quality, fallback to hqdefault
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  if (!videoUrl) return null;

  if (isLoaded) {
    return (
      <iframe 
        src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
        title={title} 
        className={`w-full h-full ${className}`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    );
  }

  return (
    <div 
      className={`relative w-full h-full cursor-pointer group bg-black flex items-center justify-center overflow-hidden ${className}`}
      onClick={() => setIsLoaded(true)}
    >
      {thumbnailUrl && (
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      )}
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ff0000] group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoFacade;
