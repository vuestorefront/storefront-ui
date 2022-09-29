import VsfTooltip, { VsfTooltipTypes } from '~/output/blocks/VsfTooltip/VsfTooltip';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Label',
        modelName: 'labelModel',
        type: 'text',
        propType: 'string',
      },
      {
        title: 'Type',
        type: 'select',
        modelName: 'typeModel',
        options: Object.keys(VsfTooltipTypes),
        propDefaultValue: VsfTooltipTypes.top,
        propType: 'VsfTooltipTypes',
      },
    ],
    {
      labelModel: 'Label',
      typeModel: VsfTooltipTypes.top,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component flex justify-center items-center h-full">
        <VsfTooltip label={state.get.labelModel} type={state.get.typeModel}>
          <button className="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase">
            hover me
          </button>
        </VsfTooltip>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
