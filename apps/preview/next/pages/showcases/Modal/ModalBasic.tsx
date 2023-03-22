import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfModal, VsfButton, VsfIconClose, useDisclosure } from '@storefront-ui/react';

export default function ModalDemo() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  return (
    <>
      <VsfButton type="button" onClick={open}>
        To Checkout
      </VsfButton>

      <VsfModal
        open={isOpen}
        onClose={close}
        className="max-w-[90%] md:max-w-lg"
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <header>
          <VsfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
            <VsfIconClose />
          </VsfButton>
          <h3 id="promoModalTitle" className="typography-headline-4 md:typography-headline-3 font-bold">
            You might miss out on great deals
          </h3>
        </header>
        <p id="promoModalDesc" className="mt-2">
          There are special offers for some of the items on your wishlist. Do you want to see these deals before
          proceeding to checkout page?
        </p>
        <footer className="mt-4 flex justify-end gap-4">
          <VsfButton type="button" variant="secondary" onClick={close}>
            Skip
          </VsfButton>
          <VsfButton type="button" onClick={close}>
            Yes!
          </VsfButton>
        </footer>
      </VsfModal>
    </>
  );
}

// #endregion source
ModalDemo.getLayout = ShowcasePageLayout;
