import { SfTextarea, SfTextareaSize } from '@storefront-ui/react';
import classNames from 'classnames';
import type { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'SfInputSize.base',
        propType: 'SfInputSize',
        options: Object.keys(SfTextareaSize),
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
    ],
    {
      size: SfTextareaSize.base,
      disabled: false,
      required: false,
      invalid: false,
      readonly: undefined,
      placeholder: 'Write something about yourself',
      helpText: 'Do not include personal or financial information.',
      requiredText: 'Required text',
      errorText: 'Error message',
      label: 'Description',
      characterLimit: 12,
      value: '',
    },
  );

  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    state.set({ value: event.target.value });
  }
  const isAboveLimit = state.get.characterLimit ? state.get.value.length > state.get.characterLimit : false;
  const charsCount = state.get.characterLimit ? state.get.characterLimit - state.get.value.length : null;

  const getCharacterLimitClass = () => (isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500');

  return (
    <ComponentExample controls={{ state, controls }}>
      <label>
        <span
          className={classNames('typography-text-sm font-medium', {
            'cursor-not-allowed text-disabled-500': state.get.disabled,
          })}
        >
          {state.get.label}
        </span>
        <SfTextarea
          name={state.get.label}
          size={state.get.size}
          value={state.get.value}
          invalid={state.get.invalid}
          placeholder={state.get.placeholder}
          disabled={state.get.disabled}
          readOnly={state.get.readonly}
          onChange={onChange}
          className={classNames('w-full block', {
            '!bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': state.get.disabled,
            '!bg-disabled-100 !ring-disabled-300 !ring-1 !text-neutral-500': state.get.readonly,
          })}
        />
      </label>
      <div className="flex justify-between">
        <div>
          {state.get.invalid && !state.get.disabled && (
            <p className="typography-error-sm text-negative-700 font-medium mt-0.5">{state.get.errorText}</p>
          )}
          {state.get.helpText && (
            <p
              className={classNames(
                'typography-hint-xs mt-0.5',
                state.get.disabled ? 'text-disabled-500' : 'text-neutral-500',
              )}
            >
              {state.get.helpText}
            </p>
          )}
          {state.get.requiredText && state.get.required ? (
            <p className="mt-1 typography-text-sm font-normal text-neutral-500 before:content-['*']">
              {state.get.requiredText}
            </p>
          ) : null}
        </div>
        {state.get.characterLimit && !state.get.readonly ? (
          <p
            className={classNames(
              'typography-error-xs mt-0.5',
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
