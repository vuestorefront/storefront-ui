import VsfButton, {
  VsfButtonSizes,
  VsfButtonVariants,
  VsfButtonColors,
} from '@sfui/sfui/frameworks/react/components/VsfButton';
import { VsfIconVsfDiamond } from '@sfui/sfui/frameworks/react/components/VsfIcons';
import { ElementType } from 'react';
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
        description: 'Change <button> to <a> tag with `href` attribute',
      },
      {
        title: 'Tag',
        type: 'select',
        modelName: 'tagModel',
        options: ['button', 'a'],
        description: 'Explicitly set component tag',
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfButtonVariants),
      },
      {
        title: 'Size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfButtonSizes),
      },
      {
        title: 'Color',
        type: 'select',
        modelName: 'colorModel',
        options: Object.keys(VsfButtonColors),
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
        description: 'Example with icon content',
      },
      {
        title: 'Left Icon',
        type: 'boolean',
        modelName: 'leftIconModel',
        description: 'slotPrefix',
      },
      {
        title: 'Right Icon',
        type: 'boolean',
        modelName: 'rightIconModel',
        description: 'slotSuffix',
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
        title: 'Rounded',
        type: 'boolean',
        modelName: 'roundedModel',
        description: 'Full rounded borders',
      },
      {
        title: 'Block',
        type: 'boolean',
        modelName: 'blockModel',
        description: 'Full container width',
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
      colorModel: VsfButtonColors.primary,
      tileModel: false,
      iconModel: false,
      roundedModel: false,
      blockModel: false,
      tagModel: 'button',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          size={state.get.sizeModel}
          variant={state.get.variantModel}
          color={state.get.colorModel}
          disabled={state.get.disabledModel}
          link={state.get.linkModel}
          slotPrefix={state.get.leftIconModel && <VsfIconVsfDiamond />}
          slotSuffix={state.get.rightIconModel && <VsfIconVsfDiamond />}
          tile={state.get.tileModel}
          icon={state.get.iconModel}
          rounded={state.get.roundedModel}
          block={state.get.blockModel}
          tag={state.get.tagModel as ElementType}
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
