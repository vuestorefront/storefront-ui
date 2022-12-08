import { VsfRadioGroupDirections } from '@sfui/sfui/frameworks/react/components/VsfRadio/types';
import VsfRadio from '@sfui/sfui/frameworks/react/components/VsfRadio/VsfRadio';
import VsfRadioGroup from '@sfui/sfui/frameworks/react/components/VsfRadio/VsfRadioGroup';
import { ChangeEvent } from 'react';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const radioData = [
    {
      id: 'radio-1',
      name: 'radio',
      label: 'Radio 1',
      value: 'radio 1',
      helpText: 'Help text',
    },
    {
      id: 'radio-2',
      name: 'radio',
      label: 'Radio 2',
      value: 'radio 2',
      helpText: '',
    },
  ];
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
        modelName: 'legend',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'select',
        options: Object.keys(VsfRadioGroupDirections),
        modelName: 'direction',
        propType: 'VsfRadioGroupDirections',
        propDefaultValue: VsfRadioGroupDirections.vertical,
      },
      {
        type: 'boolean',
        modelName: 'required',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'invalid',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'errorText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'requiredText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'json',
        modelName: 'radioDataModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
    ],
    {
      id: 'radio-group-1',
      legend: '',
      required: false,
      invalid: false,
      helpText: '',
      requiredText: '',
      errorText: 'Error message',
      direction: VsfRadioGroupDirections.vertical,
      radioDataModel: radioData,
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
        <VsfRadioGroup
          id={state.get.id}
          legend={state.get.legend}
          direction={state.get.direction}
          required={state.get.required}
          invalid={state.get.invalid}
          helpText={state.get.helpText}
          requiredText={state.get.requiredText}
          errorText={state.get.errorText}
        >
          {state.get.radioDataModel.map((radio) => (
            <VsfRadio
              id={radio.id}
              key={radio.id}
              name={radio.name}
              label={radio.label}
              value={radio.value}
              helpText={radio.helpText}
              required={state.get.required}
              className="mb-4 mr-6"
              onChange={onChangeHandler}
            />
          ))}
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
