import React from 'react';

export interface ProductVisualProps {
  type: 'bi-dao-cleanser' | 'coffee-body' | 'pomelo-hair' | 'turmeric-mask' | 'sen-cleanser' | 'coconut-lip' | 'coffee-lip' | 'coffee-refill';
  name: string;
  capacity?: string;
  className?: string;
  colorScheme?: string;
  imageUrl?: string;
}

export const AuthenticProductVisual: React.FC<ProductVisualProps> = ({
  type,
  name,
  capacity = '',
  className = 'w-full h-full',
  imageUrl
}) => {
  if (imageUrl) {
    return (
      <div className={`relative flex items-center justify-center p-2 ${className}`}>
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-300"
          loading="lazy"
        />
      </div>
    );
  }
  // 1. Nước tẩy trang Bí đao 500ml / 140ml (Signature amber apothecary pump bottle with dark green neck and craft paper label)
  if (type === 'bi-dao-cleanser') {
    return (
      <svg viewBox="0 0 200 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bdAmberGlass" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99B43" />
            <stop offset="25%" stopColor="#B37825" />
            <stop offset="70%" stopColor="#7E4F14" />
            <stop offset="100%" stopColor="#4A2D09" />
          </linearGradient>
          <linearGradient id="bdPumpBlack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="50%" stopColor="#3C3C3C" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>
          <filter id="bdShadow" x="-10%" y="-5%" width="120%" height="115%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#182A1D" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="100" cy="285" rx="55" ry="8" fill="#14261B" fillOpacity="0.18" />

        {/* Dispenser Pump Top */}
        <path d="M60 28 C60 23 70 18 84 18 L126 18 C132 18 135 21 135 25 L135 34 C120 34 112 36 108 44 L92 44 L92 34 L60 31 Z" fill="url(#bdPumpBlack)" />
        <path d="M60 28 L48 33 C46 34 46 37 48 38 L60 38 Z" fill="#151515" />
        {/* Pump Collar */}
        <rect x="94" y="38" width="12" height="20" fill="#555" />
        <rect x="80" y="58" width="40" height="22" rx="2" fill="url(#bdPumpBlack)" />
        <line x1="80" y1="64" x2="120" y2="64" stroke="#555" strokeWidth="0.8" />
        <line x1="80" y1="70" x2="120" y2="70" stroke="#555" strokeWidth="0.8" />

        {/* Bottle Neck & Shoulder */}
        <rect x="85" y="80" width="30" height="15" fill="url(#bdAmberGlass)" />
        <path
          d="M85 92 C62 98 46 116 46 138 L46 268 C46 276 54 282 65 282 L135 282 C146 282 154 276 154 268 L154 138 C154 116 138 98 115 92 Z"
          fill="url(#bdAmberGlass)"
          filter="url(#bdShadow)"
        />

        {/* Realistic Glass Specular Reflections */}
        <rect x="52" y="136" width="6" height="136" rx="2" fill="#FFFFFF" fillOpacity="0.22" />
        <rect x="62" y="140" width="2" height="128" fill="#FFFFFF" fillOpacity="0.12" />
        <rect x="144" y="136" width="4" height="136" rx="1.5" fill="#FFFFFF" fillOpacity="0.1" />

        {/* Authentic Cocoon Parchment Label */}
        <rect x="54" y="132" width="92" height="136" rx="2" fill="#FAF7F0" />
        <rect x="58" y="136" width="84" height="128" rx="1" stroke="#DCD3C1" strokeWidth="0.8" fill="none" />

        {/* Official Woman Logo Silhouette on Bottle Label */}
        <g transform="translate(93, 142) scale(0.24)">
          <path d="M32 2C17 2 5 15 5 32C5 52 19 68 32 72C45 68 59 52 59 32C59 15 47 2 32 2Z" stroke="#162B20" strokeWidth="2.5" fill="none" />
          <path d="M32 16L18 27.5C18 27.5 25 25.5 32 25.5C39 25.5 46 27.5 46 27.5L32 16Z" fill="#162B20" />
          <path d="M31 27.5C33.5 27.5 35 29 35 31C35 33 33.5 34.5 31.5 34.8L31.8 38C30.5 38 29.5 37 29.5 35.5L29.2 32.5C28.5 31.5 28.8 29 31 27.5Z" fill="#162B20" />
          <path d="M28.5 39.5C25.5 42 23 46 23.5 50L28.5 63C30 63.5 33 63.8 35 63.8C35.5 61 35 55 35 52C36.5 50.5 37.5 48 37 45L28.5 39.5Z" fill="#162B20" />
        </g>

        {/* Cocoon Typographic Labeling */}
        <text x="100" y="167" textAnchor="middle" fill="#17271F" fontSize="10.5" fontWeight="900" fontFamily="serif" letterSpacing="0.22em">COCOON</text>
        <text x="100" y="174" textAnchor="middle" fill="#5F7065" fontSize="4.8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.18em">ORIGINAL VIET NAM</text>
        
        {/* Dividing Hairline */}
        <line x1="68" y1="179" x2="132" y2="179" stroke="#C08738" strokeWidth="0.8" />

        {/* Product Name on Label */}
        <text x="100" y="191" textAnchor="middle" fill="#192F23" fontSize="8" fontWeight="800" fontFamily="sans-serif">NƯỚC TẨY TRANG</text>
        <text x="100" y="202" textAnchor="middle" fill="#2E5A40" fontSize="9" fontWeight="900" fontFamily="serif">BÍ ĐAO</text>
        <text x="100" y="211" textAnchor="middle" fill="#6A7A70" fontSize="5.2" fontStyle="italic" fontFamily="serif">Winter melon micellar water</text>

        {/* Plant active claims */}
        <text x="100" y="222" textAnchor="middle" fill="#3D5044" fontSize="4.6" fontFamily="sans-serif">Chiết xuất bí đao · Rau má · Tràm trà</text>
        <text x="100" y="230" textAnchor="middle" fill="#3D5044" fontSize="4.6" fontFamily="sans-serif">Làm sạch sâu & Giảm bóng nhờn</text>

        <rect x="74" y="237" width="52" height="10" rx="1.5" fill="#234A35" />
        <text x="100" y="244.5" textAnchor="middle" fill="#FFFFFF" fontSize="4.8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.08em">100% THUẦN CHAY</text>

        <text x="100" y="258" textAnchor="middle" fill="#1C382A" fontSize="6.8" fontWeight="800" fontFamily="sans-serif">
          {capacity || '500 ml e 16.9 fl.oz'}
        </text>
      </svg>
    );
  }

  // 2. Cà phê Đắk Lắk làm sạch da chết cơ thể 200ml / 600ml (Signature amber wide tub/jar with dark ribbed lid)
  if (type === 'coffee-body') {
    return (
      <svg viewBox="0 0 200 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cfJarAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C98135" />
            <stop offset="30%" stopColor="#9C5A1D" />
            <stop offset="75%" stopColor="#63370F" />
            <stop offset="100%" stopColor="#3B1E05" />
          </linearGradient>
          <linearGradient id="cfLidDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#251D18" />
            <stop offset="50%" stopColor="#43362E" />
            <stop offset="100%" stopColor="#1B1511" />
          </linearGradient>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="100" cy="225" rx="72" ry="10" fill="#1E140C" fillOpacity="0.22" />

        {/* Wide Ribbed Screw Cap */}
        <rect x="25" y="44" width="150" height="34" rx="5" fill="url(#cfLidDark)" />
        {/* Ribbed lines on cap */}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={i} x1={33 + i * 7.6} y1="46" x2={33 + i * 7.6} y2="76" stroke="#524339" strokeWidth="1" />
        ))}
        <rect x="30" y="74" width="140" height="6" fill="#19130F" />

        {/* Heavy Amber Glass / Pet Jar Body */}
        <path
          d="M28 80 C26 95 24 165 24 182 C24 198 38 212 56 214 L144 214 C162 212 176 198 176 182 C176 165 174 95 172 80 Z"
          fill="url(#cfJarAmber)"
        />

        {/* Glass specular highlights */}
        <path d="M34 86 L34 190 C34 198 40 205 48 206 L54 206 L54 86 Z" fill="#FFFFFF" fillOpacity="0.18" />
        <rect x="160" y="86" width="5" height="110" rx="2" fill="#FFFFFF" fillOpacity="0.1" />

        {/* Warm Craft Paper Label wrapping around the jar */}
        <rect x="36" y="96" width="128" height="98" rx="2" fill="#FAF6EE" />
        <rect x="40" y="100" width="120" height="90" rx="1" stroke="#DFCFAF" strokeWidth="0.8" fill="none" />

        {/* Cocoon Logo & Text */}
        <g transform="translate(93, 105) scale(0.22)">
          <path d="M32 2C17 2 5 15 5 32C5 52 19 68 32 72C45 68 59 52 59 32C59 15 47 2 32 2Z" stroke="#22160E" strokeWidth="2.5" fill="none" />
          <path d="M32 16L18 27.5C18 27.5 25 25.5 32 25.5C39 25.5 46 27.5 46 27.5L32 16Z" fill="#22160E" />
          <path d="M31 27.5C33.5 27.5 35 29 35 31C35 33 33.5 34.5 31.5 34.8L31.8 38L29.2 32.5Z" fill="#22160E" />
          <path d="M28.5 39.5C25.5 42 23 46 23.5 50L28.5 63C30 63.5 33 63.8 35 63.8L35 52L28.5 39.5Z" fill="#22160E" />
        </g>
        <text x="100" y="128" textAnchor="middle" fill="#22160E" fontSize="10" fontWeight="900" fontFamily="serif" letterSpacing="0.2em">COCOON</text>

        <line x1="56" y1="133" x2="144" y2="133" stroke="#9C5A1D" strokeWidth="0.8" />

        <text x="100" y="145" textAnchor="middle" fill="#3D2614" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">CÀ PHÊ ĐẮK LẮK</text>
        <text x="100" y="154" textAnchor="middle" fill="#5E381A" fontSize="7" fontWeight="700" fontFamily="sans-serif">LÀM SẠCH DA CHẾT CƠ THỂ</text>
        <text x="100" y="163" textAnchor="middle" fill="#755238" fontSize="5.2" fontStyle="italic" fontFamily="serif">Dak Lak coffee body polish</text>

        <text x="100" y="174" textAnchor="middle" fill="#4A3423" fontSize="4.6" fontFamily="sans-serif">Hạt cà phê Đắk Lắk nguyên chất · Bơ ca cao Tiền Giang</text>

        <rect x="76" y="179" width="48" height="7" rx="1.5" fill="#4B301A" />
        <text x="100" y="184.5" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="bold">200 ml e 6.8 fl.oz</text>
      </svg>
    );
  }

  // 3. Nước dưỡng tóc tinh dầu bưởi Cocoon 140ml (Signature tall amber spray bottle with fine botanical mist)
  if (type === 'pomelo-hair') {
    return (
      <svg viewBox="0 0 180 290" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pmTallAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DF9F48" />
            <stop offset="30%" stopColor="#B67823" />
            <stop offset="70%" stopColor="#804F11" />
            <stop offset="100%" stopColor="#4A2D07" />
          </linearGradient>
          <linearGradient id="pmSprayBlack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#222824" />
            <stop offset="50%" stopColor="#3E4C44" />
            <stop offset="100%" stopColor="#18201B" />
          </linearGradient>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="90" cy="275" rx="45" ry="7" fill="#1C2E1F" fillOpacity="0.2" />

        {/* Transparent Overcap */}
        <rect x="70" y="16" width="40" height="42" rx="4" fill="#FFFFFF" fillOpacity="0.28" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
        
        {/* Fine Mist Spray Head */}
        <rect x="75" y="24" width="30" height="30" rx="2" fill="url(#pmSprayBlack)" />
        <rect x="99" y="32" width="8" height="5" rx="1" fill="#111" />
        {/* Threaded Collar */}
        <rect x="68" y="58" width="44" height="16" rx="2" fill="url(#pmSprayBlack)" />
        <line x1="68" y1="64" x2="112" y2="64" stroke="#4B5E53" strokeWidth="0.8" />
        <line x1="68" y1="70" x2="112" y2="70" stroke="#4B5E53" strokeWidth="0.8" />

        {/* Slender Amber Bottle Body */}
        <path
          d="M76 74 C60 78 50 92 50 110 L50 255 C50 263 56 270 66 270 L114 270 C124 270 130 263 130 255 L130 110 C130 92 120 78 104 74 Z"
          fill="url(#pmTallAmber)"
        />

        {/* Specular reflections */}
        <rect x="56" y="110" width="5" height="145" rx="2" fill="#FFFFFF" fillOpacity="0.22" />
        <rect x="120" y="110" width="4" height="145" rx="1.5" fill="#FFFFFF" fillOpacity="0.1" />

        {/* Label */}
        <rect x="56" y="112" width="68" height="138" rx="2" fill="#FAF7F0" />
        <rect x="59" y="115" width="62" height="132" rx="1" stroke="#CFDCBC" strokeWidth="0.8" fill="none" />

        {/* Woman Logo */}
        <g transform="translate(84, 120) scale(0.2)">
          <path d="M32 2C17 2 5 15 5 32C5 52 19 68 32 72C45 68 59 52 59 32C59 15 47 2 32 2Z" stroke="#1D3022" strokeWidth="2.5" fill="none" />
          <path d="M32 16L18 27.5L32 25.5L46 27.5L32 16Z" fill="#1D3022" />
          <path d="M28.5 39.5C25.5 42 23 46 23.5 50L28.5 63C30 63.5 33 63.8 35 63.8L35 52L28.5 39.5Z" fill="#1D3022" />
        </g>
        <text x="90" y="144" textAnchor="middle" fill="#17271F" fontSize="9" fontWeight="900" fontFamily="serif" letterSpacing="0.2em">COCOON</text>

        <line x1="66" y1="149" x2="114" y2="149" stroke="#486D36" strokeWidth="0.8" />

        <text x="90" y="160" textAnchor="middle" fill="#2E4F20" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">NƯỚC DƯỠNG TÓC</text>
        <text x="90" y="171" textAnchor="middle" fill="#3D6829" fontSize="8.5" fontWeight="900" fontFamily="serif">TINH DẦU BƯỞI</text>
        <text x="90" y="179" textAnchor="middle" fill="#6A8068" fontSize="4.8" fontStyle="italic" fontFamily="serif">Pomelo hair tonic</text>

        <text x="90" y="190" textAnchor="middle" fill="#384E34" fontSize="4.2" fontFamily="sans-serif">Tinh dầu bưởi nguyên chất</text>
        <text x="90" y="197" textAnchor="middle" fill="#384E34" fontSize="4.2" fontFamily="sans-serif">Xylishine™ · Vitamin B5</text>
        <text x="90" y="206" textAnchor="middle" fill="#2A481B" fontSize="4.5" fontWeight="bold">Giảm gãy rụng & Mọc tóc</text>

        <rect x="70" y="226" width="40" height="7" rx="1.5" fill="#345B25" />
        <text x="90" y="231.5" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="bold">140 ml e 4.7 fl.oz</text>
      </svg>
    );
  }

  // 4. Mặt nạ nghệ Hưng Yên 100ml (Golden turmeric clay jar)
  if (type === 'turmeric-mask') {
    return (
      <svg viewBox="0 0 180 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tmJarAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8923A" />
            <stop offset="40%" stopColor="#AA641D" />
            <stop offset="80%" stopColor="#6C390B" />
            <stop offset="100%" stopColor="#3C1C03" />
          </linearGradient>
          <linearGradient id="tmLid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A2016" />
            <stop offset="50%" stopColor="#4A3A2C" />
            <stop offset="100%" stopColor="#1E160E" />
          </linearGradient>
        </defs>

        <ellipse cx="90" cy="205" rx="60" ry="8" fill="#281A0E" fillOpacity="0.2" />

        {/* Jar Lid */}
        <rect x="30" y="45" width="120" height="30" rx="4" fill="url(#tmLid)" />
        <rect x="34" y="71" width="112" height="6" fill="#1A120B" />

        {/* Jar body */}
        <path
          d="M32 76 C30 90 28 150 28 165 C28 180 40 194 56 195 L124 195 C140 194 152 180 152 165 C152 150 150 90 148 76 Z"
          fill="url(#tmJarAmber)"
        />

        <path d="M38 82 L38 172 C38 178 44 185 52 186 L56 186 L56 82 Z" fill="#FFFFFF" fillOpacity="0.18" />

        {/* Label */}
        <rect x="40" y="90" width="100" height="92" rx="2" fill="#FAF6EC" />
        <rect x="43" y="93" width="94" height="86" rx="1" stroke="#E6D3A3" strokeWidth="0.8" fill="none" />

        <text x="90" y="112" textAnchor="middle" fill="#22160E" fontSize="9" fontWeight="900" fontFamily="serif" letterSpacing="0.2em">COCOON</text>
        <line x1="56" y1="117" x2="124" y2="117" stroke="#A86A1E" strokeWidth="0.8" />

        <text x="90" y="129" textAnchor="middle" fill="#6B3E0B" fontSize="8" fontWeight="900" fontFamily="sans-serif">MẶT NẠ NGHỆ</text>
        <text x="90" y="139" textAnchor="middle" fill="#8F510A" fontSize="8.5" fontWeight="900" fontFamily="serif">HƯNG YÊN</text>
        <text x="90" y="147" textAnchor="middle" fill="#755B39" fontSize="4.6" fontStyle="italic" fontFamily="serif">Hung Yen turmeric mask</text>

        <text x="90" y="157" textAnchor="middle" fill="#5E4324" fontSize="4.2" fontFamily="sans-serif">Chiết xuất nghệ giàu Curcuminoid</text>
        <text x="90" y="164" textAnchor="middle" fill="#5E4324" fontSize="4.2" fontFamily="sans-serif">Sáng da & Mờ thâm mụn</text>

        <rect x="70" y="169" width="40" height="6.5" rx="1.5" fill="#7E470B" />
        <text x="90" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="4.2" fontWeight="bold">100 ml e 3.4 fl.oz</text>
      </svg>
    );
  }

  // 5. Gel rửa mặt Hoa sen Hậu Giang 140ml / 310ml (Translucent calming green/amber apothecary pump)
  if (type === 'sen-cleanser') {
    return (
      <svg viewBox="0 0 180 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="senAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5E836D" />
            <stop offset="35%" stopColor="#3E624E" />
            <stop offset="75%" stopColor="#254232" />
            <stop offset="100%" stopColor="#152B1E" />
          </linearGradient>
        </defs>
        <ellipse cx="90" cy="265" rx="46" ry="7" fill="#14261B" fillOpacity="0.2" />

        {/* Pump head */}
        <path d="M56 26 C56 22 66 18 78 18 L114 18 C118 18 120 20 120 24 L120 32 L86 32 L86 26 Z" fill="#222" />
        <rect x="74" y="44" width="32" height="18" rx="2" fill="#222" />
        <rect x="78" y="62" width="24" height="12" fill="url(#senAmber)" />

        <path
          d="M78 72 C62 76 50 88 50 106 L50 248 C50 256 56 262 66 262 L114 262 C124 262 130 256 130 248 L130 106 C130 88 118 76 102 72 Z"
          fill="url(#senAmber)"
        />

        <rect x="56" y="106" width="5" height="140" rx="2" fill="#FFFFFF" fillOpacity="0.22" />

        {/* Label */}
        <rect x="56" y="110" width="68" height="132" rx="2" fill="#FAF8F2" />
        <text x="90" y="136" textAnchor="middle" fill="#17271F" fontSize="9" fontWeight="900" fontFamily="serif" letterSpacing="0.2em">COCOON</text>
        <line x1="66" y1="141" x2="114" y2="141" stroke="#3A634B" strokeWidth="0.8" />
        <text x="90" y="153" textAnchor="middle" fill="#1B3E29" fontSize="7.2" fontWeight="800">GEL RỬA MẶT</text>
        <text x="90" y="164" textAnchor="middle" fill="#2A593C" fontSize="8.5" fontWeight="900" fontFamily="serif">HOA SEN</text>
        <text x="90" y="172" textAnchor="middle" fill="#6A8072" fontSize="4.6" fontStyle="italic">Hau Giang lotus cleanser</text>
        <text x="90" y="183" textAnchor="middle" fill="#3D5B46" fontSize="4.2">Hoa sen · Madecassoside · B5</text>
        <text x="90" y="190" textAnchor="middle" fill="#3D5B46" fontSize="4.2">Dịu nhẹ cho da nhạy cảm</text>

        <rect x="70" y="218" width="40" height="7" rx="1.5" fill="#2A553B" />
        <text x="90" y="223.5" textAnchor="middle" fill="#FFFFFF" fontSize="4.5" fontWeight="bold">140 ml e 4.7 fl.oz</text>
      </svg>
    );
  }

  // 6. Son dưỡng dầu dừa Bến Tre 5g (Authentic slim natural ivory/green tube)
  if (type === 'coconut-lip') {
    return (
      <svg viewBox="0 0 120 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="188" rx="26" ry="5" fill="#202A22" fillOpacity="0.18" />
        {/* Cap */}
        <rect x="42" y="30" width="36" height="70" rx="3" fill="#F4EFE6" stroke="#DDD2BF" strokeWidth="1" />
        <rect x="44" y="32" width="3" height="66" fill="#FFF" fillOpacity="0.6" />
        {/* Cocoon word on cap */}
        <text x="60" y="70" textAnchor="middle" fill="#234A35" fontSize="6.5" fontWeight="900" fontFamily="serif" letterSpacing="0.16em">COCOON</text>

        {/* Base turn ring */}
        <rect x="42" y="100" width="36" height="8" fill="#C08738" />
        {/* Base */}
        <rect x="42" y="108" width="36" height="74" rx="2" fill="#234A35" />
        <rect x="44" y="110" width="3" height="70" fill="#FFF" fillOpacity="0.16" />

        <text x="60" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="bold">DẦU DỪA</text>
        <text x="60" y="148" textAnchor="middle" fill="#F2E0BD" fontSize="5" fontWeight="bold">BẾN TRE</text>
        <text x="60" y="166" textAnchor="middle" fill="#DDECE1" fontSize="4.5">5 g e 0.17 oz</text>
      </svg>
    );
  }

  // 7. Tẩy da chết môi cà phê Đắk Lắk 5g (Mini warm brown coffee scrub stick)
  if (type === 'coffee-lip') {
    return (
      <svg viewBox="0 0 120 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="188" rx="26" ry="5" fill="#20150D" fillOpacity="0.18" />
        <rect x="42" y="30" width="36" height="70" rx="3" fill="#F3EBE1" stroke="#D8C3B0" strokeWidth="1" />
        <text x="60" y="70" textAnchor="middle" fill="#482E19" fontSize="6.5" fontWeight="900" fontFamily="serif" letterSpacing="0.16em">COCOON</text>
        <rect x="42" y="100" width="36" height="8" fill="#8C5828" />
        <rect x="42" y="108" width="36" height="74" rx="2" fill="#412815" />
        <text x="60" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="5.2" fontWeight="bold">TẨY DA CHẾT MÔI</text>
        <text x="60" y="146" textAnchor="middle" fill="#E6C8A6" fontSize="5" fontWeight="bold">CÀ PHÊ ĐẮK LẮK</text>
        <text x="60" y="166" textAnchor="middle" fill="#C5B09D" fontSize="4.5">5 g e 0.17 oz</text>
      </svg>
    );
  }

  // 8. Túi Refill Tẩy da chết cơ thể Cà phê Đắk Lắk 600ml (Official Eco Pouch)
  return (
    <svg viewBox="0 0 180 270" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cfPouchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A2F1B" />
          <stop offset="60%" stopColor="#301E11" />
          <stop offset="100%" stopColor="#1B1009" />
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="256" rx="55" ry="8" fill="#1C1008" fillOpacity="0.22" />

      {/* Spout on top-right */}
      <rect x="110" y="18" width="22" height="24" rx="3" fill="#D4AF37" />
      <rect x="108" y="36" width="26" height="7" fill="#A88B27" />

      {/* Standup Pouch Contour */}
      <path
        d="M85 36 L44 56 C34 62 30 74 32 86 L36 226 C37 240 48 252 64 254 L116 254 C132 252 143 240 144 226 L148 86 C150 74 146 62 136 56 L110 36 Z"
        fill="url(#cfPouchGrad)"
      />

      {/* Foil highlight */}
      <path d="M46 64 L46 230 L58 242 L58 60 Z" fill="#FFF" fillOpacity="0.09" />

      {/* Official Refill Emblem */}
      <rect x="48" y="74" width="84" height="20" rx="3" fill="#E6C8A6" />
      <text x="90" y="87" textAnchor="middle" fill="#2E1A0E" fontSize="7.5" fontWeight="900" letterSpacing="0.08em">REFILL TÚI TIẾT KIỆM</text>
      <text x="90" y="104" textAnchor="middle" fill="#D2B596" fontSize="5.8" fontWeight="bold">GIẢM 86% LƯỢNG RÁC THẢI NHỰA</text>

      {/* Label section */}
      <rect x="46" y="116" width="88" height="110" rx="2" fill="#FAF6EE" />
      <text x="90" y="136" textAnchor="middle" fill="#22160E" fontSize="9" fontWeight="900" fontFamily="serif" letterSpacing="0.2em">COCOON</text>
      <line x1="58" y1="141" x2="122" y2="141" stroke="#8C5828" strokeWidth="0.8" />
      <text x="90" y="154" textAnchor="middle" fill="#3D2614" fontSize="7.8" fontWeight="900">CÀ PHÊ ĐẮK LẮK</text>
      <text x="90" y="164" textAnchor="middle" fill="#6B4120" fontSize="7" fontWeight="bold">LÀM SẠCH DA CHẾT CƠ THỂ</text>
      <text x="90" y="176" textAnchor="middle" fill="#523924" fontSize="4.6">Dung tích lớn nạp lại hũ cũ</text>
      <rect x="66" y="196" width="48" height="8" rx="1.5" fill="#3D2614" />
      <text x="90" y="202" textAnchor="middle" fill="#FFF" fontSize="5" fontWeight="bold">600 ml SUPERSIZE</text>
    </svg>
  );
};
