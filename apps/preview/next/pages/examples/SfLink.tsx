import { SfLink, SfLinkVariant } from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
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
        modelName: 'children',
        propType: 'ReactNode',
        description: 'Only for demonstration purposes. Children nodes.',
      },
    ],
    {
      href: '#',
      variant: SfLinkVariant.primary,
      children: 'Link',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <SfLink {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
