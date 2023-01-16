import classNames from 'classnames';
import { VsfFooterSectionType } from '@storefront-ui/shared';
import type { VsfFooterSectionProps } from './types';

export default function VsfFooterSection({
  type = VsfFooterSectionType.top,
  children,
  className,
}: VsfFooterSectionProps) {
  return (
    <div className={classNames(`vsf-footer__section--${type}`, className)}>
      {type === VsfFooterSectionType.bottom ? (
        <div className="vsf-footer__section--bottom__wrapper">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
