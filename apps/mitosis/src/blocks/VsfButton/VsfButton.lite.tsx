import { Show, useStore } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';
import { SlotType } from '../../functions/types';
import { validator } from '../../functions/propUtils';

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
  children?: SlotType;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  link?: string;
  size?: VsfButtonSizesKeys;
  variant?: VsfButtonVariantsKeys;
  isRoundedFull?: boolean;
  disabled?: boolean;
  classes?: string;
  onClick?: (e?: Event) => void;
  type?: "reset" | "button" | "submit",
  tile?: boolean;
  icon?: boolean;
  className?: string;
}

const DEFAULT_VALUES: Required<VsfButtonProps> = {
  children: 'Button',
  slotPrefix: '',
  slotSuffix: '',
  link: '',
  variant: VsfButtonVariants.primary,
  size: VsfButtonSizes.base,
  isRoundedFull: false,
  disabled: false,
  classes: '',
  onClick: () => {},
  type: "button",
  tile: false,
  icon: false,
  className: ''
};

export default function VsfButton(props: VsfButtonProps) {
  const state = useStore({
    get useSizeProp(): VsfButtonSizesKeys {
      return validator(
        Object.keys(VsfButtonSizes),
        props.size,
        DEFAULT_VALUES.size
      );
    },
    get useVariantProp(): VsfButtonVariantsKeys {
      return validator(
        Object.keys(VsfButtonVariants),
        props.variant,
        DEFAULT_VALUES.variant
      );
    },
    get buttonClasses() {
      return classStringFromArray(['inline-flex items-center justify-center cursor-pointer font-body disabled:cursor-not-allowed outline-violet-500 disabled:text-gray-500 disabled:opacity-50',
        state.useSizeProp === VsfButtonSizes.sm ? 'leading-5 p-1.5 text-sm' : state.useSizeProp === VsfButtonSizes.base ? 'p-2' : 'p-3',
        !props.icon && (state.useSizeProp === VsfButtonSizes.sm ? 'px-2': state.useSizeProp === VsfButtonSizes.base ? 'px-4' : 'px-6'),
        !props.tile && (props.isRoundedFull ? 'rounded-full' : 'rounded-md'),
        state.useVariantProp === VsfButtonVariants.tertiary || state.useVariantProp === VsfButtonVariants['destroy-tertiary'] ? 'font-normal bg-transparent disabled:bg-transparent' : 'font-medium uppercase shadow-base disabled:bg-gray-200 disabled:shadow-none',
        state.useVariantProp === VsfButtonVariants.primary && 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700',
        state.useVariantProp === VsfButtonVariants.secondary && 'bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700 ',
        state.useVariantProp === VsfButtonVariants.tertiary && 'bg-transparent text-primary-500 hover:bg-green-100 hover:text-primary-600 active:text-primary-700 active:bg-green-200',
        state.useVariantProp === VsfButtonVariants['destroy-primary'] && 'text-base text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 hover:shadow-medium',
        state.useVariantProp === VsfButtonVariants['destroy-secondary'] && 'text-base text-rose-600 bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 hover:text-rose-600 active:text-rose-700 hover:shadow-medium',
        state.useVariantProp === VsfButtonVariants['destroy-tertiary'] && 'text-base text-rose-600 hover:bg-rose-100 hover:text-rose-700 active:bg-rose-200 active:text-rose-800',
        props.classes || '',
        props.className || ''
      ]);
    },
  });
  
  return (
    <>
      <Show
        when={props.link}
        else={
          <button
            type={props.type}
            class={state.buttonClasses}
            disabled={props.disabled}
            onClick={(e) => props.onClick && props.onClick(e)}
          >
            <Show when={props.slotPrefix}>
              <span class="pr-2">{props.slotPrefix}</span>
            </Show>
            {props.children}
            <Show when={props.slotSuffix}>
              <span class="pl-2">{props.slotSuffix}</span>
            </Show>
          </button>
        }
      >
        <a
          role="button"
          href={props.link}
          class={state.buttonClasses}
        >
          <Show when={props.slotPrefix}>
            <span class="pr-2">{props.slotPrefix}</span>
          </Show>
          {props.children}
          <Show when={props.slotSuffix}>
            <span class="pl-2">{props.slotSuffix}</span>
          </Show>
        </a>
      </Show>
    </>
  );
}
