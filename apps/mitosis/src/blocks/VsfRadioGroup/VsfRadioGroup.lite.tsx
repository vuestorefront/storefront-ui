import { useStore } from "@builder.io/mitosis";
import { classStringFromArray } from "../../functions/domUtils";
import type { SlotType } from "../../functions/types";

export const VsfRadioGroupDirection = Object.freeze({
  vertical: 'vertical',
  horizontal: 'horizontal',
});
type VsfRadioGroupDirectionKeys = keyof typeof VsfRadioGroupDirection;

export const VsfRadioGroupVariants = Object.freeze({
  base: 'base',
  tile: 'tile',
});
type VsfRadioGroupVariantsKeys = keyof typeof VsfRadioGroupVariants;

export interface VsfRadioGroupProps {
  direction?: VsfRadioGroupDirectionKeys;
  variant?: VsfRadioGroupVariantsKeys;
  children?: SlotType;
  isInvalid?: boolean;
  errorText?: string;
  requiredText?: string;
  helpText?: string;
  required?: boolean;
}

const DEFAULT_VALUES: VsfRadioGroupProps = {
  direction: VsfRadioGroupDirection.vertical,
  variant: VsfRadioGroupVariants.base,
  children: '',
  isInvalid: false,
  errorText: 'Error message',
  requiredText: '*Required',
  helpText: 'Help text',
  required: false,
}

export default function VsfRadioGroup(props: VsfRadioGroupProps) {
  const state = useStore({
    get useDirectionProp() {
      return props.direction ?? DEFAULT_VALUES.direction
    },
    get useVariantProp() {
      return props.variant ?? DEFAULT_VALUES.variant
    },
    get useIsInvalidProp() {
      return props.isInvalid ?? DEFAULT_VALUES.isInvalid
    },
    get useErrorTextProp() {
      return props.errorText ?? DEFAULT_VALUES.errorText
    },
    get useRequiredTextProp() {
      return props.requiredText ?? DEFAULT_VALUES.requiredText
    },
    get useHelpTextProp() {
      return props.helpText ?? DEFAULT_VALUES.helpText
    },
    get useRequiredProp() {
      return props.required ?? DEFAULT_VALUES.required
    },
    get spanClasses(): string {
      return classStringFromArray([
        'mt-1 text-xs text-gray-500 peer-required:block font-body',
        !state.useRequiredProp && 'hidden',
      ]);
    },
    get childrenClasses(): string {
      return classStringFromArray([
        'flex',
        state.useDirectionProp === VsfRadioGroupDirection.vertical ? 'flex-col' : 'flex-row gap-4',
      ]);
    },
    get additionalTextClasses(): string {
      return classStringFromArray([
        'flex flex-col text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body',
        state.useVariantProp === VsfRadioGroupVariants.tile && 'pl-4',
      ]);
    }
  });

  return (
    <fieldset
      aria-required={true}
      aria-invalid={true}
      aria-describedby={`radio-${state.useVariantProp}-error`}
      role="radiogroup"
      className=""
    >
      <div className={state.childrenClasses}>
        {props.children}
      </div>
      <div className={state.additionalTextClasses}>
        <span
          id={`radio-${state.useVariantProp}-error`}
          className={classStringFromArray([
            'block col-span-2 my-1 text-sm font-medium text-negative-600 font-body',
            !state.useIsInvalidProp && 'hidden'
          ])}
        >
        {state.useErrorTextProp}
        </span>
        <span className="">
          {state.useHelpTextProp}
        </span>
        <span className={state.spanClasses}>
          {state.useRequiredTextProp}
        </span>
      </div>
    </fieldset>
  )
}
