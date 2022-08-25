import { Show, useStore } from '@builder.io/mitosis';

export const VsfSpinnerTypes = Object.freeze({
  'base': 'base',
  'linear': 'linear'
});
type VsfSpinnerTypesKeys = keyof typeof VsfSpinnerTypes;

export const VsfSpinnerVariants = Object.freeze({
  'sm': 'sm',
  'base': 'base',
  'lg': 'lg',
  'xl': 'xl',
  '2xl': '2xl',
  '3xl': '3xl'
});
type VsfSpinnerSizesKeys = keyof typeof VsfSpinnerVariants;

export interface VsfSpinnerProps {
  type?: VsfSpinnerTypesKeys,
  variant?: VsfSpinnerSizesKeys
}

const DEFAULT_VALUES = {
  type: VsfSpinnerTypes.base,
  variant: VsfSpinnerVariants.base
};

export default function VsfSpinner(props: VsfSpinnerProps) {
  const state = useStore({
    get useTypeProp() {
      return props.type ?? DEFAULT_VALUES.type
    },
    get useSizeProp() {
      return props.variant ?? DEFAULT_VALUES.variant
    },
    get sizeClasses() {
      switch (state.useSizeProp) {
        case VsfSpinnerVariants.sm:
          return 'w-4 h-4'
        case VsfSpinnerVariants.lg:
          return 'w-10 h-10'
        case VsfSpinnerVariants.xl:
          return 'w-14 h-14'
        case VsfSpinnerVariants["2xl"]:
          return 'w-24 h-24'
        case VsfSpinnerVariants["3xl"]:
          return 'w-48 h-48'
        default:
          return 'w-6 h-6'
      }
    },
    get sizeClassesWithBorder() {
      switch (state.useSizeProp) {
        case VsfSpinnerVariants.sm:
          return `${state.sizeClasses} border-2`
        case VsfSpinnerVariants.lg:
          return `${state.sizeClasses} border-2`
        case VsfSpinnerVariants.xl:
          return `${state.sizeClasses} border-[3px]`
        case VsfSpinnerVariants["2xl"]:
          return `${state.sizeClasses} border-4`
        case VsfSpinnerVariants["3xl"]:
          return `${state.sizeClasses} border-8`
        default:
          return `${state.sizeClasses} border-2`
      }
    }
  });
  
  return (
    <>
      <Show
        when={state.useTypeProp === VsfSpinnerTypes.base}
        else={
          <div class="relative h-1 overflow-hidden">
            <div
              class="sr-only"
              role="alert"
            >
              loading...
            </div>
            <div
              class="absolute w-full h-1 bg-gray-200"
              aria-hidden="true"
            />
            <div
              class="absolute w-2.5 h-1 animate-linear-loader bg-primary-600"
              aria-hidden="true"
            />
          </div>
        }
      >
        <div
          class={`relative ${state.sizeClasses}`}
          role="progressbar"
        >
          <div
            class="sr-only"
            role="alert"
          >
            loading
          </div>
          <div
            class={`absolute bg-transparent border-gray-200 rounded-full ${state.sizeClassesWithBorder}`}
            aria-hidden="true"
          />
          <div
            class={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600 ${state.sizeClassesWithBorder}`}
            aria-hidden="true"
          />
          <div
            class={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent ${state.sizeClassesWithBorder}`}
            aria-hidden="true"
          />
          <div
            class={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent ${state.sizeClassesWithBorder}`}
            aria-hidden="true"
          />
          <div
            class={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent ${state.sizeClassesWithBorder}`}
            aria-hidden="true"
          />
        </div>
      </Show>
    </>
  )
}
