import { useStore, Show } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconCancel from '../VsfIcons/VsfIconCancel.lite';
import VsfButton from '../VsfButton/VsfButton.lite';
import { SlotType } from '../../functions/types';

export interface VsfSearchProps {
  placeholder?: string;
  disabled?: boolean;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  slotSubmit?: SlotType;
  slotResults?: SlotType;
  onInput?: (...args: any[]) => void;
  onSubmit?: (...args: any[]) => void;
  onReset?: (...args: any[]) => void;
  modelValue?: string;
  value?: string;
  submitText?: string;
  name?: string;
  required?: boolean;
  autocomplete?: string;
}

const DEFAULT_VALUES: Partial<Required<VsfSearchProps>> = {
  name: 'search',
};

export default function VsfSearch(props: VsfSearchProps) {
  const state = useStore({
    get useNameProp() {
      return props.name || DEFAULT_VALUES.name;
    },
    onResetHandler(event?: PointerEvent) {
      event?.preventDefault();
      /* IF-vue */
      state.$emit('update:modelValue', '');
      state.$emit('reset', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onReset && props.onReset(event);
      /* ENDIF-react */
    },
    get useValueProp() {
      /* IF-vue */
      return props.modelValue;
      /* ENDIF-vue */
      /* IF-react */
      return props.value;
      /* ENDIF-react */
    },
    onInputHandler(event: InputEvent) {
      event.stopPropagation();
      /* IF-vue */
      state.$emit('update:modelValue', event.target!.value);
      /* ENDIF-vue */
      /* IF-react */
      props.onInput && props.onInput(event);
      /* ENDIF-react */
    },
  });

  return (
    <div class="relative">
      <form
        role="search"
        aria-disabled={props.disabled ? 'true' : 'false'}
        class={classStringFromArray(['flex', props.disabled ? 'cursor-not-allowed' : ''])}
        onSubmit={(e) => props.onSubmit?.(e)}
      >
        <div
          class={classStringFromArray([
            'group',
            'relative flex-1 flex items-center pl-4 py-2 pr-2',
            'ring-1 ring-gray-200 ring-inset',
            'rounded-l-md',
            'only:rounded-r-md text-gray-500',
            props.disabled
              ? 'bg-gray-100/50 ring-opacity-50 text-opacity-20'
              : 'bg-white hover:ring-primary-500 focus-within:caret-primary-500 active:caret-primary-500 active:ring-primary-500 active:ring-2 focus-within:ring-primary-500 focus-within:ring-2',
          ])}
        >
          <Show when={props.slotPrefix}>
            <span class="mr-2 inline-flex">{props.slotPrefix}</span>
          </Show>
          <input
            role="searchbox"
            type="search"
            name={state.useNameProp}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={state.useValueProp}
            onInput={(e) => state.onInputHandler(e)}
            required={props.required}
            autocomplete={props.autocomplete}
            class={classStringFromArray([
              'peer outline-none bg-transparent text-gray-900 appearance-none placeholder:text-gray-500 font-body text-base block w-full ',
              'disabled:placeholder:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed',
            ])}
          />
          <span class="peer-placeholder-shown:hidden inline-block ml-2">
            <button
              type="reset"
              onClick={(e) => state.onResetHandler(e)}
              disabled={props.disabled}
              class="disabled:cursor-not-allowed flex items-center justify-center rounded-full"
            >
              <VsfIconCancel></VsfIconCancel>
            </button>
          </span>
          <Show when={props.slotSuffix}>
            <span class="ml-2 inline-flex">{props.slotSuffix}</span>
          </Show>
        </div>
        <Show when={props.slotSubmit || props.submitText}>
          <VsfButton
            type="submit"
            disabled={props.disabled}
            className="rounded-r-md"
            tile={true}
            icon={!props.submitText}
          >
            {props.slotSubmit}
            {props.submitText}
          </VsfButton>
        </Show>
      </form>
      <div class="w-full relative">{props.slotResults}</div>
    </div>
  );
}
