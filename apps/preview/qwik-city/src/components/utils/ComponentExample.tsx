import { Models } from './types';
import { Slot, component$ } from '@builder.io/qwik';
import { Controls } from './Controls';

export type ComponentExampleProps<T extends Models<T>> = {
  class?: string;
  componentContainerClass?: string;
};

export const ComponentExample = component$<ComponentExampleProps<any>>(
  ({ class: _class, componentContainerClass }) => {
    return (
      <div class={['e-page', _class]}>
        <div class={['e-page-component', componentContainerClass]}>
          <Slot />
        </div>
        <Controls />
      </div>
    );
  },
);
