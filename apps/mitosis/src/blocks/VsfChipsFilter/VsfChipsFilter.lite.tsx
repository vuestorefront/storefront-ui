import { useStore, Show, Slot } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export const VsfChipsFilterVariants = Object.freeze({
  sm: 'sm',
  base: 'base',
  lg: 'lg',
});
type VsfChipsFilterVariantsKeys = keyof typeof VsfChipsFilterVariants;

export interface VsfChipsFilterProps {
  size?: VsfChipsFilterVariantsKeys;
  type?: 'checkbox' | 'radio';
  slotThumb?: any;
  label?: string;
  disabled?: boolean;
  noThumb?: boolean;
  onChange?: (...args: any[]) => void;
  value?: any;
}

export default function VsfChipsFilter(props: VsfChipsFilterProps) {
  const state = useStore({
    get useTypeProp() {
      return props.type === 'radio' ? 'radio' : 'checkbox';
    },
    get sizeClass() {
      switch (props.size) {
        case VsfChipsFilterVariants.sm:
          return 'size--sm';
        case VsfChipsFilterVariants.lg:
          return 'size--lg';
        default:
          return 'size--base';
      }
    },
    get chipClass(): string {
      return classStringFromArray([
        'chips-filter__wrapper chip transition duration-300 ease',
        'peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500',
        'peer-hover:bg-primary-100 peer-active:bg-primary-200',
        'peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50',
        'outline-offset-2 outline-violet-400 peer-focus:outline',
        props.disabled ? "chip--disabled" : '',
        state.sizeClass,
      ]);
    },
    get thumbClass(): string {
      return classStringFromArray([
        'chips-filter__thumb chip__left-icon',
        'rounded-full flex opacity-50',
        props.size === VsfChipsFilterVariants.sm ? 'h-5 w-5' : 'h-6 w-6',
      ]);
    },
    get vueProxyValue() {
      return {
        get: function () {
          return props.modelValue;
        },
        set: function (value) {
          state.$emit('update:modelValue', value);
        },
      };
    },
    onChangeHandler(event: InputEvent) {
      props.onChange && props.onChange(event);
    },
  });

  return (
    <>
      <label class="chips-filter inline-flex rounded-full relative">
        <input
          v-model="vueProxyValue"
          type={state.useTypeProp}
          class="peer appearance-none outline-none absolute"
          disabled={props.disabled}
          onChange={(e) => state.onChangeHandler(e)}
          value={props.value}
        />
        <div class={state.chipClass}>
          <Show when={props.slotThumb}>
            <div class={state.thumbClass}>{props.slotThumb}</div>
          </Show>
          <Show when={props.label}>
            <span class="chips-filter__label chip__content font-normal text-gray-900">{props.label}</span>
          </Show>
        </div>
      </label>
    </>
  );
}
