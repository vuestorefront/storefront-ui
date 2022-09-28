import VsfButton, { VsfButtonSizes, VsfButtonVariants } from '@sfui/sfui/frameworks/react/components/VsfButton';
import { VsfIconVsfDiamond } from '@sfui/sfui/frameworks/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

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
        description: 'Remove radius from border',
      },
      {
        title: 'Icon',
        type: 'boolean',
        modelName: 'iconModel',
        description: 'Adjust button paddings for icons',
      },
      {
        title: 'Circle',
        type: 'boolean',
        modelName: 'circleModel',
        description: 'Full rounded borders',
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
      tileModel: false,
      iconModel: false,
      circleModel: false,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          size={state.get.sizeModel}
          variant={state.get.variantModel}
          disabled={state.get.disabledModel}
          href={state.get.linkModel}
          slotPrefix={state.get.leftIconModel && <VsfIconVsfDiamond />}
          slotSuffix={state.get.rightIconModel && <VsfIconVsfDiamond />}
          tile={state.get.tileModel}
          icon={state.get.iconModel}
          circle={state.get.circleModel}
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
};

Example.getLayout = ExamplePageLayout;
export default Example;
