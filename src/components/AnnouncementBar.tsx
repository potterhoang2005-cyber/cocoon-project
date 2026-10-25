import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ANNOUNCEMENT_ITEMS } from '../data/cocoonData';

interface AnnouncementBarProps {
  onExploreClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onExploreClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const current = ANNOUNCEMENT_ITEMS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENT_ITEMS.length) % ANNOUNCEMENT_ITEMS.length);
  };

  return (
    <div className="bg-[#1C382A] text-[#FAF8F5] text-xs py-2 px-4 transition-all border-b border-[#2A4C3A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Toggle prev */}
        <button
          onClick={handlePrev}
          aria-label="Thông báo trước"
          className="text-[#96B8A2] hover:text-white transition-colors p-1 cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Message content */}
        <div className="flex-1 flex flex-wrap items-center justify-center gap-2 text-center py-0.5">
          <span className="font-normal text-[#E1EBE4] tracking-wide">
            {current.text}
          </span>
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-1 font-medium text-[#E4BA73] hover:text-[#F3D59D] transition-colors underline underline-offset-4 cursor-pointer whitespace-nowrap"
          >
            {current.cta}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Next & Close */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleNext}
            aria-label="Thông báo tiếp theo"
            className="text-[#96B8A2] hover:text-white transition-colors p-1 cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Đóng thông báo"
            className="text-[#72927E] hover:text-[#FAF8F5] transition-colors p-1 ml-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
