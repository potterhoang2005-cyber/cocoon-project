import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Categories } from './components/Categories';
import { ProductList } from './components/ProductList';
import { IngredientsStory } from './components/IngredientsStory';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { Certifications } from './components/Certifications';
import { RoutineSelector } from './components/RoutineSelector';
import { Sustainability } from './components/Sustainability';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';

import { Product, CartItem } from './types';
import { PRODUCTS_DATA } from './data/cocoonData';

export default function App() {
  // Cart State with initial item for realistic live preview
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS_DATA[0], // Nước tẩy trang bí đao 500ml
      selectedCapacity: '500ml',
      quantity: 1
    }
  ]);

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, selectedCapacity: string, quantity: number) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedCapacity === selectedCapacity
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      }
      return [...prev, { product, selectedCapacity, quantity }];
    });
    showToast(`Đã thêm ${quantity}x "${product.name}" vào giỏ hàng`);
  };

  const handleUpdateQuantity = (productId: string, capacity: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedCapacity === capacity) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string, capacity: string) => {
    setCartItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.selectedCapacity === capacity)
      )
    );
    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductByName = (productName: string) => {
    const match = PRODUCTS_DATA.find((p) =>
      p.name.toLowerCase().includes(productName.toLowerCase()) ||
      productName.toLowerCase().includes(p.name.toLowerCase())
    );
    if (match) {
      setQuickViewProduct(match);
    } else {
      scrollToSection('products');
    }
  };

  const handleSelectProductById = (productId: string) => {
    const match = PRODUCTS_DATA.find((p) => p.id === productId);
    if (match) {
      setQuickViewProduct(match);
    } else {
      scrollToSection('products');
    }
  };

  const totalCartUnits = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#243329] flex flex-col font-sans selection:bg-[#234A35] selection:text-white">
      {/* Disclaimer Notice Banner as per PDF Page 1 */}
      <div className="bg-[#EBE4D5] text-[#55695C] text-[11px] text-center py-1 px-4 border-b border-[#DDD4C3]">
        <span>Đây là bản đề xuất nội dung cho bài tập / thiết kế; không phải trang chính thức do Cocoon phát hành.</span>
      </div>

      {/* 01. Thanh thông báo (Announcement Bar) */}
      <AnnouncementBar onExploreClick={() => scrollToSection('products')} />

      {/* 02. Header / Thanh điều hướng */}
      <Header
        cartCount={totalCartUnits}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('products');
        }}
      />

      {/* Main Content Sections 03 through 14 */}
      <main className="flex-1">
        {/* 03. Hero Banner – Khu vực đầu trang */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onExploreStory={() => scrollToSection('ingredients')}
        />

        {/* 04. Giá trị nổi bật (USP / Value Proposition) */}
        <Values
          onLearnMorePhilosophy={() => scrollToSection('philosophy')}
        />

        {/* 05. Danh mục sản phẩm */}
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            scrollToSection('products');
          }}
          onViewAllProducts={() => {
            setSelectedCategory('all');
            scrollToSection('products');
          }}
        />

        {/* 06. Sản phẩm nổi bật / Best Sellers */}
        <ProductList
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 07. Câu chuyện nguyên liệu Việt Nam */}
        <IngredientsStory
          onProductClick={(pName) => handleSelectProductByName(pName)}
        />

        {/* 08. Triết lý thương hiệu & Cam kết */}
        <BrandPhilosophy
          onLearnMore={() => scrollToSection('ingredients')}
          onExploreCertifications={() => scrollToSection('certifications')}
        />

        {/* 09. Chứng nhận và bằng chứng tin cậy */}
        <Certifications />

        {/* 10. Chọn sản phẩm theo nhu cầu */}
        <RoutineSelector
          onSelectProduct={(pId) => handleSelectProductById(pId)}
          onExploreProducts={() => scrollToSection('products')}
        />

        {/* 11. Bền vững và trách nhiệm cộng đồng */}
        <Sustainability
          onExploreRefillProducts={() => {
            setSelectedCategory('refill');
            scrollToSection('products');
          }}
        />

        {/* 12. Đánh giá khách hàng / Nội dung cộng đồng */}
        <CustomerReviews />

        {/* 13. Câu hỏi thường gặp (FAQ) */}
        <FAQ
          onContactSupport={() => showToast('Hotline hỗ trợ miễn phí Cocoon: 1800 646487')}
        />

        {/* 14. CTA cuối trang */}
        <FinalCTA
          onExploreProducts={() => scrollToSection('products')}
          onExploreStory={() => scrollToSection('philosophy')}
        />
      </main>

      {/* 15. Footer – Chân trang */}
      <Footer
        onNavClick={(anchor) => scrollToSection(anchor)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('products');
        }}
      />

      {/* Modals & Slide-overs */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExplore={() => {
          setIsCartOpen(false);
          scrollToSection('products');
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => {
          setIsSearchOpen(false);
          setQuickViewProduct(p);
        }}
        onSelectIngredient={() => {
          setIsSearchOpen(false);
          scrollToSection('ingredients');
        }}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onExploreRecycle={() => {
          setIsAccountOpen(false);
          scrollToSection('sustainability');
        }}
      />

      {/* Floating Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#162B20] text-white text-xs sm:text-sm font-medium py-3 px-5 rounded-lg shadow-xl border border-[#2A4C3A] animate-in slide-in-from-bottom duration-200 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#7BD492]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
