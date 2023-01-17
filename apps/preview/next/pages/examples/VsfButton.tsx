import {
  VsfButton,
  VsfButtonProps,
  VsfButtonSizes,
  VsfButtonVariants,
} from '@storefront-ui/react/components/VsfButton';
import { VsfIconSearch, VsfIconLock } from '@storefront-ui/react/components/VsfIcons';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { ExamplePageLayout } from '../examples';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': <VsfIconSearch />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': <VsfIconLock />,
});

interface ButtonControls extends Omit<VsfButtonProps<HTMLButtonElement>, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<ButtonControls>(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot',
      },
      {
        type: 'select',
        modelName: 'slotPrefix',
        description: 'slotPrefix',
        propType: 'ReactNode',
        options: prefixSlotOptions.controlsOptions,
      },
      {
        type: 'select',
        modelName: 'slotSuffix',
        description: 'slotSuffix',
        propType: 'ReactNode',
        options: suffixSlotOptions.controlsOptions,
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
      children: 'Hello',
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      type: undefined,
      disabled: undefined,
      greyscale: undefined,
      truncate: undefined,
      link: undefined,
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
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
        tile={state.get.tile}
        rounded={state.get.rounded}
        block={state.get.block}
        link={state.get.link}
        className="max-w-[200px]"
      >
        {state.get.children}
      </VsfButton>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
