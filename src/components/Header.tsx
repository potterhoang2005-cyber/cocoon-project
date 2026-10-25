import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7E2D6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar contract: 3 distinct zones */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('hero')}
              className="group text-left cursor-pointer focus-visible:outline-none"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#162B20] transition-colors group-hover:text-[#234A35]">
                  COCOON
                </span>
                <span className="text-[10px] tracking-widest text-[#234A35] font-semibold uppercase">
                  VIETNAM
                </span>
              </div>
              <p className="text-[11px] text-[#697A6E] tracking-tight font-normal hidden sm:block">
                mỹ phẩm thuần chay từ nguyên liệu Việt Nam
              </p>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#384A3E]">
            {/* Products dropdown */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onClick={() => handleNavClick('products')}
                className="flex items-center gap-1 hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Sản phẩm</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#234A35]' : 'text-[#849E87]'}`} />
              </button>

              {/* Mega submenu for categories per PDF */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md shadow-xl border border-[#E4DDD0] rounded-lg p-2.5 py-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleCategoryClick('all')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Tất cả sản phẩm
                  </button>
                  <button
                    onClick={() => handleCategoryClick('skincare')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Chăm sóc da
                  </button>
                  <button
                    onClick={() => handleCategoryClick('bodycare')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Chăm sóc cơ thể
                  </button>
                  <button
                    onClick={() => handleCategoryClick('haircare')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Chăm sóc tóc
                  </button>
                  <button
                    onClick={() => handleCategoryClick('lipcare')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Dưỡng môi
                  </button>
                  <button
                    onClick={() => handleCategoryClick('combo')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#243329] hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Combo / Travel Kit
                  </button>
                  <button
                    onClick={() => handleCategoryClick('refill')}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#234A35] font-semibold hover:bg-[#F3EFE6] rounded transition-colors"
                  >
                    Túi refill (Tiết kiệm bao bì)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('ingredients')}
              className="hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              Nguyên liệu Việt
            </button>
            <button
              onClick={() => handleNavClick('philosophy')}
              className="hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              Câu chuyện & Triết lý
            </button>
            <button
              onClick={() => handleNavClick('certifications')}
              className="hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              Chứng nhận
            </button>
            <button
              onClick={() => handleNavClick('routine')}
              className="hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              Chăm sóc theo nhu cầu
            </button>
            <button
              onClick={() => handleNavClick('sustainability')}
              className="hover:text-[#162B20] py-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              Bền vững & Cộng đồng
            </button>
          </nav>

          {/* Zone 3: Actions + Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              aria-label="Tìm kiếm sản phẩm hoặc nguyên liệu"
              className="p-2 text-[#384A3E] hover:text-[#162B20] hover:bg-[#F0ECE1] rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Account */}
            <button
              onClick={onOpenAccount}
              aria-label="Tài khoản khách hàng"
              className="p-2 text-[#384A3E] hover:text-[#162B20] hover:bg-[#F0ECE1] rounded-full transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Giỏ hàng"
              className="relative p-2 text-[#162B20] hover:bg-[#F0ECE1] rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#234A35] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('products')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#234A35] hover:bg-[#1A3828] active:bg-[#132B1E] rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Khám phá sản phẩm
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu di động"
              className="lg:hidden p-2 text-[#243329] hover:bg-[#F0ECE1] rounded-md cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F4] border-b border-[#E5DFD4] px-5 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="text-xs font-semibold text-[#889B8C] uppercase tracking-wider mb-2">
            Danh mục sản phẩm
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleCategoryClick('skincare')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#243329]"
            >
              Chăm sóc da
            </button>
            <button
              onClick={() => handleCategoryClick('bodycare')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#243329]"
            >
              Chăm sóc cơ thể
            </button>
            <button
              onClick={() => handleCategoryClick('haircare')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#243329]"
            >
              Chăm sóc tóc
            </button>
            <button
              onClick={() => handleCategoryClick('lipcare')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#243329]"
            >
              Dưỡng môi
            </button>
            <button
              onClick={() => handleCategoryClick('combo')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#243329]"
            >
              Combo / Travel Kit
            </button>
            <button
              onClick={() => handleCategoryClick('refill')}
              className="text-left py-1.5 px-2 bg-white/70 rounded border border-[#E8E2D7] text-[#234A35] font-semibold"
            >
              Túi Refill
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E2D7] flex flex-col gap-2 text-xs font-medium text-[#2C3E32]">
            <button onClick={() => handleNavClick('ingredients')} className="text-left py-1">
              Câu chuyện nguyên liệu Việt
            </button>
            <button onClick={() => handleNavClick('philosophy')} className="text-left py-1">
              Triết lý thương hiệu & Cam kết
            </button>
            <button onClick={() => handleNavClick('certifications')} className="text-left py-1">
              Chứng nhận (Leaping Bunny, Vegan Society, PETA)
            </button>
            <button onClick={() => handleNavClick('routine')} className="text-left py-1">
              Lộ trình chăm sóc theo nhu cầu
            </button>
            <button onClick={() => handleNavClick('sustainability')} className="text-left py-1">
              Bền vững: Refill & Đổi vỏ chai
            </button>
            <button onClick={() => handleNavClick('reviews')} className="text-left py-1">
              Chia sẻ từ cộng đồng
            </button>
            <button onClick={() => handleNavClick('faq')} className="text-left py-1">
              Câu hỏi thường gặp (FAQ)
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('products');
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#234A35] rounded-md"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
