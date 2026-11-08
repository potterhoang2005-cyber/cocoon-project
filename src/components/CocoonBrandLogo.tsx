import React from 'react';

/**
 * Official Brand Mark for The Cocoon Original Viet Nam
 * Using the exact logo graphic uploaded by the user with the iconic Vietnamese woman
 * in conical hat (nón lá) and graceful hand gesture, paired with authentic typography.
 */
export const CocoonBrandLogo: React.FC<{
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const primaryFill = isGold ? '#D4AF37' : isLight ? '#FFFFFF' : '#17271F';
  const secondaryFill = isGold ? '#F3D59D' : isLight ? '#C5D6C9' : '#5A6F62';
  const sealColor = isGold ? '#E8C568' : isLight ? '#E5D6B8' : '#C08738';

  const dimensions = {
    sm: { imgSize: 34, brandText: 'text-xl', subText: 'text-[9px]' },
    md: { imgSize: 46, brandText: 'text-2xl sm:text-[27px]', subText: 'text-[10px]' },
    lg: { imgSize: 62, brandText: 'text-3xl sm:text-4xl', subText: 'text-xs' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem: Real uploaded graphic of the Vietnamese woman in conical hat */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/assets/aistudio/images__5__5274f689.jfif"
          alt="Cocoon Vietnam Brand Logo"
          className="rounded-full object-cover shadow-xs border border-[#C08738]/30 transition-transform duration-300 group-hover:scale-105"
          style={{
            width: dimensions.imgSize,
            height: dimensions.imgSize
          }}
        />
      </div>

      {/* Brand Typographic Lockup */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif font-black tracking-[0.2em] leading-none uppercase ${dimensions.brandText}`}
            style={{ color: primaryFill }}
          >
            COCOON
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`font-sans tracking-[0.24em] font-bold uppercase whitespace-nowrap leading-none ${dimensions.subText}`}
              style={{ color: secondaryFill }}
            >
              ORIGINAL VIET NAM
            </span>
            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: sealColor }} />
            <span
              className={`font-sans tracking-wider font-semibold whitespace-nowrap text-[9px] hidden sm:inline leading-none`}
              style={{ color: secondaryFill }}
            >
              100% THUẦN CHAY
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
