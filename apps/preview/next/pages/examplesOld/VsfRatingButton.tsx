import VsfRatingButton, { VsfRatingButtonVariants } from '~/output/blocks/VsfRatingButton/VsfRatingButton';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        propDefaultValue: VsfRatingButtonVariants.base,
        options: Object.keys(VsfRatingButtonVariants),
        propType: 'VsfRatingButtonVariants',
      },
      {
        title: 'max',
        type: 'range',
        modelName: 'maxModel',
        propDefaultValue: 5,
        propType: 'Number',
        options: [
          {
            bind: {
              min: 3,
              max: 10,
            },
          },
        ],
      },
      {
        title: 'disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propType: 'Boolean',
        propDefaultValue: false,
      },
      {
        title: 'Name',
        type: 'text',
        modelName: 'nameModel',
        propType: 'string',
      },
      {
        title: 'Value',
        type: 'range',
        modelName: 'valueModel',
        propDefaultValue: 0,
        propType: 'Number',
        options: [
          {
            bind: {
              min: 0,
              max: 10,
            },
          },
        ],
      },
    ],
    {
      sizeModel: VsfRatingButtonVariants.base,
      disabledModel: false,
      maxModel: 5,
      valueModel: 3,
      nameModel: ''
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRatingButton
          onChange={(e) => state.set({ ...state.get, valueModel: e })}
          size={state.get.sizeModel}
          max={state.get.maxModel}
          disabled={state.get.disabledModel}
          value={state.get.valueModel}
          name={state.get.nameModel}
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
