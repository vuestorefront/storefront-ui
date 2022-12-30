/* eslint-disable react/jsx-curly-brace-presence */
import { VsfRatingButton, VsfRatingButtonSizes } from '@storefront-ui/react/components/VsfRatingButton';
import * as Icons from '@storefront-ui/react/components/VsfIcons';
import { VsfIconSizeEnum } from '@storefront-ui/react/components/VsfIconBase';
import { VsfIconAddedToBasket } from '@storefront-ui/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'base',
        options: Object.keys(VsfRatingButtonSizes),
        propType: 'VsfRatingButtonSizes',
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
          "Pass the function returning icon component, e.g.: (size?: VsfIconSizeEnum) => <VsfIconStarOutline size={size} ariaLabel={''} />",
      },
      {
        type: 'select',
        modelName: 'renderIconEmpty',
        options: Object.keys(Icons),
        propDefaultValue: '',
        propType: 'Function',
        description:
          "Pass the function returning icon component, e.g.: (size?: VsfIconSizeEnum) => <VsfIconStarOutline size={size} ariaLabel={''} />",
      },
    ],
    {
      size: VsfRatingButtonSizes.base,
      disabled: false,
      max: 5,
      value: 0,
      name: 'rating',
      ariaLabel: 'Rating button',
      renderIconFilled: 'VsfIconStar' as keyof typeof Icons,
      renderIconEmpty: 'VsfIconStarOutline' as keyof typeof Icons,
    },
  );

  // fake any icon typing cast
  const RenderIconFilledComponent = Icons[state.get.renderIconFilled] as typeof VsfIconAddedToBasket;
  const RenderIconEmptyComponent = Icons[state.get.renderIconEmpty] as typeof VsfIconAddedToBasket;

  function onChange(item: number) {
    // eslint-disable-next-line no-console
    console.log('Value changed: ', item);
    state.set({ ...state.get, value: item });
  }

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfRatingButton
          onChange={onChange}
          value={state.get.value}
          size={state.get.size}
          max={state.get.max}
          disabled={state.get.disabled}
          name={state.get.name}
          ariaLabel={state.get.ariaLabel}
          renderIconFilled={(size?: VsfIconSizeEnum) => <RenderIconFilledComponent size={size} ariaLabel={''} />}
          renderIconEmpty={(size?: VsfIconSizeEnum) => <RenderIconEmptyComponent size={size} ariaLabel={''} />}
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
