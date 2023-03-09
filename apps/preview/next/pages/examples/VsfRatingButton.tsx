/* eslint-disable react/jsx-curly-brace-presence */
import { VsfRatingButton, VsfRatingButtonSize } from '@storefront-ui/react/components/VsfRatingButton';
import * as Icons from '@storefront-ui/react/components/VsfIcons';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIconBase';
import { VsfIconShoppingCartChecked } from '@storefront-ui/react/components/VsfIcons';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'base',
        options: Object.keys(VsfRatingButtonSize),
        propType: 'VsfRatingButtonSize',
      },
      {
        type: 'range',
        modelName: 'max',
        propDefaultValue: 5,
        propType: 'Number',
        options: [
          {
            bind: {
              min: 3,
              max: 10,
            },
          },
        ],
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'Boolean',
        propDefaultValue: false,
      },
      {
        type: 'text',
        modelName: 'name',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'ariaLabel',
        propDefaultValue: '',
        propType: 'String',
      },
      {
        type: 'select',
        modelName: 'renderIconFilled',
        options: Object.keys(Icons),
        propDefaultValue: '',
        propType: 'Function',
        description:
          "Pass the function returning icon component, e.g.: (size?: VsfIconSize) => <VsfIconStar size={size} aria-label={''} />",
      },
      {
        type: 'select',
        modelName: 'renderIconEmpty',
        options: Object.keys(Icons),
        propDefaultValue: '',
        propType: 'Function',
        description:
          "Pass the function returning icon component, e.g.: (size?: VsfIconSize) => <VsfIconStar size={size} aria-label={''} />",
      },
    ],
    {
      size: VsfRatingButtonSize.base,
      disabled: false,
      max: 5,
      value: 0,
      name: 'rating',
      ariaLabel: 'Rating button',
      renderIconFilled: 'VsfIconStar' as keyof typeof Icons,
      renderIconEmpty: 'VsfIconStar' as keyof typeof Icons,
    },
  );

  // fake any icon typing cast
  const RenderIconFilledComponent = Icons[state.get.renderIconFilled] as typeof VsfIconShoppingCartChecked;
  const RenderIconEmptyComponent = Icons[state.get.renderIconEmpty] as typeof VsfIconShoppingCartChecked;

  function onChange(item: number) {
    // eslint-disable-next-line no-console
    console.log('Value changed: ', item);
    state.set({ value: item });
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfRatingButton
        onChange={onChange}
        value={state.get.value}
        size={state.get.size}
        max={state.get.max}
        disabled={state.get.disabled}
        name={state.get.name}
        aria-label={state.get.ariaLabel}
        renderIconFilled={(size?: VsfIconSize) => (
          <RenderIconFilledComponent size={size} aria-label="Rating icon filled" />
        )}
        renderIconEmpty={(size?: VsfIconSize) => (
          <RenderIconEmptyComponent size={size} aria-label="Rating icon not filled" />
        )}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
