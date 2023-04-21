import { $, component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfDrawer, SfIconClose, SfIconFavorite } from '@storefront-ui/qwik';

export default component$(() => {
  const openSignal = useSignal(false);
  const drawerRef = useSignal<Element>();

  // TODO
  // useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <SfButton
        onClick$={() => {
          openSignal.value = true;
        }}
        type="button"
      >
        Open Drawer
      </SfButton>

      <transition
        enter-active-class="transition duration-500 ease-in-out"
        leave-active-class="transition duration-500 ease-in-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <SfDrawer
          ref={drawerRef}
          open={openSignal.value}
          onClose={$(() => (openSignal.value = false))}
          class="bg-neutral-50 border border-gray-300 max-w-[370px]"
        >
          <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
            <div class="flex items-center text-white">
              <SfIconFavorite class="mr-2" /> Your favorite items
            </div>
            <SfButton
              square
              variant="primary"
              onClick$={() => {
                openSignal.value = !openSignal.value;
              }}
              class="text-white"
            >
              <SfIconClose />
            </SfButton>
          </header>
          <div class="p-5 px-10">
            <p class="mb-2">
              Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through{' '}
              <a href="https://docs.storefrontui.io/v2/" class="underline text-primary-700">
                Focusable Element{' '}
              </a>
              and another{' '}
              <a href="https://docs.storefrontui.io/v2/" class="underline text-primary-700">
                Focusable Element
              </a>
            </p>
            <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
          </div>
        </SfDrawer>
      </transition>
    </>
  );
});
