import { VsfLink, VsfLinkVariant } from '@storefront-ui/react/components/VsfLink';
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
        modelName: 'tag',
        propType: '"a" | typeof Link',
        propDefaultValue: 'Link | a',
        description:
          'At first component detect if Next env available and use NuxtLink, then priority takes if component has prop on itself, then VsfConfig "linkTag" setting. When tag = "a" page is reloading otherwise route change is within app',
        options: [
          {
            label: 'default(Link)',
            value: 'Link',
          },
          'a',
        ],
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfLinkVariant),
      },
    ],
    {
      link: '/examples/VsfButton',
      variant: VsfLinkVariant.primary,
      tag: 'Link',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfLink tag={state.get.tag === 'Link' ? Link : state.get.tag} link={state.get.link} variant={state.get.variant}>
        Link
      </VsfLink>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
