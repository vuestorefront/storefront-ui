/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfRadio } from '@storefront-ui/react/components/VsfRadio';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'checked',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'json',
        propType: 'array',
        modelName: 'radioOptions',
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
      id: 'radio-1',
      name: 'radio',
      value: 'radio 1',
      disabled: false,
      invalid: false,
      checked: '',
      radioOptions: [
        {
          label: 'Label',
          value: 'value-1',
          name: 'radio',
        },
        {
          label: 'Label 2',
          value: 'value-2',
          name: 'radio',
        },
      ],
    },
  );
  function onChangeHandler(value: string) {
    state.set({
      checked: value,
    });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      {state.get.radioOptions.map(({ label, value, name }) => (
        <label
          key={value}
          className={classNames('flex items-center mb-4 cursor-pointer', {
            'text-disabled-900 cursor-not-allowed': state.get.disabled,
          })}
        >
          <VsfRadio
            name={name}
            value={value}
            checked={state.get.checked === value}
            disabled={state.get.disabled}
            invalid={state.get.invalid}
            onChange={(event) => {
              onChangeHandler(event.target.value);
            }}
          />
          <span className="ml-2 text-base font-normal leading-6 font-body">{label}</span>
        </label>
      ))}
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
