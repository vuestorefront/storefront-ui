import { VsfSwitch, VsfSwitchProps } from '@storefront-ui/react/components/VsfSwitch';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<VsfSwitchProps, 'onChange'> & { checkedValue: string[] }>(
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
      {
        type: 'boolean',
        modelName: 'invalid',
        propType: 'boolean',
      },
    ],
    {
      value: 'value',
      disabled: false,
      invalid: false,
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
      <VsfSwitch
        value={state.get.value}
        disabled={state.get.disabled}
        invalid={state.get.invalid}
        onChange={onChange}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
