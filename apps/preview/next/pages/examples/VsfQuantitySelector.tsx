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
        type: 'number',
        modelName: 'minValue',
        propType: 'number',
        propDefaultValue: '1',
        options: [
          {
            bind: {
              min: 1,
            },
          },
        ],
      },
      {
        title: 'step',
        type: 'number',
        modelName: 'step',
        propType: 'number',
        propDefaultValue: '1',
        options: [
          {
            bind: {
              min: 1,
            },
          },
        ],
      },
      {
        title: 'MaxValue',
        type: 'number',
        modelName: 'maxValue',
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
            },
          },
        ],
      },
      {
        title: 'inputAriaLabel',
        type: 'text',
        modelName: 'inputAriaLabel',
        propType: 'string',
      },
      {
        title: 'inputId',
        type: 'text',
        modelName: 'inputId',
        propType: 'string',
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
