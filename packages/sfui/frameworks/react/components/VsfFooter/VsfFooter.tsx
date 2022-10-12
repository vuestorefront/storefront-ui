import classNames from 'classnames';
import { VsfFooterDefaultProps } from './types';

export default function VsfFooter({ children, className }: VsfFooterDefaultProps): JSX.Element {
  return <footer className={classNames('vsf-footer', className)}>{children}</footer>;
}
