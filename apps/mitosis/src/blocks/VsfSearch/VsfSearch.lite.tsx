import { useStore, Show } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconCancel from '../VsfIcons/VsfIconCancel.lite';
import VsfButton from '../VsfButton/VsfButton.lite';

export interface VsfSearchProps {
  placeholder?: string;
  disabled?: boolean;
  slotPrefix: any;
  slotSuffix: any;
  slotSubmit: any;
  onInput?: (...args: any[]) => void;
  onSubmit?: (...args: any[]) => void;
  onClear?: (...args: any[]) => void;
  modelValue?: string;
  value?: string;
  submitText?: string;
}

export default function VsfSearch(props: VsfSearchProps) {
  const state = useStore({
    clear(event?: PointerEvent) {
      event?.preventDefault();
      /* IF-vue */
      state.$emit('update:modelValue', '');
      state.$emit('clear', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onClear && props.onClear(event);
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
    <form
      aria-disabled={props.disabled ? 'true' : 'false'}
      role="search"
      class={classStringFromArray(['flex', props.disabled ? 'cursor-not-allowed' : ''])}
      onSubmit={e => props.onSubmit?.(e)}
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
          name="search"
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={state.useValueProp}
          onInput={(e) => state.onInputHandler(e)}
          class={classStringFromArray([
            'peer outline-none bg-transparent text-gray-900 appearance-none placeholder:text-gray-500 font-body text-base block w-full ',
            'disabled:placeholder:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed',
          ])}
        />
        <span class="peer-placeholder-shown:hidden inline-block ml-2">
          <button
            type="reset"
            onClick={e=>state.clear(e)}
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
  );
}
