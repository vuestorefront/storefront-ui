
import VsfSelect from '~/output/blocks/VsfSelect/VsfSelect.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { useState } from 'react';

export default function VsfSelectExample() {
  const [selected, setSelected] = useState('');
  const { state, controls } = prepareControls([
    {
          title: 'Name',
          type: 'text',
          modelName: 'textModel',
          propDefaultValue: '',
          propType: 'string'
        },
        {
          title: 'Value',
          type: 'text',
          modelName: 'valueModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Label',
          type: 'text',
          modelName: 'labelModel',
          propDefaultValue: '',
          propType: 'string'
        },
        {
          title: 'Options',
          type: 'json',
          modelName: 'optionsModel',
          propDefaultValue: '[]',
          propType: 'SelectOption[] '
        },
        {
          title: 'Required',
          type: 'boolean',
          modelName: 'requiredModel',
          propDefaultValue: false,
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propDefaultValue: false,
        },
        {
          title: 'Invalid',
          type: 'boolean',
          modelName: 'invalidModel',
          propDefaultValue: false,
        },
        {
          title: 'Placeholder text',
          type: 'text',
          modelName: 'placeholderTextModel',
          propDefaultValue: '--Please choose an option--'
        },
        {
          title: 'Required text',
          type: 'text',
          modelName: 'requiredTextModel',
          propDefaultValue: '*Required'
        },
        {
          title: 'Help text',
          type: 'text',
          modelName: 'helpTextModel',
          propDefaultValue: 'Help text'
        },
        {
          title: 'Error text',
          type: 'text',
          modelName: 'errorTextModel',
          propDefaultValue: 'Error text'
        }
    ],
    {
        selected: '',
        valueModel: '',
        labelModel: 'Select your favorite fruit',
        requiredModel: false,
        invalidModel: false,
        disabledModel: false,
        optionsModel: [
            {
                label: "Apple",
                value: "apple"
            },
            {
                label: "Banana",
                value: "banana"
            },
            {
                label: "Grapes",
                value: "grapes"
            }
        ],
        placeholderTextModel: '--Please choose an option--',
        requiredTextModel: '*Required',
        helpTextModel: '',
        errorTextModel: ''
      })
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSelect value={selected} invalid={state.get.invalidModel} disabled={state.get.disabledModel} required={state.get.requiredModel} options={state.get.optionsModel} label={state.get.labelModel} placeholderText={state.get.placeholderTextModel} requiredText={state.get.requiredTextModel} helpText={state.get.helpTextModel} errorText={state.get.errorTextModel} modelValue={state.get.valueModel} onChange={(e) => setSelected(e.target.value)} />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
