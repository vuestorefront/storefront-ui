import classNames from 'classnames';
import type { VsfDividerProps } from './types';

export default function VsfDivider({ className, ...attributes }: VsfDividerProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <hr className={classNames('vsf-divider', className)} {...attributes} />;
}
