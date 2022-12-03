import { VsfRadioAlignments } from '@sfui/sfui/frameworks/react/components/VsfRadio/types';
import VsfRadio from '@sfui/sfui/frameworks/react/components/VsfRadio/VsfRadio';
import VsfRadioGroup from '@sfui/sfui/frameworks/react/components/VsfRadio/VsfRadioGroup';
import { ChangeEvent } from 'react';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'id',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'text',
        modelName: 'name',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'select',
        options: Object.keys(VsfRadioAlignments),
        modelName: 'alignment',
        propType: 'VsfRadioAlignment',
        propDefaultValue: VsfRadioAlignments.leading,
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'required',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
        propDefaultValue: '',
      },
    ],
    {
      id: 'radio-1',
      name: 'radio',
      label: 'Radio 1',
      value: 'radio 1',
      alignment: VsfRadioAlignments.leading,
      disabled: false,
      required: false,
      helpText: 'Help text',
      selectedValue: '',
      radioGroupModelValue: '',
    },
  );
  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    state.set({
      ...state.get,
      selectedValue: event.target.value,
    });
  }
  return (
    <div className="e-page">
      <div className="relative e-page-component">
        <VsfRadioGroup id="radiogroup1">
          <VsfRadio
            id={state.get.id}
            name={state.get.name}
            label={state.get.label}
            value={state.get.selectedValue}
            alignment={state.get.alignment}
            help-text={state.get.helpText}
            disabled={state.get.disabled}
            required={state.get.required}
            onChange={onChangeHandler}
          />
        </VsfRadioGroup>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
