import React, { useState } from 'react';
import { X, Check, Star, ShoppingBag, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { BottleIllustration } from './BotanicalIllustrations';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedCapacity: string, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const getIllustrationType = () => {
    if (product.category === 'haircare') return 'spray';
    if (product.category === 'bodycare') return 'jar';
    if (product.category === 'refill') return 'refill';
    if (product.id.includes('tinh-chat')) return 'dropper';
    return 'pump';
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedCapacity, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(product.price);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DED6C7] overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="absolute top-4 right-4 z-10 p-2 text-[#465A4E] hover:text-[#162B20] bg-white/80 rounded-full hover:bg-white shadow-xs transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Visual Showcase */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-[#F2ECE1] to-[#E9DFCE] p-6 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#DFD5C3]">
          <div className="w-40 h-64 flex items-center justify-center">
            <BottleIllustration
              type={getIllustrationType()}
              title={product.name}
              capacity={selectedCapacity}
            />
          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] font-semibold tracking-wider text-[#2D5A3F] uppercase">
              {product.categoryLabel}
            </span>
            <p className="text-xs text-[#526357] font-medium mt-1">
              {product.ingredientRegion}
            </p>
          </div>
        </div>

        {/* Right: Detailed Content */}
        <div className="w-full md:w-7/12 p-6 sm:p-7 overflow-y-auto space-y-5 text-left">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold text-[#234A35]">
                {product.ingredientKey}
              </span>
              <span className="text-gray-300">·</span>
              <div className="flex items-center text-xs font-medium text-amber-800">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
                <span className="tabular-nums font-semibold">{product.rating}</span>
                <span className="text-gray-500 ml-1">({product.reviewCount} đánh giá)</span>
              </div>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#162B20]">
              {product.name}
            </h3>
            <p className="text-xs text-[#6B7E72] italic">{product.subtitle}</p>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-xl font-bold text-[#234A35] tabular-nums">
                {formattedPrice}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through tabular-nums">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#465A4D] leading-relaxed">
            {product.description}
          </p>

          {/* Benefits */}
          <div className="space-y-1.5 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3A29]">
              Công dụng chính
            </h4>
            <ul className="space-y-1 text-xs text-[#425549]">
              {product.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D5A3F] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Ingredients */}
          <div className="space-y-1.5 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3A29]">
              Thành phần cốt lõi
            </h4>
            <div className="bg-[#F4EFE6] p-2.5 rounded-lg text-[11px] text-[#425549] space-y-1 border border-[#E3DACB]">
              {product.mainIngredients.map((ing, idx) => (
                <p key={idx} className="leading-snug">• {ing}</p>
              ))}
            </div>
          </div>

          {/* Capacity selection */}
          {product.capacities && product.capacities.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-[#243329] mb-1.5">
                Chọn dung tích
              </label>
              <div className="flex flex-wrap gap-2">
                {product.capacities.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapacity(cap)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                      selectedCapacity === cap
                        ? 'border-[#234A35] bg-[#234A35] text-white'
                        : 'border-[#D9CFBF] bg-white text-[#243329] hover:bg-[#F3EEE3]'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="pt-2 flex items-center gap-3">
            <div className="flex items-center border border-[#D9CFBF] rounded-md bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2.5 py-1.5 text-xs font-semibold text-[#243329] hover:bg-gray-100 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-medium text-[#243329] tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2.5 py-1.5 text-xs font-semibold text-[#243329] hover:bg-gray-100 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                added
                  ? 'bg-[#1D7448] text-white'
                  : 'bg-[#234A35] hover:bg-[#183928] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã thêm vào giỏ!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm vào giỏ hàng</span>
                </>
              )}
            </button>
          </div>

          {/* Transparent note */}
          <p className="text-[10px] text-[#788B7D] text-center pt-1 border-t border-[#ECE3D5]">
            * Tên, dung tích, giá và tuyên bố công dụng được đối soát theo tài liệu chính thức từ Cocoon Vietnam.
          </p>
        </div>
      </div>
    </div>
  );
};
