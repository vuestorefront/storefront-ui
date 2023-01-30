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
        description: 'Replace first link with an icon',
      },
      {
        type: 'json',
        modelName: 'breadcrumbs',
        propType: 'VsfBreadcrumbType[]',
        propDefaultValue: '[]',
        description: 'Pass array of breadcrumbs links',
      },
      {
        type: 'text',
        modelName: 'ariaLabelHomeIcon',
        propType: 'string',
        propDefaultValue: '',
        description: 'Set aria label for home icon button',
      },
      {
        type: 'text',
        modelName: 'ariaLabelHomeButton',
        propType: 'string',
        propDefaultValue: '',
        description: 'Set aria label for more button',
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
      ariaLabelHomeIcon: 'Home icon',
      ariaLabelHomeButton: 'More button',
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfBreadcrumbs {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
