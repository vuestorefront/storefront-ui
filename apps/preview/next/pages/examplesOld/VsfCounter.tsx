import VsfCounter, { VsfCounterVariants } from '../../output/blocks/VsfCounter/VsfCounter';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Value',
        type: 'text',
        modelName: 'valueModel',
        propType: 'string',
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfCounterVariants),
        propDefaultValue: VsfCounterVariants.base,
        propType: 'VsfCounterVariants',
      },
      {
        title: 'Pill',
        type: 'boolean',
        modelName: 'pillModel',
        propType: 'boolean',
      },
      {
        title: 'Fill color',
        type: 'select',
        modelName: 'fillModel',
        options: ['bg-white', 'bg-gray-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
        propType: '---',
        description: 'Only for demonstration purposes, background is controlled by custom class',
      },
    ],
    {
      valueModel: '123',
      variantModel: '',
      pillModel: false,
      fillModel: 'bg-white',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfCounter size={state.get.variantModel} pill={state.get.pillModel} className={state.get.fillModel}>
          {state.get.valueModel}
        </VsfCounter>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
