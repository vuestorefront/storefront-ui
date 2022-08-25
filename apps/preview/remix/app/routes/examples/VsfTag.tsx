import VsfTag, { VsfTagVariants, VsfTagSizes } from '../../output/blocks/VsfTag/VsfTag.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfTagExample() {
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
        <VsfTag 
          variant={state.get.variantModel} 
          size={state.get.sizeModel}
          badge={state.get.badgeModel}
        >
          Hello
        </VsfTag>
        <br/>
        <VsfTag 
          variant={state.get.variantModel} 
          size={state.get.sizeModel} 
          badge={state.get.badgeModel}
          slotBefore={
            <svg width={state.get.sizeModel === 'sm' ? 16 : 20} height={state.get.sizeModel === 'sm' ? 16 : 20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z"/>
            </svg>
          }
        >
          Hello
        </VsfTag>
        <br/>
        <VsfTag 
          variant={state.get.variantModel} 
          size={state.get.sizeModel} 
          badge={state.get.badgeModel}
          slotAfter={
            <svg width={state.get.sizeModel === 'sm' ? 16 : 20} height={state.get.sizeModel === 'sm' ? 16 : 20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z"/>
            </svg>
          }
        >
          Hello
        </VsfTag>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
