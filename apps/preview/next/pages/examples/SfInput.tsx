import { SfInput, SfInputSize, SfIconSearch, SfIconLock } from '@storefront-ui/react';
import type { SfInputProps } from '@storefront-ui/react';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': <SfIconSearch />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': <SfIconLock />,
});

interface InputControls extends Omit<SfInputProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<
    InputControls & {
      label: string;
      value: string;
      placeholder: string;
      helpText: string;
      requiredText: string;
      errorText: string;
      characterLimit: number;
      disabled: boolean;
      required: boolean;
      readonly: boolean | undefined;
    }
  >(
    [
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
        type: 'select',
        propType: 'ReactNode',
        modelName: 'slotPrefix',
        options: prefixSlotOptions.controlsOptions,
      },
      {
        type: 'select',
        propType: 'ReactNode',
        modelName: 'slotSuffix',
        options: suffixSlotOptions.controlsOptions,
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
    ],
    {
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
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      value: '',
    },
  );
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    state.set({ value: event.target.value });
  }
  const isAboveLimit = state.get.characterLimit ? state.get.value.length > state.get.characterLimit : false;
  const charsCount = state.get.characterLimit ? state.get.characterLimit - state.get.value.length : null;

  const getCharacterLimitClass = () => (isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500');

  return (
    <ComponentExample controls={{ state, controls }}>
      <label>
        <span
          className={classNames('text-sm font-medium', {
            'cursor-not-allowed text-disabled-500': state.get.disabled,
          })}
        >
          {state.get.label}
        </span>
        <SfInput
          size={state.get.size}
          value={state.get.value}
          invalid={state.get.invalid}
          placeholder={state.get.placeholder}
          disabled={state.get.disabled}
          readOnly={state.get.readonly}
          slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
          slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
          onChange={onChange}
          wrapperClassName={classNames({
            'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500':
              state.get.disabled || state.get.readonly,
          })}
        />
      </label>
      <div className="flex justify-between">
        <div>
          {state.get.invalid && !state.get.disabled && (
            <p className="text-sm text-negative-700 font-medium mt-0.5">{state.get.errorText}</p>
          )}
          {state.get.helpText && (
            <p className={classNames('text-xs mt-0.5', state.get.disabled ? 'text-disabled-500' : 'text-neutral-500')}>
              {state.get.helpText}
            </p>
          )}
          {state.get.requiredText && state.get.required ? (
            <p className="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">{state.get.requiredText}</p>
          ) : null}
        </div>
        {state.get.characterLimit && !state.get.readonly ? (
          <p
            className={classNames(
              'text-xs mt-0.5',
              state.get.disabled ? 'text-disabled-500' : getCharacterLimitClass(),
            )}
          >
            {charsCount}
          </p>
        ) : null}
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
