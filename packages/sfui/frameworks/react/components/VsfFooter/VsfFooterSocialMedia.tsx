import classNames from 'classnames';
import type { VsfFooterDefaultProps } from './types';

export default function VsfFooterSocialMedia({ children, className }: VsfFooterDefaultProps) {
  return <div className={classNames('vsf-footer__social-media', className)}>{children}</div>;
}
