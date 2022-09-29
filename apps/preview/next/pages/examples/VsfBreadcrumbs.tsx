import VsfBreadcrumbs from '@sfui/sfui/frameworks/react/components/VsfBreadcrumbs';
import type { VsfBreadcrumbsProps } from '@sfui/sfui/frameworks/react/components/VsfBreadcrumbs/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
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
        { name: 'Page 1', link: '/page1' },
        { name: 'Page 2', link: '/page1' },
        { name: 'Page 3', link: '/page1' },
        { name: 'Page 4', link: '/page1' },
        { name: 'Page 5', link: '/page1' },
      ],
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfBreadcrumbs
          withIcon={state.get.withIconModel}
          breadcrumbs={[
            { name: 'Page 1', link: '/page1' },
            { name: 'Page 2', link: '/page1' },
            { name: 'Page 3', link: '/page1' },
            { name: 'Page 4', link: '/page1' },
            { name: 'Page 5', link: '/page1' },
          ]}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
