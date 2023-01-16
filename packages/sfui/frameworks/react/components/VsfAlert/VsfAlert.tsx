import { useEffect } from 'react';
import { useTimeoutFn } from 'react-use';
import classNames from 'classnames';
import {
  VsfIconClose,
  VsfIconInfo,
  VsfIconError,
  VsfIconWarning,
  VsfIconCheckCircle,
} from '@storefront-ui/react/components/VsfIcons/index';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/react/components/VsfButton/index';
import { VsfAlertVariants, VsfAlertTypes } from './types';
import type { VsfAlertProps } from './types';

const defaultPrefixComponent = (variant?: VsfAlertVariants) => {
  switch (variant) {
    case VsfAlertVariants.positive:
      return <VsfIconCheckCircle />;
    case VsfAlertVariants.error:
      return <VsfIconError />;
    case VsfAlertVariants.warning:
      return <VsfIconWarning />;
    default:
      return <VsfIconInfo />;
  }
};

export default function VsfAlert({
  open = false,
  onOpenChange = () => undefined,
  variant = VsfAlertVariants.gray,
  type = VsfAlertTypes.temporary,
  header,
  text,
  children,
  withShadow = false,
  hidePrefix,
  slotPrefix,
  slotSuffix,
  className,
  ...attributes
}: VsfAlertProps): JSX.Element | null {
  const [, cancel, reset] = useTimeoutFn(() => {
    onOpenChange(false);
  }, 5000);

  useEffect(() => {
    cancel();

    if (open && type === VsfAlertTypes.temporary) {
      reset();
    }
  }, [type, open, cancel, reset]);

  return open ? (
    <div
      role="alert"
      className={classNames(`vsf-alert vsf-alert--${variant}`, { 'vsf-alert--with-shadow': withShadow }, className)}
      data-testid="alert"
      {...attributes}
    >
      {!hidePrefix && <div className="vsf-alert__prefix">{slotPrefix || defaultPrefixComponent(variant)}</div>}
      <div className="vsf-alert__content">
        <div className="vsf-alert__header" data-testid="alert-header">
          {header}
        </div>
        {children || text}
      </div>
      <div className="vsf-alert__suffix">
        {slotSuffix ||
          (type === VsfAlertTypes.persistent && (
            <VsfButton
              variant={VsfButtonVariants.tertiary}
              onClick={() => onOpenChange(false)}
              slotPrefix={<VsfIconClose />}
              data-testid="alert-close-button"
            />
          ))}
      </div>
    </div>
  ) : null;
}
