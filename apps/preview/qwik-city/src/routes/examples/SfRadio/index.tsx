import { $, component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfRadio } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
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
      ] satisfies ControlsType,
      state: {
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
    };
  });

  const onChangeHandler = $((value: string) => {
    examplesState.data.state = { ...examplesState.data.state, checked: value };
  });

  return (
    <ComponentExample>
      {examplesState.data.state.radioOptions.map(
        ({ label, value, name }: typeof examplesState.data.state.radioOptions) => (
          <label
            key={value}
            class={{
              'flex items-center mb-4 cursor-pointer': true,
              'text-disabled-900 cursor-not-allowed': examplesState.data.state.disabled,
            }}
          >
            <SfRadio
              name={name}
              value={value}
              checked={examplesState.data.state.checked === value}
              disabled={examplesState.data.state.disabled}
              invalid={examplesState.data.state.invalid}
              onChange$={(event) => {
                onChangeHandler(event.target.value);
              }}
            />
            <span class="ml-2 text-base font-normal leading-6 font-body">{label}</span>
          </label>
        ),
      )}
    </ComponentExample>
  );
});
