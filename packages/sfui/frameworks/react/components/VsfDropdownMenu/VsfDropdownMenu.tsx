import classNames from 'classnames';
import VsfLoaderCircular from '../VsfLoaderCircular/VsfLoaderCircular';
import type { VsfDropdownMenuProps } from './types';

export default function VsfDropdownMenu({
  className,
  loading,
  children,
  slotLoader,
  ...attributes
}: VsfDropdownMenuProps): JSX.Element {
  return (
    <ul className={classNames('vsf-dropdown-menu', className)} {...attributes} data-testid="dropdown-menu">
      {(loading &&
        (slotLoader || (
          <div className="vsf-dropdown-menu__loader" data-testid="dropdown-menu-loader">
            <VsfLoaderCircular />
          </div>
        ))) ||
        children}
    </ul>
  );
}
