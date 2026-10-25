import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { BottleIllustration } from './BotanicalIllustrations';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExploreStory }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#ECE6D9]">
      {/* Background ambient botanical accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E5EDE7]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#F3EAD9]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow / Dòng dẫn per PDF */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#2D5A3F] uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#2D5A3F]" />
              <span>MỸ PHẨM THUẦN CHAY TỪ NGUYÊN LIỆU VIỆT NAM</span>
            </div>

            {/* H1 Main Headline per PDF */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] font-bold text-[#162B20] text-balance">
              Đánh thức vẻ đẹp tự nhiên từ những điều thân thuộc của Việt Nam
            </h1>

            {/* Subtitle per PDF */}
            <p className="text-base sm:text-lg text-[#47574B] leading-relaxed max-w-2xl font-normal">
              Cocoon kết hợp cảm hứng từ nông sản Việt với hiểu biết khoa học để tạo nên các sản phẩm chăm sóc da và tóc thuần chay, đồng hành cùng bạn trong chu trình chăm sóc mỗi ngày.
            </p>

            {/* Điểm nổi bật ngắn per PDF (Zero-pill text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-[#2E4737] pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D5A3F]" />
                Thuần chay 100%
              </span>
              <span className="text-[#A2B5A7]" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#2D5A3F]" />
                Không thử nghiệm trên động vật
              </span>
              <span className="text-[#A2B5A7]" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#2D5A3F]" />
                Cảm hứng từ nguyên liệu Việt
              </span>
            </div>

            {/* Dual CTAs per PDF */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#234A35] hover:bg-[#1A3828] active:bg-[#132B1E] rounded-md transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
              >
                <span>Khám phá sản phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreStory}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#1F3D2C] hover:text-[#112419] bg-[#EFE9DC] hover:bg-[#E4DCCF] border border-[#D9D1C3] rounded-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Tìm hiểu câu chuyện Cocoon</span>
              </button>
            </div>

            {/* Real trust micro strip */}
            <div className="pt-4 border-t border-[#E8E2D5] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#162B20] tabular-nums">
                  100%
                </p>
                <p className="text-[11px] text-[#637568]">Thuần chay quốc tế</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#162B20] tabular-nums">
                  5+
                </p>
                <p className="text-[11px] text-[#637568]">Vùng nông sản Việt Nam</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#162B20] tabular-nums">
                  80%
                </p>
                <p className="text-[11px] text-[#637568]">Giảm rác với túi refill</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Botanical Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Botanical Pedestal Card */}
              <div className="relative bg-gradient-to-b from-[#F3EFE7] to-[#EAE3D4] p-6 sm:p-8 rounded-2xl border border-[#DFD6C5] shadow-sm overflow-hidden">
                
                {/* Natural Light Flare */}
                <div className="absolute top-0 right-10 w-40 h-40 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

                {/* Header of card */}
                <div className="flex items-center justify-between text-xs text-[#526658] border-b border-[#D8CEBC] pb-3 mb-4">
                  <span className="font-medium tracking-wider uppercase text-[10px]">Tác phẩm từ nông sản bản địa</span>
                  <span className="text-[#887864] font-medium">Bí đao · Cà phê · Bưởi · Nghệ · Sen</span>
                </div>

                {/* Center Visual: Twin Bottles (Amber Pump + Dropper + Spray) */}
                <div className="grid grid-cols-2 gap-4 items-end justify-center py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-28 sm:w-36 h-48 sm:h-56 transition-transform hover:scale-105 duration-300">
                      <BottleIllustration type="pump" title="Bí đao tẩy trang" capacity="500ml" />
                    </div>
                    <span className="mt-2 text-[11px] font-semibold text-[#243329] text-center">
                      Nước tẩy trang bí đao
                    </span>
                    <span className="text-[10px] text-[#6E8073]">Bán chạy #1</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-28 sm:w-36 h-48 sm:h-56 transition-transform hover:scale-105 duration-300">
                      <BottleIllustration type="spray" title="Nước dưỡng tóc" capacity="140ml" />
                    </div>
                    <span className="mt-2 text-[11px] font-semibold text-[#243329] text-center">
                      Nước dưỡng tóc bưởi
                    </span>
                    <span className="text-[10px] text-[#6E8073]">Giảm rụng tóc</span>
                  </div>
                </div>

                {/* Sub-card floating info */}
                <div className="mt-4 pt-3 border-t border-[#D8CEBC] flex items-center justify-between text-xs text-[#384F40]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#234A35]" />
                    <span className="font-medium">Nguyên liệu thuần tự nhiên Việt Nam</span>
                  </div>
                  <span className="text-[11px] text-[#7A6B57]">Cruelty-Free</span>
                </div>
              </div>

              {/* Decorative side accent leaf tag */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#DDD3C2] shadow-sm items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EBF2ED] flex items-center justify-center text-[#234A35]">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C3325]">Nông sản bản địa Việt</p>
                  <p className="text-[10px] text-[#66776B]">Minh bạch từng vùng thu hoạch</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
