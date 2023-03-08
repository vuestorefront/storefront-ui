import { VsfAccordionItem, VsfAccordionItemSize } from '@storefront-ui/react/components/VsfAccordionItem';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
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
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfAccordionItemSize),
        propType: 'VsfAccordionItemSize',
        propDefaultValue: 'base',
        description: 'Accordion item size. There are 3 sizes: sm, base, lg',
      },
    ],
    {
      open: false,
      title: 'Header',
      chevronLeft: false,
      size: VsfAccordionItemSize.base,
      childrenModel:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  );

  const onToggle = () => {
    // eslint-disable-next-line no-console
    console.log('toggle handler');
  };

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfAccordionItem {...state.get} onToggle={onToggle}>
        {state.get.childrenModel}
      </VsfAccordionItem>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
