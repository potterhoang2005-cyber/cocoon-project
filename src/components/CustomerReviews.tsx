import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/cocoonData';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#ECE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
              Đánh giá khách hàng / Nội dung cộng đồng
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-3">
              Chia sẻ từ cộng đồng Cocoon
            </h2>
            <p className="text-base text-[#4D5E52] leading-relaxed">
              Khám phá những trải nghiệm chăm sóc da và tóc thực tế được người dùng chia sẻ chân thực.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Đánh giá trước"
              className="p-2.5 rounded-full border border-[#D9CFBF] bg-white text-[#243329] hover:bg-[#EFE9DD] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Đánh giá tiếp theo"
              className="p-2.5 rounded-full border border-[#D9CFBF] bg-white text-[#243329] hover:bg-[#EFE9DD] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FCFBF8] p-6 rounded-xl border border-[#E7E0D3] flex flex-col justify-between hover:border-[#234A35]/40 transition-colors"
            >
              <div>
                {/* Rating & Product Tag */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center text-amber-800">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[#889B8D] text-[11px] tabular-nums">{rev.date}</span>
                </div>

                <p className="text-[11px] font-semibold text-[#2D5A3F] mb-2 truncate">
                  {rev.productName}
                </p>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & City */}
              <div className="mt-5 pt-3 border-t border-[#ECE5D9] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#182F22]">{rev.author}</p>
                  <p className="text-[11px] text-[#788B7E]">{rev.city}</p>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-[#2D5A3F] bg-[#EBF2ED] px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3 text-[#2D5A3F]" />
                    Đã mua hàng
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PDF Ethical Transparency Note */}
        <div className="mt-8 p-3.5 bg-[#F2EDE2] rounded-lg border border-[#E0D7C8] flex items-start gap-2.5 text-xs text-[#526458]">
          <AlertCircle className="w-4 h-4 text-[#8C7A60] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#304537]">Quy tắc cộng đồng:</strong> Cocoon không sử dụng hình ảnh "trước - sau" đã qua chỉnh sửa hiệu ứng hoặc ngụy tạo đánh giá nhằm phóng đại hiệu quả. Mọi chia sẻ đều đến từ người tiêu dùng thực tế và tự nguyện đóng góp.
          </p>
        </div>

      </div>
    </section>
  );
};
