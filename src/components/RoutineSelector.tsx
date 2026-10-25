import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Info, Droplets, Heart, Wind, ShieldAlert } from 'lucide-react';
import { ROUTINE_NEEDS_DATA } from '../data/cocoonData';
import { Product } from '../types';

interface RoutineSelectorProps {
  onSelectProduct: (productId: string) => void;
  onExploreProducts: () => void;
}

export const RoutineSelector: React.FC<RoutineSelectorProps> = ({
  onSelectProduct,
  onExploreProducts
}) => {
  const [selectedNeedId, setSelectedNeedId] = useState<string>('cleansing');

  const activeNeed = ROUTINE_NEEDS_DATA.find((n) => n.id === selectedNeedId) || ROUTINE_NEEDS_DATA[0];

  const getNeedIcon = (id: string) => {
    switch (id) {
      case 'cleansing':
        return Droplets;
      case 'hydrating':
        return Sparkles;
      case 'bodycare':
        return Heart;
      case 'haircare':
        return Wind;
      default:
        return Droplets;
    }
  };

  return (
    <section id="routine" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#ECE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Chọn sản phẩm theo nhu cầu
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Bắt đầu từ nhu cầu của làn da và mái tóc
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Chọn nhu cầu bạn muốn ưu tiên để khám phá nhóm sản phẩm tham khảo phù hợp với tình trạng thực tế của bạn.
          </p>
        </div>

        {/* 4 Needs Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ROUTINE_NEEDS_DATA.map((need) => {
            const Icon = getNeedIcon(need.id);
            const isSelected = need.id === selectedNeedId;

            return (
              <button
                key={need.id}
                onClick={() => setSelectedNeedId(need.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#234A35] text-white border-[#173725] shadow-md -translate-y-0.5'
                    : 'bg-[#FCFBF8] text-[#243329] border-[#DFD6C5] hover:border-[#234A35]/40 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EBF2ED] text-[#234A35]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#CFE4B9]">
                        Đang chọn
                      </span>
                    )}
                  </div>

                  <h3 className={`text-sm sm:text-base font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-[#182F22]'}`}>
                    {need.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#DEE9E0]' : 'text-[#566B5E]'}`}>
                    {need.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#C5DCB2]' : 'text-[#2D5A3F]'}>
                    Xem chu trình
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#2D5A3F]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Routine Detail Box */}
        <div className="bg-[#FCFBF8] rounded-2xl border border-[#DED4C2] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E7DEC\-D] border-[#E8DEC\-D] pb-5 mb-6 gap-3">
            <div>
              <span className="text-xs font-semibold text-[#2D5A3F] uppercase tracking-wider">
                Gợi ý chu trình 3 bước
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#162B20] mt-0.5">
                {activeNeed.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#54685A] mt-1">
                {activeNeed.description} · <span className="font-medium text-[#234A35]">Phù hợp: {activeNeed.idealFor}</span>
              </p>
            </div>

            <button
              onClick={() => onSelectProduct(activeNeed.recommendedProductId)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234A35] hover:bg-[#193A29] rounded-md transition-colors cursor-pointer self-start md:self-auto whitespace-nowrap"
            >
              <span>Xem sản phẩm chủ đạo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Steps horizontal chain */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {activeNeed.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#F8F5EE] p-5 rounded-xl border border-[#E3DACB] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#234A35] text-white text-xs font-bold flex items-center justify-center tabular-nums">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-medium text-[#7D9183]">
                      Dung tích: {step.capacity}
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#2D5A3F] mb-1">
                    {step.stepName}
                  </p>
                  
                  <h4 className="text-sm font-bold text-[#182F22] mb-2">
                    {step.productName}
                  </h4>

                  <p className="text-xs text-[#526458] leading-relaxed">
                    {step.action}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DFC\E] border-[#E5DDD0] flex items-center text-[11px] text-[#243329] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#2D5A3F] mr-1.5" />
                  <span>Chuẩn khoa học da liễu</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Medical Disclaimer from PDF */}
          <div className="mt-6 pt-5 border-t border-[#E8DEC\-D] border-[#E8DEC8] flex items-start gap-2.5 text-xs text-[#526558] bg-[#F2EDE2] p-3.5 rounded-lg">
            <Info className="w-4 h-4 text-[#8C7A60] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-[#273B2E]">Ghi chú bắt buộc:</strong> Đây là gợi ý điều hướng mua sắm tham khảo, không thay thế việc chẩn đoán hay tư vấn y khoa của bác sĩ da liễu. Khách hàng vui lòng đọc kỹ bảng thành phần, hướng dẫn sử dụng và thử phản ứng trên vùng da nhỏ trước khi sử dụng rộng rãi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
