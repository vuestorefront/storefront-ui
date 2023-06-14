import { SfFieldset, SfCheckbox } from '@storefront-ui/react';
import type { SfFieldsetProps } from '@storefront-ui/react';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const checkboxes = [
  {
    label: 'Label-1',
    hint: 'hint-1',
    value: 'value-1',
  },
  {
    label: 'Label-2',
    hint: 'hint-2',
    value: 'value-2',
  },
  {
    label: 'Label-3',
    hint: 'hint-3',
    value: 'value-3',
  },
  {
    label: 'Label-4',
    hint: 'hint-4',
    value: 'value-4',
  },
  {
    label: 'Label-5',
    hint: 'hint-5',
    value: 'value-5',
  },
];

function Example() {
  const { state, controls } = prepareControls<SfFieldsetProps & { checkedValue: string[] }>(
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
        modelName: 'invalid',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
    ],
    {
      disabled: false,
      invalid: false,
      checkedValue: [],
    },
  );

  function onChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    state.set((currentState) =>
      currentState.checkedValue.indexOf(value) > -1
        ? { ...currentState, checkedValue: currentState.checkedValue.filter((val) => val !== value) }
        : { ...currentState, checkedValue: [...currentState.checkedValue, value] },
    );
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfFieldset invalid={state.get.invalid} disabled={state.get.disabled} errorText="Error message" hintText="Hint">
        {checkboxes.map(({ label, hint, value }) => (
          <label
            key={value}
            className={classNames(
              'text-base block font-body mb-4 first-of-type:mt-2 last-of-type:mb-2',
              state.get.disabled ? 'text-disabled-900 cursor-not-allowed' : 'text-gray-900 cursor-pointer',
            )}
          >
            <SfCheckbox
              value={value}
              disabled={state.get.disabled}
              invalid={state.get.invalid}
              onChange={onChange}
            />
            <span className="ml-1">{label}</span>
            <span
              className={classNames(
                'block typography-text-xs ml-6 pt-0.5',
                state.get.disabled ? 'text-disabled-500' : 'text-neutral-500',
              )}
            >
              {hint}
            </span>
          </label>
        ))}
      </SfFieldset>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
