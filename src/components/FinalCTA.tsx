import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FinalCTAProps {
  onExploreProducts: () => void;
  onExploreStory: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreProducts, onExploreStory }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#1B3627] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#2F5A41]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#C99144]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B5D8BF] uppercase mb-4">
          <Leaf className="w-3.5 h-3.5" />
          <span>Vẻ đẹp thuần khiết từ nông nghiệp Việt</span>
        </div>

        {/* Headline per PDF */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 leading-tight">
          Bắt đầu chu trình chăm sóc của riêng bạn
        </h2>

        {/* Subtitle per PDF */}
        <p className="text-base sm:text-lg text-[#C7DACD] max-w-2xl mx-auto leading-relaxed mb-8">
          Khám phá sản phẩm Cocoon và lựa chọn điều phù hợp với nhu cầu chăm sóc da, tóc mỗi ngày.
        </p>

        {/* Single primary focus CTA + clean secondary per PDF */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#1B3627] bg-[#FAF8F4] hover:bg-white rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Khám phá sản phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreStory}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#E1EFE5] hover:text-white border border-[#3E654D] hover:border-[#679979] rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Tìm hiểu câu chuyện Cocoon</span>
          </button>
        </div>

        {/* Subtle bottom indicators */}
        <div className="mt-12 pt-8 border-t border-[#294B37] flex flex-wrap items-center justify-center gap-6 text-xs text-[#9BBBA4]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#A7CDB1]" />
            100% Thuần chay không thử nghiệm động vật
          </span>
          <span aria-hidden="true">·</span>
          <span>Giao hàng miễn phí đơn từ 249.000đ</span>
          <span aria-hidden="true">·</span>
          <span>Đổi trả thuận tiện trong 7 ngày</span>
        </div>

      </div>
    </section>
  );
};
