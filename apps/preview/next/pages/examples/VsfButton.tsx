import VsfButton, { VsfButtonSizes, VsfButtonVariants } from '@sfui/sfui/frameworks/react/components/VsfButton';
import { VsfIconVsfDiamond } from '@sfui/sfui/frameworks/react/components/VsfIcons';
import { ElementType } from 'react';
import type { VsfButtonProps } from '@sfui/sfui/frameworks/react/components/VsfButton';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  type ControlTypes = VsfButtonProps & {
    ExampleLeftIcon: boolean;
    ExampleRightIcon: boolean;
    ExampleIconContent: boolean;
    ExampleTextContent: string;
  };
  const { state, controls } = prepareControls<ControlTypes>(
    [
      {
        type: 'text',
        modelName: 'ExampleTextContent',
        description: 'Only for demonstration purposes.',
      },
      {
        type: 'boolean',
        modelName: 'ExampleIconContent',
        description: 'Only for demonstration purposes.',
      },
      {
        type: 'boolean',
        modelName: 'ExampleLeftIcon',
        description: 'slotPrefix',
      },
      {
        type: 'boolean',
        modelName: 'ExampleRightIcon',
        description: 'slotSuffix',
      },
      {
        type: 'text',
        modelName: 'link',
        description: 'Change <button> to <a> tag with `href` attribute',
      },
      {
        type: 'select',
        modelName: 'tag',
        options: ['button', 'a'],
        description: 'Explicitly set component tag',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfButtonVariants),
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfButtonSizes),
      },
      {
        type: 'boolean',
        modelName: 'disabled',
      },
      {
        type: 'boolean',
        modelName: 'tile',
        description: 'Remove border radius',
      },
      {
        type: 'boolean',
        modelName: 'icon',
        description: 'Adjust button paddings for icons',
      },
      {
        type: 'boolean',
        modelName: 'rounded',
        description: 'Full rounded borders',
      },
      {
        type: 'boolean',
        modelName: 'block',
        description: 'Full container width',
      },
    ],
    {
      ExampleTextContent: 'Hello',
      ExampleLeftIcon: false,
      ExampleRightIcon: false,
      ExampleIconContent: false,
      link: undefined,
      disabled: false,
      variant: VsfButtonVariants.primary,
      size: VsfButtonSizes.base,
      tile: false,
      icon: false,
      rounded: false,
      block: false,
      tag: 'button',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfButton
          size={state.get.size}
          variant={state.get.variant}
          disabled={state.get.disabled}
          link={state.get.link}
          slotPrefix={state.get.ExampleLeftIcon && <VsfIconVsfDiamond />}
          slotSuffix={state.get.ExampleRightIcon && <VsfIconVsfDiamond />}
          tile={state.get.tile}
          icon={state.get.icon}
          rounded={state.get.rounded}
          block={state.get.block}
          tag={state.get.tag as ElementType}
        >
          {state.get.ExampleIconContent ? <VsfIconVsfDiamond /> : state.get.ExampleTextContent}
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
