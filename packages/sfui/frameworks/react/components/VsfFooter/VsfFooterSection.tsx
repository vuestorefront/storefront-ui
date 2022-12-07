import classNames from 'classnames';
import { VsfFooterSectionType } from '@sfui/shared/types/index';
import { VsfFooterSectionProps } from './types';

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
