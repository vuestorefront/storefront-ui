import { useStore, Show } from '@builder.io/mitosis';
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
  thumbColor?: string;
}

export default function VsfChipsFilter(props: VsfChipsFilterProps) {
  const state = useStore({
    get useTypeProp() {
      return props.type === 'radio' ? 'radio' : 'checkbox';
    },
    get sizeClass() {
      switch (props.size) {
        case VsfChipsFilterVariants.sm:
          return 'text-sm h-7 p-1';
        case VsfChipsFilterVariants.lg:
          return 'text-base h-10 p-2 gap-0.5';
        default:
          return 'text-sm h-8 p-1';
      }
    },
    get backgroundClass(): string {
      return classStringFromArray([
        'w-full h-full absolute top-0 left-0 ring-1 ring-gray-200 ring-inset cursor-pointer -z-10 rounded-full ',
        'peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500',
        'peer-hover:bg-primary-100 peer-active:bg-primary-200',
        'peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50',
      ]);
    },
    get labelClass(): string {
      return classStringFromArray([
        'inline-flex relative items-center ',
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        state.sizeClass,
      ]);
    },
    get thumbClass(): string {
      return classStringFromArray([
        'rounded-full overflow-hidden flex opacity-50 peer-checked:opacity-100 peer-disabled:opacity-20',
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
      <label class={state.labelClass}>
        <input
          v-model="vueProxyValue"
          type={state.useTypeProp}
          class="hidden peer"
          disabled={props.disabled}
          onChange={(e) => state.onChangeHandler(e)}
          value={props.value}
        />
        <Show when={!props.noThumb}>
          <div class={state.thumbClass}>
            <Show
              when={props.slotThumb}
              else={<div class="w-full rounded-full overflow-hidden m-0.5 bg-black" style={{ background: props.thumbColor }}></div>}
            >
              {props.slotThumb}
            </Show>
          </div>
        </Show>
        <Show when={props.label}>
          <span class="font-normal ml-1.5 mr-2 first-of-type:mx-2 text-gray-900 peer-disabled:text-opacity-40">
            {props.label}
          </span>
        </Show>
        <div class={state.backgroundClass}></div>
      </label>
    </>
  );
}

VsfChipsFilter.propTypes = {};
