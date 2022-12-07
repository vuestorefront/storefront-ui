import classNames from 'classnames';
import { VsfTagProps, VsfTagVariants, VsfTagSizes } from './types';

export default function VsfTag({
  ariaLive,
  label,
  children,
  strong = false,
  variant = VsfTagVariants.gray,
  size = VsfTagSizes.base,
  className,
  ...attributes
}: VsfTagProps): JSX.Element {
  return (
    <div
      className={classNames(
        'vsf-tag',
        `vsf-tag--size-${size}`,
        `vsf-tag--variant-${variant}`,
        { 'vsf-tag--strong': strong },
        className,
      )}
      aria-live={ariaLive}
      {...attributes}
    >
      {children && <div className="vsf-tag__icon">{children}</div>}
      {label && <span className="vsf-tag__label">{label}</span>}
    </div>
  );
}
