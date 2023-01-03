import { VsfBreadcrumbs } from '@storefront-ui/react/components/VsfBreadcrumbs';
import type { VsfBreadcrumbsProps } from '@storefront-ui/react/components/VsfBreadcrumbs/types';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfBreadcrumbsProps>(
    [
      {
        type: 'boolean',
        modelName: 'withIcon',
        propType: 'boolean',
      },
      {
        type: 'json',
        modelName: 'breadcrumbs',
        propType: 'VsfBreadcrumbType[]',
        propDefaultValue: '[]',
      },
    ],
    {
      withIcon: false,
      breadcrumbs: [
        { name: 'Next link', link: '/examples/ListOfIcons' },
        { name: 'Page 2', link: '/page1' },
        { name: 'Page 3', link: '/page1' },
        { name: 'Page 4', link: '/page1' },
        { name: 'Page 5', link: '/page1' },
      ],
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfBreadcrumbs withIcon={state.get.withIcon} breadcrumbs={state.get.breadcrumbs} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
