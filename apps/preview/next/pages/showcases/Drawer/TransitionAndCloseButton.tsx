import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfDrawer, SfButton, SfIconFavorite, SfIconClose, useTrapFocus } from '@storefront-ui/react';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function DrawerWithTransition() {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <SfButton onClick={() => setOpen(true)} type="button">
        Open Drawer
      </SfButton>

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
        <SfDrawer
          ref={drawerRef}
          open
          onClose={() => setOpen(false)}
          className="bg-neutral-50 border border-gray-300 max-w-[370px]"
        >
          <header className="flex items-center justify-between px-10 py-6 bg-primary-700">
            <div className="flex items-center text-white">
              <SfIconFavorite className="mr-2" /> Your favorite items
            </div>
            <SfButton
              square
              variant="tertiary"
              onClick={() => {
                setOpen(!open);
              }}
              className="text-white"
            >
              <SfIconClose />
            </SfButton>
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
        </SfDrawer>
      </CSSTransition>
    </>
  );
}

// #endregion source
DrawerWithTransition.getLayout = ShowcasePageLayout;
