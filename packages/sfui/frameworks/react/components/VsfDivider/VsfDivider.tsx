import type { VsfDividerProps } from './types';
import classnames from 'classnames';

export default function VsfDivider({ className, ...attributes }: VsfDividerProps) {
  return <hr className={classnames('vsf-divider', className)} {...attributes} />;
}
