import React from 'react';
import { ArrowRight, Sparkles, RefreshCw, Layers, Smile, Droplets, Wind, Heart } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/cocoonData';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onViewAllProducts: () => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
  onViewAllProducts
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'skincare':
        return Droplets;
      case 'bodycare':
        return Heart;
      case 'haircare':
        return Wind;
      case 'lipcare':
        return Smile;
      case 'combo':
        return Layers;
      case 'refill':
        return RefreshCw;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E5DEC\-D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-[#2D5A3F] uppercase mb-2">
              Danh mục tuyển chọn
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162B20] text-balance mb-3">
              Tìm sản phẩm phù hợp với bạn
            </h2>
            <p className="text-base text-[#4D5E52] leading-relaxed">
              Khám phá các lựa chọn chăm sóc từ da mặt đến cơ thể và mái tóc.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onViewAllProducts}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#234A35] hover:text-[#142D1F] underline underline-offset-4 cursor-pointer"
            >
              <span>Xem tất cả sản phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES_DATA.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-left p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#234A35] text-white border-[#193928] shadow-md'
                    : 'bg-[#FAF8F4] text-[#243329] border-[#E3DC handle-border-[#234A35]/30 hover:border-[#234A35]/40 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#EBF2ED] text-[#234A35] group-hover:bg-[#234A35] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs tabular-nums ${
                        isSelected ? 'text-[#C5DCB2]' : 'text-[#7D9183]'
                      }`}
                    >
                      {cat.itemCount}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isSelected ? 'text-white' : 'text-[#182F22]'
                    }`}
                  >
                    {cat.name}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isSelected ? 'text-[#E0EBE2]' : 'text-[#55695D]'
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-medium">
                  <span className={isSelected ? 'text-[#D7E8CE]' : 'text-[#2D5A3F]'}>
                    Khám phá danh mục
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-white' : 'text-[#2D5A3F]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
