import React, { useState } from 'react';
import { ArrowRight, RefreshCw, Recycle, Heart, CheckCircle2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { SUSTAINABILITY_INITIATIVES } from '../data/cocoonData';

interface SustainabilityProps {
  onExploreRefillProducts: () => void;
}

export const Sustainability: React.FC<SustainabilityProps> = ({ onExploreRefillProducts }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="sustainability" className="py-16 sm:py-24 bg-[#F4EFE5] border-b border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Bền vững & Trách nhiệm cộng đồng
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Yêu thương những điều đã cũ, gìn giữ những điều quý giá
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Mời bạn tìm hiểu các sáng kiến tái sử dụng bao bì và hoạt động cộng đồng do Cocoon công bố vì một tương lai xanh bền bỉ.
          </p>
        </div>

        {/* 3 Major Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Refill */}
          <div className="bg-[#FCFBF8] p-8 rounded-xl border border-[#DED5C3] flex flex-col justify-between hover:border-[#234A35]/50 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF2ED] text-[#234A35] flex items-center justify-center">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#2D5A3F] bg-[#E3EFE6] px-2.5 py-1 rounded">
                  Tiết kiệm 80% bao bì
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#162B20] mb-2">
                1. Túi Refill Tái Nạp Sản Phẩm
              </h3>
              <p className="text-xs text-[#8C6D37] font-semibold mb-3">
                Giải pháp giảm thiểu rác thải nhựa
              </p>

              <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed mb-4">
                Cocoon giới thiệu dòng sản phẩm túi refill dung tích lớn (500ml) cho Nước tẩy trang bí đao, Sữa tắm cà phê và Dầu gội bưởi. Thiết kế túi vòi tiện dụng giúp giảm tới 80% lượng nhựa so với chai tiêu chuẩn và tiết kiệm trực tiếp chi phí mua sắm.
              </p>

              <ul className="space-y-1.5 text-xs text-[#3E5245]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3F]" />
                  <span>Dung tích 500ml chuẩn dung tích chai cũ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3F]" />
                  <span>Vòi rót định lượng chống tràn đổ</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECE3D5]">
              <button
                onClick={onExploreRefillProducts}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234A35] hover:text-[#122A1E] cursor-pointer group"
              >
                <span>Khám phá các sản phẩm Refill</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Thu hồi vỏ chai */}
          <div className="bg-[#FCFBF8] p-8 rounded-xl border border-[#DED5C3] flex flex-col justify-between hover:border-[#234A35]/50 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF2ED] text-[#234A35] flex items-center justify-center">
                  <Recycle className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#8C6A2E] bg-[#F9EED4] px-2.5 py-1 rounded">
                  Đổi vỏ nhận quà
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#162B20] mb-2">
                2. Thu Hồi Vỏ Chai Cũ
              </h3>
              <p className="text-xs text-[#8C6D37] font-semibold mb-3">
                Tuần hoàn nguyên liệu nhựa và thủy tinh
              </p>

              <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed mb-4">
                Chương trình nhận lại vỏ chai rỗng Cocoon đã được súc sạch tại hệ thống showroom chính hãng và hơn 80 điểm đối tác phân phối trên toàn quốc. Gửi lại 5 hoặc 10 vỏ chai để nhận sản phẩm quà tặng thuần chay giá trị.
              </p>

              <div className="space-y-1.5 text-xs text-[#3E5245] bg-[#F7F4EC] p-3 rounded-lg border border-[#E3D9C7]">
                <p className="flex items-center gap-1.5 font-medium text-[#243B2C]">
                  <MapPin className="w-3.5 h-3.5 text-[#C08738]" />
                  <span>Điểm tiếp nhận: TP.HCM, Hà Nội, Đà Nẵng</span>
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-[#63776A]">
                  <Calendar className="w-3.5 h-3.5 text-[#2D5A3F]" />
                  <span>Thời gian: Áp dụng liên tục trong năm 2026</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECE3D5]">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234A35] hover:text-[#122A1E] cursor-pointer group"
              >
                <span>Xem điều kiện tham gia & điểm thu hồi</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Cộng đồng & Bảo tồn voi */}
          <div className="bg-[#FCFBF8] p-8 rounded-xl border border-[#DED5C3] flex flex-col justify-between hover:border-[#234A35]/50 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF2ED] text-[#234A35] flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#2D5A3F] bg-[#E3EFE6] px-2.5 py-1 rounded">
                  Đồng hành cùng AAF
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#162B20] mb-2">
                3. Hoạt Động Vì Cộng Đồng
              </h3>
              <p className="text-xs text-[#8C6D37] font-semibold mb-3">
                Bảo vệ động vật & phục hồi rừng bản địa
              </p>

              <p className="text-xs sm:text-sm text-[#4E6154] leading-relaxed mb-4">
                Cocoon trích doanh thu đồng hành cùng Tổ chức Động vật Châu Á (Animals Asia Foundation - AAF) hỗ trợ cải thiện phúc lợi và chăm sóc sức khỏe cho đàn voi nhà tại Đắk Lắk, đồng thời phối hợp cùng các tổ chức bảo tồn trồng cây bản địa tại các khu bảo tồn thiên nhiên.
              </p>

              <ul className="space-y-1.5 text-xs text-[#3E5245]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3F]" />
                  <span>Dự án Chung tay bảo vệ đàn voi Đắk Lắk</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3F]" />
                  <span>Trồng hơn 10.000 cây xanh bản địa</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECE3D5]">
              <a
                href="https://cocoonvietnam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234A35] hover:text-[#122A1E] group"
              >
                <span>Xem báo cáo hoạt động cộng đồng</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Modal: Bottle return instructions */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl max-w-lg w-full border border-[#D9CFBF] shadow-xl text-left space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#162B20]">
                Hướng dẫn tham gia Đổi Vỏ Chai Cũ
              </h3>
              <div className="text-xs sm:text-sm text-[#4B5E52] space-y-2 leading-relaxed">
                <p><strong>1. Điều kiện vỏ chai:</strong> Vỏ chai/hũ chính hãng Cocoon, đã dùng hết, được tráng sạch với nước và để khô ráo, nguyên nắp hoặc vòi xịt.</p>
                <p><strong>2. Quy đổi quà tặng:</strong></p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>5 vỏ chai bất kỳ: Nhận ngay 01 Son dưỡng dầu dừa Bến Tre hoặc Son cà phê.</li>
                  <li>10 vỏ chai bất kỳ: Nhận ngay 01 Nước dưỡng tóc tinh dầu bưởi 140ml hoặc Cà phê Đắk Lắk 200ml.</li>
                </ul>
                <p><strong>3. Địa điểm tiếp nhận:</strong> Toàn bộ chuỗi cửa hàng Hasaki, Guardian, Watsons và các đại lý chính thức của Cocoon tại TP.HCM, Hà Nội, Đà Nẵng, Cần Thơ.</p>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#234A35] rounded-md cursor-pointer"
                >
                  Đã hiểu
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
