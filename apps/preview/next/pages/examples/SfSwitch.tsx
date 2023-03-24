import { SfSwitch, SfSwitchProps } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<SfSwitchProps, 'onChange'> & { checked: boolean }>(
    [
      {
        type: 'boolean',
        modelName: 'checked',
        propType: 'boolean',
        description: 'Example of getting values from group of Switches',
      },
      {
        type: 'text',
        modelName: 'value',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
    ],
    {
      value: 'value',
      disabled: false,
      checked: false,
    },
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    state.set({
      checked,
    });
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfSwitch {...state.get} onChange={onChange} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
