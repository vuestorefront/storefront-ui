import { VsfDrawer } from '@storefront-ui/react/components/VsfDrawer';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { VsfIconFavorite, VsfIconClose } from '@storefront-ui/react/components/VsfIcons';
import { useTrapFocus } from '@storefront-ui/react/hooks/useTrapFocus/useTrapFocus';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <VsfButton onClick={() => setOpen(true)} type="button">
        Open Drawer
      </VsfButton>

      <CSSTransition
        ref={nodeRef}
        in={open}
        timeout={500}
        unmountOnExit
        classNames={{
          enter: '-translate-x-full',
          enterActive: 'translate-x-0 transition duration-500 ease-in-out',
          exitDone: 'translate-x-0',
          exitActive: '-translate-x-full transition duration-500 ease-in-out',
        }}
      >
        <VsfDrawer
          ref={drawerRef}
          open
          onClose={setOpen}
          className="bg-neutral-50 border border-gray-300 max-w-[370px]"
        >
          <header className="bg-primary-700 flex justify-between py-6 px-10 items-center">
            <div className="flex items-center text-white">
              <VsfIconFavorite className="mr-2" /> Your favorite items
            </div>
            <VsfButton
              square
              variant="tertiary"
              onClick={() => {
                setOpen(!open);
              }}
              className="text-white"
            >
              <VsfIconClose />
            </VsfButton>
          </header>
          <div className="p-5 px-10">
            <p className="mb-2">
              Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through{' '}
              <a href="https://docs.storefrontui.io/v2/" className="underline text-primary-700">
                Focusable Element
              </a>{' '}
              and another{' '}
              <a href="https://docs.storefrontui.io/v2/" className="underline text-primary-700">
                Focusable Element
              </a>
            </p>
            <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
          </div>
        </VsfDrawer>
      </CSSTransition>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
