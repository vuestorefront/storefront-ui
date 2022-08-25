import { useStore } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

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
          return 'after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-t-transparent after:border-b-gray-500';
        case VsfTooltipTypes.left:
          return 'after:top-1/2  after:left-[100%]   after:-translate-y-1/2 after:border-y-transparent after:border-r-transparent after:border-l-gray-500';
        case VsfTooltipTypes.right:
          return 'after:top-1/2  after:right-[100%]  after:-translate-y-1/2 after:border-y-transparent after:border-l-transparent after:border-r-gray-500';
        default:
          return 'after:left-1/2 after:top-[100%]    after:-translate-x-1/2 after:border-x-transparent after:border-b-transparent after:border-t-gray-500';
      }
    },
  });

  return (
    <>
      <div class="relative inline-flex flex-col items-center group">
        {props.children}
        <div
          role="tooltip"
          class={classStringFromArray([
            'w-max max-w-[50ch] absolute justify-center items-center hidden group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5 shadow-sm',
            state.tooltipClass,
            `after:content-[''] after:absolute after:border-4`,
            state.tooltipCaretClass,
          ])}
        >
          <div>{state.useLabelProp}</div>
        </div>
      </div>
    </>
  );
}
