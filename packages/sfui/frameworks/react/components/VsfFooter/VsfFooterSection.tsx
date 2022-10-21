import classNames from 'classnames';
import { VsfFooterSectionType } from '@sfui/sfui/shared/types';
import { VsfFooterSectionProps } from './types';

export default function VsfFooterSection({
  type = VsfFooterSectionType.top,
  children,
  className,
}: VsfFooterSectionProps) {
  return <div className={classNames(`vsf-footer__section--${type}`, className)}>{children}</div>;
}
