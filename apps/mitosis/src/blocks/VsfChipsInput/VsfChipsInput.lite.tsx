import { Show, useStore } from '@builder.io/mitosis';
import VsfIconClose from '../VsfIcons/VsfIconClose.lite';

export const VsfChipsInputVariants = Object.freeze({
  sm: 'sm',
  base: 'base',
  lg: 'lg',
});

export type VsfChipsInputVariantsKeys = keyof typeof VsfChipsInputVariants;

export interface VsfChipsInputProps {
  size?: VsfChipsInputVariantsKeys;
  label?: any;
  disabled?: boolean;
  slotPrefix?: any;
  slotClose?: any;
  handleChipClose?: (e?: Event) => void;
}

const DEFAULT_VALUES = {
  size: VsfChipsInputVariants.base,
};

// TODO: refactor, no important, no borders, icon changed so spacings as well
export default function VsfChipsInput(props: VsfChipsInputProps) {
  const state = useStore({
    get chipsSize() {
      switch (props.size) {
        case VsfChipsInputVariants.sm:
          return 'sm';
        default:
          return 'base';
      }
    },
    get closeSize() {
      switch (props.size) {
        case VsfChipsInputVariants.lg:
          return 'base';
        default:
          return 'sm';
      }
    },
    get sizeClass() {
      switch (props.size) {
        case VsfChipsInputVariants.sm:
          return 'size--sm';
        case VsfChipsInputVariants.lg:
          return 'size--lg';
        default:
          return 'size--base';
      }
    },
    get disabledClass(): string {
      return props.disabled ? 'chip--disabled' : '';
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
      <div class={`chip chip--primary transition duration-300 ease ${state.sizeClass} ${state.disabledClass}`}>
        <div class={`chip__left-icon vsf-icon-${state.chipsSize}`}>
          <>{props.slotPrefix}</>
        </div>
        <Show when={props.label}>
          <span class="chip__content text-gray-900">{props.label}</span>
        </Show>
        <>{props.slotClose}</>
        <Show when={!props.slotClose && !props.disabled}>
          <button
            class="bg-transparent inline-flex chip__right-icon group"
            onClick={(event) => state.close(event)}
          >
            <VsfIconClose
              size={state.closeSize}
              class="transition-colors duration-300 ease text-gray-500 group-hover:text-primary-600 group-focus-within:text-primary-600 group-active:text-primary-700"
              ariaLabel={`Close ${props.label} chip`}
            />
          </button>
        </Show>
      </div>
    </>
  );
}
