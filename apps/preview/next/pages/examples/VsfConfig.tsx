import { VsfLink, VsfLinkVariant } from '@storefront-ui/react/components/VsfLink';
import { VsfConfig } from '@storefront-ui/react/components/VsfConfig';
import Link from 'next/link';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'link',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'linkTag',
        propType: '"a" | Link',
        propDefaultValue: 'undefined',
        description:
          'Global setting of "linkTag" will be inherited by all VsfLinks, individual setting of "tag" prop on VsfLink component will have priority',
        options: [
          {
            label: 'default(Link)',
            value: 'Link',
          },
          'a',
        ],
      },
    ],
    {
      link: '/examples/VsfButton',
      linkTag: 'Link',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfConfig linkTag={state.get.linkTag === 'Link' ? Link : state.get.linkTag}>
        <VsfLink href={state.get.link} variant={VsfLinkVariant.primary}>
          Link
        </VsfLink>
      </VsfConfig>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
