import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, INGREDIENTS_DATA } from '../data/cocoonData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectIngredient: (ingredientId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectIngredient
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = PRODUCTS_DATA.filter(
    (p) =>
      p.name.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed) ||
      p.ingredientKey.toLowerCase().includes(trimmed) ||
      p.categoryLabel.toLowerCase().includes(trimmed)
  );

  const matchingIngredients = INGREDIENTS_DATA.filter(
    (ing) =>
      ing.name.toLowerCase().includes(trimmed) ||
      ing.region.toLowerCase().includes(trimmed) ||
      ing.description.toLowerCase().includes(trimmed)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DED5C3] overflow-hidden flex flex-col text-left max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E3DACB] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#234A35] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm theo tên sản phẩm, nguyên liệu (bí đao, cà phê, bưởi, nghệ, sen)..."
            className="flex-1 text-xs sm:text-sm text-[#162B20] placeholder-[#819486] bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Đóng tìm kiếm"
            className="p-1.5 text-[#55695C] hover:text-[#162B20] hover:bg-[#EAE2D3] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick keywords suggestions */}
        {!query && (
          <div className="p-5 space-y-4 overflow-y-auto">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8E80]">
                Từ khóa tìm kiếm phổ biến
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Nước tẩy trang bí đao', 'Cà phê Đắk Lắk', 'Nước dưỡng tóc bưởi', 'Mặt nạ nghệ', 'Túi Refill', 'Hoa sen Hậu Giang'].map(
                  (kw) => (
                    <button
                      key={kw}
                      onClick={() => setQuery(kw)}
                      className="px-3 py-1.5 text-xs bg-[#EFE8DC] hover:bg-[#E5DDCE] text-[#243329] rounded-md transition-colors cursor-pointer"
                    >
                      {kw}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8E80]">
                5 Vùng nguyên liệu đặc trưng
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {INGREDIENTS_DATA.map((ing) => (
                  <button
                    key={ing.id}
                    onClick={() => {
                      onClose();
                      onSelectIngredient(ing.id);
                    }}
                    className="p-2.5 rounded-lg bg-white border border-[#DFD6C5] hover:border-[#234A35] text-left transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-[#182F22]">{ing.name}</p>
                      <p className="text-[10px] text-[#788B7E]">{ing.region.split(',')[0]}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="p-5 overflow-y-auto space-y-4">
            {/* Products matches */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C3827]">
                  Sản phẩm ({matchingProducts.length})
                </span>
              </div>

              {matchingProducts.length === 0 ? (
                <p className="text-xs text-[#7B8E81] py-2">
                  Không tìm thấy sản phẩm nào khớp với từ khóa "{query}".
                </p>
              ) : (
                <div className="space-y-2">
                  {matchingProducts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(p);
                      }}
                      className="w-full text-left p-3 rounded-lg bg-white border border-[#E3DACB] hover:border-[#234A35] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#182F22]">{p.name}</span>
                          <span className="text-[10px] text-[#2D5A3F] bg-[#EBF2ED] px-1.5 py-0.5 rounded">
                            {p.capacity}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#697C6F] mt-0.5 line-clamp-1">{p.benefits[0]}</p>
                      </div>
                      <span className="text-xs font-bold text-[#234A35] tabular-nums whitespace-nowrap ml-3">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
