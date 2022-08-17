import { useStore } from '@builder.io/mitosis';

export interface CheckboxProps {
  name: string;
  value?: string | boolean;
  required?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  errorText?: string;
  rightCheckbox?: boolean;
}

const DEFAULT_VALUES = {
  value: '',
  label: '',
  helpText: '',
  errorText: '',
};

export default function Checkbox(props: CheckboxProps) {
  const state = useStore({
    get useValue() {
      return props.value || DEFAULT_VALUES.value;
    },
    get useLabel() {
      return props.label || DEFAULT_VALUES.label;
    },
    get useHelpText() {
      return props.helpText || DEFAULT_VALUES.helpText;
    },
    get useErrorText() {
      return props.errorText || DEFAULT_VALUES.errorText;
    },
    get rightCheckboxClasses() {
      return props.rightCheckbox
        ? 'grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_24px_!important]'
        : '';
    },
    get inputClasses() {
      return [
        'peer flex self-center w-[18px] h-[18px] border-2 border-gray-500 rounded-sm appearance-none cursor-pointer',
        'hover:border-primary-500 checked:bg-checked-checkbox checked:border-primary-500 disabled:border-gray-500/50',
        'disabled:cursor-not-allowed outline-violet',
        props.indeterminate ? 'bg-indeterminate-checkbox border-primary-500 ' : '',
        props.invalid ? '!border-negative-600' : '',
        props.indeterminate && props.disabled ? '!border-[#b8b8bc] bg-indeterminate-disabled-checkbox ' : '',
        props.rightCheckbox ? 'col-start-[end-col] row-start-[start-row] ' : '',
      ]
        .filter(Boolean)
        .join(' ');
    },
  });

  return (
    <div
      class={`sfui-checkbox relative grid max-w-xs grid-cols-[24px_1fr] gap-x-2.5 right-checkbox ${state.rightCheckboxClasses}`}
    >
      <input
        id={`checkbox-${props.name}`}
        indeterminate={props.indeterminate}
        type="checkbox"
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        invalid={props.invalid}
        class={state.inputClasses}
      />
      <label
        htmlFor={`checkbox-${props.name}`}
        class={
          `text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*']peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed` +
          ' ' +
          (props.rightCheckbox ? '!col-start-[start-col] row-start-[start-row] col-end-[end-col]' : '')
        }
      >
        {state.useLabel}
      </label>
      <span
        class={
          `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body ` +
          ' ' +
          (!props.invalid ? 'hidden' : '') +
          ' ' +
          (props.rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '')
        }
      >
        {state.useErrorText}
      </span>
      <span
        class={
          `col-start-2 mt-0.5 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body` +
          ' ' +
          (props.rightCheckbox ? '!col-start-[start-col]' : '')
        }
      >
        {state.useHelpText}
      </span>
      <span
        class={
          `hidden col-start-1 mt-4 text-xs text-gray-500 peer-required:block peer-disabled:opacity-50 font-body` +
          ' ' +
          (props.rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '')
        }
      >
        *Required
      </span>
    </div>
  );
}
