import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfProgressLinear, SfProgressLinearSize, SfProgressSize } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'select',
          modelName: 'size',
          options: [...Object.keys(SfProgressLinearSize), ...Object.keys(SfProgressSize)],
          propDefaultValue: SfProgressSize.base,
          propType: 'SfProgressLinearSize | SfProgressSize',
          description:
            'This prop is responsible for progress size. There are 9 sizes: minimal, xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
        },
        {
          type: 'range',
          modelName: 'value',
          propDefaultValue: 0,
          propType: 'number',
          description: 'Progress value',
        },
        {
          type: 'text',
          propType: 'string',
          propDefaultValue: 'Progress element',
          modelName: 'ariaLabel',
          description: 'Aria label value',
        },
      ] satisfies ControlsType,
      state: {
        value: 0,
        size: SfProgressSize.base,
        ariaLabel: 'Progress element',
      },
    };
  });

  return (
    <ComponentExample>
      <SfProgressLinear
        value={Number(examplesState.data.state.value)}
        size={examplesState.data.state.size}
        ariaLabel={examplesState.data.state.ariaLabel}
      />
    </ComponentExample>
  );
});
