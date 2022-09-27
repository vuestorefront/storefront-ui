import VsfBreadcrumbs from '@sfui/sfui/frameworks/react/components/VsfBreadcrumbs';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'WithIcon',
        type: 'boolean',
        modelName: 'withIconModel',
        propType: 'boolean',
      },
      {
        title: 'Breadcrumbs',
        type: 'json',
        modelName: 'breadcrumbsModel',
        propType: 'VsfBreadcrumbType[]',
        propDefaultValue: '[]'
      },
    ],
    {
      withIconModel: false,
      breadcrumbsModel: [
        { name: 'Page 1', link: '/page1' },
        { name: 'Page 2', link: '/page1' },
        { name: 'Page 3', link: '/page1' },
        { name: 'Page 4', link: '/page1' },
        { name: 'Page 5', link: '/page1' },
      ],
    },
  );
  return <div className="e-page">
    <div className="e-page-component">
      <VsfBreadcrumbs
        withIcon={state.get.withIconModel}
        breadcrumbs={[
          { name: 'Page 1', link: '/page1' },
          { name: 'Page 2', link: '/page1' },
          { name: 'Page 3', link: '/page1' },
          { name: 'Page 4', link: '/page1' },
          { name: 'Page 5', link: '/page1' },
        ]} />
    </div>
    <div className="e-page-controls">
      <Controls {...{ state, controls }} />
    </div>
  </div>;
}

Example.getLayout = ExamplePageLayout;
export default Example;
