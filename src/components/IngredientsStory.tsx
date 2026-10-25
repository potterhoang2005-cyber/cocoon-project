import React, { useState } from 'react';
import { MapPin, ArrowRight, Check, Sparkles, BookOpen } from 'lucide-react';
import { INGREDIENTS_DATA } from '../data/cocoonData';
import { IngredientVectorIcon } from './BotanicalIllustrations';

interface IngredientsStoryProps {
  onProductClick: (productName: string) => void;
}

export const IngredientsStory: React.FC<IngredientsStoryProps> = ({ onProductClick }) => {
  const [activeIngredientId, setActiveIngredientId] = useState<string>('bi-dao');

  const activeIngredient = INGREDIENTS_DATA.find((item) => item.id === activeIngredientId) || INGREDIENTS_DATA[0];

  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-[#F5EFE4] border-b border-[#E3DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header per PDF */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Hành trình nông sản bản địa
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Hồn Việt trong từng sản phẩm
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Từ những nguyên liệu thân thuộc trên khắp Việt Nam, Cocoon kể câu chuyện về thiên nhiên bản địa qua trải nghiệm chăm sóc da và tóc.
          </p>
        </div>

        {/* 5 Ingredients Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {INGREDIENTS_DATA.map((item) => {
            const isActive = item.id === activeIngredientId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIngredientId(item.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#234A35] text-white border-[#193928] shadow-md -translate-y-0.5'
                    : 'bg-[#FCFBF8] text-[#243329] border-[#DFD6C5] hover:border-[#234A35]/40 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center p-1.5 ${
                      isActive ? 'bg-white/20' : 'bg-[#EBF2ED]'
                    }`}
                  >
                    <IngredientVectorIcon type={item.iconType} className="w-full h-full" />
                  </div>
                  <span className={`text-[10px] uppercase font-semibold ${isActive ? 'text-[#D7E8CE]' : 'text-[#7D9183]'}`}>
                    {item.region.split(',')[0]}
                  </span>
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-[#182F22]'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-[#DDE9E0]' : 'text-[#6A7E70]'}`}>
                    {item.scientificName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="bg-[#FCFBF8] rounded-2xl border border-[#DED4C2] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Cols: Botanical Story & Formulation */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D5A3F]">
                <MapPin className="w-4 h-4 text-[#C08738]" />
                <span>{activeIngredient.region} · {activeIngredient.regionDetail}</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#162B20]">
                  {activeIngredient.name}
                </h3>
                <p className="text-xs text-[#7B8D80] italic mt-0.5 font-mono">
                  {activeIngredient.scientificName}
                </p>
              </div>

              {/* PDF Highlight statement */}
              <div className="p-3.5 bg-[#F4EFE6] rounded-lg border-l-2 border-[#234A35] text-xs sm:text-sm font-medium text-[#243B2C] leading-relaxed">
                {activeIngredient.highlight}
              </div>

              <p className="text-xs sm:text-sm text-[#4D6053] leading-relaxed">
                {activeIngredient.description}
              </p>

              {/* Benefits list */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C3827]">
                  Hiệu quả chăm sóc da & tóc
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E5245]">
                  {activeIngredient.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2D5A3F] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Associated Products & Map Anchor */}
            <div className="lg:col-span-5 bg-[#F7F4EC] p-6 rounded-xl border border-[#E2D9C8] space-y-5">
              <div className="flex items-center justify-between border-b border-[#E0D7C5] pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#2D5A3F]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F3928]">
                    Sản phẩm ứng dụng
                  </span>
                </div>
                <span className="text-[11px] text-[#74877A]">Cocoon Official</span>
              </div>

              <div className="space-y-2.5">
                {activeIngredient.associatedProducts.map((prod, idx) => (
                  <button
                    key={idx}
                    onClick={() => onProductClick(prod)}
                    className="w-full text-left p-3 rounded-lg bg-white border border-[#E3DACB] hover:border-[#234A35] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#EBF2ED] text-[#234A35] text-xs font-bold flex items-center justify-center tabular-nums">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-medium text-[#243329] group-hover:text-[#234A35]">
                        {prod}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#234A35] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#63776A] leading-relaxed border-t border-[#E0D7C5]">
                Mỗi giọt chiết xuất đều giữ trọn vẹn đặc tính sinh học của nông sản Việt, không qua tẩy màu hoặc pha trộn hương liệu nhân tạo gây hại.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
