import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';
import { SfPopoverPlacement } from '@storefront-ui/shared';
import { SfPopoverStrategy } from '@storefront-ui/shared';
import { SfTooltip } from '@storefront-ui/qwik';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'text',
          modelName: 'label',
          propType: 'string',
          description: 'Set label value',
        },
        {
          type: 'select',
          options: Object.keys(SfPopoverPlacement),
          modelName: 'placement',
          propType: 'SfPopoverPlacement',
          propDefaultValue: SfPopoverPlacement.top,
          description: 'Initial position of tooltip in reference to trigger',
        },
        {
          type: 'select',
          modelName: 'strategy',
          propType: 'SfPopoverStrategy',
          propDefaultValue: SfPopoverStrategy.absolute,
          options: Object.values(SfPopoverStrategy),
          description: 'Tooltip positioning strategy',
        },
        {
          type: 'boolean',
          modelName: 'showArrow',
          propType: 'boolean',
          description: 'Show pointer arrow',
          propDefaultValue: false,
        },
      ] satisfies ControlsType,
      state: {
        label: 'Tooltip text',
        placement: SfPopoverPlacement.top,
        strategy: SfPopoverStrategy.absolute,
        showArrow: false,
      },
    };
  });

  return (
    <ComponentExample  componentContainerClass="flex justify-center items-center">
      <SfTooltip {...examplesState.data.state}>
        <span>Hover me!</span>
      </SfTooltip>
    </ComponentExample>
  );
});
