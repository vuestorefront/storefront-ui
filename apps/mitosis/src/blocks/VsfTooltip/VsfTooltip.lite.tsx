import { useStore } from '@builder.io/mitosis';

export const VsfTooltipTypes = Object.freeze({
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
});

type VsfTooltipTypesKeys = keyof typeof VsfTooltipTypes;

export interface VsfTooltipProps {
  children?: Element | Element[] | string;
  label?: string;
  type?: VsfTooltipTypesKeys;
}

const DEFAULT_VALUES = {
  label: '',
  type: VsfTooltipTypes.top,
};

export default function VsfTooltip(props: VsfTooltipProps) {
  const state = useStore({
    get useLabelProp() {
      return props.label || DEFAULT_VALUES.label;
    },
    get useTypeProp() {
      return props.type || DEFAULT_VALUES.type;
    },
    get tooltipClass() {
      switch (state.useTypeProp) {
        case VsfTooltipTypes.bottom:
          return 'left-1/2 -translate-x-1/2 translate-y-2 top-full';
        case VsfTooltipTypes.left:
          return '-left-2 -translate-x-full -translate-y-1/2 top-1/2';
        case VsfTooltipTypes.right:
          return 'left-full translate-x-2 -translate-y-1/2 top-1/2';
        default:
          return 'left-1/2 -translate-x-1/2 -translate-y-full -top-2';
      }
    },
    get tooltipCaretClass() {
      switch (state.useTypeProp) {
        case VsfTooltipTypes.bottom:
          return 'bottom-full -mb-1';
        case VsfTooltipTypes.left:
          return 'left-full -ml-1';
        case VsfTooltipTypes.right:
          return 'left-0 -ml-1';
        default:
          return 'bottom-0 -mb-1';
      }
    },
  });

  return (
    <>
      <div class="relative inline-flex flex-col items-center group">
        {props.children}
        <div
          role="tooltip"
          class={`w-max max-w-xs absolute justify-center items-center hidden mb-14 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5 ${state.tooltipClass}`}
        >
          <div>{state.useLabelProp}</div>
          <div class={`absolute w-2 h-2 rotate-45 bg-gray-500 ${state.tooltipCaretClass}`}></div>
        </div>
      </div>
    </>
  );
}
