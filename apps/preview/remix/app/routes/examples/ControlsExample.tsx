
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function ControlsExample() {
  const { state, controls } = prepareControls([
    {
      title: 'Text',
      type: 'text',
      modelName: 'textModel',
    },
    {
      title: 'Boolean',
      type: 'boolean',
      modelName: 'booleanModel',
    },
    {
      title: 'Range Default',
      type: 'range',
      modelName: 'rangeModel',
    },
    {
      title: 'Range step 10',
      type: 'range',
      modelName: 'rangeModel',
      options: [{
        bind: {
          step: 10,
        },
      }],
    },
    {
      title: 'Select options object',
      type: 'select',
      modelName: 'selectModel',
      options: [{
        label: 'Label1',
        value: 'value1',
      }, {
        label: 'Label2',
        value: 'value2',
      }],
    },
    {
      title: 'Select options Array',
      type: 'select',
      modelName: 'selectModel2',
      options: ['Label1', 'Label2'],
    },
    {
      title: 'Checkbox option object',
      type: 'checkbox',
      modelName: 'checkboxModel',
      options: [{
        label: 'Label1',
        value: 'value1',
      }, {
        label: 'Label2',
        value: 'value2',
      }, {
        label: 'Disabled',
        value: 'value3',
        bind: {
          disabled: true
        }
      }],
    },
    {
      title: 'Checkbox options Array',
      type: 'checkbox',
      modelName: 'checkboxModel2',
      options: ['Label1', 'Label2'],
    },
    {
      title: 'Checkbox true/false from string',
      type: 'checkbox',
      modelName: 'checkboxModelTrueFalse',
      options: ['SomeString'],
    },
    {
      title: 'Radio options object',
      type: 'radio',
      modelName: 'radioModel',
      options: [{
        label: 'Label1',
        value: 'value1',
      }, {
        label: 'Label2',
        value: 'value2',
      }],
    },
    {
      title: 'Radio options Array',
      type: 'radio',
      modelName: 'radioModel2',
      options: ['Label1', 'Label2'],
    },
  ], {
    textModel: 'Default',
    booleanModel: false,
    rangeModel: 10,
    selectModel: '',
    selectModel2: '',
    checkboxModel: [],
    checkboxModel2: [],
    checkboxModelTrueFalse: '',
    radioModel: '',
    radioModel2: ''
  })
  return (
    <div className="e-page">
      <div className="e-page-component">
        <strong>Text</strong>
        <div>textModel - {state.get.textModel}</div>
        <strong>Boolean</strong>
        <div>booleanModel - {state.get.booleanModel.toString()}</div>
        <strong>Range</strong>
        <div>rangeModel - {state.get.rangeModel.toString()}</div>
        <strong>Select</strong>
        <div>selectModel - {state.get.selectModel}</div>
        <div>selectModel2 - {state.get.selectModel2}</div>
        <strong>Checkbox</strong>
        <div>checkboxModel - {JSON.stringify(state.get.checkboxModel)}</div>
        <div>checkboxModel2 - {JSON.stringify(state.get.checkboxModel2)}</div>
        <div>checkboxModelTrueFalse - {JSON.stringify(state.get.checkboxModelTrueFalse)}</div>
        <strong>Radio</strong>
        <div>radioModel - {state.get.radioModel}</div>
        <div>radioModel2 - {state.get.radioModel2}</div>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
