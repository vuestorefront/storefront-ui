import { Show, useStore } from "@builder.io/mitosis";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconInfo from '../VsfIcons/VsfIconInfo.lite';
import VsfIconCheckCircle from "../VsfIcons/VsfIconCheckCircle.lite";
import VsfIconWarning from "../VsfIcons/VsfIconWarning.lite";
import VsfIconError from "../VsfIcons/VsfIconError.lite";
import VsfIconClose from '../VsfIcons/VsfIconClose.lite';
import type { SlotType } from "../../functions/types";

export const VsfAlertTypes = Object.freeze({
  'info': 'info',
  'positive': 'positive',
  'warning': 'warning',
  'error': 'error'
});
type VsfAlertTypesKeys = keyof typeof VsfAlertTypes;

export interface VsfAlertProps {
  type?: VsfAlertTypesKeys;
  persistent?: boolean;
  header?: string;
  description?: string;
  slotIcon?: SlotType;
  slotButton?: SlotType;
  handleCloseClick?: () => void;
}

const DEFAULT_VALUES: Required<VsfAlertProps> = {
  type: VsfAlertTypes.info,
  persistent: false,
  header: 'Header',
  description: 'Description',
  slotIcon: '',
  slotButton: '',
  handleCloseClick: () => {},
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
            {state.useTypeProp === VsfAlertTypes.info && <VsfIconInfo class={state.iconClasses} />}
            {state.useTypeProp === VsfAlertTypes.positive && <VsfIconCheckCircle class={state.iconClasses} />}
            {state.useTypeProp === VsfAlertTypes.warning && <VsfIconWarning class={state.iconClasses} />}
            {state.useTypeProp === VsfAlertTypes.error && <VsfIconError class={state.iconClasses} />}
          </Show>
          <div class="flex flex-col flex-shrink text-gray-900 font-body">
            <span class="text-lg font-medium">{props.header}</span>
            <span class="text-base font-normal leading-6">{props.description}</span>
          </div>
        </div>
        <Show
          when={!props.slotButton}
          else={
            <div
              class="button"
              onClick={() => state.close()}
            >
              {props.slotButton}
            </div>
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
