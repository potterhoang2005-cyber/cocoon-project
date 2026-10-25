import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/cocoonData';

interface FAQProps {
  onContactSupport: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onContactSupport }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F5EFE5] border-b border-[#E3DAC9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Giải đáp thắc mắc
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-3">
            Câu hỏi thường gặp (FAQ)
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Giải đáp các băn khoăn phổ biến trước khi đưa ra quyết định mua sắm và sử dụng sản phẩm.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FCFBF8] rounded-xl border border-[#DED5C3] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#182F22] flex items-center gap-3">
                    <span className="text-xs font-bold text-[#8C6D37] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2D5A3F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#485B4E] leading-relaxed border-t border-[#EBE3D4]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA & Support Footer Bar per PDF */}
        <div className="mt-10 p-6 bg-[#FCFBF8] rounded-xl border border-[#DED5C3] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-bold text-[#182F22]">
              Bạn cần thêm thông tin chuyên sâu hoặc hỗ trợ đặt hàng?
            </h4>
            <p className="text-xs text-[#526458] mt-0.5">
              Tổng đài tư vấn miễn cước: <span className="font-semibold text-[#234A35]">{COMPANY_INFO.hotline}</span> (8:00 - 21:00)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onContactSupport}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234A35] hover:bg-[#1A3828] rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Liên hệ hỗ trợ</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
