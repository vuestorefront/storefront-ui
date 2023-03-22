import { SfChip, SfChipSize, SfThumbnail, SfThumbnailSize } from '@storefront-ui/react';
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
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Text next to thumbnail',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(SfChipSize),
        propDefaultValue: SfChipSize.base,
        propType: 'SfChipSize',
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
      size: SfChipSize.base,
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
      <SfChip
        size={state.get.size}
        square={state.get.square}
        inputProps={{
          checked: state.get.selected,
          disabled: state.get.disabled,
          value: state.get.value,
          onChange: selectHandler,
        }}
        slotPrefix={
          <SfThumbnail
            size={state.get.size === SfChipSize.sm ? SfThumbnailSize.sm : SfThumbnailSize.base}
            className="bg-gray-500"
          />
        }
      >
        {state.get.label}
      </SfChip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
