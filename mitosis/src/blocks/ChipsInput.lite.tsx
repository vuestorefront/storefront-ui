import { Show, useStore,  } from "@builder.io/mitosis";

export const SizeTypes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const

export type SizeType = typeof SizeTypes[keyof typeof SizeTypes];

export interface ChipsInputProps {
  size?: SizeType;
  value?: any;
  disabled?: boolean;
  slotIcon?: any;
  slotClose?: any;
  handleChipClose?: (e?: MouseEvent) => void;
}

const DEFAULT_VALUES = {
  size: SizeTypes.MEDIUM,
  disabled: false,
  value: "",
};

export default function ChipsInput(props: ChipsInputProps) {
  const state = useStore({
    get size(){
      return props.size || DEFAULT_VALUES.size
    },
    get value(){
      return props.value || DEFAULT_VALUES.value
    },
    get disabled(){
      return props.disabled || DEFAULT_VALUES.disabled
    },
    get chipsSize() {
      switch (state.size) {
        case "small":
          return "w-4 h-4";
        case "large":
          return "w-5 h-5";
        default:
          return "w-4 h-4";
      }
    },
    get chipsIconSize() {
      switch (state.size) {
        case "small":
          return "w-5 h-5";
        case "large":
          return "w-8 h-8";
        default:
          return "w-6 h-6";
      }
    },
    get chipsFontSize() {
      switch (state.size) {
        case "small":
          return "text-sm";
        case "large":
          return "text-base";
        default:
          return "text-sm";
      }
    },
    get chipsButtonSpacing() {
      switch (state.size) {
        case "small":
          return "ml-2 mr-1";
        case "large":
          return "ml-3 mr-1.5";
        default:
          return "ml-2.5 mr-1";
      }
    },
    get hideButton():string {
      return !state.value ? "hidden" : "block";
    },
    get disabledClass(): string {
      return state.disabled ? "!pr-3 bg-gray-100 border-gray-200 opacity-50 !cursor-not-allowed" : "";
    },
    get valueClass(): string {
      return state.value ? "!pr-0. " : "";
    },
    close(event: MouseEvent) {
      props.handleChipClose && props.handleChipClose(event);
    },
  });
  return (
    <>
      <div
        class={`rounded-full group pl-0.5 pr-1 py-0.5 text-gray-900 bg-white border-2 border-primary-500 font-body font-normal inline-flex items-center align-center w-max cursor-pointer transition duration-300 ease outline-violet ${state.disabledClass} ${state.valueClass}`}
      >
        <div class={state.chipsIconSize}>
          <Show when={props.slotIcon}>
            {props.slotIcon}
          </Show>
        </div>
        <Show when={!!state.value}>
          <span class={`ml-1 ${state.chipsFontSize}`}>{state.value}</span>
        </Show>
        <Show when={!props.slotClose && !state.disabled}>
          <button
            class={`bg-transparent ${state.chipsButtonSpacing} ${state.hideButton}`}
            onClick={(event) => state.close(event)}
          >
            <svg
              class={`first-letter:transition duration-300 fill-gray-500 group-hover:fill-primary-600 group-active:fill-primary-700 ease ${state.chipsSize}`}
              aria-label={`Close ${state.value} chip`}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z" />
              <path d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z" />
            </svg>
          </button>
        </Show>
        <Show when={props.slotClose} name="close">
          <div>{props.slotClose}</div>
        </Show>
      </div>
    </>
  );
}
