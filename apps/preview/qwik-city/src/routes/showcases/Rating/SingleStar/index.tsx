import { component$ } from '@builder.io/qwik';
import { SfIconStarFilled } from '@storefront-ui/qwik';

export default component$(() => {
  const value = 4.5;
  return (
    <div class="flex flex-col gap-2">
      <div class="font-medium typography-text-xs">
        <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div class="font-medium typography-text-sm">
        <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div class="font-medium">
        <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div class="font-medium typography-text-lg">
        <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
    </div>
  );
});
