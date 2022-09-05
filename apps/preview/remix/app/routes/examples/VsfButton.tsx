import VsfButton, { VsfButtonSizes, VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton.lite';
import { VsfIconVsfDiamond } from "../../output/blocks/VsfIcons/react";
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function Index() {
  const { state, controls } = prepareControls([
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
          value: VsfButtonVariants.primary,
        },
        {
          label: 'Secondary',
          value: VsfButtonVariants.secondary,
        },
        {
          label: 'Tertiary',
          value: VsfButtonVariants.tertiary,
        },
        {
          label: 'Destroy Primary',
          value: VsfButtonVariants["destroy-primary"],
        },
        {
          label: 'Destroy Secondary',
          value: VsfButtonVariants["destroy-secondary"],
        },
        {
          label: 'Destroy Tertiary',
          value: VsfButtonVariants["destroy-tertiary"],
        }],
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: [VsfButtonSizes.sm, VsfButtonSizes.base, VsfButtonSizes.lg],
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabledModel',
      },
      {
        title: 'Icon',
        type: 'boolean',
        modelName: 'iconModel',
      },
      {
        title: 'Left Icon',
        type: 'boolean',
        modelName: 'leftIconModel',
      },
      {
        title: 'Right Icon',
        type: 'boolean',
        modelName: 'rightIconModel',
      },
    ],
    {
      childrenModel: 'Hello',
      linkModel: '',
      disabledModel: false,
      iconModel: false,
      leftIconModel: false,
      rightIconModel: false,
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
          slotPrefix={state.get.leftIconModel && <VsfIconVsfDiamond className="pr-2.5" />}
          slotSuffix={state.get.rightIconModel && <VsfIconVsfDiamond className="pl-2.5" />}
          children={state.get.iconModel}
        >
          { state.get.iconModel && <VsfIconVsfDiamond /> }
          { !state.get.iconModel && state.get.childrenModel }
        </VsfButton>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
