import { useStore } from '@builder.io/mitosis';

export const VsfCounterVariants = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
});
type VsfCounterVariantsKeys = keyof typeof VsfCounterVariants;

export interface VsfCounterProps {
  size?: VsfCounterVariantsKeys;
  pill?: boolean;
  className?: string;
  children?: any;
}

export default function VsfCounter(props: VsfCounterProps) {
  const state = useStore({
    get fontSizeClass() {
      switch (props.size) {
        case VsfCounterVariants.xs:
          return 'text-3xs';
        case VsfCounterVariants.sm:
          return 'text-2xs';
        case VsfCounterVariants.lg:
          return 'text-sm';
        case VsfCounterVariants.xl:
          return 'text-base';
        case VsfCounterVariants['2xl']:
          return 'text-lg';
        default:
          return 'text-xs';
      }
    },
    get pillSpacingClass() {
      if (!props.pill) return '';
      switch (props.size) {
        case VsfCounterVariants.xs:
        case VsfCounterVariants.sm:
          return 'px-1';
        case VsfCounterVariants.lg:
          return 'px-2.5';
        case VsfCounterVariants.xl:
        case VsfCounterVariants['2xl']:
          return 'px-3';
        default:
          return 'px-2';
      }
    },
    get fontWeightClass() {
      if (props.pill) return 'font-medium';
      switch (props.size) {
        case VsfCounterVariants.xs:
        case VsfCounterVariants.sm:
          return 'font-medium';
        default:
          return 'font-normal';
      }
    },
    get pillClass() {
      return props.pill
        ? `${props.size === VsfCounterVariants.xs || props.size === VsfCounterVariants.sm ? 'ring-0' : 'ring-1 ring-gray-200 ring-inset'} py-0.5 rounded-full text-gray-900`
        : `before:content-['('] after:content-[')'] text-gray-500`;
    },
  });

  return (
    <div
      class={`inline-flex items-center font-body ${state.fontSizeClass} ${state.pillClass} ${state.pillSpacingClass} ${state.fontWeightClass} ${props.className || ''}`}
    >
      {props.children}
    </div>
  );
}
