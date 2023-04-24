import { $, component$, useContext, useTask$ } from '@builder.io/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfSwitch } from '@storefront-ui/qwik';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  // TODO check value prop
  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'boolean',
          modelName: 'checked',
          propType: 'boolean',
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
      ] satisfies ControlsType,
      state: {
        value: 'value',
        disabled: false,
        checked: false,
      },
    };
  });

  const onChange = $((event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    examplesState.data.state = { ...examplesState.data.state, checked };
  });

  return (
    <ComponentExample>
      <SfSwitch {...examplesState.data.state} onChange={onChange} />
    </ComponentExample>
  );
});
