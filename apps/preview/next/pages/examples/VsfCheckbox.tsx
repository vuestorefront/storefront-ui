/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfCheckbox } from '@storefront-ui/react/components/VsfCheckbox';
import type { VsfCheckboxProps } from '@storefront-ui/react/components/VsfCheckbox/types';
import { useRef, useEffect } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<
    Omit<VsfCheckboxProps, 'onChange'> & { checkedValue: string[]; indeterminate: boolean }
  >(
    [
      {
        type: 'text',
        modelName: 'checkedValue',
        propType: 'string',
        description: 'Example of getting values from group of checkboxes',
      },
      {
        type: 'text',
        modelName: 'value',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        type: 'boolean',
        modelName: 'indeterminate',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
    ],
    {
      value: 'label',
      disabled: false,
      indeterminate: false,
      invalid: false,
      checkedValue: [],
    },
  );

  function onChange(event: Parameters<NonNullable<VsfCheckboxProps['onChange']>>[0]) {
    const { value } = event.target;
    state.set({ ...state.get, checkedValue: [value] });
  }

  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.indeterminate = state.get.indeterminate;
    }
  }, [checkboxRef, state.get.indeterminate]);

  return (
    <ComponentExample controls={{ state, controls }} className="min-h-96">
      <div className="flex items-center">
        <VsfCheckbox
          value={state.get.value}
          disabled={state.get.disabled}
          invalid={state.get.invalid}
          ref={checkboxRef}
          onChange={onChange}
          className="peer"
          id="checkbox"
        />
        <label
          htmlFor="checkbox"
          className="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
        >
          Label
        </label>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
