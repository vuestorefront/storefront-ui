import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfDialog from '~/output/blocks/VsfDialog/VsfDialog.lite';
import VsfButton from '~/output/blocks/VsfButton/VsfButton.lite';
import { useEffect, useRef } from 'react';

export default function VsfAlertExample() {
  const { state, controls } = prepareControls([{
    title: 'Open Dialog',
    type: 'boolean',
    modelName: 'openModel',
    propDefaultValue: false
  }, {
    title: 'Close button',
    type: 'boolean',
    modelName: 'closeableModel',
    propDefaultValue: true
  }], {
    openModel: false,
    closeableModel: true
  });

  const closeable = useRef(state.get.closeableModel)

  useEffect(() => {
    closeable.current = state.get.closeableModel;
  }, [state.get.closeableModel])

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDialog
          open={state.get.openModel}
          closeable={state.get.closeableModel}
          onClose={() => {
            state.set({ closeableModel: closeable.current, openModel: false })
          }}
          classes={'flex flex-col'}
        >
          <section>
            Some cool dialog text here
          </section>
          <menu>
            Button is autofocused, cant do it with VsfButton because 	&#123;...atributes&#125;
            <div className="flex justify-between">
              <button autoFocus className='focus:bg-gray-500'>Autofocused button</button>
              <VsfButton onClick={() => {
                state.set({ ...state.get, openModel: false })
                setTimeout(() => {
                  alert('Canceled')
                })
              }}>Close</VsfButton>
              <VsfButton onClick={() => {
                state.set({ ...state.get, openModel: false })
                setTimeout(() => {
                  alert('Accepted')
                })
              }}>Accept</VsfButton>
            </div>
          </menu>
        </VsfDialog>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
