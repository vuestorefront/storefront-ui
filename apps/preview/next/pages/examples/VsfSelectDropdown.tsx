import {
  VsfSelectDropdown,
  VsfSelectDropdownProps,
  VsfSelectDropdownSize,
} from '@storefront-ui/react/components/VsfSelectDropdown';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<Omit<VsfSelectDropdownProps, 'onItemClick' | 'onOpenUpdate'>>(
    [
      {
        type: 'json',
        propType: 'array',
        modelName: 'options',
        description:
          'Options passed as array of strings. If not provided then it is needed to add custom option component with desired data format',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'value',
        description: 'Component value',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'label',
        description: 'Component label',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'placeholder',
        description: 'Text placeholder',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'disabled',
        description: 'Disabled state',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'required',
        description: 'Required state',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'invalid',
        description: 'Invalid state',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'helpText',
        description: 'Additional text displayed below component',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'errorText',
        description: 'Text that informs about component errors',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'requiredText',
        description: 'Text that informs about required state of the component',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfSelectDropdownSize),
        description: 'Sizes of the component. There are 3 sizes: sm, base and lg',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'loading',
        description: 'Loading state for list options',
      },
    ],
    {
      options: ['t-shirt', 'sweater', 'jacket', 'coat', 'jeans', 'socks', 'shorts', 'tracksuit'],
      value: '',
      placeholder: 'Placeholder text',
      label: 'Label',
      disabled: undefined,
      required: undefined,
      invalid: undefined,
      loading: undefined,
      helpText: 'Help text',
      errorText: 'Error text',
      size: VsfSelectDropdownSize.base,
      requiredText: '*Required',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSelectDropdown
        {...state.get}
        onItemClick={(value) => {
          state.set({ ...state.get, value, open: false });
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => state.set({ ...state.get, value: event?.target.value })}
        onOpenUpdate={(open) => {
          state.set({ ...state.get, open });
        }}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
