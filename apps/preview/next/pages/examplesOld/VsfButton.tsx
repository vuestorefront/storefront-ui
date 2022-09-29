import VsfButton, { VsfButtonSizes, VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton';
import { VsfIconVsfDiamond } from "../../output/blocks/VsfIcons/react";
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
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
            value: VsfButtonVariants['destroy-primary'],
          },
          {
            label: 'Destroy Secondary',
            value: VsfButtonVariants['destroy-secondary'],
          },
          {
            label: 'Destroy Tertiary',
            value: VsfButtonVariants['destroy-tertiary'],
          },
        ],
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
        title: 'With Icon',
        type: 'boolean',
        modelName: 'icon',
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
      {
        title: 'Tile',
        type: 'boolean',
        modelName: 'tileModel',
        description: "Remove radius from border"
      },
      {
        title: 'Icon',
        type: 'boolean',
        modelName: 'iconModel',
        description: "Adjust button paddings for icons"
      },
      {
        title: 'Type',
        type: 'select',
        options: ['button', 'submit', 'reset'],
        modelName: 'typeModel',
      },
    ],
    {
      childrenModel: 'Hello',
      linkModel: '',
      disabledModel: false,
      icon: false,
      leftIconModel: false,
      rightIconModel: false,
      variantModel: VsfButtonVariants.primary,
      sizeModel: VsfButtonSizes.base,
      typeModel: '',
      tileModel: false,
      iconModel: false,
    });

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          size={state.get.sizeModel}
          variant={state.get.variantModel}
          disabled={state.get.disabledModel}
          link={state.get.linkModel}
          slotPrefix={state.get.leftIconModel && <VsfIconVsfDiamond />}
          slotSuffix={state.get.rightIconModel && <VsfIconVsfDiamond />}
          type={state.get.typeModel}
          tile={state.get.tileModel}
          icon={state.get.iconModel}
        >
          {state.get.icon && <VsfIconVsfDiamond />}
          {!state.get.icon && state.get.childrenModel}
        </VsfButton>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
