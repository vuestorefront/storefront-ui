/* eslint-disable react/jsx-curly-brace-presence */
import VsfRatingButton, { VsfRatingButtonSizes } from '@sfui/sfui/frameworks/react/components/VsfRatingButton';
import VsfIconStar from '@sfui/sfui/frameworks/react/components/VsfIcons/VsfIconStar';
import VsfIconStarOutline from '@sfui/sfui/frameworks/react/components/VsfIcons/VsfIconStarOutline';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIconBase/types';
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
        type: 'text',
        modelName: 'renderIconFilled',
        propDefaultValue: '',
        propType: 'Function',
        description: 'Pass icon component as the function',
      },
      {
        type: 'text',
        modelName: 'renderIconEmpty',
        propDefaultValue: '',
        propType: 'Function',
        description: 'Pass icon component as the function',
      },
    ],
    {
      size: VsfRatingButtonSizes.base,
      disabled: false,
      max: 5,
      value: 0,
      name: 'rating',
      ariaLabel: 'Rating button',
      renderIconFilled: (size?: VsfIconSizeEnum) => <VsfIconStar size={size} ariaLabel={''} />,
      renderIconEmpty: (size?: VsfIconSizeEnum) => <VsfIconStarOutline size={size} ariaLabel={''} />,
    },
  );

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
          renderIconFilled={state.get.renderIconFilled}
          renderIconEmpty={state.get.renderIconEmpty}
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
