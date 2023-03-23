import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfModal, SfButton, SfIconClose, useDisclosure } from '@storefront-ui/react';

export default function ModalDemo() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  return (
    <>
      <SfButton type="button" onClick={open}>
        To Checkout
      </SfButton>

      <SfModal
        open={isOpen}
        onClose={close}
        className="max-w-[90%] md:max-w-lg outline-none"
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <header>
          <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
            <SfIconClose />
          </SfButton>
          <h3 id="promoModalTitle" className="font-bold typography-headline-4 md:typography-headline-3">
            You might miss out on great deals
          </h3>
        </header>
        <p id="promoModalDesc" className="mt-2">
          There are special offers for some of the items on your wishlist. Do you want to see these deals before
          proceeding to checkout page?
        </p>
        <footer className="flex justify-end gap-4 mt-4">
          <SfButton type="button" variant="secondary" onClick={close}>
            Skip
          </SfButton>
          <SfButton type="button" onClick={close}>
            Yes!
          </SfButton>
        </footer>
      </SfModal>
    </>
  );
}

// #endregion source
ModalDemo.getLayout = ShowcasePageLayout;
