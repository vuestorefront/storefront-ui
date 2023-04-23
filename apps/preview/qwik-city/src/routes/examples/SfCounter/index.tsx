import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfCounter, SfCounterSize } from '@storefront-ui/qwik';
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
          modelName: 'value',
          propType: 'string',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfCounterSize),
          propDefaultValue: SfCounterSize.base,
          propType: 'SfCounterSize',
        },
        {
          type: 'boolean',
          modelName: 'pill',
          propType: 'boolean',
        },
        {
          type: 'select',
          modelName: 'fill',
          options: ['bg-white', 'bg-neutral-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
          propType: '---',
          description: 'Only for demonstration purposes, background is controlled by custom class',
        },
      ] satisfies ControlsType,
      state: {
        value: '123',
        size: SfCounterSize.base,
        pill: false,
        fill: '',
      },
    };
  });

  return (
    <ComponentExample>
      <SfCounter
        size={examplesState.data.state.size}
        pill={examplesState.data.state.pill}
        class={examplesState.data.state.fill}
      >
        {examplesState.data.state.value}
      </SfCounter>
    </ComponentExample>
  );
});
