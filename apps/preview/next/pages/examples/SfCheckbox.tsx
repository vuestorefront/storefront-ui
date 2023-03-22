/* eslint-disable jsx-a11y/label-has-associated-control */
import { SfCheckbox } from '@storefront-ui/react';
import type { SfCheckboxProps } from '@storefront-ui/react';
import { useRef, useEffect } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<
    Omit<SfCheckboxProps, 'onChange'> & { checkedValue: string[]; indeterminate: boolean }
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
        description: '(not prop) example allows to add value attribute to input',
      },
      {
        type: 'boolean',
        modelName: 'indeterminate',
        propType: 'boolean',
        description: '(not prop) example change state to indeterminate',
      },
      {
        type: 'boolean',
        modelName: 'invalid',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
        description: '(not prop) example showing disabled state',
      },
    ],
    {
      value: 'label',
      indeterminate: false,
      disabled: false,
      invalid: false,
      checkedValue: [],
    },
  );

  function onChange(event: Parameters<NonNullable<SfCheckboxProps['onChange']>>[0]) {
    const { value } = event.target;
    state.set((currentState) =>
      currentState.checkedValue.indexOf(value) > -1
        ? { ...currentState, checkedValue: currentState.checkedValue.filter((val) => val !== value) }
        : { ...currentState, checkedValue: [...currentState.checkedValue, value] },
    );
  }

  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current === null) return;
    if (state.get.invalid || state.get.disabled) {
      checkboxRef.current.indeterminate = false;
    } else {
      checkboxRef.current.indeterminate = state.get.indeterminate;
    }
  }, [checkboxRef, state.get.indeterminate, state.get.invalid, state.get.disabled]);

  return (
    <ComponentExample controls={{ state, controls }} className="min-h-96">
      <div className="flex items-center">
        <SfCheckbox
          value={state.get.value}
          disabled={state.get.disabled}
          invalid={!state.get.disabled && state.get.invalid}
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
