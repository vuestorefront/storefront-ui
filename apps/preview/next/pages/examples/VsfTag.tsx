import { VsfTag, VsfTagVariant, VsfTagSize, VsfTagAriaLiveValue } from '@storefront-ui/react/components/VsfTag';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconCheck } from '@storefront-ui/react/components/VsfIcons';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
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
        options: Object.keys(VsfTagVariant),
        description: 'Set color variant',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfTagSize),
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
      variant: VsfTagVariant.gray,
      size: VsfTagSize.base,
      strong: false,
      showIcon: false,
      ariaLiveValue: VsfTagAriaLiveValue.polite,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfTag
        size={state.get.size}
        label={state.get.label}
        variant={state.get.variant}
        strong={state.get.strong}
        ariaLive={state.get.ariaLiveValue}
        className="mr-2"
      >
        {state.get.showIcon ? (
          <VsfIconCheck size={state.get.size === VsfTagSize.base ? VsfIconSize.sm : VsfIconSize.xs} />
        ) : null}
      </VsfTag>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
