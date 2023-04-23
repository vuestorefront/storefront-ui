import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfLink, SfLinkVariant } from '@storefront-ui/qwik';
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
          modelName: 'href',
          propType: 'string',
          description: 'Only for demonstration purposes. Component href attribute',
        },
        {
          type: 'select',
          modelName: 'variant',
          propType: 'SfLinkVariant',
          propDefaultValue: 'primary',
          options: Object.keys(SfLinkVariant),
        },
        {
          type: 'text',
          modelName: 'slot',
          propType: 'Element',
          description: 'Only for demonstration purposes. Children nodes.',
        },
      ] satisfies ControlsType,
      state: {
        href: '#',
        variant: SfLinkVariant.primary,
        slot: 'Link',
      },
    };
  });

  return (
    <ComponentExample>
      <SfLink {...examplesState.data.state}>{examplesState.data.state.slot}</SfLink>
    </ComponentExample>
  );
});
