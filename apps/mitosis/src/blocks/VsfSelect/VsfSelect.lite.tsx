import { useStore, useState } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export type SelectOption = {
    label?: string
    value?: string
}
export interface SelectProps {
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  options?: SelectOption[];
  placeholderText?: string;
  requiredText?: string;
  helpText?: string;
  errorText?: string;
  modelValue?: any;
}

const DEFAULT_VALUES = {
  label: '',
  value: '',
  options: [],
  required: false,
  disabled: false,
  invalid: false,
  placeholderText: '--Please choose an option--',
  requiredText: '*Required',
  helpText: '',
  errorText: '',
};

export default function VsfSelect(props: SelectProps) {
  // TODO Refactor: get rid of 'id' prop - wrap <input/> in <label>
  const state = useStore({
    get useValue() {
      return props.value || DEFAULT_VALUES.value;
    },
    get useInvalid() {
      return props.invalid || DEFAULT_VALUES.invalid;
    },
    get useRequired() {
      return props.required || DEFAULT_VALUES.required;
    },
    get useDisabled() {
      return props.disabled || DEFAULT_VALUES.disabled;
    },
    get useLabel() {
      return props.label || DEFAULT_VALUES.label;
    },
    get useHelpText() {
      return props.helpText || DEFAULT_VALUES.helpText;
    },
    get useRequiredText() {
      return props.requiredText || DEFAULT_VALUES.requiredText;
    },
    get usePlaceholderText() {
      return props.placeholderText || DEFAULT_VALUES.placeholderText;
    },
    get useErrorText() {
      return props.errorText || DEFAULT_VALUES.errorText;
    },
    get errorTextClasses() {
        return classStringFromArray(['order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed',
    props.invalid ? 'block' : 'hidden' ]);
    },
    get useOptions() {
      return props.options || DEFAULT_VALUES.options;
    },
  });

  return (
    <div className="relative">
    <div
      className="after:absolute box-border flex flex-col font-body after:pointer-events-none
        after:content-['<>'] after:top-[42px] after:right-[14px] after:rotate-90
        after:font-base after:text-xl after:text-gray-500 after:z-0"
    >
      <select
        id="select"
        ref="select"
        v-focus
        value={selected}
        invalid={state.useInvalid}
        required={state.useRequiredText}
        disabled={state.useDisabled}
        className="disabled:cursor-not-allowed remove-default-styling order-2
          peer py-3 pl-[16px] pr-3.5 m-px required:m-0 invalid:m-0 active:m-0
          text-gray-900 bg-transparent border border-gray-300 rounded-md
          hover:border-primary-400 active:border-2 active:border-primary-500
          disabled:bg-gray-100 disabled:opacity-50  disabled:text-gray-900/40
          disabled:border-gray-200 invalid:border-negative-600 invalid:border-2 outline-violet"
      >
        <option
          selected={selected === state.useValue}
          className="font-[Arial] bg-gray-300"
          disabled={true}
          value=""
        >
          --Please choose an option--
        </option>
        {props.options?.map((option, index) => <option key={index}>{option.label}</option> )}
        {/*  */}
      </select>
      <label
        for="select"
        className="peer-required:after:content-['*'] peer-required:after:text-sm order-1 mt-2 text-sm
        text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed font-medium"
      >{ state.useLabel }</label>
      <span
        className="order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed"
        className={state.useInvalid? 'block' : 'hidden'}
      >
        { state.useErrorText }
      </span>
      <span
        class="order-4 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed"
      >{ state.useHelpText }</span>
      <span
        class="order-5 hidden mt-1 text-xs text-gray-500 peer-required:block peer-disabled:cursor-not-allowed"
      >*Required</span>
    </div>
  </div>
  );
}
