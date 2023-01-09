import { VsfButton, VsfButtonSizes, VsfButtonVariants } from '@storefront-ui/react/components/VsfButton';
import { VsfIconVsfDiamond } from '@storefront-ui/react/components/VsfIcons';
import type { VsfButtonProps } from '@storefront-ui/react/components/VsfButton';
import { ExamplePageLayout } from '../examples';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  type ControlTypes = VsfButtonProps<HTMLButtonElement> & {
    SlotPrefix?: boolean;
    SlotSuffix?: boolean;
    SlotChildren?: string;
  };
  const { state, controls } = prepareControls<ControlTypes>(
    [
      {
        type: 'text',
        modelName: 'SlotChildren',
        description: 'Only for demonstration purposes. Default slot',
      },
      {
        type: 'boolean',
        modelName: 'SlotPrefix',
        description: 'slotPrefix',
      },
      {
        type: 'boolean',
        modelName: 'SlotSuffix',
        description: 'slotSuffix',
      },
      {
        type: 'text',
        modelName: 'link',
        description: 'Change <button> to <a> tag with `href` attribute',
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
        modelName: 'greyscale',
        description: 'Modifier for each variants',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        description: 'Truncate text instead of wrap(default)',
      },
      {
        type: 'boolean',
        modelName: 'tile',
        description: 'Remove border radius',
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
      SlotChildren: 'Hello',
      SlotPrefix: undefined,
      SlotSuffix: undefined,
      type: undefined,
      disabled: undefined,
      greyscale: undefined,
      truncate: undefined,
      variant: VsfButtonVariants.primary,
      size: VsfButtonSizes.base,
      tile: undefined,
      rounded: undefined,
      block: undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfButton
        size={state.get.size}
        variant={state.get.variant}
        disabled={state.get.disabled}
        greyscale={state.get.greyscale}
        truncate={state.get.truncate}
        slotPrefix={state.get.SlotPrefix && <VsfIconVsfDiamond />}
        slotSuffix={state.get.SlotSuffix && <VsfIconVsfDiamond />}
        tile={state.get.tile}
        rounded={state.get.rounded}
        block={state.get.block}
        type={state.get.link ? undefined : 'button'}
        link={state.get.link}
        className="max-w-[200px]"
      >
        {state.get.SlotChildren}
      </VsfButton>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
