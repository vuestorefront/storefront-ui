import { VsfInput } from '@storefront-ui/react/components/VsfInput';
import { VsfInputSizes } from '@storefront-ui/react/components/VsfInput/types';

import { ChangeEvent } from 'react';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfInputSize.base',
        propType: 'VsfInputSize',
        options: Object.keys(VsfInputSizes),
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
        modelName: 'errorMessage',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'slotPrefix',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'slotSuffix',
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
      size: VsfInputSizes.base,
      disabled: false,
      required: false,
      invalid: false,
      readonly: undefined,
      placeholder: 'Placeholder text',
      helpText: 'Help text',
      requiredText: 'Required text',
      errorMessage: 'Error message',
      label: 'Label',
      characterLimit: 12,
      inputReadonly: 'Example value',
      slotSuffix: 'Suffix',
      slotPrefix: 'Prefix',
      value: '',
      valueReadonly: 'Example value',
    },
  );
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    state.set({ ...state.get, value: event?.target.value });
  }
  return (
    <div className="e-page">
      <div className="relative max-w-lg e-page-component">
        <VsfInput
          size={state.get.size}
          value={state.get.value}
          label={state.get.label}
          placeholder={state.get.placeholder}
          helpText={state.get.helpText}
          errorMessage={state.get.errorMessage}
          requiredText={state.get.requiredText}
          disabled={state.get.disabled}
          invalid={state.get.invalid}
          required={state.get.required}
          readonly={state.get.readonly}
          characterLimit={state.get.characterLimit}
          slotSuffix={state.get.slotSuffix}
          slotPrefix={state.get.slotPrefix}
          onChange={onChange}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
