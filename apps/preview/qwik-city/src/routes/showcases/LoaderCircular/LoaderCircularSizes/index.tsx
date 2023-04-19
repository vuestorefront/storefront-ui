import { component$ } from '@builder.io/qwik';
import { SfLoaderCircular } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col gap-4 flex-wrap sm:flex-row mb-6 mr-6">
      <SfLoaderCircular size="xs" />
      <SfLoaderCircular size="sm" />
      <SfLoaderCircular size="base" />
      <SfLoaderCircular />
      <SfLoaderCircular size="lg" />
      <SfLoaderCircular size="xl" />
      <SfLoaderCircular size="2xl" />
      <SfLoaderCircular size="3xl" />
      <SfLoaderCircular size="4xl" />
    </div>
  );
});
