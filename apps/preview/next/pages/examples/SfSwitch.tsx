import { SfSwitch, SfSwitchProps } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<SfSwitchProps, 'onChange'> & { checkedValue: string[] }>(
    [
      {
        type: 'text',
        modelName: 'checkedValue',
        propType: 'string',
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
      checkedValue: [],
    },
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    state.set((currentState) =>
      currentState.checkedValue.indexOf(value) > -1
        ? { ...currentState, checkedValue: currentState.checkedValue.filter((val) => val !== value) }
        : { ...currentState, checkedValue: [...currentState.checkedValue, value] },
    );
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfSwitch value={state.get.value} disabled={state.get.disabled} onChange={onChange} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
