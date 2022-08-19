import { Show, useStore } from '@builder.io/mitosis';

export const VsfButtonSizes = Object.freeze({
    'sm': 'sm',
    'base': 'base',
    'lg': 'lg',
});

type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;

export const VsfButtonVariants = Object.freeze({
  'primary': 'primary',
  'secondary': 'secondary',
  'tertiary': 'tertiary',
  'destroy-primary': 'destroy-primary',
  'destroy-secondary': 'destroy-secondary',
  'destroy-tertiary': 'destroy-tertiary'
});

type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;
export interface VsfButtonProps {
  children: Element | Element[] | string;
  link?: string;
  size?: VsfButtonSizesKeys;
  variant?: VsfButtonVariantsKeys;
  disabled?: boolean;
}

const DEFAULT_VALUES = {
  children: 'Button',
  variant: VsfButtonVariants.primary,
  size: VsfButtonSizes.base,
  disabled: false,
};

export default function VsfButton(props: VsfButtonProps) {
  const state = useStore({
    get useDisabled() {
        return props.disabled || DEFAULT_VALUES.disabled;
    },
    get buttonSize() {
      switch (props.size) {
          case VsfButtonSizes.sm:
              return 'leading-5 px-3 py-[6px] text-sm';
          case VsfButtonSizes.lg:
              return 'px-6 py-3';
          default:
              return 'px-4 py-2';
      }
    },
    get buttonVariants() {
      switch (props.variant) {
          case VsfButtonVariants.secondary:
              return 'font-medium uppercase bg-white border border-gray-200 hover:border-primary-300 active:border-primary-400 disabled:border-0 hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 text-primary-500 hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none';
          case VsfButtonVariants.tertiary:
              return 'font-normal bg-transparent text-primary-500 hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50';
          case VsfButtonVariants['destroy-primary']:
            return 'text-base font-medium text-white uppercase bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none';
          case VsfButtonVariants['destroy-secondary']:
            return 'text-base font-medium uppercase bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 disabled:bg-gray-200 text-rose-600 hover:text-rose-600 active:text-rose-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none';
          case VsfButtonVariants['destroy-tertiary']:
            return 'text-base font-medium bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50';
          default:
              return 'font-medium text-white uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;';
      }
    },
    get buttonClasses() {
      return `inline-flex items-center justify-center border rounded-md cursor-pointer font-body disabled:cursor-not-allowed outline-violet ${state.buttonVariants} ${state.buttonSize}`
    }
  });
  return (
    <>
      <Show
        when={props.link}
        else={
          <button className={state.buttonClasses} disabled={props.disabled}>
            {props.children}
          </button>
        }
      >
        <a role="button" href={props.link} className={state.buttonClasses}>
          {props.children}
        </a>
      </Show>
    </>
  );
}

