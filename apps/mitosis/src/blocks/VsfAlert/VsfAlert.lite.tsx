import { Show, useStore } from "@builder.io/mitosis";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconInfo from '../VsfIcons/VsfIconInfo.lite';
import VsfIconClose from '../VsfIcons/VsfIconClose.lite';

export const VsfAlertTypes = Object.freeze({
  'info': 'info',
  'positive': 'positive',
  'warning': 'warning',
  'error': 'error'
});
type VsfAlertTypesKeys = keyof typeof VsfAlertTypes;

export interface VsfAlertProps {
  type?: VsfAlertTypesKeys
  persistent?: boolean
  header?: string
  description?: string
  slotIcon?: Element | Element[] | string // TODO: replace with SlotType after Button merge
  slotButton?: Element | Element[] | string
  handleCloseClick?: () => void
}

const DEFAULT_VALUES = {
  type: VsfAlertTypes.info,
  persistent: false,
};

export default function VsfAlert(props: VsfAlertProps) {
  const state = useStore({
    get useTypeProp() {
      return props.type ?? DEFAULT_VALUES.type
    },
    get usePersistentProp() {
      return props.persistent ?? DEFAULT_VALUES.persistent
    },
    get typeClasses() {
      return classStringFromArray([
        props.type === VsfAlertTypes.positive && 'bg-primary-100 border-primary-400',
        props.type === VsfAlertTypes.warning && 'bg-warning-100 border-warning-500',
        props.type === VsfAlertTypes.error && 'bg-negative-100 border-negative-400',
        props.type === VsfAlertTypes.info && 'bg-secondary-100 border-secondary-400',
      ]);
    },
    get iconClasses() {
      return classStringFromArray([
        props.type === VsfAlertTypes.positive && 'text-primary-600',
        props.type === VsfAlertTypes.warning && 'text-warning-700',
        props.type === VsfAlertTypes.error && 'text-negative-700',
        props.type === VsfAlertTypes.info && 'text-secondary-800',
      ]);
    },
    close() {
      /* IF-vue */
      state.$emit('close');
      /* ENDIF-vue */
      props.handleCloseClick && props.handleCloseClick()
    }
  });

  return (
    <>
      <div
        role="alert"
        class={`flex flex-wrap justify-between min-h-[3.5rem] pl-4 pr-4 pt-3.5 pb-3.5 rounded-md shadow-medium border ${state.typeClasses}`}
      >
        <div class="flex gap-2">
          <Show
            when={!props.slotIcon}
            else={<div>{props.slotIcon}</div>}
          >
            <VsfIconInfo class={state.iconClasses} />
          </Show>
          <div class="flex flex-col flex-shrink text-gray-900 font-body">
            <span class="text-lg font-medium">{props.header}</span>
            <span class="text-base font-normal leading-6">{props.description}</span>
          </div>
        </div>
        <Show
          when={!props.slotButton}
          else={
            <div class="button">{props.slotButton}</div>
          }
        >
          <button
            class={state.usePersistentProp && 'hidden'}
            onClick={() => state.close()}
          >
            <VsfIconClose aria-hidden="true" class={state.iconClasses} />
          </button>
        </Show>
      </div>
    </>
  )
}
