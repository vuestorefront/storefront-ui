import { Show, useStore } from '@builder.io/mitosis';
import VsfIconClose from '../VsfIcons/VsfIconClose.lite';

export const VsfChipsInputVariants = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

export type VsfChipsInputVariantsKeys = keyof typeof VsfChipsInputVariants;

export interface VsfChipsInputProps {
  size?: VsfChipsInputVariantsKeys;
  value?: any;
  disabled?: boolean;
  slotPrefix?: any;
  slotClose?: any;
  handleChipClose?: (e?: Event) => void;
}

const DEFAULT_VALUES = {
  size: VsfChipsInputVariants.medium,
  disabled: false,
  value: '',
};

// TODO: refactor, no important, no borders, icon changed so spacings as well
export default function VsfChipsInput(props: VsfChipsInputProps) {
  const state = useStore({
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size;
    },
    get useValueProp() {
      return props.value || DEFAULT_VALUES.value;
    },
    get useDisabledProp() {
      return props.disabled || DEFAULT_VALUES.disabled;
    },
    get chipsSize() {
      switch (state.useSizeProp) {
        case VsfChipsInputVariants.small:
          return 'base';
        default:
          return 'sm';
      }
    },
    get chipsButtonSpacing() {
      switch (state.useSizeProp) {
        case VsfChipsInputVariants.small:
          return 'ml-2 mr-1';
        case VsfChipsInputVariants.large:
          return 'ml-3 mr-1.5';
        default:
          return 'ml-2.5 mr-1';
      }
    },
    get hideButton(): string {
      return !state.useValueProp ? 'hidden' : 'flex';
    },
    get disabledClass(): string {
      return state.useDisabledProp ? '!pr-3 bg-gray-100 border-gray-200 opacity-50 !cursor-not-allowed' : '';
    },
    get valueClass(): string {
      return state.useValueProp ? '!pr-0. ' : '';
    },
    close(event: Event) {
      /* IF-vue */
      state.$emit('close', event);
      /* ENDIF-vue */
      props.handleChipClose && props.handleChipClose(event);
    },
  });
  return (
    <>
      <div
        class={`rounded-full group pl-0.5 pr-1 py-0.5 text-gray-900 bg-white border-2 border-primary-500 font-body font-normal inline-flex items-center align-center w-max cursor-pointer transition duration-300 ease outline-violet ${state.disabledClass} ${state.valueClass}`}
      >
        <div class={`flex vsf-icon-${state.chipsSize}`}>
          <>{props.slotPrefix}</>
        </div>
        <Show when={!!state.useValueProp}>
          <span class={`ml-1 text-${state.chipsSize}`}>{state.useValueProp}</span>
        </Show>
        <>{props.slotClose}</>
        <Show when={!props.slotClose && !state.useDisabledProp}>
          <button
            class={`bg-transparent ${state.chipsButtonSpacing} ${state.hideButton} align-center`}
            onClick={(event) => state.close(event)}
          >
            <VsfIconClose
              size={state.chipsSize}
              class={`first-letter:transition duration-300 text-gray-500 group-hover:text-primary-600 group-active:text-primary-700 ease`}
              ariaLabel={`Close ${state.useValueProp} chip`}
            />
          </button>
        </Show>
      </div>
    </>
  );
}
