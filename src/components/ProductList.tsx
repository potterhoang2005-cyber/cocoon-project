import React, { useState } from 'react';
import { Eye, ShoppingBag, Star, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/cocoonData';
import { AuthenticProductVisual } from './AuthenticProductVisual';

interface ProductListProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, selectedCapacity: string, quantity: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart
}) => {
  const [filter, setFilter] = useState<string>('all');

  const activeCategoryFilter = selectedCategory !== 'all' ? selectedCategory : filter;

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeCategoryFilter === 'all') return true;
    return p.category === activeCategoryFilter;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#ECE6D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header per PDF */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
              Sản phẩm chính hãng Cocoon
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-3">
              Những lựa chọn được yêu thích nhất
            </h2>
            <p className="text-base text-[#4D5E52] leading-relaxed">
              Các sản phẩm chính hãng Cocoon với đầy đủ dung tích, bảng thành phần minh bạch và mức giá niêm yết chính thức.
            </p>
          </div>

          {/* Interactive filter tabs with counts */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE9DD] rounded-lg border border-[#DDD3C2] self-start md:self-auto">
            <button
              onClick={() => {
                setFilter('all');
                onSelectCategory('all');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#234A35] text-white shadow-xs font-semibold'
                  : 'text-[#44584B] hover:text-[#162B20]'
              }`}
            >
              <span>Tất cả</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategoryFilter === 'all' ? 'bg-white/20 text-white' : 'bg-[#E2DACB] text-[#55695C]'}`}>
                {PRODUCTS_DATA.length}
              </span>
            </button>
            <button
              onClick={() => {
                setFilter('skincare');
                onSelectCategory('skincare');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategoryFilter === 'skincare'
                  ? 'bg-[#234A35] text-white shadow-xs font-semibold'
                  : 'text-[#44584B] hover:text-[#162B20]'
              }`}
            >
              <span>Chăm sóc da mặt</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategoryFilter === 'skincare' ? 'bg-white/20 text-white' : 'bg-[#E2DACB] text-[#55695C]'}`}>
                {PRODUCTS_DATA.filter(p => p.category === 'skincare').length}
              </span>
            </button>
            <button
              onClick={() => {
                setFilter('bodycare');
                onSelectCategory('bodycare');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategoryFilter === 'bodycare'
                  ? 'bg-[#234A35] text-white shadow-xs font-semibold'
                  : 'text-[#44584B] hover:text-[#162B20]'
              }`}
            >
              <span>Chăm sóc cơ thể</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategoryFilter === 'bodycare' ? 'bg-white/20 text-white' : 'bg-[#E2DACB] text-[#55695C]'}`}>
                {PRODUCTS_DATA.filter(p => p.category === 'bodycare').length}
              </span>
            </button>
            <button
              onClick={() => {
                setFilter('haircare');
                onSelectCategory('haircare');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategoryFilter === 'haircare'
                  ? 'bg-[#234A35] text-white shadow-xs font-semibold'
                  : 'text-[#44584B] hover:text-[#162B20]'
              }`}
            >
              <span>Chăm sóc tóc</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategoryFilter === 'haircare' ? 'bg-white/20 text-white' : 'bg-[#E2DACB] text-[#55695C]'}`}>
                {PRODUCTS_DATA.filter(p => p.category === 'haircare').length}
              </span>
            </button>
            <button
              onClick={() => {
                setFilter('lipcare');
                onSelectCategory('lipcare');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategoryFilter === 'lipcare'
                  ? 'bg-[#234A35] text-white shadow-xs font-semibold'
                  : 'text-[#44584B] hover:text-[#162B20]'
              }`}
            >
              <span>Dưỡng môi</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategoryFilter === 'lipcare' ? 'bg-white/20 text-white' : 'bg-[#E2DACB] text-[#55695C]'}`}>
                {PRODUCTS_DATA.filter(p => p.category === 'lipcare').length}
              </span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const formattedPrice = new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }).format(p.price);

            return (
              <div
                key={p.id}
                className="bg-[#FCFBF8] rounded-xl border border-[#E7E0D3] overflow-hidden flex flex-col justify-between group hover:border-[#234A35]/50 hover:shadow-md transition-all duration-200"
              >
                {/* Visual Packaging Header */}
                <div className="relative bg-gradient-to-b from-[#F5F0E8] to-[#ECE3D5] p-5 flex items-center justify-center h-64 border-b border-[#E6DDD0] group-hover:from-[#F0E8DD] transition-colors">
                  
                  {/* Badge */}
                  {p.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider text-[#244936] bg-[#E2ECE4] px-2 py-0.5 rounded shadow-2xs">
                      {p.badge}
                    </span>
                  )}

                  {/* Quick View Action */}
                  <button
                    onClick={() => onQuickView(p)}
                    aria-label={`Xem chi tiết ${p.name}`}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/95 text-[#3D5244] hover:text-[#162B20] hover:bg-white shadow-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Authentic Packaging Visual */}
                  <div className="w-36 h-56 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <AuthenticProductVisual
                      type={p.visualType}
                      name={p.name}
                      capacity={p.capacity}
                      imageUrl={p.imageUrl}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                  <div>
                    {/* Metadata line */}
                    <div className="flex items-center justify-between text-[11px] text-[#697C6E] mb-1">
                      <span className="font-medium">{p.categoryLabel}</span>
                      <span className="font-bold text-[#234A35]">{p.capacity}</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#182F22] line-clamp-1 group-hover:text-[#234A35] transition-colors">
                      {p.name}
                    </h3>

                    <p className="text-xs text-[#526658] line-clamp-2 mt-1 leading-relaxed">
                      {p.benefits[0]}
                    </p>
                  </div>

                  {/* Rating & Origin */}
                  <div className="pt-2 border-t border-[#ECE5D9] flex items-center justify-between text-[11px]">
                    <div className="flex items-center text-amber-800 font-medium">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
                      <span className="tabular-nums font-semibold">{p.rating}</span>
                      <span className="text-[#889B8D] ml-1">({p.reviewCount})</span>
                    </div>
                    <span className="text-[#728578] truncate max-w-[130px] font-medium">
                      {p.ingredientKey}
                    </span>
                  </div>

                  {/* Real Price & CTA bar */}
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-base font-bold text-[#1B3627] tabular-nums">
                        {formattedPrice}
                      </p>
                      {p.originalPrice && (
                        <p className="text-[11px] text-gray-400 line-through tabular-nums">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.originalPrice)}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onQuickView(p)}
                        className="px-2.5 py-1.5 text-[11px] font-medium text-[#243329] bg-[#EFE9DD] hover:bg-[#E5DDCF] rounded transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Chi tiết
                      </button>
                      <button
                        onClick={() => onAddToCart(p, p.capacity, 1)}
                        className="p-1.5 text-white bg-[#234A35] hover:bg-[#183928] rounded transition-colors cursor-pointer"
                        title="Thêm vào giỏ"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Note from PDF */}
        <div className="mt-8 p-4 bg-[#F2EDE2] rounded-lg border border-[#E0D7C8] flex items-start gap-2.5 text-xs text-[#526458]">
          <AlertCircle className="w-4 h-4 text-[#8C7A60] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#304537]">Cam kết giá niêm yết:</strong> Toàn bộ tên sản phẩm, dung tích (ml/g), giá bán lẻ và công dụng được cập nhật chính xác từ bảng giá niêm yết chính hãng Cocoon Việt Nam (Cocoon Original Viet Nam).
          </p>
        </div>

      </div>
    </section>
  );
};
