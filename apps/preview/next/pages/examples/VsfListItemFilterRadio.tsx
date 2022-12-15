import VsfListItemFilterRadio, {
  VsfListItemFilterRadioVariant,
  VsfListItemFilterRadioSize,
} from '@sfui/sfui/frameworks/react/components/VsfListItemFilterRadio';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'selected',
        description: 'Show selected value of Filter group',
      },
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'text',
        modelName: 'secondaryText',
        propType: 'string',
        description: 'Set secondary text',
      },
      {
        type: 'text',
        modelName: 'counter',
        propType: 'string',
        description: 'Set counter value',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfListItemFilterRadioSize),
        description: 'Set size variant',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfListItemFilterRadioVariant),
        description: 'Set size variant',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        description: 'Show disabled state of component',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        description: 'Show truncated version of secondary text',
      },
      {
        type: 'text',
        modelName: 'value',
        description: 'Value of radio input',
      },
      {
        type: 'text',
        modelName: 'name',
        description: 'Name for form input group',
      },
    ],
    {
      label: 'Label',
      size: VsfListItemFilterRadioSize.base,
      variant: VsfListItemFilterRadioVariant.left,
      counter: '123',
      secondaryText: 'Secondary text',
      selected: '',
      disabled: false,
      truncate: false,
      value: 'value',
      name: 'name',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <ul className="max-w-sm">
          <VsfListItemFilterRadio
            size={state.get.size}
            variant={state.get.variant}
            label={state.get.label}
            counter={state.get.counter}
            secondaryText={state.get.secondaryText}
            selected={state.get.selected}
            disabled={state.get.disabled}
            truncate={state.get.truncate}
            value={state.get.value}
            name={state.get.name}
            onChange={(selected) => state.set({ ...state.get, selected })}
          />
          <VsfListItemFilterRadio
            size={state.get.size}
            variant={state.get.variant}
            label={`${state.get.label}-2`}
            counter={state.get.counter}
            secondaryText={state.get.secondaryText}
            selected={state.get.selected}
            disabled={state.get.disabled}
            truncate={state.get.truncate}
            value={`${state.get.value}-2`}
            name={state.get.name}
            onChange={(selected) => state.set({ ...state.get, selected })}
          />
        </ul>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
