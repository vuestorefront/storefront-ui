import VsfAlert, { VsfAlertTypes } from '../../output/blocks/VsfAlert/VsfAlert.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfAlertExample() {
  const { state, controls } = prepareControls([
    {
      title: 'Type',
      type: 'select',
      modelName: 'typeModel',
      options: Object.keys(VsfAlertTypes),
      propDefaultValue: VsfAlertTypes.info,
      propType: 'VsfAlertTypes',
    },
    {
      title: 'Persistent',
      type: 'boolean',
      modelName: 'persistentModel',
      propDefaultValue: 'false',
      propType: 'boolean',
    },
    {
      title: 'Header',
      type: 'text',
      modelName: 'headerModel',
      propDefaultValue: 'Header',
      propType: 'string',
    },
    {
      title: 'Description',
      type: 'text',
      modelName: 'descriptionModel',
      propDefaultValue: 'Description',
      propType: 'string',
    },
    {
      title: 'SlotIcon',
      type: 'text',
      modelName: 'slotIconModel',
      propDefaultValue: '',
      propType: 'string',
    },
    {
      title: 'SlotButton',
      type: 'text',
      modelName: 'slotButtonModel',
      propDefaultValue: '',
      propType: 'string',
    },
  ], {
    typeModel: VsfAlertTypes.info,
    persistentModel: false,
    headerModel: 'Header',
    descriptionModel: 'Description',
    slotIconModel: '',
    slotButtonModel: '',
  });
  
  const closeClick = () => console.log('Clicked 🥳');
  
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfAlert
          type={state.get.typeModel}
          persistent={state.get.persistentModel}
          header={state.get.headerModel}
          description={state.get.descriptionModel}
          slotIcon={state.get.slotIconModel}
          slotButton={state.get.slotButtonModel}
          handleCloseClick={closeClick}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
