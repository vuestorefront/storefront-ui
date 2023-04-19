import { component$, useId, useSignal } from '@builder.io/qwik';
import { SfButton, SfIconClose, SfModal } from '@storefront-ui/qwik';

export default component$(() => {
  //TODO
  // const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const openSignal = useSignal(false);
  const headingId = useId();
  const descriptionId = useId();
  // const modalRef = useSignal<Element>();
  const backdropRef = useSignal<Element>();

  return (
    <>
      <SfButton type="button" onClick$={()=> openSignal.value = true}>
        To Checkout
      </SfButton>

      {/* Backdrop */}
      
      {/* TODO */}
      {/* <transition
        enter-active-class="transition duration-200 ease-out"
        leave-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div ref={backdropRef} class="fixed inset-0 bg-neutral-700 bg-opacity-50" />
      </transition> */}

      {/* Modal  */}
      <transition
        enter-active-class="transition duration-200 ease-out"
        leave-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-10"
      >
        <SfModal
          open={openSignal.value}
          onClose$={()=> {openSignal.value = false}}
          // TODO
          // {...(modalRef ? { ref: modalRef } : {})}
          as="section"
          role="alertdialog"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
          class="max-w-[90%] md:max-w-lg"
        >
          <header>
            <SfButton
              square
              variant="tertiary"
              class="absolute right-2 top-2"
              onClick$={() => (openSignal.value = false)}
            >
              <SfIconClose />
            </SfButton>
            <h3 id={headingId} class="font-bold typography-headline-4 md:typography-headline-3">
              You might miss out on great deals
            </h3>
          </header>
          <p id={descriptionId} class="mt-2">
            There are special offers for some of the items on your wishlist. Do you want to see these deals before
            proceeding to checkout page?
          </p>
          <footer class="flex justify-end gap-4 mt-4">
            <SfButton type="button" variant="secondary" onClick$={() => (openSignal.value = false)}>
              Skip
            </SfButton>
            <SfButton type="button" onClick$={() => (openSignal.value = false)}>
              Yes!
            </SfButton>
          </footer>
        </SfModal>
      </transition>
    </>
  );
});
