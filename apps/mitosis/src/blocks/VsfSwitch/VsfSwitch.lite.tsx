import { useStore } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export interface VsfSwtichProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  errorText?: string;
  rightCheckbox?: boolean;
  checked?: boolean;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
}

const DEFAULT_VALUES = {
  value: '',
  label: '',
  helpText: '',
  errorText: '',
};

export default function VsfSwtich(props: VsfSwtichProps) {
  // TODO Refactor: get rid of 'id' prop - wrap <input/> in <label>
  const state = useStore({
    get useValueProp() {
      return props.value || DEFAULT_VALUES.value;
    },
    get useLabelProp() {
      return props.label || DEFAULT_VALUES.label;
    },
    get useHelpTextProp() {
      return props.helpText || DEFAULT_VALUES.helpText;
    },
    get useErrorTextProp() {
      return props.errorText || DEFAULT_VALUES.errorText;
    },
    get rightCheckboxClasses() {
      return props.rightCheckbox
        ? 'grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_36px_!important]'
        : '';
    },
    get inputClasses() {
      return classStringFromArray([
        `after:content['']`,
        'peer flex self-center w-[36px] h-[20px] border-2 disabled:cursor-not-allowed outline-violet rounded-full appearance-none cursor-pointer relative',
        'border-gray-500 bg-white', // base styles
        'after:bg-gray-500 after:absolute after:top-1/2 after:left-1/4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:transition-transform after:w-[13px] after:h-[13px]', //after styles
        'active:checked:!bg-primary-700 active:checked:border-transparent', // active styles
        'checked:border-primary-500 checked:bg-primary-500 checked:after:!bg-white checked:after:translate-x-3/4', // checked
        'hover:checked:after:bg-white hover:checked:border-primary-600 hover:checked:!bg-primary-600', // checked:hover
        'disabled:!border-gray-500/50 disabled:checked:!border-transparent disabled:checked:!bg-gray-500/50 disabled:checked:after:!bg-white disabled:after:!bg-gray-500/50', // disabled
        props.invalid
          ? 'border-negative-600 after:bg-negative-600 active:border-negative-700 active:after:bg-negative-700'
          : 'hover:border-primary-600 hover:after:bg-primary-600 active:after:bg-primary-700 active:border-primary-700',
        props.rightCheckbox ? 'col-start-[end-col] row-start-[start-row] ' : '',
      ]);
    },
    onChangeHandler(event: InputEvent) {
      props.onChange && props.onChange(event);
    },
    get vueProxyValue() {
      return {
        get: function () {
          return props.modelValue;
        },
        set: function (value) {
          state.$emit('update:modelValue', value);
        },
      };
    },
    get isChecked(): boolean {
      /* IF-react */
      return props.checked;
      /* ENDIF-react */
    },
  });

  return (
    <div class={`relative grid max-w-xs grid-cols-[36px_1fr] gap-x-2.5 right-checkbox ${state.rightCheckboxClasses}`}>
      <input
        v-model="vueProxyValue"
        checked={state.isChecked}
        id={`checkbox-${props.name}`}
        type="checkbox"
        role="switch"
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        invalid={props.invalid}
        class={state.inputClasses}
        onChange={(e) => state.onChangeHandler(e)}
        value={state.useValueProp}
      />
      <label
        for={`checkbox-${props.name}`}
        class={classStringFromArray([
          `text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed`,
          props.rightCheckbox ? '!col-start-[start-col] row-start-[start-row] col-end-[end-col]' : '',
        ])}
      >
        {state.useLabelProp}
      </label>
      <span
        class={classStringFromArray([
          `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body peer-disabled:text-gray-500/50`,
          !props.invalid ? 'hidden' : '',
          props.rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '',
        ])}
      >
        {state.useErrorTextProp}
      </span>
      <span
        class={classStringFromArray([
          `col-start-2 mt-0.5 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body`,
          props.rightCheckbox ? '!col-start-[start-col]' : '',
        ])}
      >
        {state.useHelpTextProp}
      </span>
      <span
        class={classStringFromArray([
          `hidden col-start-1 mt-4 text-xs text-gray-500 peer-required:block peer-disabled:opacity-50 font-body`,
          props.rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '',
        ])}
      >
        *Required
      </span>
    </div>
  );
}
