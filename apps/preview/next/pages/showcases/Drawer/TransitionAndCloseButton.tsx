/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfDrawer,
  SfButton,
  SfRadio,
  SfIconFavorite,
  SfIconClose,
  useTrapFocus,
  SfDrawerProps,
} from '@storefront-ui/react';
import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

export default function DrawerWithTransition() {
  const [open, setOpen] = useState(false);
  const [checkedPlacement, setCheckedPlacement] = useState<SfDrawerProps['placement']>('left');
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <fieldset>
        <label className="flex items-center my-4 cursor-pointer">
          <SfRadio
            name="placement"
            value="left"
            checked={checkedPlacement === 'left'}
            onChange={(event) => {
              setCheckedPlacement(event.target.value as SfDrawerProps['placement']);
            }}
          />
          <span className="ml-2">Slide from left</span>
        </label>
        <label className="flex items-center my-4 cursor-pointer">
          <SfRadio
            name="placement"
            value="right"
            checked={checkedPlacement === 'right'}
            onChange={(event) => {
              setCheckedPlacement(event.target.value as SfDrawerProps['placement']);
            }}
          />
          <span className="ml-2">Slide from right</span>
        </label>
      </fieldset>
      <SfButton onClick={() => setOpen(true)} type="button">
        Open Drawer
      </SfButton>

      <Transition ref={nodeRef} in={open} timeout={300}>
        {(state) => (
          <SfDrawer
            ref={drawerRef}
            open
            placement={checkedPlacement}
            onClose={() => setOpen(false)}
            className={classNames(
              'bg-neutral-50 border border-gray-300 max-w-[370px] duration-500 transition ease-in-out',
              {
                'translate-x-0': state === 'entered' && checkedPlacement === 'left',
                '-translate-x-full': (state === 'entering' || state === 'exited') && checkedPlacement === 'left',
                '-translate-x-0': state === 'entered' && checkedPlacement === 'right',
                'translate-x-full': (state === 'entering' || state === 'exited') && checkedPlacement === 'right',
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
