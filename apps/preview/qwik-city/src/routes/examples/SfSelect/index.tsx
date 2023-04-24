import { $, component$, useContext, useTask$ } from '@builder.io/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfSelect, SfSelectSize } from '@storefront-ui/qwik';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'json',
          propType: 'array',
          modelName: 'options',
          description: 'Elements displayed in select options',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'value',
          description: 'Selected value',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'placeholder',
          description: 'Placeholder for select',
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
          modelName: 'label',
          description: 'Label for select',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfSelectSize),
          description: 'Select can have 3 sizes: `sm`, `base` or `lg`',
        },
      ] satisfies ControlsType,
      state: {
        options: [
          { label: 'red', value: 'red' },
          { label: 'blue', value: 'blue' },
          { label: 'yellow', value: 'yellow' },
          { label: 'green', value: 'green' },
          { label: 'gray', value: 'gray' },
          { label: 'black', value: 'black' },
          { label: 'brown', value: 'brown' },
        ],
        value: '',
        placeholder: '-- Select --',
        disabled: false,
        required: false,
        invalid: false,
        label: 'Label',
        size: SfSelectSize.base,
      },
    };
  });

  const onChange$ = $((event: React.ChangeEvent) => {
    examplesState.data.state = { ...examplesState.data.state, value: (event.target as HTMLSelectElement).value };
  });

  return (
    <ComponentExample>
      <label>
        <span
          class={{
            'pb-1 text-sm font-body font-medium': true,
            "after:content-['*'] after:text-sm": examplesState.data.state.required,
            'text-disabled-500 cursor-not-allowed': examplesState.data.state.disabled,
          }}
        >
          {examplesState.data.state.label}
        </span>
        <SfSelect {...examplesState.data.state} onChange$={onChange$}>
          {examplesState.data.state.options.map((option: { label: string; value: string }) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </label>
    </ComponentExample>
  );
});
