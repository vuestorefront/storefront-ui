import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  const refSignal = useSignal<Element>();

  return (
    <>
      <SfButton size="lg" class="m-2" ref={refSignal}>
        <div q:slot="prefix">prefixxx</div>
        foo
        <div q:slot="suffix">sufixxxxx</div>
      </SfButton>
      <SfButton size="base" class="m-2">
        foo
      </SfButton>
      <SfButton size="sm" class="m-2">
        <Slot name="foo">bar</Slot>foo
      </SfButton>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
