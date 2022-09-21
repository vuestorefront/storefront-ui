import VsfTag, { VsfTagVariants, VsfTagSizes } from '../../output/blocks/VsfTag/VsfTag.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(VsfTagVariants),
      propDefaultValue: VsfTagVariants.base,
      propType: 'VsfTagVariants'
    },
    {
      title: 'Size',
      type: 'select',
      modelName: 'sizeModel',
      options: Object.keys(VsfTagSizes),
      propDefaultValue: VsfTagSizes.base,
      propType: 'VsfTagSizes'
    },
    {
      title: 'Badge',
      type: 'boolean',
      modelName: 'badgeModel',
      description: '',
      propDefaultValue: 'false',
      propType: 'boolean',
    },
  ], {
    sizeModel: '',
    variantModel: '',
    badgeModel: false,
  })
  return (
    <div className="e-page">
      <div className="e-page-component">
        <div className="mb-2">
          <VsfTag
            variant={state.get.variantModel}
            size={state.get.sizeModel}
            badge={state.get.badgeModel}
          >
            Hello
          </VsfTag>
        </div>
        <div className="mb-2">
          <VsfTag
            variant={state.get.variantModel}
            size={state.get.sizeModel}
            badge={state.get.badgeModel}
            slotPrefix={<VsfIconDot className="vsf-icon-full" />}
          >
            Hello
          </VsfTag>
        </div>
        <div className="mb-2">
          <VsfTag
            variant={state.get.variantModel}
            size={state.get.sizeModel}
            badge={state.get.badgeModel}
            slotSuffix={<VsfIconDot className="vsf-icon-full" />}
          >
            Hello
          </VsfTag>
        </div>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
