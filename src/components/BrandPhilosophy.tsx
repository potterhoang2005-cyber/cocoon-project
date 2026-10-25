import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake, Award, FlaskConical } from 'lucide-react';

interface BrandPhilosophyProps {
  onLearnMore: () => void;
  onExploreCertifications: () => void;
}

export const BrandPhilosophy: React.FC<BrandPhilosophyProps> = ({
  onLearnMore,
  onExploreCertifications
}) => {
  const commitments = [
    {
      title: 'Cam kết nguồn gốc nguyên liệu',
      icon: Leaf,
      description: 'Cocoon chú trọng tuyển chọn các vùng trồng bản địa chuẩn sạch tại Việt Nam với đầy đủ hồ sơ kiểm định chất lượng, nguồn gốc minh bạch và chứng nhận xuất xứ rõ ràng.'
    },
    {
      title: 'Cam kết 100% thuần chay',
      icon: ShieldCheck,
      description: 'Tuyệt đối không sử dụng các thành phần hoặc phụ phẩm có nguồn gốc từ động vật (như sáp ong, mỡ lông cừu, chất nhờn ốc sên, dầu gan cá mập) theo định hướng phát triển bền vững.'
    },
    {
      title: 'Cam kết không thử nghiệm trên động vật',
      icon: HeartHandshake,
      description: 'Nêu rõ chính sách nhân đạo và kiểm định độ an toàn qua các phương pháp khoa học thay thế in-vitro. Được công nhận bởi tổ chức Cruelty Free International và PETA.'
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#ECE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Triết lý thương hiệu & Cam kết
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Vẻ đẹp bắt đầu từ sự thấu hiểu
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Cocoon hướng đến việc kết hợp lợi ích từ nguyên liệu thực vật với hiểu biết khoa học để tạo ra sản phẩm chăm sóc da và tóc.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFBF8] p-8 rounded-xl border border-[#E5DEC\D] border-[#E5DDD0] flex flex-col justify-between hover:border-[#234A35]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2ED] text-[#234A35] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-[#162B20] mb-3">
                    {c.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDE5D8] flex items-center text-xs font-semibold text-[#2D5A3F]">
                  <span>Nguyên tắc bất biến</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-[#E8E1D3] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#55695C] max-w-xl">
            Mọi quy trình nghiên cứu tại phòng lab Cocoon đều hướng đến tính tương thích cao với làn da người Việt và tôn trọng hệ sinh thái tự nhiên.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreCertifications}
              className="px-4 py-2 text-xs font-semibold text-[#234A35] bg-[#E8E1D2] hover:bg-[#DDD4C3] rounded-md transition-colors cursor-pointer"
            >
              Xem hệ thống chứng nhận
            </button>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234A35] hover:bg-[#193B2A] rounded-md transition-colors cursor-pointer"
            >
              <span>Tìm hiểu thêm câu chuyện thương hiệu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
