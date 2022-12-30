import { VsfListItemMenu, VsfListItemMenuSizes } from '@storefront-ui/react/components/VsfListItemMenu';
import { VsfIconCheck } from '~/../../../packages/sfui/frameworks/react/components/VsfIcons';
import { VsfIconSizeEnum } from '@storefront-ui/react/components/VsfIcons/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'text',
        modelName: 'link',
        propType: 'string',
        description: 'Set link to render as link',
      },
      {
        type: 'text',
        modelName: 'secondaryText',
        propType: 'string',
        description: 'Set secondary text',
      },
      {
        type: 'text',
        modelName: 'counter',
        propType: 'string',
        description: 'Set counter value',
      },
      {
        type: 'boolean',
        modelName: 'showSuffix',
        description: 'Show or hide the suffix content',
      },
      {
        type: 'boolean',
        modelName: 'showprefix',
        description: 'Show or hide the prefix content',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfListItemMenuSizes),
        description: 'Set size variant',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        description: 'Show disabled state of component',
      },
      {
        type: 'boolean',
        modelName: 'selected',
        description: 'Show selected state of component',
      },
      {
        type: 'boolean',
        modelName: 'selectedBackground',
        description: 'Show selected background state of component',
      },
      {
        type: 'boolean',
        modelName: 'truncate',
        description: 'Show truncated version of secondary text',
      },
    ],
    {
      label: 'Label',
      size: VsfListItemMenuSizes.base,
      link: '',
      counter: 123,
      showSuffix: false,
      showprefix: false,
      secondaryText: 'Secondary text',
      disabled: false,
      selected: false,
      selectedBackground: false,
      truncate: false,
    },
  );

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfListItemMenu
          className="max-w-sm"
          size={state.get.size}
          link={state.get.link}
          label={state.get.label}
          counter={Number(state.get.counter)}
          secondaryText={state.get.secondaryText}
          selected={state.get.selected}
          selectedBackground={state.get.selectedBackground}
          disabled={state.get.disabled}
          slotPrefix={state.get.showprefix ? <VsfIconCheck size={VsfIconSizeEnum.sm} /> : null}
          slotSuffix={state.get.showSuffix ? <VsfIconCheck size={VsfIconSizeEnum.sm} /> : null}
          truncate={state.get.truncate}
          onClick={(selected: boolean) => state.set({ ...state.get, selected })}
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
