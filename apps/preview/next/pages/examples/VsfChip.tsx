import { VsfChip, VsfChipSize } from '@storefront-ui/react/components/VsfChip';
import { VsfThumbnail, VsfThumbnailSize } from '@storefront-ui/react/components/VsfThumbnail/index';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'selected',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
        description: 'Sets value of the input checkbox element',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfChipSize),
        propDefaultValue: VsfChipSize.base,
        propType: 'VsfChipSize',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'square',
        propType: 'boolean',
      },
    ],
    {
      size: VsfChipSize.base,
      disabled: false,
      selected: false,
      square: false,
      label: 'Label',
      value: '',
    },
  );

  const selectHandler = () => {
    state.set((currentState) => ({
      ...currentState,
      selected: !currentState.selected,
    }));
    // eslint-disable-next-line no-console
    console.log('changed!');
  };
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfChip
        size={state.get.size}
        square={state.get.square}
        inputProps={{
          checked: state.get.selected,
          disabled: state.get.disabled,
          value: state.get.value,
          onChange: selectHandler,
        }}
        // eslint-disable-next-line no-console
      >
        <VsfThumbnail
          size={state.get.size === VsfChipSize.sm ? VsfThumbnailSize.sm : VsfThumbnailSize.base}
          className="bg-gray-500 mr-2"
        />
        <span>{state.get.label}</span>
      </VsfChip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
