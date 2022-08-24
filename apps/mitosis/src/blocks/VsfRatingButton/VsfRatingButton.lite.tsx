import { useStore, For } from '@builder.io/mitosis';

export const VsfRatingButtonVariants = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
});

type VsfRatingButtonVariantsKeys = keyof typeof VsfRatingButtonVariants;

export interface VsfRatingButtonProps {
  max?: number;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
  disabled?: boolean;
  size: VsfRatingButtonVariantsKeys;
}

const DEFAULT_VALUES = {
  max: 5,
  size: VsfRatingButtonVariants.base,
};

export default function VsfRatingButton(props: VsfRatingButtonProps) {
  const state = useStore({
    get useMaxProp() {
      return props.max || DEFAULT_VALUES.max;
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size;
    },
    get sizeClass(): string {
      return {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        base: 'h-6 w-6',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '2xl': 'h-20 w-20',
      }[state.useSizeProp];
    },
    onChangeHandler(item) {
      /* IF-vue */
      state.$emit('rating-changed', item);
      /* ENDIF-vue */
      props.onChange && props.onChange(item);
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
  });

  return (
    <>
      <fieldset class="inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400">
        <For each={[...Array(state.useMaxProp).keys()].map((i) => i + 1)}>
          {(item, index) => (
            <input
              v-model="vueProxyValue"
              key={`star-${item}+${index}`}
              aria-label={`Rating star ${item} of ${state.useMaxProp}`}
              type="radio"
              name="rating-1"
              value={item}
              class={`appearance-none cursor-pointer star-input ${state.sizeClass}`}
              onChange={() => state.onChangeHandler(item)}
              disabled={props.disabled}
            />
          )}
        </For>
      </fieldset>
    </>
  );
}
