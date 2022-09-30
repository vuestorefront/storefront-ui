import { useStore, Show } from '@builder.io/mitosis';
import { SlotType } from '../../functions/types';
import { classStringFromArray } from '../../functions/domUtils';
import VsfCounter from '../VsfCounter/VsfCounter.lite';

export const VsfListItemMenuSize = Object.freeze({
  'sm': 'sm',
  'base': 'base',
  'lg': 'lg',
});
type VsfListItemMenuKeys = keyof typeof VsfListItemMenuSize;

export interface VsfListItemMenuProps {
  link?: string,
  size?: VsfListItemMenuKeys,
  selected: boolean,
  primaryText: string,
  secondaryText?: string,
  truncatedText?: boolean,
  counter?: string,
  disabled?: boolean,
  children?: SlotType,
  slotPrefix?: SlotType,
  slotSuffix?: SlotType, 
  handleClick?: (e?: Event) => void; 
}

const DEFAULT_VALUES: Required<VsfListItemMenuProps> = {
  link: '',
  size: 'base',
  selected: false,
  primaryText: '',
  secondaryText: '',
  counter: '',
  truncatedText: false,
  disabled: false
};

export default function VsfListItemMenu(props: VsfListItemMenuProps) {
  const state = useStore({
    get useLinkProp() {
      return props.link || DEFAULT_VALUES.link;
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size;
    },
    get useSelectedProp() {
      return props.selected || DEFAULT_VALUES.selected;
    },
    get usePrimaryTextProp() {
      return props.primaryText || DEFAULT_VALUES.primaryText;
    },
    get useSecondaryTextProp() {
      return props.secondaryText || DEFAULT_VALUES.secondaryText;
    },
    get useCounterProp() {
      return props.counter || DEFAULT_VALUES.counter;
    },
    get useTruncatedTextProp() {
      return props.truncatedText || DEFAULT_VALUES.truncatedText;
    },
    get useDisabled() {
      return props.disabled || DEFAULT_VALUES.disabled;
    },
    get slotPrefixClass(): string {
      return classStringFromArray([
        /* IF-react */
        props.slotPrefix && 'pr-2',
        /* ENDIF-react */
        /* IF-vue */
        state.$slots.prefix && 'pr-2',
        /* ENDIF-vue */
        `vsf-icon-${state.useSizeProp === 'sm' ? 'sm' : 'base'}`,
        state.useSelectedProp ? 'text-gray-900' : 'text-gray-500',
        'flex items-center group-hover:text-primary-600 group-active:text-primary-700'
      ])
    },
    get textClass(): string {
      return classStringFromArray([
        state.useSizeProp === 'sm' ? 'pr-7' : 'pr-8',
        state.useTruncatedTextProp ? 'inline-block truncate' : 'break-all',
        'flex flex-col'
      ])
    },
    get listItemMenuSizes() {
      switch (state.useSizeProp) {
        case VsfListItemMenuSize.sm:
          return 'h-8 text-sm py-[1.5] pr-3 pl-4'
        case VsfListItemMenuSize.lg:
          return 'h-14 py-4 pr-3 pl-4'
        default:
          return 'h-10 py-2 pr-3 pl-4'
      }
    }, 
    get mainClass(): string {
      return classStringFromArray([
        'group flex w-full justify-start items-center relative font-body text-gray-900 cursor-pointer',
        state.useSecondaryTextProp ? 'pl-4' : state.listItemMenuSizes,
        state.useTruncatedTextProp ? 'overflow-hidden' : '',
        state.useSelectedProp ? 'bg-gray-100' : '',
        state.useDisabled ? 'gray-900/40 pointer-events-none opacity-50' : 'hover:text-primary-600 hover:bg-gray-100 active:text-primary-700 active:bg-gray-200 focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400'
      ])
    },   
    click(event: Event) {
      /* IF-vue */
      state.$emit('click', event);
      /* ENDIF-vue */
      props.handleClick && props.handleClick(event);
    },
  });

  return (
    <>
        <Show
          when={state.useLinkProp}
          else={
            <button 
              class={state.mainClass}
              disabled={state.useDisabled} 
              onClick={(event) => state.click(event)}
              aria-disabled={state.useDisabled}              
            >
              <Show when={props.slotPrefix}>
                <span class={state.slotPrefixClass}>                
                  {props.slotPrefix}
                </span>
              </Show>
              <span class={state.textClass}>
                <span class={`flex flex-wrap ${state.useSelectedProp ? 'font-medium' : ''}`}>
                  {state.usePrimaryTextProp}
                  <Show when={state.useCounterProp && !state.useSecondaryTextProp}>
                    <VsfCounter className="ml-2 group-disabled:opacity-40" size={'lg'}>{state.useCounterProp}</VsfCounter>
                  </Show>
                </span>
                <span class={`text-left ${state.useTruncatedTextProp ? 'truncate' : ''}`}>
                  {state.useSecondaryTextProp}
                  <Show when={state.useCounterProp && state.useSecondaryTextProp}>
                    <VsfCounter className="ml-2 group-disabled:opacity-40" size={'lg'}>{state.useCounterProp}</VsfCounter>
                  </Show>
                </span>
              </span>              
              <Show when={props.slotSuffix}>
                <span class={`absolute right-3 vsf-icon-${state.useSizeProp === 'sm' ? 'sm' : 'base'}`}>
                  {props.slotSuffix}
                </span>
              </Show>             
            </button>
          }
        >
          <a 
            role="button" 
            href={state.useLinkProp} 
            class={state.mainClass}
            disabled={state.useDisabled} 
            aria-role="menuitem"
            aria-disabled={state.useDisabled}    
          >
            <Show when={props.slotPrefix}>
              <span class={state.slotPrefixClass}>
                {props.slotPrefix}
              </span>
            </Show>
            <span class={state.textClass}>
              <span class={`flex flex-wrap ${state.useSelectedProp ? 'font-medium' : ''}`}>
                {state.usePrimaryTextProp}
                <Show when={state.useCounterProp && !state.useSecondaryTextProp}>
                  <VsfCounter className="ml-2 group-disabled:opacity-40" size={'lg'}>{state.useCounterProp}</VsfCounter>
                </Show>
              </span>
              <span class={`text-left ${state.useTruncatedTextProp ? 'truncate' : ''}`}>
                {state.useSecondaryTextProp}
                <Show when={state.useCounterProp && state.useSecondaryTextProp}>
                  <VsfCounter className="ml-2 group-disabled:opacity-40" size={'lg'}>{state.useCounterProp}</VsfCounter>
                </Show>
              </span>
            </span>            
            <Show when={props.slotSuffix}>
              <span class={`absolute right-3 vsf-icon-${state.useSizeProp === 'sm' ? 'sm' : 'base'}`}>
                {props.slotSuffix}
              </span>    
            </Show>            
          </a>
        </Show>
    </>
  );
}
