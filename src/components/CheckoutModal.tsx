import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, DollarSign } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('TP. Hồ Chí Minh');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'banking'>('cod');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shippingFee = subtotal >= 249000 ? 0 : 30000;
  const grandTotal = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      alert('Vui lòng điền đầy đủ thông tin nhận hàng.');
      return;
    }
    const code = 'CCN-' + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(code);
    setIsSubmitted(true);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DFD6C6] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E3DACB] flex items-center justify-between bg-[#F4EFE6]">
          <h3 className="font-serif text-lg font-bold text-[#162B20]">
            {isSubmitted ? 'Xác nhận đơn hàng thành công' : 'Thanh toán & Đặt hàng'}
          </h3>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1.5 text-[#55695C] hover:text-[#162B20] hover:bg-[#EAE2D3] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-5 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-[#EBF5EE] text-[#234A35] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A3F]">
                Đơn hàng đã được tiếp nhận
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#162B20] mt-1">
                Mã đơn: #{orderCode}
              </h4>
              <p className="text-xs sm:text-sm text-[#4E6154] mt-2 max-w-md mx-auto leading-relaxed">
                Cảm ơn bạn <strong className="text-[#182F22]">{fullName}</strong> đã đồng hành cùng Cocoon và mỹ phẩm thuần chay từ nông sản Việt Nam.
              </p>
            </div>

            <div className="bg-[#F4EFE6] p-4 rounded-xl border border-[#E3DACB] text-left text-xs space-y-1.5 max-w-md mx-auto">
              <p><strong>Người nhận:</strong> {fullName} ({phone})</p>
              <p><strong>Địa chỉ giao:</strong> {address}, {city}</p>
              <p><strong>Phương thức:</strong> {paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng (COD)' : 'Chuyển khoản qua ngân hàng'}</p>
              <p><strong>Tổng thanh toán:</strong> <span className="font-bold text-[#234A35] tabular-nums">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(grandTotal)}</span></p>
              <p><strong>Thời gian dự kiến:</strong> 1 - 2 ngày làm việc</p>
            </div>

            <p className="text-[11px] text-[#718578]">
              Nhân viên chăm sóc khách hàng Cocoon sẽ gọi điện thoại hoặc gửi tin nhắn SMS để xác nhận đơn trước khi đóng gói.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#234A35] hover:bg-[#183928] rounded-md transition-colors cursor-pointer"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="p-6 overflow-y-auto space-y-5 text-left">
            {/* Customer Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C3827]">
                1. Thông tin giao hàng
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#243329] mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-white border border-[#D9CFBF] rounded-md px-3 py-2 text-xs text-[#162B20] focus:outline-none focus:border-[#234A35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#243329] mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0901 234 567"
                    className="w-full bg-white border border-[#D9CFBF] rounded-md px-3 py-2 text-xs text-[#162B20] focus:outline-none focus:border-[#234A35]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#243329] mb-1">
                  Địa chỉ chi tiết (số nhà, tên đường, phường/xã) *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ví dụ: 123 Đường Nguyễn Huệ, Phường Bến Nghé"
                  className="w-full bg-white border border-[#D9CFBF] rounded-md px-3 py-2 text-xs text-[#162B20] focus:outline-none focus:border-[#234A35]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#243329] mb-1">
                  Tỉnh / Thành phố
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-[#D9CFBF] rounded-md px-3 py-2 text-xs text-[#162B20] focus:outline-none focus:border-[#234A35]"
                >
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Đắk Lắk">Đắk Lắk</option>
                  <option value="Hưng Yên">Hưng Yên</option>
                  <option value="Hậu Giang">Hậu Giang</option>
                  <option value="Tỉnh thành khác">Tỉnh thành khác</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2 border-t border-[#E8DEC\-D] border-[#E8DEC8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C3827]">
                2. Phương thức thanh toán
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-lg border text-left transition-colors flex items-start gap-2.5 cursor-pointer ${
                    paymentMethod === 'cod'
                      ? 'border-[#234A35] bg-[#EBF2ED] text-[#162B20]'
                      : 'border-[#D9CFBF] bg-white text-[#44584B] hover:bg-[#F8F5EE]'
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-[#234A35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">Thanh toán khi nhận hàng (COD)</p>
                    <p className="text-[11px] text-[#697C6F]">Kiểm tra hàng trước khi thanh toán</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('banking')}
                  className={`p-3 rounded-lg border text-left transition-colors flex items-start gap-2.5 cursor-pointer ${
                    paymentMethod === 'banking'
                      ? 'border-[#234A35] bg-[#EBF2ED] text-[#162B20]'
                      : 'border-[#D9CFBF] bg-white text-[#44584B] hover:bg-[#F8F5EE]'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#234A35] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">Chuyển khoản VietQR</p>
                    <p className="text-[11px] text-[#697C6F]">Quét mã QR qua app ngân hàng</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-4 bg-[#F2EDE2] rounded-xl border border-[#DFD6C5] space-y-2 text-xs">
              <div className="flex justify-between text-[#536658]">
                <span>Tạm tính ({items.length} món):</span>
                <span className="font-semibold text-[#182F22] tabular-nums">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-[#536658]">
                <span>Phí vận chuyển:</span>
                <span className="font-semibold text-[#182F22] tabular-nums">
                  {shippingFee === 0 ? (
                    <span className="text-[#1F5435]">Miễn phí</span>
                  ) : (
                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(shippingFee)
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-[#DED5C3] flex justify-between text-sm font-bold text-[#162B20]">
                <span>Tổng cộng:</span>
                <span className="font-serif text-base text-[#234A35] tabular-nums">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(grandTotal)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#234A35] hover:bg-[#183928] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors cursor-pointer shadow-xs"
            >
              Hoàn tất đặt hàng ngay
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
