import { colors, radius } from '../lib/theme';

interface StickyButtonProps {
  label: string;
  onClick: () => void;
  price?: number;
  priceLabel?: string;
  disabled?: boolean;
}

export function StickyButton({ 
  label, 
  onClick, 
  price,
  priceLabel = 'Comprar ahora',
  disabled = false,
}: StickyButtonProps) {
  const isZero = !price || price === 0;
  const isDisabled = disabled || isZero;
  
  const displayText = !isZero
    ? `${price.toFixed(2).replace('.', ',')} € — ${priceLabel}` 
    : 'Select ticket';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-[16px] py-[12px] safe-area-pb bg-white border-t" style={{ borderColor: colors.border }}>
      <button
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        className="w-full h-[48px] flex items-center justify-center transition-all"
        style={{
          background: isDisabled ? colors.background : colors.primary,
          borderRadius: radius.full,
          border: 'none',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        <span className="text-[16px] font-semibold" style={{ color: isDisabled ? colors.textMuted : colors.white }}>
          {displayText}
        </span>
      </button>
    </div>
  );
}
