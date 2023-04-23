import {  component$, useContext, useTask$ } from '@builder.io/qwik';
import {  SfIconPackage, SfIconSize } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { ControlsType } from '~/components/utils/types';
import { EXAMPLES_STATE } from '../layout';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'select',
          modelName: 'size',
          propDefaultValue: 'SfIconSize.base',
          propType: 'SfIconSize',
          options: Object.keys(SfIconSize),
        },
        {
          type: 'select',
          modelName: 'color',
          description: '(not a prop) example showing possibility to change icons color',
          options: ['black', 'red', 'blue', 'green'],
        },
      ] satisfies ControlsType,
      state: {
        size: SfIconSize.base,
        color: 'black',
      },
    };
  });
  return (
    <ComponentExample>
      SfIconPackage imported from `@storefront-ui/qwik`: <br />
      <div style={{ color: examplesState.data.state.color }}>
        <SfIconPackage size={examplesState.data.state.size} />
      </div>
    </ComponentExample>
  );
});
