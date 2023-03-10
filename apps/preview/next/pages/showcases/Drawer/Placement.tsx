import { VsfDrawer, VsfDrawerPlacement, type VsfDrawerProps } from '@storefront-ui/react/components/VsfDrawer';
import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import { ChangeEventHandler, useState } from 'react';
import classNames from 'classnames';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const [open, setOpen] = useState(false);
  const [placementState, setPlacement] = useState<VsfDrawerProps['placement']>(VsfDrawerPlacement.left);

  const changePlacement: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setPlacement((event.target as HTMLSelectElement).value as VsfDrawerProps['placement']);
  };

  return (
    <>
      <label>
        Placement
        <select onChange={changePlacement} className="border border-2 border-primary-700 mx-2 p-2 rounded">
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left" selected>
            left
          </option>
        </select>
      </label>
      <VsfButton onClick={() => setOpen(true)} type="button">
        Open Drawer
      </VsfButton>

      <VsfDrawer
        open={open}
        onClose={() => setOpen(false)}
        placement={placementState}
        className={classNames('bg-neutral-50 p-3 border border-gray-300', {
          'max-w-[370px]': placementState === VsfDrawerPlacement.left || placementState === VsfDrawerPlacement.right,
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
      </VsfDrawer>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
