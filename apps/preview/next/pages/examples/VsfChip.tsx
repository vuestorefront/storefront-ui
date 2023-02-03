import { VsfChip, VsfChipSize } from '@storefront-ui/react/components/VsfChip';
import { VsfChipThumbnail, VsfChipThumbnailSize } from '@storefront-ui/react/components/VsfChipThumbnail/index';
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
        type: 'boolean',
        modelName: 'deletable',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'slotPrefix',
        propType: 'boolean',
        description: 'Shows example of prefix slot content. Only for demonstration purposes',
      },
    ],
    {
      size: VsfChipSize.base,
      disabled: false,
      selected: false,
      deletable: false,
      label: 'Label',
      slotPrefix: false,
      value: '',
    },
  );

  const selectHandler = () => {
    state.set({
      ...state.get,
      selected: !state.get.selected,
    });
    console.log('changed!');
  };
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfChip
        disabled={state.get.disabled}
        deletable={state.get.deletable}
        size={state.get.size}
        label={state.get.label}
        value={state.get.value}
        selected={state.get.selected}
        // eslint-disable-next-line no-console
        onSelected={selectHandler}
        className="mr-2"
        slotPrefix={
          state.get.slotPrefix ? (
            <VsfChipThumbnail
              color="rgb(113 113 122)"
              size={state.get.size === VsfChipSize.sm ? VsfChipThumbnailSize.sm : VsfChipThumbnailSize.base}
            />
          ) : null
        }
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
