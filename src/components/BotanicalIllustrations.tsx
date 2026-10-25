import React from 'react';

export const BottleIllustration: React.FC<{
  type?: 'dropper' | 'pump' | 'jar' | 'spray' | 'refill' | 'lip';
  color?: string;
  className?: string;
  title?: string;
  capacity?: string;
}> = ({ type = 'pump', color = '#244936', className = 'w-full h-full', title = 'Cocoon', capacity = '' }) => {
  if (type === 'dropper') {
    return (
      <svg viewBox="0 0 160 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amberGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C98B41" />
            <stop offset="50%" stopColor="#8A581F" />
            <stop offset="100%" stopColor="#4A2F0F" />
          </linearGradient>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1B1B1B" />
            <stop offset="50%" stopColor="#383838" />
            <stop offset="100%" stopColor="#121212" />
          </linearGradient>
          <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A2A2A" />
            <stop offset="50%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        {/* Rubber Bulb */}
        <path d="M72 16 C72 8, 88 8, 88 16 L88 32 L72 32 Z" fill="url(#bulbGrad)" />
        {/* Dropper Collar */}
        <rect x="66" y="32" width="28" height="24" rx="2" fill="url(#capGrad)" />
        <rect x="64" y="52" width="32" height="6" rx="1" fill="#222" />
        {/* Bottle Neck */}
        <rect x="70" y="58" width="20" height="12" fill="url(#amberGlass)" />
        {/* Shoulder */}
        <path d="M70 70 C56 72 40 86 40 102 L40 230 C40 238 48 244 58 244 L102 244 C112 244 120 238 120 230 L120 102 C120 86 104 72 90 70 Z" fill="url(#amberGlass)" />
        {/* Glass reflection highlight */}
        <path d="M48 102 L48 226 C48 232 52 236 58 236 L62 236 L62 98 C54 100 48 102 48 102 Z" fill="#FFF" fillOpacity="0.16" />
        {/* Paper Botanical Label */}
        <rect x="46" y="112" width="68" height="104" rx="2" fill="#FBF9F4" />
        <line x1="52" y1="122" x2="108" y2="122" stroke="#244936" strokeWidth="1" strokeDasharray="2 2" />
        <text x="80" y="140" textAnchor="middle" fill="#1C382A" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">COCOON</text>
        <text x="80" y="152" textAnchor="middle" fill="#5A6D61" fontSize="5.5" fontFamily="sans-serif">THUẦN CHAY</text>
        <rect x="54" y="160" width="52" height="1" fill="#C98B41" />
        <text x="80" y="174" textAnchor="middle" fill="#243329" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">
          {title.slice(0, 16)}
        </text>
        <text x="80" y="185" textAnchor="middle" fill="#6B7280" fontSize="5" fontFamily="sans-serif">
          {capacity || '30ml / 1.0 fl.oz'}
        </text>
        <circle cx="80" cy="200" r="4" fill="none" stroke="#244936" strokeWidth="0.8" />
        <path d="M78 200 L80 198 L82 201" stroke="#244936" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'spray') {
    return (
      <svg viewBox="0 0 160 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amberTall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4994E" />
            <stop offset="50%" stopColor="#9C6726" />
            <stop offset="100%" stopColor="#5E3B13" />
          </linearGradient>
          <linearGradient id="sprayNozzle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E2822" />
            <stop offset="50%" stopColor="#35483D" />
            <stop offset="100%" stopColor="#16201A" />
          </linearGradient>
        </defs>
        {/* Clear Plastic Overcap */}
        <rect x="62" y="18" width="36" height="36" rx="4" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
        {/* Spray Head */}
        <rect x="66" y="24" width="28" height="28" rx="2" fill="url(#sprayNozzle)" />
        <rect x="88" y="32" width="6" height="4" rx="1" fill="#111" />
        <rect x="60" y="54" width="40" height="14" rx="2" fill="#222" />
        {/* Bottle Body */}
        <path d="M68 68 L68 76 C52 78 44 90 44 104 L44 234 C44 242 50 248 60 248 L100 248 C110 248 116 242 116 234 L116 104 C116 90 108 78 92 76 L92 68 Z" fill="url(#amberTall)" />
        {/* Highlight */}
        <rect x="50" y="104" width="8" height="130" rx="3" fill="#FFF" fillOpacity="0.15" />
        {/* Label */}
        <rect x="48" y="110" width="64" height="114" rx="2" fill="#F8F6F0" />
        <text x="80" y="132" textAnchor="middle" fill="#1C382A" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">COCOON</text>
        <text x="80" y="144" textAnchor="middle" fill="#526A3A" fontSize="5.5" fontFamily="sans-serif">TINH DẦU BƯỞI</text>
        <rect x="54" y="152" width="52" height="1" fill="#C08738" />
        <text x="80" y="168" textAnchor="middle" fill="#243329" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">NƯỚC DƯỠNG TÓC</text>
        <text x="80" y="178" textAnchor="middle" fill="#718096" fontSize="5" fontFamily="sans-serif">Pomelo Hair Tonic</text>
        <text x="80" y="202" textAnchor="middle" fill="#526A3A" fontSize="6" fontWeight="bold" fontFamily="sans-serif">
          {capacity || '140ml'}
        </text>
      </svg>
    );
  }

  if (type === 'jar') {
    return (
      <svg viewBox="0 0 180 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="jarAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C98B41" />
            <stop offset="50%" stopColor="#8A581F" />
            <stop offset="100%" stopColor="#4A2F0F" />
          </linearGradient>
          <linearGradient id="lidWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25352A" />
            <stop offset="50%" stopColor="#3C5443" />
            <stop offset="100%" stopColor="#1B281F" />
          </linearGradient>
        </defs>
        {/* Jar Lid */}
        <rect x="30" y="40" width="120" height="30" rx="4" fill="url(#lidWood)" />
        <rect x="34" y="66" width="112" height="6" fill="#19241D" />
        {/* Jar Glass Body */}
        <path d="M34 72 C32 90 32 140 32 152 C32 166 42 176 56 176 L124 176 C138 176 148 166 148 152 C148 140 148 90 146 72 Z" fill="url(#jarAmber)" />
        <path d="M40 82 L40 152 C40 160 46 166 54 166 L60 166 L60 82 Z" fill="#FFF" fillOpacity="0.14" />
        {/* Label */}
        <rect x="42" y="86" width="96" height="74" rx="2" fill="#F8F6F0" />
        <text x="90" y="108" textAnchor="middle" fill="#1C382A" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">COCOON</text>
        <line x1="56" y1="116" x2="124" y2="116" stroke="#9C6E18" strokeWidth="1" />
        <text x="90" y="130" textAnchor="middle" fill="#243329" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
          {title.slice(0, 18)}
        </text>
        <text x="90" y="144" textAnchor="middle" fill="#718096" fontSize="5.5" fontFamily="sans-serif">
          {capacity || '200ml / 6.76 fl.oz'}
        </text>
      </svg>
    );
  }

  if (type === 'refill') {
    return (
      <svg viewBox="0 0 160 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pouchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A533E" />
            <stop offset="60%" stopColor="#1E3D2D" />
            <stop offset="100%" stopColor="#142B1F" />
          </linearGradient>
        </defs>
        {/* Spout Cap */}
        <rect x="70" y="16" width="20" height="20" rx="3" fill="#D4AF37" />
        <rect x="68" y="32" width="24" height="6" fill="#A88B27" />
        {/* Standup Pouch Contour */}
        <path d="M72 38 L44 56 C36 62 34 72 36 84 L40 216 C41 228 50 238 62 242 L98 242 C110 238 119 228 120 216 L124 84 C126 72 124 62 116 56 L88 38 Z" fill="url(#pouchGrad)" />
        {/* Subtle pouch foil sheen */}
        <path d="M46 64 L46 220 L58 230 L58 60 Z" fill="#FFF" fillOpacity="0.08" />
        {/* Eco Leaf Badge */}
        <circle cx="80" cy="80" r="16" fill="#F8F6F0" fillOpacity="0.95" />
        <path d="M74 84 C74 76 82 72 86 74 C86 82 82 86 74 84 Z" fill="#244936" />
        <line x1="74" y1="84" x2="84" y2="76" stroke="#F8F6F0" strokeWidth="0.8" />
        {/* Eco Text */}
        <text x="80" y="112" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="bold" letterSpacing="0.08em">REFILL POUCH</text>
        <text x="80" y="124" textAnchor="middle" fill="#A7D4B5" fontSize="6" fontWeight="600">TIẾT KIỆM 80% NHỰA</text>
        {/* Label panel */}
        <rect x="46" y="136" width="68" height="76" rx="2" fill="#FAF8F2" />
        <text x="80" y="154" textAnchor="middle" fill="#1C382A" fontSize="8" fontWeight="bold">COCOON</text>
        <line x1="54" y1="160" x2="106" y2="160" stroke="#3A5B47" strokeWidth="1" />
        <text x="80" y="174" textAnchor="middle" fill="#243329" fontSize="6" fontWeight="600">NƯỚC TẨY TRANG BÍ ĐAO</text>
        <text x="80" y="186" textAnchor="middle" fill="#526A3A" fontSize="6.5" fontWeight="bold">500 ML REFILL</text>
        <text x="80" y="200" textAnchor="middle" fill="#888" fontSize="5">Eco Conscious Living</text>
      </svg>
    );
  }

  // Default: Classic Cocoon Amber Pump Bottle (Nước tẩy trang / Sữa tắm)
  return (
    <svg viewBox="0 0 160 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="amberPumpGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C98B41" />
          <stop offset="45%" stopColor="#8A581F" />
          <stop offset="100%" stopColor="#4A2F0F" />
        </linearGradient>
        <linearGradient id="pumpBlack" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1C241F" />
          <stop offset="50%" stopColor="#303E35" />
          <stop offset="100%" stopColor="#141A16" />
        </linearGradient>
      </defs>
      {/* Pump Head */}
      <path d="M50 22 C50 18 56 14 66 14 L94 14 C98 14 100 16 100 20 L100 26 C90 26 84 28 84 34 L76 34 L76 26 L50 24 Z" fill="url(#pumpBlack)" />
      {/* Spout */}
      <path d="M50 22 L42 26 C40 27 40 29 42 30 L50 30 Z" fill="#111" />
      {/* Pump Stem & Collar */}
      <rect x="74" y="28" width="12" height="16" fill="#444" />
      <rect x="64" y="44" width="32" height="18" rx="2" fill="url(#pumpBlack)" />
      {/* Bottle Neck */}
      <rect x="68" y="60" width="24" height="12" fill="url(#amberPumpGlass)" />
      {/* Main Bottle Body */}
      <path d="M68 70 C52 74 38 88 38 106 L38 230 C38 238 46 244 56 244 L104 244 C114 244 122 238 122 230 L122 106 C122 88 108 74 92 70 Z" fill="url(#amberPumpGlass)" />
      {/* Glass Highlight Reflection */}
      <path d="M46 106 L46 226 C46 232 50 236 56 236 L60 236 L60 102 C52 104 46 106 46 106 Z" fill="#FFF" fillOpacity="0.16" />
      {/* Paper Label */}
      <rect x="44" y="104" width="72" height="118" rx="2" fill="#FAF8F2" />
      <line x1="50" y1="114" x2="110" y2="114" stroke="#244936" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="80" y="130" textAnchor="middle" fill="#1C382A" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">COCOON</text>
      <text x="80" y="142" textAnchor="middle" fill="#526A3A" fontSize="5.5" fontFamily="sans-serif">MỸ PHẨM THUẦN CHAY</text>
      <rect x="52" y="148" width="56" height="1" fill="#C98B41" />
      <text x="80" y="162" textAnchor="middle" fill="#243329" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">
        {title.slice(0, 16)}
      </text>
      <text x="80" y="174" textAnchor="middle" fill="#555" fontSize="5.5" fontFamily="sans-serif">
        {capacity || '500ml / 16.9 fl.oz'}
      </text>
      <text x="80" y="196" textAnchor="middle" fill="#244936" fontSize="5" fontWeight="500">100% VEGAN · CRUELTY-FREE</text>
    </svg>
  );
};

export const IngredientVectorIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'melon':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor">
          <ellipse cx="24" cy="24" rx="18" ry="14" strokeWidth="2.5" className="stroke-[#2D5A3F]" fill="#EAF3EC" />
          <path d="M12 24 C16 28 32 28 36 24" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" className="stroke-[#2D5A3F]" />
          <ellipse cx="24" cy="24" rx="8" ry="5" strokeWidth="1.5" className="stroke-[#5E8C70]" />
          <circle cx="21" cy="24" r="1" fill="#2D5A3F" />
          <circle cx="27" cy="24" r="1" fill="#2D5A3F" />
          <path d="M24 10 C24 6 28 4 30 6" strokeWidth="2" strokeLinecap="round" className="stroke-[#2D5A3F]" />
        </svg>
      );
    case 'coffee':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor">
          <ellipse cx="24" cy="24" rx="16" ry="12" strokeWidth="2.5" className="stroke-[#543D2B]" fill="#F4EDE6" />
          <path d="M14 26 C19 18 29 30 34 22" strokeWidth="2" strokeLinecap="round" className="stroke-[#543D2B]" />
        </svg>
      );
    case 'turmeric':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor">
          <path d="M10 28 C14 20 22 18 28 22 C34 26 40 24 38 32 C36 40 22 38 16 36 Z" strokeWidth="2.5" className="stroke-[#9E6C15]" fill="#FCF4DF" />
          <line x1="18" y1="24" x2="16" y2="34" strokeWidth="1.5" className="stroke-[#9E6C15]" strokeLinecap="round" />
          <line x1="26" y1="23" x2="25" y2="35" strokeWidth="1.5" className="stroke-[#9E6C15]" strokeLinecap="round" />
          <circle cx="36" cy="16" r="6" strokeWidth="2" className="stroke-[#9E6C15]" fill="#F8DE98" />
        </svg>
      );
    case 'pomelo':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor">
          <circle cx="24" cy="25" r="16" strokeWidth="2.5" className="stroke-[#496B30]" fill="#F1F6EA" />
          <path d="M24 9 C24 6 27 5 28 6" strokeWidth="2" strokeLinecap="round" className="stroke-[#496B30]" />
          <path d="M28 6 C32 6 34 9 32 11 Z" fill="#496B30" />
          <circle cx="24" cy="25" r="9" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-[#739B54]" />
        </svg>
      );
    case 'lotus':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor">
          <path d="M24 10 C24 10 16 22 24 34 C32 22 24 10 24 10 Z" strokeWidth="2" className="stroke-[#375E48]" fill="#EAF3EC" />
          <path d="M18 18 C14 24 16 32 24 34 C20 30 18 24 18 18 Z" strokeWidth="1.5" className="stroke-[#375E48]" fill="#DFEEE3" />
          <path d="M30 18 C34 24 32 32 24 34 C28 30 30 24 30 18 Z" strokeWidth="1.5" className="stroke-[#375E48]" fill="#DFEEE3" />
          <path d="M10 36 C18 36 30 36 38 36" strokeWidth="2" strokeLinecap="round" className="stroke-[#375E48]" />
        </svg>
      );
    default:
      return null;
  }
};

export const TrustBadgeIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-10 h-10' }) => {
  if (type === 'leaping-bunny') {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none">
        <circle cx="32" cy="32" r="30" stroke="#234A35" strokeWidth="2" fill="#F8FBF8" />
        {/* Stylized Rabbit jumping */}
        <path d="M18 34 C20 28 26 26 32 28 C36 24 40 24 44 26 C46 27 48 30 46 32 C43 32 41 33 40 36 C42 38 46 39 48 38 C48 42 42 42 38 40 C34 44 26 44 20 40 C17 38 16 36 18 34 Z" fill="#234A35" />
        <ellipse cx="26" cy="22" rx="2" ry="5" transform="rotate(-20 26 22)" fill="#234A35" />
        <ellipse cx="30" cy="20" rx="1.8" ry="6" transform="rotate(-5 30 20)" fill="#234A35" />
        <circle cx="43" cy="29" r="1" fill="#FFF" />
      </svg>
    );
  }

  if (type === 'the-vegan-society') {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none">
        <circle cx="32" cy="32" r="30" stroke="#234A35" strokeWidth="2" fill="#F8FBF8" />
        {/* Sunflower / V shape */}
        <circle cx="32" cy="32" r="8" fill="#C08738" />
        <path d="M32 16 L32 22 M32 42 L32 48 M16 32 L22 32 M42 32 L48 32 M21 21 L25 25 M39 39 L43 43 M21 43 L25 39 M39 21 L43 25" stroke="#C08738" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 26 L32 38 L38 26" stroke="#234A35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // PETA
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="30" stroke="#234A35" strokeWidth="2" fill="#F8FBF8" />
      <path d="M22 36 C22 30 26 24 34 26 C38 22 42 22 44 26 C46 30 44 36 38 38 C34 40 28 42 24 38 C22 37 22 36 22 36 Z" fill="#234A35" />
      <ellipse cx="28" cy="18" rx="2" ry="7" transform="rotate(-15 28 18)" fill="#234A35" />
      <ellipse cx="33" cy="17" rx="2" ry="7" transform="rotate(10 33 17)" fill="#234A35" />
    </svg>
  );
};
