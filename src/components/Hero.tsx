import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, HeartHandshake, Award } from 'lucide-react';
import { AuthenticProductVisual } from './AuthenticProductVisual';
import { PRODUCTS_DATA } from '../data/cocoonData';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExploreStory }) => {
  const coffeeProduct = PRODUCTS_DATA[0]; // Cà phê Đắk Lắk
  const pomeloProduct = PRODUCTS_DATA[1]; // Nước dưỡng tóc bưởi

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#ECE6D9]">
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
                <span>Khám phá sản phẩm chính hãng</span>
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
                <p className="text-[11px] text-[#637568]">Thuần chay (The Vegan Society)</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#162B20] tabular-nums">
                  Leaping Bunny
                </p>
                <p className="text-[11px] text-[#637568]">Cruelty Free International</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#162B20] tabular-nums">
                  PETA
                </p>
                <p className="text-[11px] text-[#637568]">Đạo đức nhân đạo với động vật</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Botanical Showcase with Real Photos (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Botanical Pedestal Card */}
              <div className="relative bg-gradient-to-b from-[#F3EFE7] to-[#EAE3D4] p-6 sm:p-7 rounded-2xl border border-[#DFD6C5] shadow-sm overflow-hidden">
                
                {/* Natural Light Flare */}
                <div className="absolute top-0 right-10 w-40 h-40 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

                {/* Header of card */}
                <div className="flex items-center justify-between text-xs text-[#526658] border-b border-[#D8CEBC] pb-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#234A35]" />
                    <span className="font-bold tracking-wider uppercase text-[10px] text-[#243329]">Sản phẩm Cocoon thật</span>
                  </div>
                  <span className="text-[#887864] font-medium text-[11px]">Chính hãng</span>
                </div>

                {/* Center Visual: The 2 Real flagship Cocoon items with Real Uploaded Photos */}
                <div className="grid grid-cols-2 gap-3 items-end justify-center py-2">
                  
                  {/* Left: Cà phê Đắk Lắk 200ml */}
                  <div className="flex flex-col items-center group cursor-pointer" onClick={onExploreProducts}>
                    <div className="w-32 sm:w-40 h-48 sm:h-56 bg-white rounded-xl p-2 border border-[#E3DACB] shadow-2xs flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                      <img
                        src={coffeeProduct.imageUrl}
                        alt={coffeeProduct.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-[#162B20] text-center line-clamp-1">
                      Cà phê Đắk Lắk (200ml)
                    </span>
                    <span className="text-xs font-bold text-[#234A35] tabular-nums mt-0.5">
                      139.000đ
                    </span>
                  </div>

                  {/* Right: Nước dưỡng tóc tinh dầu bưởi 140ml */}
                  <div className="flex flex-col items-center group cursor-pointer" onClick={onExploreProducts}>
                    <div className="w-32 sm:w-40 h-48 sm:h-56 bg-white rounded-xl p-2 border border-[#E3DACB] shadow-2xs flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                      <img
                        src={pomeloProduct.imageUrl}
                        alt={pomeloProduct.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-[#162B20] text-center line-clamp-1">
                      Nước dưỡng tóc bưởi
                    </span>
                    <span className="text-xs font-bold text-[#234A35] tabular-nums mt-0.5">
                      165.000đ
                    </span>
                  </div>

                </div>

                {/* Sub-card floating info */}
                <div className="mt-3 pt-3 border-t border-[#D8CEBC] flex items-center justify-between text-xs text-[#384F40]">
                  <span className="text-[11px] font-medium text-[#48604F]">Cà phê Đắk Lắk · Bưởi Việt Nam</span>
                  <span className="text-[11px] font-bold text-[#234A35]">100% Thuần chay</span>
                </div>
              </div>

              {/* Decorative Brand Verification Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#DDD3C2] shadow-sm items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EBF2ED] flex items-center justify-center text-[#234A35]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C3325]">The Cocoon Original Viet Nam</p>
                  <p className="text-[10px] text-[#66776B]">Hình ảnh sản phẩm thật & giá niêm yết chuẩn</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
