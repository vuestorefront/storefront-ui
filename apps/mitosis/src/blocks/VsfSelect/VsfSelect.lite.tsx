import { useStore, useRef } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export interface SelectProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  options?: any[];
  helptText?: string;
  errorText?: string;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
}

const DEFAULT_VALUES = {
  value: '',
  label: '',
  helpText: '',
  errorText: '',
};

export default function VsfSelect(props: SelectProps) {
  // TODO Refactor: get rid of 'id' prop - wrap <input/> in <label>
  const selected = '';
  const selectRef = useRef<HTMLElement>(null);
  const state = useStore({
    get useValueProp() {
      return props.value || DEFAULT_VALUES.value;
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
  });

  return (
    <div class="relative">
     <div className="after:absolute box-border flex flex-col font-body after:pointer-events-noneafter:content-['<>'] after:top-[42px] after:right-[14px] after:rotate-90 after:font-base after:text-xl after:text-gray-500 after:z-0">
      <select
        id="select"
        ref={selectRef}
        v-model="vueProxyValue"
        value={selected}
        invalid={props.invalid}
        required={props.required}
        disabled={props.disabled}
        class="disabled:cursor-not-allowed remove-default-styling order-2
          peer py-3 pl-[16px] pr-3.5 m-px required:m-0 invalid:m-0 active:m-0
          text-gray-900 bg-transparent border border-gray-300 rounded-md
          hover:border-primary-400 active:border-2 active:border-primary-500
          disabled:bg-gray-100 disabled:opacity-50  disabled:text-gray-900/40
          disabled:border-gray-200 invalid:border-negative-600 invalid:border-2 outline-violet"
      >
        <option
          selected={selected === props.value}
          class="font-[Arial] bg-gray-300"
          value=""
        >
          --Please choose an option--
        </option>
        <option
          v-for="(option, key) in options"
          key={option}
          selected={selected === props.value}
          class="font-[Arial] bg-gray-300"
          value={option}
        >
          {option}
        </option>
      </select>
      <label
        for="select"
        class="peer-required:after:content-['*'] peer-required:after:text-sm order-1 mt-2 text-sm
        text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed font-medium"
      >{ props.label }
      </label>
      <span
        class="order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed"
        class="invalid ? 'block' : 'hidden'"
      >
        { props.errorText }
      </span>
      <span
        class="order-4 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed"
      >{helpText }</span>
      <span
        class="order-5 hidden mt-1 text-xs text-gray-500 peer-required:block peer-disabled:cursor-not-allowed"
      >*Required</span>
    </div>
  </div>
  );
}
