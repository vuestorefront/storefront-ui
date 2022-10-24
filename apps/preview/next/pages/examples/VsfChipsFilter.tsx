import VsfChipsFilter, { VsfChipsFilterVariants } from '@sfui/sfui/frameworks/react/components/VsfChipsFilter';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfChipsFilterVariants),
        propDefaultValue: VsfChipsFilterVariants.base,
        propType: 'VsfChipsFilterVariants',
      },
      {
        type: 'select',
        modelName: 'type',
        options: ['checkbox', 'radio'],
        propDefaultValue: 'checkbox',
        propType: 'string',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'showThumb',
        propType: 'boolean',
        description: 'Only for demonstration purposes',
      },
    ],
    {
      size: VsfChipsFilterVariants.base,
      disabled: false,
      label: 'Label',
      type: 'checkbox',
      showThumb: false,
      modelValue: '',
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfChipsFilter
          name="test"
          disabled={state.get.disabled}
          size={state.get.size}
          label={state.get.label}
          type={state.get.type as 'radio' | 'checkbox'}
          value="one"
          // eslint-disable-next-line no-console
          onChange={() => console.log('changed!')}
          className="mr-2"
        >
          {state.get.showThumb ? <div className="bg-black w-full h-full rounded-full" /> : null}
        </VsfChipsFilter>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
