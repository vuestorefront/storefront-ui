import { VsfInput } from '@storefront-ui/react/components/VsfInput';
import { VsfInputProps, VsfInputSize } from '@storefront-ui/react/components/VsfInput/types';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { VsfIconSearch, VsfIconLock } from '@storefront-ui/react/components/VsfIcons';

import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': <VsfIconSearch />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': <VsfIconLock />,
});

interface InputControls extends Omit<VsfInputProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<InputControls>(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfInputSize.base',
        propType: 'VsfInputSize',
        options: Object.keys(VsfInputSize),
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'label',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'type',
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
      size: VsfInputSize.base,
      disabled: false,
      required: false,
      invalid: false,
      readonly: undefined,
      type: 'text',
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
    state.set({ ...state.get, value: event?.target.value });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfInput
        size={state.get.size}
        type={state.get.type}
        value={state.get.value}
        label={state.get.label}
        placeholder={state.get.placeholder}
        helpText={state.get.helpText}
        errorText={state.get.errorText}
        requiredText={state.get.requiredText}
        disabled={state.get.disabled}
        invalid={state.get.invalid}
        required={state.get.required}
        readonly={state.get.readonly}
        characterLimit={state.get.characterLimit}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
        onChange={onChange}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
