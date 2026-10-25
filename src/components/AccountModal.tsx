import React from 'react';
import { X, User, Gift, Recycle, Package, ShieldCheck, Heart } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreRecycle: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onExploreRecycle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DED5C3] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E3DACB] flex items-center justify-between bg-[#F4EFE6]">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#234A35]" />
            <h3 className="font-serif text-lg font-bold text-[#162B20]">
              Tài khoản thành viên Cocoon
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1.5 text-[#55695C] hover:text-[#162B20] hover:bg-[#EAE2D3] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Status */}
        <div className="p-6 space-y-5">
          <div className="bg-gradient-to-r from-[#234A35] to-[#2E5C43] text-white p-5 rounded-xl shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#CFE4B9] mb-1">
              <span>Hạng thành viên</span>
              <span>Cocoon Vegan Club</span>
            </div>
            <h4 className="font-serif text-xl font-bold">Khách hàng Thân thiết</h4>
            <div className="mt-4 pt-3 border-t border-white/20 flex justify-between text-xs">
              <div>
                <p className="text-[#B5D1BE] text-[10px]">Điểm tích lũy</p>
                <p className="font-bold text-base tabular-nums">350 điểm</p>
              </div>
              <div>
                <p className="text-[#B5D1BE] text-[10px]">Vỏ chai đã thu hồi</p>
                <p className="font-bold text-base tabular-nums">4 vỏ chai</p>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="space-y-2 text-xs">
            <button
              onClick={() => {
                onClose();
                onExploreRecycle();
              }}
              className="w-full p-3 bg-white rounded-lg border border-[#DFD6C5] hover:border-[#234A35] flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Recycle className="w-4 h-4 text-[#2D5A3F]" />
                <span className="font-medium text-[#182F22]">Chương trình Đổi vỏ chai nhận quà (Cần thêm 1 vỏ)</span>
              </div>
              <span className="text-[10px] text-[#8C6D37] font-semibold">Xem chi tiết</span>
            </button>

            <div className="p-3 bg-white rounded-lg border border-[#DFD6C5] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Gift className="w-4 h-4 text-[#C08738]" />
                <span className="font-medium text-[#182F22]">Mã ưu đãi độc quyền của bạn</span>
              </div>
              <span className="text-[10px] bg-[#F7F2E7] text-[#8C6D37] px-2 py-0.5 rounded font-bold font-mono">
                VEGAN2026
              </span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#DFD6C5] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4 text-[#234A35]" />
                <span className="font-medium text-[#182F22]">Tra cứu lịch sử đơn hàng</span>
              </div>
              <span className="text-[10px] text-[#697C6F]">1 đơn đang giao</span>
            </div>
          </div>

          <p className="text-[11px] text-[#788C7E] text-center">
            Mọi thông tin thành viên được mã hóa bảo mật nghiêm ngặt theo chính sách dữ liệu cá nhân của Cocoon.
          </p>
        </div>
      </div>
    </div>
  );
};
