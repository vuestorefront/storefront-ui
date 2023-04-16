import { component$ } from '@builder.io/qwik';
import { SfIconHome } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col flex-wrap sm:flex-row">
      <SfIconHome size="sm" />
      <SfIconHome />
      <SfIconHome size="lg" />
      <SfIconHome size="xl" />
      <SfIconHome size="2xl" />
      <SfIconHome size="3xl" />
      <SfIconHome size="4xl" />
    </div>
  );
});
