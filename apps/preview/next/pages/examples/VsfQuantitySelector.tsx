import VsfQuantitySelector, {
  VsfQuantitySelectorSizes,
} from '@sfui/sfui/frameworks/react/components/VsfQuantitySelector';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Size',
        type: 'select',
        options: Object.keys(VsfQuantitySelectorSizes),
        modelName: 'size',
        propType: 'VsfQuantitySelectorSizes',
        propDefaultValue: VsfQuantitySelectorSizes.base,
      },
      {
        title: 'Disabled',
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        title: 'Block',
        type: 'boolean',
        modelName: 'block',
        propType: 'boolean',
      },
      {
        title: 'MinValue',
        type: 'range',
        modelName: 'minValue',
        propType: 'number',
        propDefaultValue: '1',
        options: [
          {
            bind: {
              min: 1,
              max: 10,
              step: 1,
            },
          },
        ],
      },
      {
        title: 'step',
        type: 'range',
        modelName: 'step',
        propType: 'number',
        propDefaultValue: '1',
        options: [
          {
            bind: {
              min: 1,
              max: 10,
              step: 1,
            },
          },
        ],
      },
      {
        title: 'MaxValue',
        type: 'range',
        modelName: 'maxValue',
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
              max: 100,
              step: 1,
            },
          },
        ],
      },
      {
        title: 'inputAriaLabel',
        type: 'text',
        modelName: 'inputAriaLabel',
        propType: 'string',
        propDefaultValue: 'Quantity Selector',
      },
      {
        title: 'inputId',
        type: 'text',
        modelName: 'inputId',
        propType: 'string',
        propDefaultValue: 'qty-selector',
      },
    ],
    {
      value: 1,
      minValue: 1,
      maxValue: 10,
      step: 1,
      size: VsfQuantitySelectorSizes.base,
      disabled: false,
      block: false,
      inputAriaLabel: '',
      inputId: '',
    },
  );
  function onChange(value: number) {
    state.set({ ...state.get, value });
  }
  return (
    <div className="e-page">
      <div className="e-page-component relative">
        <VsfQuantitySelector
          value={state.get.value}
          size={state.get.size}
          step={state.get.step}
          minValue={state.get.minValue}
          maxValue={state.get.maxValue}
          disabled={state.get.disabled}
          block={state.get.block}
          inputAriaLabel={state.get.inputAriaLabel}
          inputId={state.get.inputId}
          onChange={onChange}
        >
          <div className="text-xs font-normal text-center font-body">
            {state.get.disabled ? (
              <span className="text-negative-600 font-medium">Out of stock</span>
            ) : (
              <span>
                <span className="font-medium">{state.get.maxValue}</span>
                &nbsp;in stock
              </span>
            )}
          </div>
        </VsfQuantitySelector>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
