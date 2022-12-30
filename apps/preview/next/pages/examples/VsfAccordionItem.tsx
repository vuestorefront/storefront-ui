import { VsfAccordionItem } from '@storefront-ui/react/components/VsfAccordionItem';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'title',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: false,
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'chevronLeft',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'childrenModel',
        description: 'Children prop for content',
        propDefaultValue: '',
        propType: '---',
      },
    ],
    {
      open: false,
      title: 'Header',
      chevronLeft: false,
      childrenModel:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  );

  const onToggle = () => {
    console.log('toggle handler');
  };

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAccordionItem
          title={state.get.title}
          open={state.get.open}
          chevronLeft={state.get.chevronLeft}
          onToggle={onToggle}
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
