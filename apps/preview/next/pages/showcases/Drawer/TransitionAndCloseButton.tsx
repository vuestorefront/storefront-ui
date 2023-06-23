import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfDrawer, SfButton, SfIconFavorite, SfIconClose, useTrapFocus } from '@storefront-ui/react';
import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

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

      <Transition ref={nodeRef} in={open} timeout={500} mountOnEnter>
        {(state) => (
          <SfDrawer
            ref={drawerRef}
            open
            onClose={() => setOpen(false)}
            className={classNames(
              'bg-neutral-50 border border-gray-300 max-w-[370px] duration-500 transition ease-in-out',
              {
                'transition-x-0': state === 'entered',
                '-translate-x-full': state === 'entering',
                '-translate-x-0': state === 'exiting',
                '-translate-x-full': state === 'exited',
              },
            )}
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
        )}
      </Transition>
    </>
  );
}

// #endregion source
DrawerWithTransition.getLayout = ShowcasePageLayout;
