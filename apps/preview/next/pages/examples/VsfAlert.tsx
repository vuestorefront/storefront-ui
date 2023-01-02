import { VsfAlert, VsfAlertTypes, VsfAlertVariants } from '@storefront-ui/react/components/VsfAlert/index';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/react/components/VsfButton/index';
import { VsfIconChat } from '@storefront-ui/react/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const slotContent = ['none', 'custom slot content'] as const;

function Example() {
  const { state, controls } = prepareControls(
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
        propDefaultValue: VsfAlertVariants.gray,
        options: Object.keys(VsfAlertVariants),
        propType: 'VsfAlertVariants',
        description: 'Alert color variant, affect rendered icon.',
      },
      {
        type: 'select',
        modelName: 'type',
        propDefaultValue: VsfAlertTypes.temporary,
        options: Object.keys(VsfAlertTypes),
        propType: 'VsfAlertTypes',
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
        modelName: 'prefix',
        options: slotContent,
        propType: 'ReactElement',
        description: 'Content that replaces the default prefix icon.',
      },
      {
        type: 'select',
        modelName: 'suffix',
        options: slotContent,
        propType: 'ReactElement',
        description: 'Content that replaces the default suffix close button.',
      },
    ],
    {
      open: true,
      variant: undefined,
      type: VsfAlertTypes.persistent,
      text: 'Informative text',
      header: 'Header',
      withShadow: undefined,
      hidePrefix: undefined,
      prefix: slotContent[0],
      suffix: slotContent[0],
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAlert
          open={state.get.open}
          onOpenChange={(open) => state.set({ ...state.get, open })}
          variant={state.get.variant}
          type={state.get.type}
          text={state.get.text}
          header={state.get.header}
          withShadow={state.get.withShadow}
          hidePrefix={state.get.hidePrefix}
          prefix={state.get.prefix !== 'none' && <VsfIconChat />}
          suffix={state.get.suffix !== 'none' && <VsfButton variant={VsfButtonVariants.tertiary}>Button</VsfButton>}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
