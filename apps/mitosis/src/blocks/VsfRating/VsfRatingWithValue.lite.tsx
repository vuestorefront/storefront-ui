import { Show, useStore } from '@builder.io/mitosis';

export const VsfRatingWithValueVariants = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
});

type VsfRatingWithValueVariantsKeys = keyof typeof VsfRatingWithValueVariants;

export interface VsfRatingWithValueProps {
  value?: number;
  max?: number;
  reviews?: number;
  size?: VsfRatingWithValueVariantsKeys;
}

const DEFAULT_VALUES = {
  value: 0,
  max: 5,
  reviews: 0,
  size: VsfRatingWithValueVariants.base,
};

export default function VsfRatingWithValue(props: VsfRatingWithValueProps) {
  const state = useStore({
    get useValueProp() {
      return Number(props.value) || DEFAULT_VALUES.value;
    },
    get useMaxProp() {
      return Number(props.max) || DEFAULT_VALUES.max;
    },
    get useReviewsProp() {
      return Number(props.reviews) || DEFAULT_VALUES.reviews;
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size;
    },
    get ratingValue() {
      return Math.min(state.useValueProp, state.useMaxProp);
    },
    get sizeClass() {
      return {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        base: 'h-6 w-6',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '2xl': 'h-20 w-20',
      }[state.useSizeProp];
    },
    get textClass() {
      return {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-lg',
        '2xl': 'text-lg',
      }[state.useSizeProp];
    },
  });

  return (
    <>
      <div
        class={`flex items-center h-6 font-normal pointer-events-none fill-warning-500 font-body ${state.textClass}`}
        role="img"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class={state.sizeClass}>
          <path d="M12.0072 17.6975L16.1572 20.2075C16.9172 20.6675 17.8472 19.9875 17.6472 19.1275L16.5472 14.4075L20.2172 11.2275C20.8872 10.6475 20.5272 9.5475 19.6472 9.4775L14.8172 9.0675L12.9272 4.6075C12.5872 3.7975 11.4272 3.7975 11.0872 4.6075L9.19715 9.0575L4.36715 9.4675C3.48715 9.5375 3.12715 10.6375 3.79715 11.2175L7.46715 14.3975L6.36715 19.1175C6.16715 19.9775 7.09715 20.6575 7.85715 20.1975L12.0072 17.6975Z" />
        </svg>
        <span class="mx-1 font-medium">{state.ratingValue}</span>
        <Show when={state.useReviewsProp >= 0}>
          <span class="text-gray-500">({state.useReviewsProp})</span>
        </Show>
      </div>
    </>
  );
}
