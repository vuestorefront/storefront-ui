import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfDialog from '~/output/blocks/VsfDialog/VsfDialog';
import VsfButton from '~/output/blocks/VsfButton/VsfButton';
import { useEffect, useRef } from 'react';
import { ExamplePageLayout } from '../examplesOld';

const Example = () => {
  const { state, controls } = prepareControls([{
    title: 'Open Dialog',
    type: 'boolean',
    modelName: 'openModel',
    propDefaultValue: false
  }, {
    title: 'Close button',
    type: 'boolean',
    modelName: 'disableClose',
    propDefaultValue: true
  }], {
    openModel: false,
    disableClose: false
  });

  const disableClose = useRef(state.get.disableClose)

  useEffect(() => {
    disableClose.current = state.get.disableClose;
  }, [state.get.disableClose])

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDialog
          open={state.get.openModel}
          disableClose={state.get.disableClose}
          onClose={() => {
            state.set({ disableClose: disableClose.current, openModel: false })
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

Example.getLayout = ExamplePageLayout;
export default Example;
