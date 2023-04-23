import { $, component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfChipSize, SfChip, SfThumbnail, SfThumbnailSize } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
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
      ] satisfies ControlsType,
      state: {
        size: SfChipSize.base,
        disabled: false,
        selected: false,
        square: false,
        label: 'Label',
        value: '',
      },
    };
  });

  const selectHandler = $(() => {
    examplesState.data.state = {
      ...examplesState.data.state,
      selected: !examplesState.data.state.selected,
    };
    console.log('changed!');
  });
  return (
    <ComponentExample>
      <SfChip
        size={examplesState.data.state.size}
        square={examplesState.data.state.square}
        inputProps={{
          checked: examplesState.data.state.selected,
          disabled: examplesState.data.state.disabled,
          value: examplesState.data.state.value,
          onChange$: selectHandler,
        }}
        showSlotPrefix={true}
      >
        <div q:slot="prefix">
          <SfThumbnail
            size={examplesState.data.state.size === SfChipSize.sm ? SfThumbnailSize.sm : SfThumbnailSize.base}
            class="bg-gray-500"
          />
        </div>
        {examplesState.data.state.label}
      </SfChip>
    </ComponentExample>
  );
});
