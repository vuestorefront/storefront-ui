import { VsfDisplayContent } from '@storefront-ui/react/components/VsfDisplayContent';
import { VsfButton } from '@storefront-ui//react/components/VsfButton';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { controls, state } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'title',
        propDefaultValue: '',
        description: 'Set title for Display Content component',
      },
      {
        type: 'text',
        modelName: 'titleAs',
        propDefaultValue: 'h1',
        description: 'Set title tag for Display Content component',
      },
      {
        type: 'text',
        modelName: 'subtitle',
        propDefaultValue: '',
        description: 'Set subtitle for Display Content component',
      },
      {
        type: 'text',
        modelName: 'description',
        propDefaultValue: '',
        description: 'Set description for Display Content component',
      },
    ],
    {
      title: 'Banner title',
      titleAs: 'h1',
      subtitle: 'Subtitle',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  );

  return (
    <ComponentExample controls={{ controls, state }}>
      <div>
        <VsfDisplayContent
          title={state.get.title}
          titleAs={state.get.titleAs}
          subtitle={state.get.subtitle}
          description={state.get.description}
        >
          <VsfButton type="button">Browse deals</VsfButton>
        </VsfDisplayContent>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
