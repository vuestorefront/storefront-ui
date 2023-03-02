import VsfSwitch from '@storefront-ui/react/components/VsfSwitch/VsfSwitch';
import type { VsfSwitchProps } from '@storefront-ui/react/components/VsfSwitch/types';
import { ChangeEvent } from 'react';
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
        type: 'text',
        modelName: 'label',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
      },
    ],
    {
      value: 'value',
      disabled: false,
      checkedValue: [],
    },
  );

  function onChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    if (state.get.checkedValue.indexOf(value) > -1) {
      state.set({ ...state.get, checkedValue: state.get.checkedValue.filter((val) => val !== value) });
    } else {
      state.set({ ...state.get, checkedValue: [...state.get.checkedValue, value] });
    }
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSwitch value={state.get.value} disabled={state.get.disabled} onChange={onChange} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
