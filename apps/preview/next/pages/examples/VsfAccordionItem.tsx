import VsfAccordionItem from '@sfui/sfui/frameworks/react/components/VsfAccordionItem';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'title',
        type: 'text',
        modelName: 'titleModel',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        title: 'open',
        type: 'boolean',
        modelName: 'openModel',
        propDefaultValue: false,
        propType: 'boolean',
      },
      {
        title: 'chevronLeft',
        type: 'boolean',
        modelName: 'chevronLeftModel',
        propType: 'boolean',
      },
      {
        title: 'children',
        type: 'text',
        modelName: 'childrenModel',
        description: 'Children prop for content',
        propDefaultValue: '',
        propType: '---',
      },
    ],
    {
      openModel: false,
      titleModel: 'Header',
      chevronLeftModel: false,
      childrenModel:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAccordionItem
          title={state.get.titleModel}
          open={state.get.openModel}
          chevronLeft={state.get.chevronLeftModel}
        >
          {state.get.childrenModel}
        </VsfAccordionItem>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
