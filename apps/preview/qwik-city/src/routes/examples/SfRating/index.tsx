import { component$, useContext, useSignal, useTask$ } from '@builder.io/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfRating, SfRatingSize } from '@storefront-ui/qwik';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  // TODO check if SfRating works as expected
  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'range',
          modelName: 'value',
          propDefaultValue: 0,
          propType: 'number',
          options: [
            {
              bind: {
                min: 0,
                max: 5,
                step: 0.1,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'max',
          propDefaultValue: 5,
          propType: 'number',
          options: [
            {
              bind: {
                min: 1,
                step: 1,
                max: 10,
              },
            },
          ],
        },
        {
          type: 'boolean',
          modelName: 'halfIncrement',
          propType: 'boolean',
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(SfRatingSize),
          propDefaultValue: SfRatingSize.base,
          propType: 'SfRatingSize',
        },
      ] satisfies ControlsType,
      state: {
        value: 3,
        max: 5,
        size: SfRatingSize.base,
        halfIncrement: false,
      },
    };
  });

  return (
    <ComponentExample>
      <SfRating
        value={Number(examplesState.data.state.value)}
        max={Number(examplesState.data.state.max)}
        size={examplesState.data.state.size}
        halfIncrement={examplesState.data.state.halfIncrement}
      />
    </ComponentExample>
  );
});
