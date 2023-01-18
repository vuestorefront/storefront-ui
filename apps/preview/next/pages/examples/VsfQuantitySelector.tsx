import { VsfQuantitySelector, VsfQuantitySelectorSize } from '@storefront-ui/react/components/VsfQuantitySelector';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        options: Object.keys(VsfQuantitySelectorSize),
        modelName: 'size',
        propType: 'VsfQuantitySelectorSize',
        propDefaultValue: VsfQuantitySelectorSize.base,
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'block',
        propType: 'boolean',
      },
      {
        type: 'range',
        modelName: 'decimal',
        propType: 'number',
        propDefaultValue: '0',
        options: [
          {
            bind: {
              min: 0,
              max: 10,
              step: 1,
            },
          },
        ],
      },
      {
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
        type: 'text',
        modelName: 'inputAriaLabel',
        propType: 'string',
        propDefaultValue: 'Quantity Selector',
      },
      {
        type: 'text',
        modelName: 'inputId',
        propType: 'string',
        propDefaultValue: 'qty-selector',
      },
    ],
    {
      value: 1,
      decimal: 0,
      minValue: 1,
      maxValue: 10,
      step: 1,
      size: VsfQuantitySelectorSize.base,
      disabled: false,
      block: false,
      inputAriaLabel: undefined,
      inputId: undefined,
    },
  );
  function onChange(value: number) {
    state.set({ ...state.get, value });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfQuantitySelector
        value={state.get.value}
        size={state.get.size}
        step={Number(state.get.step)}
        minValue={Number(state.get.minValue)}
        maxValue={Number(state.get.maxValue)}
        disabled={state.get.disabled}
        block={state.get.block}
        inputAriaLabel={state.get.inputAriaLabel}
        inputId={state.get.inputId}
        onChange={onChange}
        decimal={Number(state.get.decimal)}
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
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
