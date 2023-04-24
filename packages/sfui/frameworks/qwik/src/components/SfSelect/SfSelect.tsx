import { Slot, component$, useSignal } from '@builder.io/qwik';
import { SfSelectProps, SfSelectSize } from './types';
import { SfIconExpandMore } from '../SfIcons';

export const SfSelect = component$<SfSelectProps>(
  ({
    size = SfSelectSize.base,
    children,
    invalid,
    wrapperClass,
    showSlotChevron,
    required,
    disabled,
    class: _class,
    placeholder,
    // onBlur,
    onChange$,
    // onClick,
    // onKeyDown,
    ...attributes
  }) => {
    // TODO
    // const { isFocusVisible } = useFocusVisible();
    const isFocusVisible = false;

    const chevronRotatedSignal = useSignal(false);

    // const rotateUp = $(() => {chevronRotatedSignal.value = (true)});

    // const rotateDown = $(() => {chevronRotatedSignal.value =(false)});

    // const keydownHandler = $((event: QwikKeyboardEvent<HTMLSelectElement>) => {
    //   if (event.key === 'Space') {
    //     rotateUp();
    //   }
    // });

    return (
      <div
        class={`relative flex flex-col rounded-md ${
          isFocusVisible ? 'focus-within:outline focus-within:outline-offset' : ''
        } ${wrapperClass}`}
        data-testid="select"
      >
        <select
          required={required}
          disabled={disabled}
          class={`
          appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200 
          ${size === SfSelectSize.sm ? 'py-1.5' : ''}
          ${size === SfSelectSize.base ? 'py-2' : ''}
          ${size === SfSelectSize.lg ? 'py-3 text-base' : ''}
          ${invalid && !disabled ? '!ring-negative-600 ring-2' : ''}
          ${_class}`}
          data-testid="select-input"
          onChange$={onChange$}
          // TODO
          // onBlur={composeHandlers(rotateDown, onBlur)}
          // onChange={composeHandlers(rotateDown, onChange)}
          // onClick={composeHandlers(rotateUp, onClick)}
          // onKeyDown={composeHandlers(keydownHandler, onKeyDown)}
          {...attributes}
        >
          {placeholder && (
            <option
              value=""
              class={`bg-neutral-300 text-sm ${size === SfSelectSize.lg ? 'text-base' : ''}`}
              data-testid="select-placeholder"
            >
              {placeholder}
            </option>
          )}
          <Slot />
        </select>
        {showSlotChevron ? (
          <Slot name="chevron" />
        ) : (
          <SfIconExpandMore
            class={`
            box-border absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5 
            ${disabled ? 'text-disabled-500' : 'text-neutral-500'}
            ${chevronRotatedSignal.value ? 'rotate-180' : ''}`}
          />
        )}
      </div>
    );
  },
);
