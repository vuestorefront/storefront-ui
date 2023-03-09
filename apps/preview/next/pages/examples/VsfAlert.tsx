import { VsfAlert, VsfAlertProps, VsfAlertType, VsfAlertVariant } from '@storefront-ui/react/components/VsfAlert/index';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton/index';
import { VsfIconThumbUp } from '@storefront-ui/react/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Custom icon': <VsfIconThumbUp />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Custom component': <VsfButton variant={VsfButtonVariant.tertiary}>Button</VsfButton>,
});

interface AlertControls extends Omit<VsfAlertProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<AlertControls>(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Controls whether Alert component is open or not.',
      },
      {
        type: 'select',
        modelName: 'variant',
        propDefaultValue: VsfAlertVariant.neutral,
        options: Object.keys(VsfAlertVariant),
        propType: 'VsfAlertVariant',
        description: 'Alert color variant, affect rendered icon.',
      },
      {
        type: 'select',
        modelName: 'type',
        propDefaultValue: VsfAlertType.temporary,
        options: Object.keys(VsfAlertType),
        propType: 'VsfAlertType',
        description: 'Shows/hides close button',
      },
      {
        type: 'text',
        modelName: 'text',
        propType: 'string',
        description: "Alert header text used unless VsfAlerts' children are provided.",
      },
      {
        type: 'text',
        modelName: 'header',
        propType: 'string',
        description:
          'Alert header displayed on top `text` paragraph. To customize it - pass in ReactElement instead of a string.',
      },
      {
        type: 'text',
        modelName: 'ariaLabelClose',
        propType: 'string',
        propDefaultValue: 'Close',
        description: 'Aria label of the default close button icon',
      },
      {
        type: 'boolean',
        modelName: 'withShadow',
        propType: 'boolean',
        propDefaultValue: 'false',
        description: 'Shows notification shadow',
      },
      {
        type: 'boolean',
        modelName: 'hidePrefix',
        propType: 'boolean',
        propDefaultValue: 'false',
        description: 'Hides prefix content',
      },
      {
        type: 'boolean',
        modelName: 'hideSuffix',
        propType: 'boolean',
        propDefaultValue: 'false',
        description: 'Hides suffix content',
      },
      {
        type: 'select',
        options: prefixSlotOptions.controlsOptions,
        modelName: 'slotPrefix',
        propType: 'ReactNode',
        description: 'Prefix content. If not provided the variant-related icon is used as an alert prefix.',
      },
      {
        type: 'select',
        options: suffixSlotOptions.controlsOptions,
        modelName: 'slotSuffix',
        propType: 'ReactNode',
        description:
          'Suffix content. If not provided the close button is used as an alert suffix (but only when variant = temporary).',
      },
    ],
    {
      open: true,
      variant: undefined,
      type: VsfAlertType.persistent,
      text: 'Informative text',
      header: 'Header',
      withShadow: undefined,
      ariaLabelClose: 'Close',
      hidePrefix: undefined,
      hideSuffix: undefined,
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfAlert
        {...state.get}
        onOpenChange={(open) => state.set({ open })}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
