import React, { useState } from 'react';
import { ArrowRight, Check, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/cocoonData';

interface FooterProps {
  onNavClick: (anchor: string) => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    if (!agreed) {
      setError('Vui lòng đánh dấu đồng ý nhận thông báo theo chính sách bảo mật.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#122319] text-[#E0EBE2] border-t border-[#1C3527] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Group Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#1F392B]">
          
          {/* Brand Info & Group 5: Newsletter (5 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold tracking-[0.16em] text-white">
                  COCOON
                </span>
                <span className="text-[10px] tracking-widest text-[#A2C7AD] font-semibold uppercase">
                  VIETNAM
                </span>
              </div>
              <p className="text-xs text-[#95AB9D] mt-1 font-light">
                mỹ phẩm thuần chay từ nguyên liệu Việt Nam
              </p>
            </div>

            {/* Nhóm 5: Đăng ký nhận tin per PDF */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                Nhận tin mới từ Cocoon
              </h4>
              <p className="text-xs text-[#98AE9F] leading-relaxed mb-3">
                Đăng ký để cập nhật sản phẩm, bài viết và chương trình mới nhất.
              </p>

              {subscribed ? (
                <div className="p-3 bg-[#1C3829] border border-[#2D5A40] rounded-md text-xs text-[#B5DFBF] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7BD492]" />
                  <span>Cảm ơn bạn! Đã đăng ký nhận bản tin thành công.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitNewsletter} className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Nhập email của bạn..."
                      className="flex-1 bg-[#1A3123] border border-[#2A4C38] rounded-md px-3 py-2 text-xs text-white placeholder-[#789381] focus:outline-none focus:border-[#7CB58C]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 text-xs font-semibold text-[#122319] bg-[#E5D2A6] hover:bg-[#F3E2B8] rounded-md transition-colors cursor-pointer shrink-0"
                    >
                      Đăng ký
                    </button>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-[#2A4C38] text-[#234A35] focus:ring-0"
                    />
                    <span className="text-[11px] text-[#869E8F] leading-tight">
                      Tôi đồng ý nhận email thông tin từ Cocoon theo <a href="#privacy" className="underline hover:text-white">Chính sách bảo mật</a>.
                    </span>
                  </label>

                  {error && <p className="text-[11px] text-[#F39C82]">{error}</p>}
                </form>
              )}
            </div>

            {/* Nhóm 4: Kết nối mạng xã hội per PDF */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-[#9BB1A2] uppercase tracking-wider block mb-2">
                Kết nối với Cocoon
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com/CocoonVietnamOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Cocoon"
                  className="w-8 h-8 rounded-full bg-[#1A3123] hover:bg-[#284935] text-[#DDE8E0] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/cocoon.vietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Cocoon"
                  className="w-8 h-8 rounded-full bg-[#1A3123] hover:bg-[#284935] text-[#DDE8E0] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/c/CocoonVietnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Cocoon"
                  className="w-8 h-8 rounded-full bg-[#1A3123] hover:bg-[#284935] text-[#DDE8E0] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Nhóm 1: Hỗ trợ khách hàng (2-3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hỗ trợ khách hàng
            </h4>
            <ul className="space-y-2 text-xs text-[#95AB9D]">
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Hướng dẫn mua hàng
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Chính sách giao hàng & Cước phí
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Chính sách đổi trả trong 7 ngày
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Câu hỏi thường gặp (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Liên hệ bộ phận CSKH
                </button>
              </li>
            </ul>
          </div>

          {/* Nhóm 2: Về Cocoon (2-3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Về Cocoon Việt Nam
            </h4>
            <ul className="space-y-2 text-xs text-[#95AB9D]">
              <li>
                <button onClick={() => onNavClick('philosophy')} className="hover:text-white transition-colors cursor-pointer">
                  Câu chuyện thương hiệu
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('values')} className="hover:text-white transition-colors cursor-pointer">
                  Triết lý thuần chay & Nhân đạo
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('ingredients')} className="hover:text-white transition-colors cursor-pointer">
                  Nguồn nguyên liệu bản địa
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('sustainability')} className="hover:text-white transition-colors cursor-pointer">
                  Trách nhiệm cộng đồng & Bảo tồn voi
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('certifications')} className="hover:text-white transition-colors cursor-pointer">
                  Chứng nhận quốc tế (Leaping Bunny, Vegan)
                </button>
              </li>
            </ul>
          </div>

          {/* Nhóm 3: Chính sách (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Chính sách
            </h4>
            <ul className="space-y-2 text-xs text-[#95AB9D]">
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#condition" className="hover:text-white transition-colors">
                  Điều kiện giao dịch
                </a>
              </li>
              <li>
                <button onClick={() => onNavClick('sustainability')} className="hover:text-white transition-colors cursor-pointer">
                  Chương trình túi Refill
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('sustainability')} className="hover:text-white transition-colors cursor-pointer">
                  Điểm thu hồi vỏ chai
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Business Entity Info per PDF */}
        <div className="pt-8 pb-4 text-xs text-[#7E9687] space-y-2 text-left">
          <p className="font-semibold text-[#B9CEBF]">
            {COMPANY_INFO.legalName}
          </p>
          <p>
            Địa chỉ: {COMPANY_INFO.address}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>Điện thoại: <strong className="text-[#C5D7CB]">{COMPANY_INFO.hotline}</strong></span>
            <span>Email: <strong className="text-[#C5D7CB]">{COMPANY_INFO.email}</strong></span>
            <span>{COMPANY_INFO.businessLicense}</span>
          </div>
        </div>

        {/* PDF Assignment Disclaimer Banner */}
        <div className="mt-6 pt-4 border-t border-[#1C3527] text-center text-[11px] text-[#698272] leading-relaxed">
          <p>
            © 2026 Cocoon Việt Nam. Tất cả quyền được bảo lưu.
          </p>
          <p className="mt-1 text-[#8FA597] italic">
            * Lưu ý: Đây là bản đề xuất nội dung cho bài tập / thiết kế; không phải trang chính thức do Cocoon phát hành.
          </p>
        </div>

      </div>
    </footer>
  );
};
