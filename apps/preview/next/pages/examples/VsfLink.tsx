import type { ElementType } from 'react';
import { VsfLink, VsfLinkVariant } from '@storefront-ui/react';
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
        type: 'text',
        modelName: 'as',
        propType: 'React.ElementType',
        description: 'Change element tag',
      },
      {
        type: 'select',
        modelName: 'variant',
        propType: 'VsfLinkVariant',
        options: Object.keys(VsfLinkVariant),
      },
      {
        type: 'text',
        modelName: 'children',
        propType: 'ReactNode',
        description: 'Only for demonstration purposes. Children nodes.',
      },
    ],
    {
      href: '/examples/VsfLink',
      variant: VsfLinkVariant.primary,
      children: 'Link',
      as: 'a' as ElementType<any>,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfLink {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
