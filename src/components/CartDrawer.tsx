import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Check } from 'lucide-react';
import { CartItem } from '../types';
import { BottleIllustration } from './BotanicalIllustrations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, capacity: string, delta: number) => void;
  onRemoveItem: (productId: string, capacity: string) => void;
  onCheckout: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onExplore
}) => {
  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 249000;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShipProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const formattedSubtotal = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(subtotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#D9CFBF] animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E3DACB] flex items-center justify-between bg-[#F4EFE6]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#234A35]" />
            <h3 className="font-serif text-lg font-bold text-[#162B20]">
              Giỏ hàng của bạn
            </h3>
            <span className="text-xs font-semibold text-[#667B6E] tabular-nums">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng giỏ hàng"
            className="p-1.5 text-[#55695C] hover:text-[#162B20] hover:bg-[#EAE2D3] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress bar */}
        <div className="p-4 bg-[#EFE9DD] border-b border-[#E3DACB] text-xs">
          <div className="flex items-center gap-2 text-[#243B2C] mb-1.5">
            <Truck className="w-4 h-4 text-[#234A35]" />
            {remainingForFreeShip === 0 ? (
              <span className="font-semibold text-[#1F5435] flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Đơn hàng của bạn đủ điều kiện Miễn phí vận chuyển toàn quốc!
              </span>
            ) : (
              <span>
                Mua thêm <strong className="text-[#8C6D37] tabular-nums">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(remainingForFreeShip)}</strong> để được Miễn phí vận chuyển
              </span>
            )}
          </div>
          <div className="w-full bg-[#DFD5C3] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#234A35] h-full rounded-full transition-all duration-300"
              style={{ width: `${freeShipProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-[#667A6D]">
              <div className="w-16 h-16 rounded-full bg-[#EBF2ED] text-[#234A35] flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-[#162B20]">
                  Giỏ hàng đang trống
                </p>
                <p className="text-xs text-[#6F8275] mt-1 max-w-xs">
                  Hãy khám phá các sản phẩm thuần chay chiết xuất từ nông sản Việt Nam của Cocoon.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234A35] hover:bg-[#183928] rounded-md transition-colors cursor-pointer"
              >
                Khám phá sản phẩm ngay
              </button>
            </div>
          ) : (
            items.map((item) => {
              const formattedPrice = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(item.product.price);

              return (
                <div
                  key={`${item.product.id}-${item.selectedCapacity}`}
                  className="bg-white p-3.5 rounded-xl border border-[#E3DACB] flex gap-3.5 items-center"
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-20 bg-[#F4EFE6] rounded-md flex items-center justify-center p-1 shrink-0">
                    <BottleIllustration
                      type={item.product.category === 'haircare' ? 'spray' : item.product.category === 'bodycare' ? 'jar' : item.product.category === 'refill' ? 'refill' : 'pump'}
                      title={item.product.name}
                      capacity={item.selectedCapacity}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-xs font-bold text-[#162B20] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#6E8073]">
                      Dung tích: <span className="font-medium text-[#234A35]">{item.selectedCapacity}</span>
                    </p>
                    <p className="text-xs font-bold text-[#1F3D2C] mt-1 tabular-nums">
                      {formattedPrice}
                    </p>

                    {/* Stepper */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#D9CFBF] rounded bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedCapacity, -1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#44584B] hover:bg-gray-100 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-medium text-[#162B20] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedCapacity, 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#44584B] hover:bg-gray-100 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedCapacity)}
                        aria-label="Xóa sản phẩm"
                        className="text-[#96A89B] hover:text-[#C74B4B] p-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E3DACB] bg-[#F7F4EC] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#55695C] font-medium">Tạm tính:</span>
              <span className="font-serif text-lg font-bold text-[#162B20] tabular-nums">
                {formattedSubtotal}
              </span>
            </div>

            <p className="text-[11px] text-[#7A8E80]">
              * Đã bao gồm thuế GTGT. Phí vận chuyển sẽ được tính tại bước thanh toán.
            </p>

            <button
              onClick={onCheckout}
              className="w-full py-3 px-4 bg-[#234A35] hover:bg-[#183928] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Tiến hành đặt hàng ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
