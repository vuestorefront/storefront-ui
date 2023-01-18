import { VsfAlert, VsfAlertProps, VsfAlertType, VsfAlertVariant } from '@storefront-ui/react/components/VsfAlert/index';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton/index';
import { VsfIconChat } from '@storefront-ui/react/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Custom icon': <VsfIconChat />,
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
        propDefaultValue: VsfAlertVariant.gray,
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
        description:
          'Shows prefix content (which defaults to variant icon). Gets styled with proper icon color based on variant prop.',
      },
      {
        type: 'select',
        options: prefixSlotOptions.controlsOptions,
        modelName: 'slotPrefix',
        propType: 'ReactNode',
        description: 'Content that replaces the default prefix icon.',
      },
      {
        type: 'select',
        options: suffixSlotOptions.controlsOptions,
        modelName: 'slotSuffix',
        propType: 'ReactNode',
        description: 'Content that replaces the default suffix close button.',
      },
    ],
    {
      open: true,
      variant: undefined,
      type: VsfAlertType.persistent,
      text: 'Informative text',
      header: 'Header',
      withShadow: undefined,
      hidePrefix: undefined,
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfAlert
        open={state.get.open}
        onOpenChange={(open) => state.set({ ...state.get, open })}
        variant={state.get.variant}
        type={state.get.type}
        text={state.get.text}
        header={state.get.header}
        withShadow={state.get.withShadow}
        hidePrefix={state.get.hidePrefix}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
