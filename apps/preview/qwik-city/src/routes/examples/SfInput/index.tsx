import { $, QwikChangeEvent, component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfIconLock, SfIconSearch, SfInput, SfInputSize } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'select',
          modelName: 'size',
          propDefaultValue: 'SfInputSize.base',
          propType: 'SfInputSize',
          options: Object.keys(SfInputSize),
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'label',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'placeholder',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'helpText',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'requiredText',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'errorText',
        },
        {
          type: 'text',
          propType: 'number',
          modelName: 'characterLimit',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'disabled',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'required',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'invalid',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'readonly',
        },
      ] satisfies ControlsType,
      state: {
        size: SfInputSize.base,
        disabled: false,
        required: false,
        invalid: false,
        readonly: undefined,
        placeholder: 'Placeholder text',
        helpText: 'Help text',
        requiredText: 'Required text',
        errorText: 'Error text',
        label: 'Label',
        characterLimit: 12,
        value: '',
      },
    };
  });

  const onChange = $((event: QwikChangeEvent<HTMLInputElement>) => {
    examplesState.data.state = { ...examplesState.data.state, value: event.target.value };
  });
  const isAboveLimit = examplesState.data.state.characterLimit
    ? examplesState.data.state.value.length > examplesState.data.state.characterLimit
    : false;
  const charsCount = examplesState.data.state.characterLimit
    ? examplesState.data.state.characterLimit - examplesState.data.state.value.length
    : null;

  const getCharacterLimitClass = () => (isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500');

  return (
    <ComponentExample>
      <label>
        <span
          class={`text-sm font-medium ${
            examplesState.data.state.disabled ? 'cursor-not-allowed text-disabled-500' : ''
          }`}
        >
          {examplesState.data.state.label}
        </span>
        <SfInput
          size={examplesState.data.state.size}
          value={examplesState.data.state.value}
          invalid={examplesState.data.state.invalid}
          placeholder={examplesState.data.state.placeholder}
          disabled={examplesState.data.state.disabled}
          readOnly={examplesState.data.state.readonly}
          showSlotPrefix={true}
          showSlotSuffix={true}
          onChange$={onChange}
          wrapperClass={
            examplesState.data.state.disabled || examplesState.data.state.readonly
              ? 'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500'
              : ''
          }
        >
          <div q:slot="prefix">
            <SfIconSearch />
          </div>
          <div q:slot="suffix">
            <SfIconLock />
          </div>
        </SfInput>
      </label>
      <div class="flex justify-between">
        <div>
          {examplesState.data.state.invalid && !examplesState.data.state.disabled && (
            <p class="text-sm text-negative-700 font-medium mt-0.5">{examplesState.data.state.errorText}</p>
          )}
          {examplesState.data.state.helpText && (
            <p class={`text-xs mt-0.5 ${examplesState.data.state.disabled ? 'text-disabled-500' : 'text-neutral-500'}`}>
              {examplesState.data.state.helpText}
            </p>
          )}
          {examplesState.data.state.requiredText && examplesState.data.state.required ? (
            <p class="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">
              {examplesState.data.state.requiredText}
            </p>
          ) : null}
        </div>
        {examplesState.data.state.characterLimit && !examplesState.data.state.readonly ? (
          <p
            class={`text-xs mt-0.5 ${
              examplesState.data.state.disabled ? 'text-disabled-500' : getCharacterLimitClass()
            }`}
          >
            {charsCount}
          </p>
        ) : null}
      </div>
    </ComponentExample>
  );
});
