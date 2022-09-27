import type { VsfDividerProps } from './types';
import classNames from 'classnames';

export default function VsfDivider({ className, ...attributes }: VsfDividerProps) {
  return <hr className={classNames('vsf-divider', className)} {...attributes} />;
}
