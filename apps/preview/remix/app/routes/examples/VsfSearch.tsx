import VsfSearch from '../../output/blocks/VsfSearch/VsfSearch.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfIconSearch from '../../output/blocks/VsfIcons/VsfIconSearch.lite';

export default function VsfSearchExample() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'disabled',
        type: 'boolean',
        propType: 'boolean',
        modelName: 'disabledModel',
      },
      {
        title: 'Prefix icon',
        type: 'boolean',
        propType: '---',
        modelName: 'slotPrefix',
        description: "Only for demonstration purposes, Icon is injected via 'prefix' slot",
      },
      {
        title: 'Suffix icon',
        type: 'boolean',
        propType: '---',
        modelName: 'slotSuffix',
        description: "Only for demonstration purposes, Icon is injected via 'suffix' slot",
      },
      {
        title: 'Submit with icon',
        type: 'boolean',
        propType: '---',
        modelName: 'slotSubmit',
        description: "Only for demonstration purposes, Icon is injected via 'submit' slot",
      },
      {
        title: 'Submit text',
        type: 'text',
        propType: 'string',
        modelName: 'submitTextModel',
      },
      {
        title: 'Placeholder',
        type: 'text',
        propType: 'string',
        modelName: 'placeholderModel',
      },
    ],
    {
      disabledModel: false,
      placeholderModel: 'Search',
      submitTextModel: 'Search',
      value: '',
      slotSubmit: false,
      slotPrefix: false,
      slotSuffix: false,
    },
  );
  function submitHandler(e: SubmitEvent) {
    e.preventDefault();
    console.log('Search Submit: ', e);
  }
  function clearHandler(e: PointerEvent) {
    state.set({ ...state.get, value: '' });
    console.log('Search Clear: ', e);
  }

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfSearch
          onSubmit={submitHandler}
          onClear={clearHandler}
          placeholder={state.get.placeholderModel}
          disabled={state.get.disabledModel}
          submitText={state.get.submitTextModel}
          slotPrefix={state.get.slotPrefix ? <VsfIconSearch /> : null}
          slotSuffix={state.get.slotSuffix ? <VsfIconSearch /> : null}
          slotSubmit={state.get.slotSubmit ? <VsfIconSearch /> : null}
          value={state.get.value}
          onInput={(event) => state.set({ ...state.get, value: event.target.value })}
        ></VsfSearch>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
