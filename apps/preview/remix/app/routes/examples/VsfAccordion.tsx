import VsfAccordion, { VsfAccordionHeaderSize } from '../../output/blocks/VsfAccordion/VsfAccordion.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function ExampleVsfAccordion() {
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
        title: 'header Size',
        type: 'select',
        modelName: 'headerSizeModel',
        options: Object.keys(VsfAccordionHeaderSize),
        propDefaultValue: VsfAccordionHeaderSize.base,
        propType: 'VsfAccordionHeaderSize',
      },
      {
        title: 'default slot',
        type: 'text',
        modelName: 'contentModel',
        description: 'Content slot',
        propDefaultValue: '',
        propType: 'string',
      }
    ],
    {
      openModel: false,
      titleModel: 'Header',
      chevronLeftModel: false,
      headerSizeModel: VsfAccordionHeaderSize.base,
      contentModel: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAccordion 
          title={state.get.titleModel}
          open={state.get.openModel}
          chevronLeft={state.get.chevronLeftModel} 
          headerSize={state.get.headerSizeModel}
          children={state.get.contentModel}
        >
        </VsfAccordion>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
