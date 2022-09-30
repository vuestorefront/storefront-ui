import VsfListItemMenu, { VsfListItemMenuSize } from '../../output/blocks/VsfListItemMenu/VsfListItemMenu.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.lite';
import VsfIconChevronRight from '../../output/blocks/VsfIcons/VsfIconChevronRight.lite';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls(
    [
      {
        title: 'link',
        type: 'text',
        modelName: 'linkModel',
        propDefaultValue: '',
        propType: 'string'
      },
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        propDefaultValue: '',
        propType: 'string',
        options: Object.keys(VsfListItemMenuSize),
      },
      {
        title: 'selected',
        type: 'boolean',
        modelName: 'selectedModel',
        propDefaultValue: false,
        propType: 'boolean',
      },
      {
        title: 'primaryText',
        type: 'text',
        modelName: 'primaryTextModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'secondaryText',
        type: 'text',
        modelName: 'secondaryTextModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'counter',
        type: 'text',
        modelName: 'counterModel',
        propDefaultValue: '',
        propType: 'string',
      },
      {
        title: 'truncatedText',
        type: 'boolean',
        modelName: 'truncatedTextModel',
        propDefaultValue: false,
        propType: 'boolean',
      },
      {
        title: 'disabled',
        type: 'boolean',
        modelName: 'disabledModel',
        propDefaultValue: false,
        propType: 'boolean',
      },
    ],
    {
      linkModel: '',
      sizeModel: VsfListItemMenuSize.base,
      selectedModel: false,
      primaryTextModel: 'Menu Item',
      secondaryTextModel: '',
      counterModel: '123',
      truncatedTextModel: false,
      disabledModel: false,
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfListItemMenu
          link={state.get.linkModel}
          size={state.get.sizeModel}
          selected={state.get.selectedModel}
          primaryText={state.get.primaryTextModel}
          secondaryText={state.get.secondaryTextModel}
          counter={state.get.counterModel}
          truncatedText={state.get.truncatedTextModel}
          disabled={state.get.disabledModel}
          slotPrefix={<VsfIconDot className="vsf-icon-full" />}
          slotSuffix={<VsfIconChevronRight className="vsf-icon-full" />}
          className="w-[400px]"
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
