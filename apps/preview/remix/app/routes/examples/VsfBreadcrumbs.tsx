import VsfBreadcrumbs from '../../output/blocks/VsfBreadcrumbs/VsfBreadcrumbs.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function ExampleVsfBreadcrumbs() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'WithIcon',
        type: 'checkbox',
        modelName: 'withIconModel',
        propType: 'boolean',
      },
      {
        title: 'Breadcrumbs',
        type: 'json',
        modelName: 'breadcrumbsModel',
        propType: 'VsfBreadcrumbType[]',
        propDefaultValue : '[]'
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
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfBreadcrumbs
          withIcon={state.get.withIconModel}
          breadcrumbs={state.get.breadcrumbsModel}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
