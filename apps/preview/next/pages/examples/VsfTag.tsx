import { VsfTag, VsfTagVariants, VsfTagSizes, VsfTagAriaLiveValues } from '@storefront-ui/react/components/VsfTag';
import { VsfIconSizeEnum } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconCheck } from '@storefront-ui/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'boolean',
        modelName: 'strong',
        description: 'Set stronger color contrast and font weight',
      },
      {
        type: 'boolean',
        modelName: 'showIcon',
        description: 'Show or hide the icon',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfTagVariants),
        description: 'Set color variant',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfTagSizes),
        description: 'Set size variant',
      },
      {
        type: 'select',
        modelName: 'ariaLiveValue',
        options: ['polite', 'off', 'assertive'],
        description: 'Set aria-live value',
      },
    ],
    {
      label: 'Label',
      variant: VsfTagVariants.gray,
      size: VsfTagSizes.base,
      strong: false,
      showIcon: false,
      ariaLiveValue: VsfTagAriaLiveValues.polite,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfTag
          size={state.get.size}
          label={state.get.label}
          variant={state.get.variant}
          strong={state.get.strong}
          ariaLive={state.get.ariaLiveValue}
          className="mr-2"
        >
          {state.get.showIcon ? (
            <VsfIconCheck size={state.get.size === VsfTagSizes.base ? VsfIconSizeEnum.sm : VsfIconSizeEnum.xs} />
          ) : null}
        </VsfTag>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
