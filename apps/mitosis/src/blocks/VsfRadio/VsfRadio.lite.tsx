import { useStore } from "@builder.io/mitosis";
import { classStringFromArray } from "../../functions/domUtils";

export const VsfRadioVariants = Object.freeze({
  base: 'base',
  tile: 'tile',
});
type VsfRadioVariantsKeys = keyof typeof VsfRadioVariants;

export const VsfRadioSize = Object.freeze({
  lg: 'lg',
  base: 'base',
  sm: 'sm',
});
type VsfRadioSizeKeys = keyof typeof VsfRadioSize;

export const VsfRadioAlignment = Object.freeze({
  left: 'left',
  right: 'right',
});
type VsfRadioAlignmentKeys = keyof typeof VsfRadioAlignment;

export interface VsfRadioProps {
  id: string;
  variant?: VsfRadioVariantsKeys;
  name?: string;
  value?: string | string[] | number;
  disabled?: boolean;
  selected?: string;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  modelValue?: any;
  size?: VsfRadioSizeKeys;
  alignment?: VsfRadioAlignmentKeys;
  onChange?: (...args: any[]) => void;
}

const DEFAULT_VALUES: Required<VsfRadioProps> = {
  id: '',
  variant: VsfRadioVariants.base,
  name: '',
  value: '',
  disabled: false,
  selected: '',
  invalid: false,
  label: 'Label',
  helpText: 'Help text',
  modelValue: '',
  size: VsfRadioSize.base,
  alignment: VsfRadioAlignment.left,
  onChange: () => {},
}

export default function VsfRadio(props: VsfRadioProps) {
  const state = useStore({
    get useIdProp() {
      return props.id
    },
    get useVariantProp() {
      return props.variant ?? DEFAULT_VALUES.variant
    },
    get useAlignmentProp() {
      return props.alignment ?? DEFAULT_VALUES.alignment
    },
    get useSizeProp() {
      return props.size ?? DEFAULT_VALUES.size
    },
    get useInvalidProp() {
      return props.invalid ?? DEFAULT_VALUES.invalid
    },
    get useDisabledProp() {
      return props.disabled ?? DEFAULT_VALUES.disabled
    },
    get useValueProp() {
      return props.value ?? DEFAULT_VALUES.value
    },
    get useSelectedProp() {
      return props.selected ?? DEFAULT_VALUES.selected
    },
    get useNameProp() {
      return props.name ?? DEFAULT_VALUES.name
    },
    get useLabelProp() {
      return props.label ?? DEFAULT_VALUES.label
    },
    get useHelpTextProp() {
      return props.helpText ?? DEFAULT_VALUES.helpText
    },
    get vueProxyValue() {
      return {
        get: function () {
          return props.modelValue;
        },
        set: function (value: string) {
          state.$emit('update:modelValue', value);
        },
      };
    },
    get inputClasses(): string {
      return classStringFromArray([
        'w-5 h-5 mt-px border-2 border-gray-500 rounded-full appearance-none cursor-pointer hover:border-primary-600 checked:bg-primary-700 checked:border-primary-700 checked:shadow-inset outline-violet',
        state.useVariantProp !== VsfRadioVariants.base && 'disabled:border-gray-500/50',
        state.useInvalidProp && 'border-negative-600 hover:border-negative-600 checked:border-negative-700',
        state.useDisabledProp && '!border-gray-500 opacity-50 cursor-not-allowed',
        state.useAlignmentProp === VsfRadioAlignment.right && 'col-start-2',
        state.isChecked() && state.useDisabledProp && '!border-gray-500 !bg-gray-500 opacity-50',
      ]);
    },
    get labelClasses(): string {
      return classStringFromArray([
        'grid text-gray-900 cursor-pointer text-base peer-required:after:content-[\'*\'] disabled:text-gray-900/40 font-body',
        state.useAlignmentProp === VsfRadioAlignment.right ? 'grid-cols-[1fr_24px] grid-flow-dense' : 'grid-cols-[24px_1fr]',
        state.useDisabledProp && '!border-gray-500 opacity-50 cursor-not-allowed',
        state.useSizeProp === VsfRadioSize.lg && 'py-4',
        state.useSizeProp === VsfRadioSize.base && 'py-2',
        state.useSizeProp === VsfRadioSize.sm && 'py-1',
        state.useVariantProp === VsfRadioVariants.tile && 'px-4 hover:bg-gray-100 rounded-md cursor-pointer',
      ]);
    },
    get helpTextClasses(): string {
      return classStringFromArray([
        'w-max text-xs text-gray-500 peer-disabled:text-gray-500/50 grid',
        state.useAlignmentProp === VsfRadioAlignment.right ? 'grid-cols-[1fr_24px]' : 'grid-cols-[24px_1fr] contents',
        state.useDisabledProp && 'opacity-50',
      ]);
    },
    isChecked() {
      return (state.useValueProp || props.modelValue) === state.useSelectedProp;
    },
    onChangeHandler(event: InputEvent) {
      props.onChange && props.onChange(event);
    }
  });

  return (
    <div className="max-w-xs">
      <label
        htmlFor={state.useIdProp}
        className={state.labelClasses}
      >
        <input
          v-model="vueProxyValue"
          id={state.useIdProp}
          type="radio"
          name={state.useNameProp}
          value={state.useValueProp}
          disabled={state.useDisabledProp}
          checked={state.isChecked()}
          className={state.inputClasses}
          onChange={(e) => state.onChangeHandler(e)}
        />
        {state.useLabelProp}
        <div className={state.helpTextClasses}>
          <span
            className={classStringFromArray([
              state.useAlignmentProp === 'left' && 'col-start-2',
          ])}
          >
            {state.useHelpTextProp}
          </span>
        </div>
      </label>
    </div>
  )
}