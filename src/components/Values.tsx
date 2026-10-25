import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, Leaf, FlaskConical, ShieldCheck } from 'lucide-react';

interface ValuesProps {
  onLearnMorePhilosophy: () => void;
}

export const Values: React.FC<ValuesProps> = ({ onLearnMorePhilosophy }) => {
  const values = [
    {
      number: '01',
      title: 'Thuần chay 100%',
      icon: Leaf,
      description: 'Công thức không sử dụng thành phần có nguồn gốc động vật theo cam kết thương hiệu.'
    },
    {
      number: '02',
      title: 'Không thử nghiệm trên động vật',
      icon: HeartHandshake,
      description: 'Cocoon công bố cam kết không thử nghiệm mỹ phẩm trên động vật; dẫn chứng qua các chứng nhận quốc tế Leaping Bunny và PETA.'
    },
    {
      number: '03',
      title: 'Cảm hứng từ Việt Nam',
      icon: Sparkles,
      description: 'Khai thác câu chuyện của những nguyên liệu quen thuộc bản địa như bí đao, cà phê Đắk Lắk, nghệ Hưng Yên, bưởi và sen Hậu Giang.'
    },
    {
      number: '04',
      title: 'Kết hợp khoa học',
      icon: FlaskConical,
      description: 'Phát triển công thức nhằm đáp ứng nhu cầu chăm sóc da và tóc cụ thể, kiểm nghiệm độ an toàn và hiệu quả thực tế.'
    }
  ];

  return (
    <section id="values" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#ECE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Giá trị cốt lõi & Cam kết
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Chăm sóc bản thân theo cách bạn tin tưởng
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Lựa chọn làm đẹp bắt đầu từ thành phần, trải nghiệm và những giá trị phía sau mỗi sản phẩm.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.number}
                className="bg-[#FCFBF8] p-6 rounded-xl border border-[#E7E0D3] hover:border-[#234A35]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF2ED] text-[#234A35] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#8B9C90] tabular-nums">
                      {v.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#182F22] mb-2.5">
                    {v.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE5D9] flex items-center text-[11px] font-medium text-[#2D5A3F]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2D5A3F] mr-2" />
                  <span>Cam kết chuẩn mực</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action */}
        <div className="mt-10 sm:mt-12 flex justify-start">
          <button
            onClick={onLearnMorePhilosophy}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#234A35] hover:text-[#142D1F] transition-colors group cursor-pointer"
          >
            <span className="underline underline-offset-4">Tìm hiểu triết lý thương hiệu Cocoon</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
