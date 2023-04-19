import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SfLink } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <div class="space-x-4">
      <Link href="#">
        <SfLink as="span">QwikLink</SfLink>
      </Link>
    </div>
  );
});
