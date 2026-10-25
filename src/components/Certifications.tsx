import React from 'react';
import { ShieldCheck, ExternalLink, AlertTriangle, ArrowRight } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/cocoonData';
import { TrustBadgeIcon } from './BotanicalIllustrations';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-[#F4EFE5] border-b border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per PDF */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
            Chứng nhận và bằng chứng tin cậy
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-4">
            Những cam kết có thể tìm hiểu rõ hơn
          </h2>
          <p className="text-base text-[#4D5E52] leading-relaxed">
            Tìm hiểu các chương trình chứng nhận và cam kết mà Cocoon công bố với các tổ chức quốc tế uy tín.
          </p>
        </div>

        {/* 3 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#FCFBF8] p-7 rounded-xl border border-[#DFD6C5] flex flex-col justify-between hover:border-[#234A35]/50 transition-all hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <TrustBadgeIcon type={cert.id} className="w-12 h-12" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#2D5A3F] bg-[#EBF2ED] px-2.5 py-1 rounded">
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#162B20] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#8C6D37] mb-3">
                  {cert.organization}
                </p>

                <div className="p-2.5 bg-[#F4EEE2] rounded-md text-[11px] font-medium text-[#2E4234] mb-3">
                  Phạm vi: {cert.scope}
                </div>

                <p className="text-xs text-[#526457] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE3D5] flex items-center justify-between">
                <a
                  href="https://cocoonvietnam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#234A35] hover:text-[#142D1F] inline-flex items-center gap-1 group"
                >
                  <span>Xem hồ sơ công bố</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Disclaimer per PDF */}
        <div className="mt-8 p-4 bg-[#EFE8DA] rounded-xl border border-[#D9CFC0] flex items-start gap-3 text-xs text-[#485B4E]">
          <AlertTriangle className="w-4 h-4 text-[#A87B2E] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#273B2E]">Lưu ý bắt buộc theo quy định:</strong> Cocoon không tự khẳng định mọi sản phẩm đều có mọi chứng nhận nếu thông tin chính thức không xác nhận rõ từng lô sản xuất. Quý khách vui lòng kiểm tra biểu trưng in trực tiếp trên bao bì thực tế của từng sản phẩm cụ thể.
          </p>
        </div>

      </div>
    </section>
  );
};
