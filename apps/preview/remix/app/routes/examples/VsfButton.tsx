import VsfButton, { VsfButtonSizes, VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function Index() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Content',
        type: 'text',
        modelName: 'childrenModel',
      },
      {
        title: 'Link',
        type: 'text',
        modelName: 'linkModel',
      },
      {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: [
          {
            label: 'Primary',
            value: 'primary',
          },{
            label: 'Secondary',
            value: 'secondary',
          },
          {
            label: 'Tertiary',
            value: 'tertiary',
          },
          {
            label: 'Destroy Primary',
            value: 'destroy-primary',
          },
          {
            label: 'Destroy Secondary',
            value: 'destroy-secondary',
          },
          {
            label: 'Destroy Tertiary',
            value: 'destroy-tertiary',
          }
          ],
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: ['sm', 'base', 'lg'],
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
        },
    ],
    {
        childrenModel: 'Hello',
        linkModel: '',
        disabledModel: false,
        variantModel: VsfButtonVariants.primary,
        sizeModel: VsfButtonSizes.base,
    });
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          size={state.get.sizeModel}
          variant={state.get.variantModel}
          disabled={state.get.disabledModel}
          link={state.get.linkModel}
        >
          { state.get.childrenModel }
        </VsfButton>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
