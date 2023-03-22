import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfDrawer, SfDrawerPlacement, type SfDrawerProps, SfButton } from '@storefront-ui/react';
import { ChangeEventHandler, useState } from 'react';
import classNames from 'classnames';

export default function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [placementState, setPlacement] = useState<SfDrawerProps['placement']>(SfDrawerPlacement.left);

  const changePlacement: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setPlacement((event.target as HTMLSelectElement).value as SfDrawerProps['placement']);
  };

  return (
    <>
      <label>
        Placement
        <select
          onChange={changePlacement}
          className="border border-2 border-primary-700 mx-2 p-2 rounded"
          defaultValue="left"
        >
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>
      </label>
      <SfButton onClick={() => setOpen(true)} type="button">
        Open Drawer
      </SfButton>

      <SfDrawer
        open={open}
        onClose={() => setOpen(false)}
        placement={placementState}
        className={classNames('bg-neutral-50 p-3 border border-gray-300', {
          'max-w-[370px]': placementState === SfDrawerPlacement.left || placementState === SfDrawerPlacement.right,
        })}
      >
        <div>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
            deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
            minima debitis dolore.
          </p>
          <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
        </div>
      </SfDrawer>
    </>
  );
}

// #endregion source
DrawerDemo.getLayout = ShowcasePageLayout;
