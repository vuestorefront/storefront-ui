import classNames from 'classnames';
import { VsfTagProps, VsfTagVariants, VsfTagSizes } from './types';

export default function VsfTag({
  ariaLive,
  label,
  children,
  strong = false,
  variant = VsfTagVariants.gray,
  size = VsfTagSizes.base,
}: VsfTagProps): JSX.Element {
  return (
    <div
      className={classNames(
        'vsf-tag',
        `vsf-tag--size-${size}`,
        `vsf-tag--variant-${variant}`,
        strong ? `vsf-tag--strong` : null,
      )}
      aria-live={ariaLive}
    >
      {children && <div className="vsf-tag__icon">{children}</div>}
      {label && <span className="vsf-tag__label">{label}</span>}
    </div>
  );
}
