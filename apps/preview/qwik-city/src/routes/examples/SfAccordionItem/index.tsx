import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/qwik';
import { ComponentExample } from '~/components/utils/ComponentExample';
import { EXAMPLES_STATE } from '../layout';
import { ControlsType } from '~/components/utils/types';

export default component$(() => {
  const examplesState = useContext(EXAMPLES_STATE);

  useTask$(() => {
    examplesState.data = {
      controls: [
        {
          type: 'boolean',
          modelName: 'open',
          propDefaultValue: false,
          propType: 'boolean',
        },
      ] satisfies ControlsType,
      state: { open: true },
    };
  });

  return (
    <ComponentExample>
      <SfAccordionItem
        open={examplesState.data.state.open}
        onToggle$={() => {
          examplesState.data.state.open = !examplesState.data.state.open;
        }}
        class="rounded border"
      >
        <div class="flex justify-between p-2 bg-gray-100">
          <p>Click me to see the content</p>
          <SfIconChevronLeft class={`${examplesState.data.state.open ? 'rotate-90' : '-rotate-90'}`} />
        </div>
        <div q:slot="detail">
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </SfAccordionItem>
    </ComponentExample>
  );
});
