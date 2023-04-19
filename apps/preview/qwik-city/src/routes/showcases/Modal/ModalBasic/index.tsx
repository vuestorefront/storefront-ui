import { component$, useSignal } from "@builder.io/qwik";
import { SfButton, SfIconClose, SfModal } from "@storefront-ui/qwik";

export default component$(() => {
  const openSignal = useSignal(false);

  // TODO
  // const { isOpen, open, close } = useDisclosure({ initialValue: false });

  return (
    <>
      <SfButton type="button" onClick$={()=> openSignal.value = true}>
        To Checkout
      </SfButton>

      <SfModal
        open={openSignal.value}
        onClose$={()=> {openSignal.value = false}}
        class="max-w-[90%] md:max-w-lg"
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <header>
          <SfButton square variant="tertiary" class="absolute right-2 top-2" onClick$={()=> {openSignal.value = false}}>
            <SfIconClose />
          </SfButton>
          <h3 id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
            You might miss out on great deals
          </h3>
        </header>
        <p id="promoModalDesc" class="mt-2">
          There are special offers for some of the items on your wishlist. Do you want to see these deals before
          proceeding to checkout page?
        </p>
        <footer class="flex justify-end gap-4 mt-4">
          <SfButton type="button" variant="secondary" onClick$={()=> {openSignal.value = false}}>
            Skip
          </SfButton>
          <SfButton type="button" onClick$={()=> {openSignal.value = false}}>
            Yes!
          </SfButton>
        </footer>
      </SfModal>
    </>
  );
});
